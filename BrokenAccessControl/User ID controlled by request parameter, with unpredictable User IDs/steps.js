/*
logging in doesnt redirect to my account instead again leads to login page

click on my account to reveal the UID parameter and then the API key
1) GET /my-account?id=583b41fc-d044-4569-bf52-f8a6d48f7aac
wiener API key Nlm2KGWFZSwk0LU80E1EX8DpAtZGJaTR

2) find a post by carlos
GET /post?postId=3 HTTP/2

<a href='/blogs?userId=1a1c0616-d62b-43d9-b27e-858c71fc74d0'>carlos</a>  //revealed in post source

3) GET /my-account?id=1a1c0616-d62b-43d9-b27e-858c71fc74d0 HTTP/2
replace GUIDs

*/