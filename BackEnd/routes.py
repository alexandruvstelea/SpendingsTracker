from flask import Blueprint, request
from spending import Spending
from datetime import datetime

bp = Blueprint('spendings', __name__)

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