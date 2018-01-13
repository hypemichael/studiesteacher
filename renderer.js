// This file is required by the index.html file and will
const BrowserWindow = require('electron').remote.BrowserWindow


const path = require('path');


// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 var obj = document.getElementById("obj");

obj.onload = function(){
	var objDoc = obj.contentDocument;
	 if(objDoc.getElementById("work")){
	var objDocwork = objDoc.getElementById("work");
	objDocwork.addEventListener("click",function(){
	
	var promise = new Promise((resolve,reject)=>{
obj.style.animation = "fadeOut 2s 1";
obj.style.animationFillMode = "forwards";
setTimeout(function(){resolve("yes")},2000);
	})
	
	promise.then((resolve)=>{
	obj.data = "views/workarea.html"
obj.style.animation = "fadeIn 2s 1";
obj.style.animationFillMode = "forwards";	
})
	
})
	 };

	 if(objDoc.getElementById("objectives")){
	var objDocelectives = objDoc.getElementById("objectives");
	
	objDocelectives.addEventListener("click",function(event){
 const modalPath = path.join('file://', __dirname, '/views/objectivesworkarea.html')
  let win = new BrowserWindow({   width: 1200, height: 700})
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})


	 }


}