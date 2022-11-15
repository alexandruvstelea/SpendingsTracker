from __init__ import db

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))
    nickname = db.Column(db.String(50))
    admin = db.Column(db.Boolean)
    
    def __init__(self, username:str, password:str, nickname:str, admin:bool):
        self.username = username
        self.password = password
        self.nickname = nickname
        self.admin = admin
    
    def create(username, password, nickname, admin):
        new_user = User(username,password,nickname,admin)
        db.session.add(new_user)
        db.session.commit()
        