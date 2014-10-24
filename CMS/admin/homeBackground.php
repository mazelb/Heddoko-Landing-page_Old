      <?php
include 'connect_to_database.php'; //connect to DB

	
$setHomeMain= "SELECT background  FROM Home ";
$setHomeMainResults = mysql_query($setHomeMain);

$homeBGrow = mysql_fetch_array($setHomeMainResults);




?>