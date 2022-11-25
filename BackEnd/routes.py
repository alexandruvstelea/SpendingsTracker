from flask import Blueprint, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from spending import Spending
from category import Category
from datetime import datetime, timedelta
from user import User
from config import Config
import jwt
from auth_middleware import token_required

bp = Blueprint('spendings', __name__)
user_bp = Blueprint('user', __name__)
category_bp = Blueprint('categories',__name__)

@user_bp.route('/user', methods=["POST"]) 
def create_user():
    data = request.get_json()
    username = data['username']
    password = data['password']
    nickname = data['nickname']   
    User.create(username, password, nickname, False)
    return {'response': 'User created!'},200

@user_bp.route('/allusers', methods=["GET"])
def retrieve_all_users():
    users = User.query.all()
    

@user_bp.route('/login')
def login():
    auth = request.authorization
    
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate':'Login Required'})
    
    user = User.query.filter_by(username=auth.username).first()
    
    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate':'Login required'})
    
    if user.password == auth.password:
        token = jwt.encode({'username':user.username, 'exp':datetime.utcnow()+timedelta(minutes=30)},Config.SECRET_KEY, algorithm="HS256")
        return jsonify({'token':token})
        
    return make_response('Could not verify', 401, {'WWW-Authenticate':'Login required'})
    
 

@bp.route("/insertspending",methods=["POST"])
def insert_spending():
    name = request.args.get('name')
    category = request.args.get('category')
    value = float(request.args.get('value'))
    currency = request.args.get("currency")
    value_eur = Spending.convert_currency(value,currency,"EUR",datetime.today())
    date = datetime.strptime(request.args.get('date'),'%d/%m/%Y')
    user = request.args.get('user')
    Spending.create(name,category,value_eur,date,user)
    return {'response':'Spending inserted'},200

@bp.route("/retrievespendings",methods=["GET"])
def retrieve_spendings():
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    spendings = Spending.read(user,start,end,currency)
    return {"spendings":spendings}

@bp.route("/updatespending",methods=["PUT"])
def update_spending():
    id = int(request.args.get('id'))
    name = request.args.get('name')
    category = request.args.get('category')
    value = float(request.args.get('value'))
    currency = request.args.get("currency")
    value_eur = Spending.convert_currency(value,currency,"EUR",datetime.today())
    date = datetime.strptime(request.args.get('date'),'%d/%m/%y')
    Spending.update(id,name,category,value_eur,date)
    return {'response':'Spending updated'},200

@bp.route("/deletespending",methods=["DELETE"])
def delete_spending():
    id = int(request.args.get('id'))
    Spending.delete(id)
    return {'response':'Spending deleted'},200

@bp.route("/average",methods=["GET"])
def calculate_average():
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    average = Spending.average(user,start,end,currency)
    return {'average': average}

@bp.route("/total",methods=["GET"])
def calculate_total():
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    total = Spending.total(user,start,end,currency)
    return {'total': total} 


@bp.route("/linechart",methods=["GET"])
def line_chart_data():
    delta = timedelta(days=1)
    chart_data = []
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    while start <= end:
        chart_data.append({"value":Spending.total(user,start,start,currency),"date":start})
        start += delta
    return {"data": chart_data}

@bp.route("/piebarchart",methods=["GET"])
def pie_bar_chart():
    chart_data = []
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    categories = Category.read()
    for ct in categories:
        chart_data.append({"total":Spending.totalFilter(user,start,end,currency,ct),"category":ct})
    return {"data": chart_data}


@category_bp.route("/insertcategory",methods=["POST"])
def insert_category():
    category = request.args.get("name")
    Category.create(category)
    return {'response':'Category inserted'},200

@category_bp.route("/readcategories",methods=["GET"])
def get_categories():
    categories = Category.read()
    return {'categories':categories},200

