/*

1) capture the jwt containing request

2) if the site allows jku, we can host a jwk set on exploit server and point to it 
    in the value of jku parameter of the header, sign it using an arbitrary RSA key,
    and change the kid of the jwt to our custom jwk's kid parameter value.

3) all this can be done in the jwt editor and jwt token extensions

4) generate new rsa keys in jwt editor and host it on exploit server body
// copy public key as jwk
{
    "keys":[
        {
            (insert jwk set here)
            
  "kid": "c433bd76-502a-490c-ac3b-946389968061",
  "alg": "RS256",
  "jku": "https://exploit-0adb00ca037d3e9083e8bf8201db00ed.exploit-server.net/exploit"

        }
    ]
}

5) change the kid parameter to that of the jwk; change the payload to admin claim

6) sent the request to /admin/delete?username=carlos

*/