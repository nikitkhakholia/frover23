
"""
importing required packages
"""
import globals, json, random

"""
importing flask to create the server
"""
from flask import Flask, Response, request

"""
initialize flask application with static file directory to serve the static files and making the static route to '/'
"""
app = Flask(__name__, static_folder='/Users/studio/Workspace/frover23/web/build', static_url_path='/')

"""
importing CORS for Cross Origin Resource Sharing
PS: To make the server accessible from different host names
"""
from flask_cors import CORS

"""
wrapping the flask app to allow traffic from different host names
"""
CORS(app)


"""
api to access home page and generate code to use the rover
"""
@app.get('/')
def index():
    globals.authCode = random.randrange(100000, 999999)
    print("Code----------"+str(globals.authCode))
    return app.send_static_file('index.html')

"""
api to log into the rover
"""
@app.post('/validateCode')
def validateCode():
    if(globals.authCode==int(json.loads(request.data)['code'])):
        globals.userIp=request.remote_addr
        return {"success": True}
    else:
        return {"success": False}

"""
importing defined middleware to protect required routes from un authorized access
"""
from middlewares import authCodeProtected

"""
importing movement module
"""
from movement import Movement

"""
creating local instance to control the rover
"""
move = Movement()

"""
protected api to stop the
"""
@app.post("/mvs")
@authCodeProtected
def mvs():
    move.write("stop")
    print("Moving Stopped...")
    return {"success": True}
    
"""
protected api to move the rover front
"""
@app.post("/mvf")
@authCodeProtected
def mvf():
    move.write("front")
    print("Moving Front...")
    return {"success": True}

"""
protected api to move the rover right
"""
@app.post("/mvr")
@authCodeProtected
def mvr():
    move.write("right")
    print("Moving Right...")
    return {"success": True}

"""
protected api to move the rover back
"""
@app.post("/mvb")
@authCodeProtected
def mvb():
    move.write("back")
    print("Moving Back...")
    return {"success": True}

"""
protected api to move the rover left
"""
@app.post("/mvl")
@authCodeProtected
def mvl():
    move.write("left")
    print("Moving Left...")
    return {"success": True}


"""
importing environment module
"""
from environment import EnvironmentSensors

"""
creating local instance to access sensors
"""
envSense = EnvironmentSensors()

"""
protected api to read live sensor data
"""
@app.post("/livedata")
@authCodeProtected
def livesensor():
    return envSense.liveData()

"""
importing camera module
"""
from camera import Camera 

"""
creating local instance
"""
camera = Camera()

"""
importing camera module
creating local instance
protected api to live stream video from camera
"""
@app.route('/video')
@authCodeProtected
def video():
    return Response(camera.generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

"""
Starting the server
"""
if __name__=="__main__":
    app.run(host="0.0.0.0", debug=True)
