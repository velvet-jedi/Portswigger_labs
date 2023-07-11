/*

MACRO sequence:

1) POST /cart
2) POST /cart/coupon
3) POST /cart/checkout
4) GET /cart/order-confirmation?order-confirmed=true
5) POST /gift-card

configure 4 & 5 to use the same gift card


*/