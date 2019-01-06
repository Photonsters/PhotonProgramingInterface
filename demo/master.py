# https://docs.python.org/2/library/mmap.html

import mmap
import time

# write a simple example file

with open("hello.txt", "wb") as f:
    h=b"Hello Python!"
    b=bytearray(512*1024)
    m=h+b
    f.write(m)

#with open("hello.txt", "r+b") as f:
with open("test/page-0.dat", "r+b") as f:

    # memory-map the file, size 0 means whole file
    mm = mmap.mmap(f.fileno(), 0)
    while True:
        mm.seek(0)
        t=time.time()
        ret=mm.readline()  # prints "Hello Python!"
        d=time.time()-t
        print ("Done in ",d," secs.")
        print (ret[:20])
        time.sleep(2)

    # close the map
    mm.close()