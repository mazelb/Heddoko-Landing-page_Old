<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Contact Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">Logout</a> </h3> 
    </head>



<body>
<div style="width: 100%;">
 <div style="float: left; width: 50%;">
<?php
 include 'connect_to_database.php';
$currentContact="SELECT * From Contact";
$currentContactResults = mysql_query($currentContact);

	echo "<table border='1'> <tr> <th colspan='2'> <h3>Current Contact Info </h3> </th> </tr>";
	echo "<tr> <td> Type </td> <td> Content  </td> </tr>";
while ($showContact = mysql_fetch_array($currentContactResults))
 {
	echo "<tr><td>Header Message </td><td>".$showContact['HeaderMessage']."</td></tr>";
	echo "<tr><td>Phone</td><td>".$showContact['Phone']."</td></tr>";
	echo "<tr><td>E-mail</td><td>".$showContact['Email']."</td></tr>";
	echo "<tr><td>Address</td><td>".$showContact['Address']."</td></tr>";

}
	echo "</table>";
?>
 </div>

<div style="float: left; width: 50%;">

<form name="contact1" action="Contact.php" method="post">
<h3> Update Contact Info</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td> Contact Message (Max. 100 Characters) : </td><td> <input type="text" name="contactMessage" maxlength="100"><br></td></tr>
<tr><td> Phone  :</td> <td><input type="text" name="phoneContact"><br><td></tr>
<tr><td> E-mail:</td> <td><input type="text" name="emailContact" ><br><td></tr>
<tr><td> Address :</td> <td><input type="text" name="addContact"><br><td></tr>


<tr><td><input class="button1" type="submit" value="Update"><br></td></tr>
</form>	
</table>
</div>
 <br style="clear: left;" />
</div>
<?php	
include 'connect_to_database.php'; //connect to DB
$contactLink=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$contactLink) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($contactLink,$db_name)or die(mysql_error()) ;

		


	if ($_POST['contactMessage']){	
	mysqli_query($contactLink, "Update Contact SET HeaderMessage= ('{$_POST['contactMessage']}') "); 
	echo "Contact Info has been Updated... SUCCESS </br>";
	}
		if ($_POST['phoneContact']){	
	mysqli_query($contactLink, "Update Contact SET Phone= ('{$_POST['phoneContact']}') "); 
	echo "Contact Info has been Updated... SUCCESS </br>";
	}
			if ($_POST['emailContact']){	
	mysqli_query($contactLink, "Update Contact SET Email= ('{$_POST['emailContact']}') "); 
	echo "Contact Info  has been Updated... SUCCESS </br>";
	}
		if ($_POST['addContact']){	
	mysqli_query($contactLink, "Update Contact SET Address= ('{$_POST['addContact']}') "); 
	echo "Contact Info has been Updated... SUCCESS </br>";
	}
	


	
	mysqli_close($contactLink);
	?>
	

</body>
</html>