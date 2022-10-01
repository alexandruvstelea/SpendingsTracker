import bcrypt
import psycopg2
import json

from BackEnd.api_backend import insert_spending

#DATABASE INFO
dbInf = open('jsonFiles/databaseInfo.json')
db_info = json.load(dbInf)
hostname = db_info['hostname']
database = db_info['databaseName']
dbUsername = db_info['username']
pwd = db_info['password']
port_id = db_info['portID']
dbInf.close()

def hash_password(password):
    byte_password = str.encode(password)
    salt = bcrypt.gensalt(rounds=12)
    hashed_password = bcrypt.hashpw(byte_password,salt)
    return hashed_password

def check_password(password,hashed_password):
    byte_password = str.encode(password)
    if bcrypt.checkpw(byte_password,hashed_password):
        return True
    else:
         return False

def insert_user(username, password):
    cursor, connection = None, None
    user_created = False
    try:
        connection = psycopg2.connect(host=hostname, dbname=database, user=dbUsername, password=pwd, port=port_id)
        cursor = connection.cursor()
        cursor.execute(f"SELECT username FROM users WHERE username='{str.upper(username)}'")
        if cursor.fetchone() is None:
            cursor.execute("INSERT INTO users (username,password,account_enabled) VALUES (%s,%s,%s)",(str.upper(username),hash_password(password),True))
            connection.commit()
            user_created = True
    except Exception as error:
        print(error)
        return False
    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None:
            connection.close()
        return user_created

def check_user(username,password):
    cursor, connection = None, None
    user_checked = False
    try:
        connection = psycopg2.connect(host=hostname, dbname=database, user=dbUsername, password=pwd, port=port_id)
        cursor = connection.cursor()
        cursor.execute(f"SELECT username FROM users WHERE username='{str.upper(username)}'")
        if cursor.fetchone() is not None:
            cursor.execute(f"SELECT account_enabled FROM users WHERE username='{str.upper(username)}'")
            if cursor.fetchone()[0] == True:
                cursor.execute(f"SELECT password FROM users WHERE username='{str.upper(username)}'")
                hashed_password = cursor.fetchone()[0]
                print(hashed_password)
                if check_password(password,bytes(hashed_password)):
                    user_checked = True
    except Exception as error:
        print(error)
        return False
    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None:
            connection.close()
        return user_checked