<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Users Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">logout</a> </h3> 
    </head>


<body>

<form name="users1" action="users.php" method="post">
<h3> Add a New User</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td>username: </td><td> <input type="text" name="userID"><br></td></tr>
<tr><td>Password:</td> <td><input type="password" name="pass1"><br><td></tr>
<tr><td>Retype Password: </td><td><input type="password" name="pass2"><br></td></tr>
<tr><td><input class="button1" type="submit" value="Add"><br></td></tr>
</form>	
</table>

==============

<h3> Update a Users password </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="users2" action="users.php" method="post">
<tr><td>Users Item: </td><td><select name='usersNameUpdate'><?php

include 'connect_to_database.php'; //connect to DB

$sql ="SELECT username FROM Users ";
$result = mysql_query($sql);


while ($row = mysql_fetch_array($result)) {
    echo "<option value='" . $row['username'] . "'>" . $row['username'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>New password: </td><td><input type="password" name="updatePass1"><br></td></tr>
<tr><td>Retype New password: </td><td><input type="password" name="updatePass2"><br></td></tr>
<tr><td><input class="button1" type= "submit" value="Update"><br></td></tr>
</form>	
</table>
====================
<h3> Delete a User </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="users3" action="users.php" method="post" onSubmit="return confirm('Delete User Account?')">
<tr><td>Users Item: </td><td><select name='userRemove'><?php

include 'connect_to_database.php'; //connect to DB

$sql1 ="SELECT username FROM Users ";
$result1 = mysql_query($sql1);


while ($row1 = mysql_fetch_array($result1)) {
    echo "<option value='" . $row1['username'] . "'>" . $row1['username'] . "</option>";
  
}


?></select><br></td></tr>

<tr><td><input class="button1"  type="submit" value="Delete"><br></td></tr>
</form>	
</table>


<?php	
include 'connect_to_database.php'; //connect to DB
$connectUser=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectUser) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectUser,$db_name)or die(mysql_error()) ;

$username = $_POST["userID"];
$password = $_POST["pass1"];
$password2 = $_POST["pass2"];
$updatePassword = $_POST["updatePass1"];
$updatePassword2 = $_POST["updatePass2"];
		
	if ($_POST['userID']){	
		if ($password==$password2)
		{
			$password = md5($password);
$sqlconnectUser = "INSERT INTO Users (username, password) VALUES (?, ?)";
$stmt = $connectUser->prepare($sqlconnectUser);
 
$stmt->bind_param('ss', $username,$password );
$stmt->execute();	
$stmt->close();		
echo "A new user has been added... SUCCESS </br>";			
			
}
else {echo "<script type='text/javascript'>alert('ERROR.. Password did not MATCH .. Please Retype');</script>";}
}
	

	if ($_POST['usersNameUpdate']){	
		if ($updatePassword==$updatePassword2){
			$updatePassword = md5($updatePassword);
			
			
//	mysqli_query($connectUser, "Update Users SET password= '{$updatePass21}' WHERE username= '{$_POST['usersNameUpdate']}'  ");
	$updateConnectUser = "Update Users SET password= ? WHERE username= '{$_POST['usersNameUpdate']}'";
$stmt2 = $connectUser->prepare($updateConnectUser);
 
$stmt2->bind_param('s', $updatePassword );
$stmt2->execute();	
$stmt2->close();			
	
	
	echo "Password has been Updated... SUCCESS </br>";
}
else {echo "<script type='text/javascript'>alert('ERROR.. Password did not MATCH .. Please Retype');</script>";}
}


	
		if ($_POST['userRemove']){	
	mysqli_query($connectUser,"DELETE FROM Users  WHERE  username='{$_POST['userRemove']}' ");
	echo "Users ID has been DELETED Succusfully...</br>";
	}
	
	mysqli_close($connectUser);
	?>
	

	

</body>
</html>