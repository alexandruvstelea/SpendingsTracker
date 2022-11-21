from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_app():
    app = Flask(__name__, instance_relative_config=False)

    app.config.from_object('config.Config')  

    db.init_app(app)

    with app.app_context():
        from spending import Spending
        from user import User
        from category import Category
        db.create_all()

        from routes import bp as spendings_bp
        from routes import user_bp as users_bp
        from routes import category_bp as category_bp
        app.register_blueprint(spendings_bp)
        app.register_blueprint(users_bp)
        app.register_blueprint(category_bp)
        return app