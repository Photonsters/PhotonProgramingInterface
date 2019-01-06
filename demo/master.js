//https://github.com/dimichgh/mmap-kit
//https://www.npmjs.com/package/mmap-io

//console.log("Hello World");


var PageFactory = require('mmap-kit').PageFactory;
mappedPageFactory = new PageFactory(512 * 1024, './test');
var mappedPage = mappedPageFactory.acquirePage(0);
var buffer = mappedPage.getLocal(0);

setTimeout(getInput, 0);

function getInput(){
	var t = new Date();
	var ret=buffer.slice(0, 40).toString();
	var d = (new Date() - t)/1000;
	console.log("Done in " + d)
	console.log(ret); // out: hello world
	setTimeout(getInput,2000);
}

mappedPage.close(); // gc