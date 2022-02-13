Angular Validation Demo

This demo works alongside Scott Alexanders PyPlate-DI project. To run the demo in full...

Python Flask Backend:

1. Make sure python is intalled using python --version to make sure it has installed successfully.
2. >cd service
3. create a virtual environment
    3a All Platforms: "python -m venv /path/to/new/virtual/environment"
4. activate the virtual environment
    3a Linux: "source venv/bin/activate"
    3b Windows CMD: "venv\Scripts\activate.bat"
    3c Windows Powershell: "venv\Scripts\Activate.ps1"
5. >cd app
6. install required packages "pip install -r requirments.txt"
7. set env variable
    7a Linux: "export FLASK_APP=app-dev.py"
    7b Windows CMD: "set FLASK_APP=app-dev.py"
    7b Windows Powershell: "$env:FLASK_APP="app-dev.py""
8. Create DB as SQLlite model "flask db upgrade"
9. Run the application: "flask run"
10. The application should be assessable via http://localhost:5000/apidocs


Angular Frontend:

1. Make sure node and the Angular CLI is installed
    1a. node --version
    1b. ng --version
2. >cd ui
3. install packages "npm i"
4. run "ng serve"
5. The application should be assessable via http://localhost:4200