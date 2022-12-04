from flask import Blueprint, request, make_response, jsonify, flash,redirect, url_for,render_template, session
from flask_login import login_user, logout_user, login_required
from flask_sqlalchemy import SQLAlchemy
from spending import Spending
from category import Category
from datetime import datetime, timedelta
from user import User
from config import Config


bp = Blueprint('spendings', __name__)
user_bp = Blueprint('user', __name__)
category_bp = Blueprint('categories',__name__)

@user_bp.route('/login', methods=["POST","GET"])
def login():
    email = request.args.get('email')
    password = request.args.get('password')
    user = User.query.filter_by(email=email).first()
    if user.password == password:
        login_user(user)
        return {'response':session['_user_id']},200
    else:
        return {'response':'Wrong Credentials!'},404

@user_bp.route('/verifysession')  
def verify_session():
    if User.query.filter_by(id=session['_user_id']):
        return True
    else:
        return False
    
@user_bp.route('/logout')
def logout():
    session.pop('id', None)
    logout_user()
    return {'response':'User logged out!'},200


@user_bp.route('/register', methods=["POST","GET"]) 
def create_user():
    name = request.args.get('full_name')
    email = request.args.get('email')
    password = request.args.get('password')
    confirm_password = request.args.get('confirm_password')
    if User.query.filter_by(email=email).first():
        return {'response':'Email adress already in use!'},404
    if password == confirm_password:
        User.create(name, email, password)
        return {'response':'user created!'},200
    else:
        return {'response':'Password and Confirm Password are different!'},404

@bp.route("/insertspending",methods=["POST"])
def insert_spending():
    name = request.args.get('name')
    category = request.args.get('category')
    value = float(request.args.get('value'))
    currency = request.args.get("currency")
    date = datetime.strptime(request.args.get('date'),'%d/%m/%Y')
    value_eur = Spending.convert_currency(value,currency,"EUR",date)
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
    return {'response':f'Spending with ID {id} deleted'},200

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

@bp.route("/accountdata",methods=["GET"])
def get_biggest_spending():
    user = request.args.get('user')
    start = datetime.strptime(request.args.get('start'),'%d/%m/%Y')
    end = datetime.strptime(request.args.get('end'),'%d/%m/%Y')
    currency = request.args.get("currency")
    response = Spending.accountData(user,start,end,currency)
    return {"total":response[0],"biggest":response[1]}

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

