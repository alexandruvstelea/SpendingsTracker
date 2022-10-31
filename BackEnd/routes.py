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
    value_eur = Spending.convert_currency(value,currency)
    date = datetime.strptime(request.args.get('date'),'%d/%m/%y')
    user = request.args.get('user')
    Spending.create(name,category,value_eur,date,user)
    return {'response':'Spending inserted'},200

@bp.route("/updatespending",methods=["PUT"])
def update_spending():
    id = int(request.args.get('id'))
    name = request.args.get('name')
    category = request.args.get('category')
    value = float(request.args.get('value'))
    currency = request.args.get("currency")
    value_eur = Spending.convert_currency(value,currency)
    date = datetime.strptime(request.args.get('date'),'%d/%m/%y')
    Spending.update(id,name,category,value_eur,date)
    return {'response':'Spending updated'},200

@bp.route("/deletespending",methods=["DELETE"])
def delete_spending():
    id = int(request.args.get('id'))
    Spending.delete(id)
    return {'response':'Spending deleted'},200