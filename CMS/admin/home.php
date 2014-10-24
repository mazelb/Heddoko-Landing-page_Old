<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Home Admin Page</title>
<?php include 'menu_header.php';  ?>
    </head>
    
    <body>
    &nbsp;</br>
&nbsp;</br>
<div style="width: 100%;">
 <div style="float: left; width: 50%;">
<?php
 include 'connect_to_database.php';
$currentHeader="SELECT * From Home";
$currentHeaderResults = mysql_query($currentHeader);

	echo "<table border='1'> <tr> <th colspan='2'> <h3>Current Order </h3> </th> </tr>";
	echo "<tr> <td> Header </td> <td> Content  </td> </tr>";
while ($showHeader = mysql_fetch_array($currentHeaderResults))
 {
	echo "<tr><td>Header 1</td><td>".$showHeader['h1']."</td></tr>";
	echo "<tr><td>Header 2, Part 1 (different Color)</td><td>".$showHeader['h2P1']."</td></tr>";
	echo "<tr><td>Header 2, Part 2</td><td>".$showHeader['h2P2']."</td></tr>";
	echo "<tr><td>Header 3 Line 1</td><td>".$showHeader['h3Line1']."</td></tr>";
	echo "<tr><td>header 3 Line 2</td><td>".$showHeader['h3Line2']."</td></tr>";
	echo "<tr><td>Background class image </td><td>".$showHeader['background']."</td></tr>";
}
	echo "</table>";
?>
 </div>

<div style="float: left; width: 50%;">

<form name="home1" action="home.php" method="post">
<h3> Update Home Headlines</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td>h1 Headline 1 (Max. 30 Characters) : </td><td> <input type="text" name="h1tag"><br></td></tr>
<tr><td>h2 Headline 2 part 1(Max. 30 Characters) :</td> <td><input type="text" name="h2P1tag"><br><td></tr>
<tr><td>h3 Headline 2 Part 2 (Max. 30 Characters):</td> <td><input type="text" name="h2P2tag" ><br><td></tr>
<tr><td>h2 Headline 3 Line1(Max. 55 Characters) :</td> <td><input type="text" name="h3L1tag"><br><td></tr>
<tr><td>h3 Headline 3 Line 2 (Max. 55 Characters):</td> <td><input type="text" name="h3L2tag" ><br><td></tr>
<tr><td>Background Image: </td><td><input type="text" name="home_bcg" ><br></td></tr>

<tr><td><input class="button1" type="submit" value="Update"><br></td></tr>
</form>	
</table>
</div>
 <br style="clear: left;" />
</div>
<?php	
include 'connect_to_database.php'; //connect to DB
$link3=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$link3) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($link3,$db_name)or die(mysql_error()) ;

		


	if ($_POST['h1tag']){	
	mysqli_query($link3, "Update Home SET h1= ('{$_POST['h1tag']}') "); 
	echo "Home Headline  has been Updated... SUCCESS </br>";
	}
		if ($_POST['h2P1tag']){	
	mysqli_query($link3, "Update Home SET h2P1= ('{$_POST['h2P1tag']}') "); 
	echo "Home Headline  has been Updated... SUCCESS </br>";
	}
			if ($_POST['h2P2tag']){	
	mysqli_query($link3, "Update Home SET h2P2= ('{$_POST['h2P2tag']}') "); 
	echo "Home Headline  has been Updated... SUCCESS </br>";
	}
		if ($_POST['h3L1tag']){	
	mysqli_query($link3, "Update Home SET h3Line1= ('{$_POST['h3L1tag']}') "); 
	echo "Home Headline  has been Updated... SUCCESS </br>";
	}
			if ($_POST['h3L2tag']){	
	mysqli_query($link3, "Update Home SET h3Line2= ('{$_POST['h3L2tag']}') "); 
	echo "Home Headline  has been Updated... SUCCESS </br>";
	}
	


	
	mysqli_close($link3);
	?>

</body>
</html>