from sense_hat import SenseHat
import time
s = SenseHat()
e = (0, 0, 0)
r = (255, 0, 0)
red_heart = [
    e, e, e, e, e, e, e, e,
    e, r, r, e, r, r, e, e,
    r, r, r, r, r, r, r, e,
    r, r, r, r, r, r, r, e,
    r, r, r, r, r, r, r, e,
    e, r, r, r, r, r, e, e,
    e, e, r, r, r, e, e, e,
    e, e, e, r, e, e, e, e
]
da=[
    e, e, e, e, e, e, e, e,
    e, e, e, e, e, e, e, e,
    e, e, r, e, r, r, r, r,
    e, e, r, e, e, e, e, r,
    r, r, r, e, r, r, r, r,
    r, e, r, e, r, e, e, r,
    r, e, r, e, r, e, e, r,
    r, r, r, e, r, r, r, r,
]
while True:
    s.clear()
    s.set_pixels(red_heart)
    time.sleep(1)
    s.set_pixels(da)
    time.sleep(1)
    
