# https://docs.python.org/2/library/mmap.html
# https://pymotw.com/3/mmap/
#access=mmap.ACCESS_COPY //Using the access setting ACCESS_COPY does not write changes to the file on disk.

import mmap
import time
#with open("hello.txt", "r+b") as f:
with open("test/page-0.dat", "r+b") as f:

	# memory-map the file, size 0 means whole file
	mm = mmap.mmap(f.fileno(), 0)
	mm.seek(0)
	f.seek(0)
	h=b"Hello Python+"
	b=bytearray(512*1024)
	m=h+b

	t=time.time()
	mm.write(m)
	d=time.time()-t
	print ("Done in ",d," secs.")
	print (m[:20])

