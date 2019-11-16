# Cert Instructions

Download the RPM
	curl -O http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

Then install it
	sudo yum install epel-release-latest-7.noarch.rpm
	
Now you can install certbot
	sudo yum install certbot
	sudo certbot

Certbot will give instructions , choose option 2 which essentially puts a file on your website and then certbot tries to validate that the file exists via a get request
