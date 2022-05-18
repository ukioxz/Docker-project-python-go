FROM python:3.10-alpine

RUN apk add build-base

WORKDIR /app

COPY ./requirements/backend.in /app/requirements/backend.in

RUN python -m venv ./.venv
RUN . ./.venv/bin/activate
RUN pip install -r requirements/backend.in

COPY ./spaceship /app/spaceship
COPY ./build/index.html /app/build/index.html

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]
