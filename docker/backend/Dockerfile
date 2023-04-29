FROM python:3.10.9-slim-bullseye as builder

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install pipenv and compilation dependencies
RUN pip install --upgrade pip && \
    pip install pipenv && \
    apt-get update && \
    apt-get install -y --no-install-recommends gcc python3-dev

# install python dependencies in /.venv
COPY backend/Pipfile .
COPY backend/Pipfile.lock .
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --dev


FROM builder

WORKDIR /app

# use virtual env from builder stage
ENV PATH "/.venv/bin:$PATH"
