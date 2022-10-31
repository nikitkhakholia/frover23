import threading
import requests
import time
from sense_hat import SenseHat

class EnvironmentSensors:
    def __init__(self):
        self.sense = SenseHat()
        self.recordData=False

    def liveData(self):
        humidity = self.sense.get_humidity()
        temperature = self.sense.get_temperature()
        pressure = self.sense.get_pressure()
        return {"humidity": round(humidity,1), "temperature":round(temperature,1), "pressure": round(pressure,1)}
    
    def captureData(self):
        self.recordData=True
        while self.recordData:
            humidity = self.sense.get_humidity()
            temperature = self.sense.get_temperature()
            pressure = self.sense.get_pressure()
            requests.get("https://api.thingspeak.com/update?api_key=HWV4TGXG5WNSOR51&field1="+str(round(humidity,1))+"&field2="+str(round(temperature,1))+"&field3="+str(round(pressure,2)))
            time.sleep(60)

    def startRecording(self):
        try:
            thread1 = threading.Thread(target=self.captureData, args=[])
            thread1.start()
        except Exception as e: 
            print(e)
    def stopRecording(self):
         self.recordData=False

    