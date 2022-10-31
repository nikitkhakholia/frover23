from flask import Flask,render_template,Response
from camera import Camera 
from environment import EnvironmentSensors
from flask_cors import CORS
# from flask_sock import Sock

envSense = EnvironmentSensors()
envSense.startRecording()


app=Flask(__name__)
# sock = Sock(app)
CORS(app)



camera = Camera()
camera.start()


# @app.route('/test')
# def index():
#     return render_template('index.html')

# @sock.route("/movement")
# def movement():
#     while True:
#         data = sock.receive()
#         sock.send(data)

@app.route('/video')
def video():
    return Response(camera.generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

@app.post("/mvf")
def mvf():
    # todo
    print("Moving Front...")
    return {"success": True}

@app.post("/mvr")
def mvr():
    # todo
    print("Moving Right...")
    return {"success": True}

@app.post("/mvb")
def mvb():
    # todo
    print("Moving Back...")
    return {"success": True}

@app.post("/mvl")
def mvl():
    # todo
    print("Moving Left...")
    return {"success": True}

@app.post("/rtt")
def rtt():
    # todo
    print("Rotating...")
    return {"success": True}
@app.post("/livedata")
def livesensor():
    return envSense.liveData()
if __name__=="__main__":
    app.run(host="0.0.0.0")
