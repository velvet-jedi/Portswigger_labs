/*


1) user regularly visits the site's home page. 

2) poison the cache with a response that executes alert(1) for users session in browser

3) GET / 

// Cache-Control: max-age=30
// Age: 16
// X-Cache: hit
// Cookie: session=[session_cookie]; fehost=prod-cache-01

// refreshing within 30 s gets a hit on X-Cache
// during testing it needs 30s to reflect changes

4) in the response we can see,

<script>
    data = {
        "host":"0afb000b03c2e3e5809e8f2d0041005b.web-security-academy.net",
        "path":"/",
        "frontend":"prod-cache-01"
        }
</script>

5) our cookie gets into a js object
// 


6) "-alert(1)-"



*/