/*

1) View a blog post and look at the page source

2) The back to blog button
<a href='#' 
onclick='returnUrl = /url=(https?:\/\/.+)/.exec(location); 
    location.href = returnUrl ? returnUrl[1] : "/"'>Back to Blog
</a>

// location is an object in JavaScript that represents the current URL of the web page
// Back to blog button is a link that does redirection when clicked
// looks for in the URL that has a 'url=' present in it and 
// sets the part that follows it value to returnUrl.

--------------------------------
if the test case was 'xxxxxxx_url=http://exploit_server.com,
then returnUrl[1] would be http://exploit_server.com

The indexing (returnUrl[0] or returnUrl[1]) is used to access the 
results of the regular expression match. When you use the 
.exec() method with a regular expression in JavaScript, 
it returns an array where:

returnUrl[0] contains the entire matched string.
returnUrl[1], returnUrl[2], etc., contain the captured groups 
(if any) within parentheses in the regular expression pattern.
--------------------------------
// The result is stored in the returnUrl variable which is assigned to locatio.href
// causing the redirection


// if returnUrl is not null, 
// when the "Back to Blog" link is clicked, the JavaScript code attempts 
// to extract a URL from the location URL using a regular expression. 
// If a URL is found, it redirects the user to that URL. 
// If no URL is found, it redirects to the homepage ("/")


https://0aed00270466ba7083127f19000c0019.web-security-academy.net/post?postId=7&url=https://exploit-0a790023048dbada83d17edf01620025.exploit-server.net/exploit

*/