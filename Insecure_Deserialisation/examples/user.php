<?php
 class User{
 	public $username;
 	public $status;
 }
 $user = new User;
 $user->username = 'User_CHAP';
 $user->status = 'not admin';
 $serialized_string = serialize($user);
 $unserialized_data = unserialize($serialized_string);
 var_dump($unserialized_data);
 var_dump($unserialized_data->status);
?>