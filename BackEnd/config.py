from dotenv import load_dotenv
from os import getenv

load_dotenv("BackEnd/.env")

hostname = getenv("HOSTNAME")
database = getenv("DB_NAME")
username = getenv("PG_USER")
pwd = getenv("PG_PASSWORD")
port_id = getenv("PG_PORT")


class Config:
    SECRET_KEY = getenv("FLASK_SECRET")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = (
        f"postgresql://{username}:{pwd}@{hostname}:{port_id}/{database}"
    )
