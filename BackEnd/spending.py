from __init__ import db
from datetime import date, datetime
from currency_converter import CurrencyConverter

class Spending(db.Model):
    __tablename__ = "spendings"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    category = db.Column(db.String)
    value_eur = db.Column(db.Float)
    date = db.Column(db.Date)
    user = db.Column(db.String)

    def __init__(self, name:str, category:str, value_eur:float, date:datetime, user:str):
        self.name = name
        self.category = category
        self.value_eur = value_eur
        self.date = date
        self.user = user

    @staticmethod
    def create(name,category,value_eur,date,user):
        new_spending = Spending(name,category,value_eur,date,user)
        db.session.add(new_spending)
        db.session.commit()

    @staticmethod
    def read(user_to_srch,start,end,currency):
        spendings = Spending.query.filter(Spending.date.between(start,end)).filter(Spending.user == user_to_srch)
        spendings_list = []
        for sp in spendings:
            spendings_list.append({"id":sp.id,"name": sp.name,"category":sp.category,"value":Spending.convert_currency(sp.value_eur,"EUR",currency,sp.date),"date":sp.date})
        return spendings_list


    @staticmethod
    def update(id,name,category,value_eur,date):
        spending_to_upd = Spending.query.get(id)
        spending_to_upd.name = name
        spending_to_upd.category = category
        spending_to_upd.value_eur = value_eur
        spending_to_upd.date = date
        db.session.commit()

    @staticmethod
    def delete(id_to_del):
        Spending.query.filter_by(id=id_to_del).delete()
        db.session.commit()

    @staticmethod
    def convert_currency(value,currency,target,date):
        converter = CurrencyConverter()
        try:
            return round(converter.convert(value,currency,target,date=date),2)
        except:
            print("RateNotFoundError")
        finally:
            return round(converter.convert(value,currency,target),2)

    @staticmethod
    def average(user_to_srch,start,end,currency):
        spendings = Spending.query.filter(Spending.date.between(start,end)).filter(Spending.user == user_to_srch)
        spendings_list = []
        for sp in spendings:
            spendings_list.append(Spending.convert_currency(sp.value_eur,"EUR",currency,sp.date))
        average = round(sum(spendings_list)/len(spendings_list),2)
        return average

    @staticmethod
    def total(user_to_srch,start,end,currency):
        spendings = Spending.query.filter(Spending.date.between(start,end)).filter(Spending.user == user_to_srch)
        spendings_list = []
        for sp in spendings:
            spendings_list.append(Spending.convert_currency(sp.value_eur,"EUR",currency,sp.date))
        total = sum(spendings_list)
        return total