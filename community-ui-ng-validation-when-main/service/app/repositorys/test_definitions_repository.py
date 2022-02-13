import json
import sys
import os

from sqlalchemy import select
from dependency_injector.wiring import inject, Provide

sys.path.append(os.getcwd() + '/..')

from alchemy.common.session import AlchemySession
from alchemy.tables.test_definition import TestDefinition

class TestsRepository:
    
    _alchemySession: AlchemySession = None

    @inject
    def __init__(self, alchemySession : AlchemySession):
        self._alchemySession = alchemySession
        
    def getTest(self, id) -> TestDefinition:
        session = self._alchemySession.session_factory()
        query = select(TestDefinition).filter_by(id=id)
        results = session.execute(query).first()
        if results != None:
            return results[0]
        return None
    
    def getTestByName(self, name) -> TestDefinition:
        session = self._alchemySession.session_factory()
        query = select(TestDefinition).filter_by(name=name)
        results = session.execute(query).first()
        if results != None:
            return results[0]
        return None

    def getTests(self):
        session = self._alchemySession.session_factory()
        query = select(TestDefinition)
        results = session.execute(query).all()

        response = []
        for row in results:
            response.append(dict(row)['TestDefinition'])
        return response
    
    def addTest(self, TestDefinition : TestDefinition):
        session = self._alchemySession.session_factory()
        session.add(TestDefinition)
        session.commit()



    

