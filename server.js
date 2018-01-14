 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://passmasterapp:wYapelJTDHQTDxMP@questionsdatabase-shard-00-00-x2ia8.mongodb.net:27017,questionsdatabase-shard-00-01-x2ia8.mongodb.net:27017,questionsdatabase-shard-00-02-x2ia8.mongodb.net:27017/test?ssl=true&replicaSet=questionsdatabase-shard-0&authSource=admin"
var uri = require('url');
 
 require("http").createServer(function (req, res) {
	 
	 res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	 var name = uri.parse(req.url,true);
	 var qdata = name.query;
	 var data = qdata.collectionname;
	
   if(req.url=='/getcollections'){
	   getColl(req,res);
   }
   
   else if(name.pathname == '/getdocs'){
	   getDocs(req,res,data) 
   }
   
   else if(name.pathname == '/deletecollection'){
	  dropCollection(req,res,data)
   }
 }).listen(9090);

 
 function getColl(req,res){
MongoClient.connect(url, function(err, db) {
db.listCollections().toArray(function(err, collections){
	var jsonstring = JSON.stringify(collections);
    res.end(jsonstring);
		setTimeout(function(){db.close();console.log("mongo connection closed");},3600000);

});
 
 })
 
 }
 
 
 function getDocs(req,res,data){
	MongoClient.connect(url, function(err, db) {
  db.collection(data).find({}).toArray(function(err, result) {
    if (err) throw err;
   var jsonstring = JSON.stringify(result);
    res.end(jsonstring);
  });
}); 

	
	}
	
	
	function dropCollection(req,res,data){
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  db.collection(data).drop(function(err, delOK) {
    if (err) throw err;
    if (delOK){
res.end("deleted");
	}	;
    
  });
});	
		
	}