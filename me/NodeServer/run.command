#cd to the directory this file is in
DIRECTORY=$(dirname "$0")
cd "$DIRECTORY"

#Start the node server
if [ "$1" = "prod" ]; then
	nohup nodemon server.js &
elif [ "$1" = "dev" ]; then
	nohup nodemon dev_server.js &
	echo "Server up ! Go to ->     http://localhost:3000/";
else 
	echo "Options are prod or dev"
fi