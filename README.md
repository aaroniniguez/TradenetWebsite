# Cert Instructions

Download the RPM

	curl -O http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

Then install it

	sudo yum install epel-release-latest-7.noarch.rpm
	
Now you can install certbot

	sudo yum install certbot
	sudo certbot certonly

Then to renew: 
	
	https://community.letsencrypt.org/t/certbot-renew-request-saves-certificates-to-0001-to-folder/49654/4
	
Certbot will give instructions , choose option 2 which essentially puts a file on your website and then certbot tries to validate that the file exists via a get request

You can enter '/' for the webroot and then put in your server.js code place this: 

```
app.get("/.well-known/acme-challenge/:id", function(req, res) {
        res.sendFile('/.well-known/acme-challenge/'+req.params.id);
});
```

Certbot will ask for your webroot (it will then download a file to where you enter)
Input the webroot for tradeforthemoney.com: (Enter 'c' to cancel): /home/ec2-user/TradenetWebsite/me/build

Then make sure the express server can correctly serve up the file when certbot requests it
