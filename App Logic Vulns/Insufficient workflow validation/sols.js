/*

there are a bunch of steps to a successful order.

1) GET /cart HTTP/2     //getting the cart value (initially 0)
2) GET /product?productId=2 HTTP/2    //this is a product of 42$    //credit limit is 100$  //viewing a product
3) POST /cart HTTP/2
   productId=1&redir=PRODUCT&quantity=1    //this is the jacket 1337$ that needs to be bought
4) POST /cart/checkout HTTP/2
5) GET /cart/order-confirmation?order-confirmed=true HTTP/2
   
add the jacket to cart from step 3) then directly go to step 5) 
*/