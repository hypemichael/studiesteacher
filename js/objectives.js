
var jsonstore = [];
var objstore= {};
var anchortags =document.getElementsByTagName("a");

if(!localStorage.questionnumber){
	localStorage.questionnumber = 1;
}
var questionnumber = localStorage.questionnumber;

var messagespan ;
var questionquery ="";

document.addEventListener("DOMContentLoaded", function() {	
setInstance();	
});

function setInstance(){
	var messagespan = document.getElementById("displaymessage");
	if(!localStorage.subject){
localStorage.subject = "Physics";	
	}
	if(!localStorage.year){
		localStorage.year = "2017";
	}
	var database = localStorage.subject + localStorage.year;
localforage.config({
    name: database
		})
messagespan.text = localStorage.year+ " " + localStorage.subject + " " +"question"+questionnumber;

goToQuestion(questionnumber);

}

function setYear(yearinnertext){
	 localStorage.year = yearinnertext;
	 localStorage.questionnumber = 1;
	 sessionStorage.whichview ="";
	location.reload();
}


function setSubject(subjectinnertext){
	localStorage.subject = subjectinnertext;
	localStorage.questionnumber = 1;
	sessionStorage.whichview ="";
	location.reload();		
}


function goToQuestion(direction){
	var forwards = document.getElementById("forwards");
	var backwards = document.getElementById("backwards");
	var messagespan = document.getElementById("displaymessage");
	var questiontext= document.getElementById("questiontext")
	var answerA=document.getElementById("answer1")
	var answerB=document.getElementById("answer2")
	var answerC=document.getElementById("answer3")
	var answerD =document.getElementById("answer4")
	var correctAnswer = document.getElementById("correctanswer")
 var solutionquestion = document.getElementById("solutionquestion")
		var solutionstep1 = document.getElementById("solutionstep1")
		var solutionstep2 = document.getElementById("solutionstep2")
		var solutionstep3 = document.getElementById("solutionstep3")
		var solutionstep4 = document.getElementById("solutionstep4")
		var solutionstep5 = document.getElementById("solutionstep5")
		

 document.getElementById("view1").innerHTML = "";
		document.getElementById("view2").innerHTML = "";
		 document.getElementById("view3").innerHTML = "";
		 document.getElementById("view4").innerHTML = "";
		 document.getElementById("view5").innerHTML = "";
		 document.getElementById("view6").innerHTML = "";
	if(direction === 'forward'){
		saveQuestion();
		localStorage.questionnumber= parseInt(localStorage.questionnumber) + 1;	
		questionnumber =localStorage.questionnumber; 
	}
	
	else if(direction === 'backward' && parseInt(localStorage.questionnumber) !== 1){
		saveQuestion();
			localStorage.questionnumber=parseInt(localStorage.questionnumber) - 1;	
		questionnumber =localStorage.questionnumber ; 
		
	}
	
    else if(isNaN(direction) == false) {
		
		if(sessionStorage.whichview =="question"){	
view1.innerHTML = sessionStorage.questiontext;
view2.innerHTML = sessionStorage.answera;
view3.innerHTML = sessionStorage.answerb;
view4.innerHTML = sessionStorage.answerc;
view5.innerHTML = sessionStorage.answerd;
view6.innerHTML = sessionStorage.correctAnswer;
}

else if (sessionStorage.whichview =="solution"){
view1.innerHTML = sessionStorage.solutionquestion;
view2.innerHTML = sessionStorage.solutionstep1;
view3.innerHTML = sessionStorage.solutionstep2;
view4.innerHTML = sessionStorage.solutionstep3;
view5.innerHTML = sessionStorage.solutionstep4;
view6.innerHTML = sessionStorage.solutionstep5;	
}
else{
questionnumber = direction;
localStorage.questionnumber = direction;	
}
	}
	
	
	questionquery = 'question'+questionnumber;
	solutionquery = 'solution' + questionnumber
localforage.getItem(questionquery).then(function(result) {
 questiontext.innerText =result.question ;
		answerA.innerHTML=result.answerA;
		answerB.innerHTML=result.answerB;
		answerC.innerHTML= result.answerC;
		answerD.innerHTML=result.answerD;
		correctAnswer.innerHTML = result.correctAnswer;
		solutionquestion.innerText = result.solution.solutionquestion;
		solutionstep1.innerText = result.solution.solutionstep1;
		solutionstep2.innerText = result.solution.solutionstep2;
		solutionstep3.innerText = result.solution.solutionstep3;
		solutionstep4.innerText = result.solution.solutionstep4;
		solutionstep5.innerText = result.solution.solutionstep5;

}).catch(function(err) {
	
questiontext.innerHTML ="";
		answerA.innerHTML="";
		answerB.innerHTML="";
		answerC.innerHTML="";
		answerD.innerHTML="";
		correctAnswer.innerHTML = "";
		solutionquestion.innerHTML = "";
	solutionstep1.innerHTML = "";
		solutionstep2.innerHTML = "";
		solutionstep3.innerHTML = "";
		solutionstep4.innerHTML = "";
		solutionstep5.innerHTML = "";		
			
});

messagespan.text = localStorage.year+ " " + localStorage.subject + " " +"question"+questionnumber;
}



function saveQuestion(){
	var question = 'question'+questionnumber;
	var questiontext= document.getElementById("questiontext").innerText;
	var answerA=document.getElementById("answer1").innerText;
	var answerB=document.getElementById("answer2").innerText;
	var answerC=document.getElementById("answer3").innerText;
	var answerD =document.getElementById("answer4").innerText;
	var correctAnswer = document.getElementById("correctanswer").innerText;
 var solution = 'solution'+questionnumber;
 var solutionquestion = document.getElementById("solutionquestion").innerText;
		var solutionstep1 = document.getElementById("solutionstep1").innerText;
		var solutionstep2 = document.getElementById("solutionstep2").innerText;
		var solutionstep3 = document.getElementById("solutionstep3").innerText;
		var solutionstep4 = document.getElementById("solutionstep4").innerText;
		var solutionstep5 = document.getElementById("solutionstep5").innerText;

localforage.setItem(question,{'question':questiontext,'answerA':answerA,'answerB':answerB,'answerC':answerC,'answerD':answerD,'correctAnswer':correctAnswer,'solution':{'solutionquestion':solutionquestion,'solutionstep1':solutionstep1,'solutionstep2':solutionstep2,'solutionstep3':solutionstep3,'solutionstep4':solutionstep4,'solutionstep5':solutionstep5}}).then(function (value) {
sessionStorage.questiontext = questiontext;
sessionStorage.answera = answerA
sessionStorage.answerb = answerB;
sessionStorage.answerc = answerC;
sessionStorage.answerd = answerD;
sessionStorage.correctAnswer = correctAnswer;
sessionStorage.solutionquestion = solutionquestion ;
sessionStorage.solutionstep1 = solutionstep1;
sessionStorage.solutionstep2 = solutionstep2;	
sessionStorage.solutionstep3 = solutionstep3;	
sessionStorage.solutionstep4 = solutionstep4;
sessionStorage.solutionstep5 = solutionstep5;
alert("questions saved");
}).catch(function(err) {
 
    console.log(err);
});


}

function viewQuestion(){
	
		sessionStorage.whichview = "question";
		saveQuestion();
			location.reload();
		
	}
	
	
	function viewSolution(){
		var solution = 'solution'+questionnumber;
 var solutionquestion = document.getElementById("solutionquestion").innerText;
		var solutionstep1 = document.getElementById("solutionstep1").innerText;
		var solutionstep2 = document.getElementById("solutionstep2").innerText;
		var solutionstep3 = document.getElementById("solutionstep3").innerText;
		var solutionstep4 = document.getElementById("solutionstep4").innerText;
		var solutionstep5 = document.getElementById("solutionstep5").innerText;
sessionStorage.whichview = "solution";
saveQuestion();
sessionStorage.solutionquestion = solutionquestion ;
sessionStorage.solutionstep1 = solutionstep1;
sessionStorage.solutionstep2 = solutionstep2;	
sessionStorage.solutionstep3 = solutionstep3;	
sessionStorage.solutionstep4 = solutionstep4;
sessionStorage.solutionstep5 = solutionstep5;	
location.reload();	
	}


	function jumpTo(){
	var val = document.getElementById("jumpinput").value;
	localforage.length().then(function(numberOfKeys) {
    if(val > numberOfKeys || val < 1){
		alert("out of bound");
		return;
	}
	 goToQuestion(val);	
	 document.getElementById("jumpinput").value = "";
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});
   
	
	}

function pushToCloud(){
	saveQuestion();
	
	var getconfirmation =  confirm("Are you usre you want to push to the cloud?") ;
	if(getconfirmation == true){
	var progressdiv = document.getElementById("progressbardiv");
	var progressbar = document.getElementById("progressbar");
	var lengthofkeys = "";
	
	progressdiv.style.display="block";
	
	localforage.length().then(function(numberOfKeys) {
    // Outputs the length of the database.
    lengthofkeys = numberOfKeys;
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});

localforage.iterate(function(value, key, iterationNumber) {
	objstore.iterationNumber =  value;
   var percentage = (iterationNumber/lengthofkeys) * 100;
   progressbar.value += percentage;
    jsonstore.push(objstore.iterationNumber);
	
}).then(function() {
   progressdiv.style.display="none";
   alert("saving to cloud" + " " + Object.keys(jsonstore[0].solution));
   jsonstore = [];
objstore= {};
  }).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});	
	}	
	
}

function loadDoc(doc) {
	var collection  = localStorage.subject + localStorage.year;
	var docu =JSON.stringify({'collection':collection,'data':doc});
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
	  jsonstore=[];
	  objstore={};
    }
  };
  xhttp.open("POST", " https://safe-scrubland-12162.herokuapp.com/storetocloud", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(docu);
}

for(var x = 0;x<anchortags.length;x++){
anchortags[x].addEventListener('click',function(){
	var e = this;
this.style.animation='Wiggle 1s ';
	setTimeout(function(){e.style.animation= "";},1500);
});

}

function clearStorage(){
	var cfirm = confirm("are you sure yo want to clear database and permanently delete entries?");
	
	if(cfirm == true){
		
		var password= confirm("second confirmation needed");

if (password == null || password == "") {
    alert ("User cancelled the prompt.");
} else if(password === true) {
	
localforage.clear().then(function() {
	localStorage.clear();
	sessionStorage.clear();
    alert("database is now empty");
	location.reload();
	
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});	
	
	
	
}
else{
	
 alert ("password incorrect");	
}
		
		
	}
	
}