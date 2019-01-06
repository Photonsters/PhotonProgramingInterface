//https://github.com/dimichgh/mmap-kit
//https://www.npmjs.com/package/mmap-io

//console.log("Hello World");

var PageFactory = require('mmap-kit').PageFactory;
mappedPageFactory = new PageFactory(10 * 1024 * 1024, './test');
var mappedPage = mappedPageFactory.acquirePage(0);
var buffer = mappedPage.getLocal(0);

//var arr = new Uint8Array(new ArrayBuffer(10*1024*1024));
var arr = new Array((512*1024) + 1).join("#");

var t = new Date();
//buffer.write('hello node.js');
buffer.write(arr);
var d = (new Date() - t)/1000;
console.log("Done in " + d)
mappedPage.setDirty(true);
mappedPage.flush();
mappedPage.close(); // gc
