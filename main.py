import pycom
import time

pycom.heartbeat(False)
for cycles in range(30): # stop after 10 cycles
    pycom.rgbled(0x007f00) # green
    time.sleep(10)
    pycom.rgbled(0x7f7f00) # yellow
    time.sleep(3)
    pycom.rgbled(0x7f0000) # red
    time.sleep(15)



pycom.rgbled(0x000000) # black
