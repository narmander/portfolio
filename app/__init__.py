from flask import Flask
from app import routes

app = Flask(__name__,template_folder="templates", static_folder="../dist")

app.register_blueprint(routes.hello_blueprint)
