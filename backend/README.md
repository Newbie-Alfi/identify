# SSO server

## Run server
/backend/sso$ ```hypercorn main:app --reload --bind 0.0.0.0:8000```

## Create new migration
/backend/sso$ ```alembic revision --autogenerate -m "<comment>"```

## Apply DB migration
/backend/sso$ ```alembic upgrade head```


# Consumer server

## Run server
/backend/consumer$ ```hypercorn main:app --reload --bind 0.0.0.0:8001```

## Create new migration
/backend/consumer$ ```alembic revision --autogenerate -m "<comment>"```

## Apply DB migration
/backend/consumer$ ```alembic upgrade head```
