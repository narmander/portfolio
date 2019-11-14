from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello', __name__)


@hello_blueprint.route('/')
@hello_blueprint.route('/index')
def index():
    user = {'username': 'Nar'}
    posts = [
        {
            'author': {'username': 'Kyle'},
            'body': 'I like nap!'
        },
        {
            'author': {'username': user['username']},
            'body': 'I like deep sleep~'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)
