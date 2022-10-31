import cv2
from picamera2 import Picamera2
import threading

"""
Camera class to control camera
"""
class Camera(threading.Thread):

    """
    default constructor overridden to initialize pi camera module and configure it
    """
    def __init__(self):
        threading.Thread.__init__(self)
        self.picam2 = Picamera2()
                                                                # "size": (960, 540),
        config = self.picam2.create_preview_configuration(main={ "format": "RGB888"})
        self.picam2.configure(config)
        self.status=False
    
    """
    starts the camera so that stream can be generated
    """
    def startCamera(self):
        if not self.status:
            self.picam2.start()
            self.status=True
            print("Cam Started")
        
    """
    releases the camera
    """
    def stopCamera(self):
        self.picam2.stop()
        self.status=False
        print("Camera stopped")

    """
    starts camera if not started
    yields jpeg buffer continously
    stops the camera when yield ends
    """
    def generate_frames(self):
        try:
            if not self.status:
                self.startCamera()
            while True:
                np_array = self.picam2.capture_array()
                x, buffer=cv2.imencode('.jpg',np_array)
                # (buffer, ), metadata = self.picam2.capture_buffers(["main"])
                frame=buffer.tobytes()
                yield(b'--frame\r\n'
                        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        except Exception as e:
            print(e)
        finally:
            self.stopCamera()
            
            
