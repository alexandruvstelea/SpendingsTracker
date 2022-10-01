import psycopg2
import json
from currency_converter import CurrencyConverter

#DATABASE INFO
dbInf = open('jsonFiles/databaseInfo.json')
db_info = json.load(dbInf)
hostname = db_info['hostname']
database = db_info['databaseName']
dbUsername = db_info['username']
pwd = db_info['password']
port_id = db_info['portID']
dbInf.close()

def create_table_for_user(username):
    cursor, connection = None, None
    try:
        connection = psycopg2.connect(host=hostname, dbname=database, user=dbUsername, password=pwd, port=port_id)
        cursor = connection.cursor()
        script = f'''CREATE TABLE IF NOT EXISTS public.{username+"_spendings"}(
                        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
                        name character varying NOT NULL,
                        category character varying NOT NULL,
                        value_eur double precision NOT NULL,
                        date timestamp without time zone NOT NULL,
                        PRIMARY KEY (id)
                 );'''
        cursor.execute(script)
        connection.commit()
    except Exception as error:
        print(error)
        return False
    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None:
            connection.close()
        return True

def convert_currency(value,currency):
    converter = CurrencyConverter()
    return converter.convert(value,currency)

def insert_spending(username,spending,category,value,currency,date):
    create_table_for_user(str.lower(username))
    cursor, connection = None, None
    spending_inserted = False
    try:
        connection = psycopg2.connect(host=hostname, dbname=database, user=dbUsername, password=pwd, port=port_id)
        cursor = connection.cursor()
        cursor.execute(f'''INSERT INTO {str.lower(username)+'_spendings'} (name,category,value_eur,date) VALUES {str.upper(spending),str.upper(category),round(convert_currency(value,currency),2),date}''')
        connection.commit()
        spending_inserted = True
    except Exception as error:
        print(error)
        return False
    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None:
            connection.close()
        return spending_inserted