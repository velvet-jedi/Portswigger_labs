/*

1) see the chat messages traffic through burp websocket history

2) intercept and modify the message in repeater to below:   

{
    "message":<img src=1 onerror='alert(1)'>
}

3) send and check in browser the alert pop up

*/