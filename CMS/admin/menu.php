<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Menu Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">logout</a> </h3> 
    </head>



<body>
<form name="menu1" action="menu.php" method="post">
<h3> Add a New Menu Item</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td>ID (ex. teammenu) </td><td> <input type="text" name="menuID"><br></td></tr>
<tr><td>Name (That will appear on main page):</td> <td><input type="text" name="menuName"><br><td></tr>
<tr><td>Link</td><td><input type="text" name="menuLink"><br></td></tr>
<tr><td>Style(optional)</td><td><input type="text" name="menuStyle"><br></td></tr>
<tr><td><input class="button1" type="submit" value="Submit"><br></td></tr>
</form>	
</table>

==============

<h3> Update a Menu Item </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="menu2" action="menu.php" method="post">
<tr><td>Menu Item: </td><td><select name='menuNameUpdate'>
<?php
include 'connect_to_database.php'; //connect to DB
$sqlMenu ="SELECT Name FROM Menu ";
$resultMenu = mysql_query($sqlMenu);
while ($rowMenu = mysql_fetch_array($resultMenu)) {
    echo "<option value='" . $rowMenu['Name'] . "'>" . $rowMenu['Name'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>Menu Item Name: </td><td><input type="text" name="menuNewName"><br></td></tr>
<tr><td>Menu Item ID: </td><td><input type="text" name="menuIDUpdate"><br></td></tr>
<tr><td>Menu item Link: </td><td><input type="text" name="menuLinkUpdate"><br></td></tr>
<tr><td>Menu item Style(Optional): </td><td><input type="text" name="menuStyleUpdate"><br></td></tr>
<tr><td><input class="button1" type="submit" value="Update"><br></td></tr>
</form>	
</table>
====================
<h3> Delete a Menu Item </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="menu3" action="menu.php" method="post" onSubmit="return confirm('Delete Menu Item?')">
<tr><td>Menu Item: </td><td><select name='menuRemove'>
<?php
include 'connect_to_database.php'; //connect to DB
$sqlMenu1 ="SELECT Name FROM Menu ";
$resultMenu1 = mysql_query($sqlMenu1);
while ($rowMenu1 = mysql_fetch_array($resultMenu1)) {
    echo "<option value='" . $rowMenu1['Name'] . "'>" . $rowMenu1['Name'] . "</option>";
  }

?></select><br></td></tr>

<tr><td><input class="button1" type="submit" value="Delete" ><br></td></tr>
</form>	
</table>


<?php	
include 'connect_to_database.php'; //connect to DB
$connectMenu=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectMenu) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectMenu,$db_name)or die(mysql_error()) ;
		
	if ($_POST['menuID']){	
	mysqli_query($connectMenu, "INSERT INTO Menu (idMenu, Name, link, style) VALUES ('{$_POST['menuID']}', '{$_POST['menuName']}', '{$_POST['menuLink']}', '{$_POST['menuStyle']}') ");
}
	
	if ($_POST['menuNewName']){			
	mysqli_query($connectMenu,"UPDATE  Menu SET Name= '{$_POST['menuNewName']}' WHERE  Name='{$_POST['menuNameUpdate']}' "); 
	echo "Menu Name tag has been UPDATED Succusfully...</br>";
	}
	
	if ($_POST['menuLinkUpdate']){			
	mysqli_query($connectMenu,"UPDATE  Menu SET Link= '{$_POST['menuLinkUpdate']}' WHERE  Name='{$_POST['menuNameUpdate']}' "); 
	echo "Menu tag Link has been UPDATED Succusfully...</br>";
	}
	
	if ($_POST['menuIDUpdate']){	
	mysqli_query($connectMenu,"UPDATE  Menu SET menuID= '{$_POST['menuIDUpdate']}' WHERE  Name='{$_POST['menuNameUpdate']}' ");
	echo "Menu ID has been UPDATED Succusfully...</br>";
	}
	
		if ($_POST['menuStyleUpdate']){	
	mysqli_query($connectMenu,"UPDATE  Menu SET style= '{$_POST['menuStyleUpdate']}' WHERE  Name='{$_POST['menuNameUpdate']}' ");
	echo "Menu Style has been UPDATED Succusfully...</br>";
	}
	
		if ($_POST['menuRemove']){	
	mysqli_query($connectMenu,"DELETE FROM Menu  WHERE  Name='{$_POST['menuRemove']}' ");
	echo "Menu ID has been DELETED Succusfully...</br>";
	}
	
	mysqli_close($connectMenu);
	?>
	

	

</body>
</html>