from flask import Blueprint

app = Blueprint('blueprint', __name__)

@app.post("/mvf")
def mvf():
    print("moving forward...")

@app.post("/mvr")
def mvr():
    print("moving forward...")

@app.post("/mvb")
def mvb():
    print("moving forward...")

@app.post("/mvl")
def mvl():
    print("moving forward...")

@app.post("/rtt")
def rtt():
    print("moving forward...")