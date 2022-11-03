from flask import Flask,render_template,Response
from camera import Camera 
from environment import EnvironmentSensors
from flask_cors import CORS
from movement import Movement

envSense = EnvironmentSensors()


move = Movement()

app=Flask(__name__)
CORS(app)


camera = Camera()
camera.start()


@app.route('/video')
def video():
    return Response(camera.generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

@app.post("/mvs")
def mvs():
    move.write("stop")
    print("Moving Stopped...")
    return {"success": True}
    
@app.post("/mvf")
def mvf():
    move.write("front")
    print("Moving Front...")
    return {"success": True}

@app.post("/mvr")
def mvr():
    move.write("right")
    print("Moving Right...")
    return {"success": True}

@app.post("/mvb")
def mvb():
    move.write("back")
    print("Moving Back...")
    return {"success": True}

@app.post("/mvl")
def mvl():
    move.write("left")
    print("Moving Left...")
    return {"success": True}

@app.post("/livedata")
def livesensor():
    return envSense.liveData()
    
if __name__=="__main__":
    app.run(host="0.0.0.0")
