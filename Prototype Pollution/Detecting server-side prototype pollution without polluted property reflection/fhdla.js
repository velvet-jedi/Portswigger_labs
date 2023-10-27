/*

polluting Object.prototype in a way that triggers a noticeable but non-destructive
 change in the server's behavior

 You can log in to your own account with the following credentials: wiener:peter 

1) POST /my-account/change-address HTTP/2

{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"M0XFxhzYxlBGTJrLHMZRvDNTpehwy9eo"
}

2) POST /my-account/change-address HTTP/2

{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"M0XFxhzYxlBGTJrLHMZRvDNTpehwy9eo",
}
// response
{
    "username":"wiener",
    "firstname":"Peter",
    "lastname":"Wiener",
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "isAdmin":false
}

3)  if you change the session_id, we get the error
// {"message":"User not found for session id 0XFxhzYxlBGTJrLHMZRvDNTpehwy9eo."}
// can we pollute the message property?

4) 

{
    "address_line_1":"Wiener HQ","address_line_2":"One Wiener Way","city":"Wienerville","postcode":"BU1 1RP","country":"UK","sessionId":"myH4Bpic2ppzEYKA2mUXPqmPfW0PCDiH",
"role":"+AGYAbwBv-"}

{"username":"wiener","firstname":"Peter","lastname":"Wiener","address_line_1":"Wiener HQ","address_line_2":"One Wiener Way","city":"Wienerville","postcode":"BU1 1RP","country":"UK","role":"+AGYAbwBv-","isAdmin":false}


*/