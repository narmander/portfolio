from flask import Flask, Blueprint
from app import routes

app = Flask(__name__,template_folder="/templates/index.html", static_folder="../dist", static_url_path="")

app.register_blueprint(routes.hello_blueprint)
