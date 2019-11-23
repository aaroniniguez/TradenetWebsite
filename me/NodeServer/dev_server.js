const express = require('express'); 
const fs = require('fs');
const path = require('path');
const http = require('http');

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/nohup.out', {flags : 'a'});
console.log = function(...args){
	var myTime = new Date();
	var dst = "PDT";
	if(dst == "PDT"){
		var offset = 7;
	}
	else if(dst == "PST"){
		var offset = 8;
	}
	myTime.setHours(myTime.getHours()-offset);
	myTime = myTime.toLocaleTimeString('en-US');
	log_file.write("\n==== " + myTime + " PST ====\n");
	args.forEach(function(element){
	   log_file.write(util.format(element) + '\n');
	});
};
var bodyParser = require('body-parser');

//catches all errors, use this wrapper on all app.get callback func
const asyncHandler = fn =>  
    (req, res, next) =>  {
        Promise.resolve(fn(req, res, next)).catch(function(error){   
			console.log(error);
            next();
        });
    };  

// Certificate
//const privateKey = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/cert.pem', 'utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/chain.pem', 'utf8');
//const credentials = {
	//key: privateKey,
	//cert: certificate,
	//ca: ca
//};

//Define app
let app = express();
//app.all('*', (req, res, next) => {
		//next();
	//if(req.protocol === 'https')
		//next();
	//else
		//return res.redirect("https://" + req.hostname + req.originalUrl);
//});
let baseLocation = "../build"
app.use("/me", express.static(baseLocation));
app.use("/images", express.static(baseLocation + "/images"));
app.use("/TEFS", express.static(baseLocation + "/TEFS"));
app.get("/", function(req, res) {
	res.redirect("/about");
	//res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.response.savedSend = app.response.send;
app.response.send = function(data){
	console.log("RESPONSE "+ data);	
	return this.savedSend(data);
};

app.use(bodyParser.urlencoded({
	 extended: true 
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	if(isEmptyObject(req.body))
		console.log(req.method +" "+ req.url);
	else
		console.log(req.method +" "+ req.url, req.body);
	next();
});

//Test Request Endpoint
app.get('/test.php', asyncHandler(async function(req, res) {
	res.type("json");
	res.send(`{"live":"success"}`);
	res.end();
	return;
}));
app.get("/.well-known/acme-challenge/:id", function(req, res) {
	res.sendFile(baseLocation+'/.well-known/acme-challenge/'+req.params.id);
});
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});
var portNumber = 3000;
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app).listen(443);
let server = httpServer.listen(portNumber, function() {  
	console.log("Server is listening on port " + portNumber);
});
