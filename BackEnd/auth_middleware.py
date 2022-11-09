from flask import jsonify, request
import jwt
from functools import wraps
from config import Config
from user import User

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
    
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        
        if not token:
            return jsonify({'message': 'Token missing'}),401
        
        try:
            data = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"])
            current_user = User.query.filter_by(username=data['username']).first()
        except:
            return jsonify({'message':'Token is Invalid'}),401
        
        return f(*args, **kwargs)
    return decorated