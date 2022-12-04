from __init__ import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(50))
    password = db.Column(db.String(50))
    
    
    def __init__(self, username:str, email:str, password:str):
        self.username = username
        self.email = email
        self.password = password
        
    def create(username, email, password):
        new_user = User(username, email, password)
        db.session.add(new_user)
        db.session.commit()
        