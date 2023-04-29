import toml
import os

with open(os.getcwd() + "/config.toml", "r") as f:
    config = toml.load(f)

# CORS
ALLOWED_ORIGINS = config["cors"]["allowed_origins"]

# database
DATABASE_HOST = config["database"]["host"]
DATABASE_PORT = config["database"]["port"]
DATABASE_USER = config["database"]["user"]
DATABASE_PASSWORD = config["database"]["password"]
DATABASE_NAME = config["database"]["name"]
DATABASE_URL = f"postgresql+asyncpg://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"  # noqa: E501
