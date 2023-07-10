/*

new customers means never bought something b4
can use NEWCUST5 code
how about I keep using this code again and again and refresh my cart 
but not checkout until cart value comes down under 100$     //DIDNT work


STEPS:

1) POST cart        //Visit the product page and add to cart
2) GET cart         //Visit the cart 
3) apply coupon     // coupon can only be used once, the validation is at the POST coupon endpoint itself
4) another coupon recieved upon signup for newsletter

5) alternate between the 2 again and again till the product becomes affordable 
(2 coupons sholnt be applicable together, that too repeatedly alternating
    (app check only the latest coupon applied)


*/