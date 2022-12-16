FROM python:3.7-slim-bullseye

RUN python -m pip install --upgrade pip

RUN pip install -U setuptools

RUN pip install flask==2.1.0 gevent==22.10.2 numpy==1.20.2 scikit_image==0.19.2 tensorflow==2.10.0 Werkzeug

COPY . /app/

WORKDIR /app/

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0", "-p", "5000"]