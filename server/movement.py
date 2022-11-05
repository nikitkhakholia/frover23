        
import serial, threading
"""
Movement module to establish connection with arduino and control the wheels of rover.
It also gets obstacles data from the arduino.
"""
class Movement():
    """
    creating serial connection
    """
    def __init__(self) -> None:
        self.conn = serial.Serial(port='COM4', baudrate=115200, timeout=.1)
        pass

    """
    sending serial data to circuit
    """
    def write(self, data)-> None:
        self.conn.write(bytes(data, 'utf-8'))
        
    """
    reading serial data from the circuit recursively
    """
    def _read(self):
        while True:
            print(self.conn.readline())
    
    """
    starting read function on separate thread to increase perfomance
    """
    def read(self):
        try:
            thread1 = threading.Thread(target=self._read, args=[])
            thread1.start()
        except Exception as e: 
            print(e)
