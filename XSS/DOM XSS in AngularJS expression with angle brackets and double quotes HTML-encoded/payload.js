/*
{{ $eval.constructor('alert(1)')() }}

*/

/*
why does this payload work??

we have access to props, and functions that are defined within controller scope
and we have control over them. We can use one of them, attching a constructor function 
to them that initiates the alert function call

But how to know which ones they are?
    hit and trial using console
        let scope = angular.element(document.getElementById('test')).scope();
        scope;

$eval is such a function

*/