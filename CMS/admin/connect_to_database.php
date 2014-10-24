<?php


$db_host='mysql.2freehosting.com'; //enter db host
$db_name='u618879135_mazen'; //enter db name
$db_username='u618879135_mazen';  //enter db username
$db_password='Heddoko'; //enter db password


$connect1=mysql_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
	if (!$connect1) {
    die('Could not connect: ' . mysql_error());
	}
mysql_select_db($db_name,$connect1);
?> 