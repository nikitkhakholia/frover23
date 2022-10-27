from flask import Flask,render_template,Response
import random
from sense_hat import SenseHat

sense = SenseHat()
sense.clear()


app=Flask(__name__)
auth_code = random.randint(1000,9999)
@app.route('/')
def index():
    sense.show_message("Login Code is"+str(auth_code))
    return render_template('index.html')

if __name__=="__main__":
    app.run(debug=True)
