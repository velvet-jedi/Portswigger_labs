<?php

$value1 = 5;
$value2 = "5 of something";

if ($value1 == $value2) {
    echo "Equal\n";
} else {
    echo "Not Equal\n";
}


$value3 = "53 of something";

if ($value1 == $value3) {
    echo "Equal\n";
} else {
    echo "Not Equal\n";
}

/*
----------------------------------
    Output in case of php 7
----------------------------------
Equal 
Not Equal

----------------------------------
    Output in case of php 8
----------------------------------
Not Equal 
Not Equal

*/
?>