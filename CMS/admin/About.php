<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>About Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">logout</a> </h3> 
    </head>



<body>

<form name="about1" action="About.php" method="post">
<h3> Update Section Description </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td>Description (250 chracters max): </td><td> <input type="text" size="50" maxlength="250" name="aboutDesc"><br></td></tr>
<tr></tr>
<tr><td><h3> Update Feautured Video </h3></td></tr>
<tr><td>Video Link:</td> <td><input type="text" name="videoLink"><br><td></tr>


<tr><td><input class="button1" type="submit" value="Update"><br></td></tr>
</form>	
</table>



<?php		
include 'connect_to_database.php'; //connect to DB
$connectAbout=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectAbout) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectAbout,$db_name)or die(mysql_error()) ;




	if ($_POST['aboutDesc']){	
     
    mysqli_query($connectAbout,"Update About SET Description= ('{$_POST['aboutDesc']}')") ;   
	echo "About Description  has been Updated... SUCCESS </br>";
	}
	
	if ($_POST['videoLink']){	
     
      mysqli_query($connectAbout, "Update About SET Video= ('{$_POST['videoLink']}')      ");
		echo "Video Link has been Updated... SUCCESS </br>";
}

	
	mysqli_close($connectAbout);
	?>

</body>
</html>