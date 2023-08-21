/*

1) send the request to / to the repeater
//to warm the connection

2) send the POST /cart/checkout HTTP/2 to repeater

3) send the POST /cart HTTP/2 for a gift card to repeater
//this will tell the app that our transaction is valid as cost < credit
//keep the cheap gift card in the cart
//change the is from product id from '2' to '1'

4) Add 1,2,3 to a group and send in parallel
//to solve the lab you are to be in a cycle where you align the collision time
//by sending requests again and again first in sequence then in parallel 
//to a point where you solve the lab right after removing the jackets from the cart
//and adding the 10$ gift card (the affordable item back in the cart)
*/