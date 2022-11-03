import serial
import threading

class Movement():
    def __init__(self) -> None:
        self.conn = serial.Serial(port='COM4', baudrate=115200, timeout=.1)

    def write(self, data)-> None:
        self.conn.write(bytes(data, 'utf-8'))
        
    def _read(self):
        while True:
            print(self.conn.readline())
    
    def read(self):
        try:
            thread1 = threading.Thread(target=self._read, args=[])
            thread1.start()
        except Exception as e: 
            print(e)
