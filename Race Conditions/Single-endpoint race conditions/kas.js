/*

1) send two requests for mail change
//found out only the latest email-update link works


2) POST /my-account/change-email HTTP/2
//send to repeater 3-4 times
//set the email to testN.....
//send in parallel (single packet) to test if race window is present
//we see in the email client window that the email address of someone 
    can receive some other's reset link


3) craft your attack
// POST /my-account/change-email HTTP/2
   email=carlos@ginandjuice.shop           //in one request 

// POST /my-account/change-email HTTP/2
   email=testN.....           //in other request 

   we want the desired email to be in a valid email link (latest one in the email inbox)

//send in parallel (single packet)



*/