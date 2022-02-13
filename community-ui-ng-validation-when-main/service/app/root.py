# coding:utf-8
import sys

from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restplus import Api

from flasgger import Swagger

from alchemy.common.base import db
from marshmallow import Schema, fields, ValidationError, pre_load

from controllers import test_definitions_controller
from container import Container

def create_app(testConfig=None, sqlConnectionString=None):

    # container and dependency injection configuration setup on controller level
    container = Container()
    container.wire(modules=[test_definitions_controller])

    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    api = Api(app)
    swagger = Swagger(app)

    if testConfig is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config_dev.py', silent=False)
    else:
        # load the test config if passed in
        app.config.from_pyfile(testConfig, silent=False)

    if sqlConnectionString is not None:
        app.config['SQLALCHEMY_DATABASE_URI']=sqlConnectionString

    db.init_app(app)
    migrate = Migrate(app, db, render_as_batch=True)

    # Register blueprints
    routes = {
        'tests': {'route': test_definitions_controller.testsControllerBlueprint, 'url_prefix': '/tests/'},
    }

    for route in routes:
        blueprint = routes[route]
        app.register_blueprint(blueprint['route'], url_prefix = blueprint['url_prefix'])

    CORS(app, resources={r"/*": {"origins": "*"}})
    app.config['CORS_HEADERS'] = 'Content-Type'

    return app

