const express = require('express'); 
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
var aws     = require('aws-sdk');
var email   = "aaroniniguez1@gmail.com";
const debugEmail = "info@tradeforthemoney.com"
aws.config.loadFromPath(__dirname + '/config.json');
var ses = new aws.SES();

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/nohup.out', {flags : 'a'});
console.log = function(...args){
	var myTime = new Date();
	var dst = "PDT";
	let offset;
	if(dst === "PDT"){
		offset = 7;
	}
	else if(dst === "PST"){
		offset = 8;
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
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/tradeforthemoney.com/chain.pem', 'utf8');
const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

//Define app
let app = express();
app.all('*', (req, res, next) => {
	if(req.protocol === 'https')
		next();
	else
		return res.redirect("https://" + req.hostname + req.originalUrl);
});
let baseLocation ="/home/ec2-user/TradenetWebsite/me/build"; 
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

app.get('/send', function (req, res) {
    var ses_mail = "From: <" + debugEmail + ">\n";
    ses_mail = ses_mail + "To: " + email + "\n";
    ses_mail = ses_mail + "Subject: Link Clicked\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    ses_mail = ses_mail + "Link clicked on: \n\n" + req.header("Referer");
    
    var params = {
        RawMessage: { Data: new Buffer(ses_mail) },
        Destinations: [ email ],
        Source: "'AWS Tutorial Series' <" + email + ">'"
    };
    
    ses.sendRawEmail(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        }           
    });
});

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

var portNumber = 80;
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app).listen(443);
let server = httpServer.listen(portNumber, function() {  
	console.log("Server is listening on port " + portNumber);
});
