/*


//productId from URLparameter from window.location.search as source
var stores = ["London","Paris","Milan"];
var store = (new URLSearchParams(window.location.search)).get('storeId'); 
//looking at the URL we find a productId thers no storeId
//we need to add the storeId parameter first in the URL
//it will appear as a dropdown option

&storeId=HAHAHA

&storeId=HAHAHA" <script>alert(1)</script>

//dropdown store selection
//we need to break out of this select element

document.write('<select name="storeId">'); 
if(store) { 
    document.write('<option selected>'+store+'</option>'); 
} 
for(var i=0;i<stores.length;i++) { 
    if(stores[i] === store) 
    { 
        continue; 
    } 
    document.write('<option>'+stores[i]+'</option>'); 
} 
document.write('</select>'); 
*/

/*
an array called stores with three elements: "London", "Paris", and "Milan".

retrieves the value of the query parameter storeId from current URL from URLSearchParams 
    object and stores it in the store variable.

document.write to dynamically generate an HTML <select> element with the name "storeId".

checks if the store variable has a value (i.e., if storeId is present in the URL).

If yes, it writes an HTML <option> element with the value of store and the 
    "selected" attribute, indicating that it should be the default selected option in the dropdown.

loops through each element in the stores array using a for loop.

Inside the loop, checks if the current element (stores[i]) is equal to 
the store variable.

If equal, it skips the current iteration using continue,

If the current element is not equal to store, it writes an HTML <option> 
element with the value of stores[i].

Finally, it writes the closing </select> tag to complete the <select> element.
*/