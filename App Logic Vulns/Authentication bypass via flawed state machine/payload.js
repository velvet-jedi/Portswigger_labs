/*

sequence 

1) GET /login HTTP/2
2) POST /login HTTP/2
   username=wiener&password=peter
3) GET /role-selector HTTP/2
4) POST /role-selector HTTP/2
   role=content-author or user
5) GET / HTTP/2           //homepage after successful login


//what if we skip the steps 3 and 4 to assign no role to wiener 
    drop the request to GET /role-selector

// head to my-account 
we are defaulted to admin



*/