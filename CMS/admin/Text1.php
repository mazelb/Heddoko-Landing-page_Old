<?php
include 'connect_to_database.php';

$dbh=mysql_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
	if (!$dbh) {
    die('Could not connect: ' . mysql_error());
	}
mysql_select_db($db_name,$dbh);



$stmt = $dbh->prepare("SELECT * FROM Users where username = ? AND password=?");
$stmt->bind_param('ss', $username,$password );
$stmt->execute();	
 
	
	
	 while ($row = $stmt->fetch()) {
    print_r($row);
  }

 
?>