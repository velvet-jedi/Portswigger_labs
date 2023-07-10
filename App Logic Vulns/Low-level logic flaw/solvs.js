/*  





1)  POST /cart HTTP/2
    productId=1&redir=PRODUCT&quantity=-1   //this is valid only when quantity in cart is >0


2)  so, negative quantity in cart is not possible (lower limit in quantity to add in cart)

3)  in one go you can only add 99 quantities of an item to cart (upper limit)
    and total cart value can't be negative

4) BUT theres only so much a variable can store
    lets push through intruder to see how much items can the cart handle
    POST /cart HTTP/2
    productId=1&redir=PRODUCT&quantity=99            //increment by 99 

    //payload settings : continue indef ; type: null payloads

    at a point the cart value become negative that means the variable starts from the most negative
     value now

     lets add another product to cart to make total cart value between (0,100]  

5) 2147483647 is the largest number that can be stored in a variabl (INT_MAX)
   
-2147483647 goal total
16061 jackets
162 Cycles of 99 increments

2144280600

162 Cycles of 99 increments + 24 jackets = 16062 jackets
21474894.00

323*99*1337=42753249.00
4275324900-2147483647=2127841253

2127841253-2147483647=−196423.94

-196423.94/1337 = −146.9139416604

−147+99=-48
323 cycles 
then 47 jackets more

6) check a product and then calculate the times it shuold be added to the cart 


// we cycle through 162 times to get to the negative total...but can't checkout due to validation
// We take one more round of 161 times coz it's a cycle...to see how close we come to the affordable range.... 
    AND A LOT OF + -
// we add some other items...to fall in that range

*/