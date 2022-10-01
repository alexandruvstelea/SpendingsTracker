from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json
import loging_backend as lBackend
import spending_backend as sBackennd

#DATABASE INFO
dbInf = open('jsonFiles/databaseInfo.json')
db_info = json.load(dbInf)
hostname = db_info['hostname']
database = db_info['databaseName']
username = db_info['username']
pwd = db_info['password']
port_id = db_info['portID']
dbInf.close()

#FLASK APP DEFINITION
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{username}:{pwd}@{hostname}:{port_id}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#db = SQLAlchemy(app)
#users_table = db.Table('users', db.metadata, autoload=True, autoload_with=db.engine)


#ENDPOINT TO INSERT USER IN DATABASE
@app.route("/createuser",methods=['POST'])
def create_user():
    username = request.args.get('username')
    password = request.args.get('password')
    if lBackend.insert_user(username,password):
        return {'response':'User created'},201
    else:
        return {'response':'Username already exists or an error ocurred'}, 500

#ENDPOINT TO LOGIN USER
@app.route("/login",methods=["GET"])
def check_user():
    username = request.args.get('username')
    password = request.args.get('password')
    if lBackend.check_user(username,password):
        return {'response':'Loging in'},200
    else:
        return {'response':'Invalid credentials'},401

#ENDPOINT TO INSERT SPENDING DATA
@app.route("/insertspendings",methods=["POST"])
def insert_spending():
    username = request.args.get('username')
    spending = request.args.get('spending')
    category = request.args.get('category')
    value = int(request.args.get('value'))
    currency = request.args.get("currency")
    date = datetime.strptime(request.args.get('date'),'%d/%m/%y')
    if sBackennd.insert_spending(username,spending,category,value,currency,date):
        return {'response':'Spending inserted'},200
    else:
        return {'response':'Error'},401

if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)