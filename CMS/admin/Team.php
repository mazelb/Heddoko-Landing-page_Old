<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Team Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">Logout</a> </h3> 
    </head>



<body>

<form name="team1" action="Team.php" method="post">
<h3> Add a New Team Member</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td>Name: </td><td> <input type="text" name="nameTeam"><br></td></tr>
<tr><td>ID: </td><td> <input type="text" name="teamID"><br></td></tr>
<tr><td>Style: </td><td> <input type="text" name="teamStyle"><br></td></tr>
<tr><td>Title:</td> <td><input type="text" name="titleTeam"><br><td></tr>
<tr><td>in Circle Title(max 50 chracters):</td> <td><input type="text" name="circleTitle" maxlength="50"><br><td></tr>
<tr><td>Bio(max 250 chracters): </td><td><input type="text" name="bioTeam" maxlength="250"><br></td></tr>
<tr><td>Website: </td><td> <input type="text" name="website"><br></td></tr>
<tr><td>Facebook Account:</td> <td><input type="text" name="facebook"><br><td></tr>
<tr><td>Twitter Account: </td><td><input type="text" name="twitter"><br></td></tr>
<tr><td>LinkedIn Account:</td> <td><input type="text" name="linkedin"><br><td></tr>

<tr><td><input class="button1" type="submit" value="Add"><br></td></tr>
</form>	
</table>

==============

<h3> Update a Team Member's Info </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="team2" action="Team.php" method="post">
<tr><td>Team Member Name: </td><td><select name='teamNameUpdate'><?php

include 'connect_to_database.php' ;

$sql ="SELECT Name FROM Team ";
$result = mysql_query($sql);


while ($row = mysql_fetch_array($result)) {
    echo "<option value='" . $row['Name'] . "'>" . $row['Name'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>ID:</td> <td><input type="text" name="teamID1"><br><td></tr>
<tr><td>Style:</td> <td><input type="text" name="teamStyle1"><br><td></tr>
<tr><td>Title:</td> <td><input type="text" name="titleTeam1"><br><td></tr>
<tr><td>in Circle Title (Max 50 chracters:</td> <td><input type="text" name="circleTitle1" maxlength="50"><br><td></tr>
<tr><td>Bio (Max 250 chracters): </td><td><input type="text" name="BioTeam1" maxlength="250"><br></td></tr>
<tr><td>Website: </td><td> <input type="text" name="website1"><br></td></tr>
<tr><td>Facebook Account:</td> <td><input type="text" name="facebook1"><br><td></tr>
<tr><td>Twitter Account: </td><td><input type="text" name="twitter1"><br></td></tr>
<tr><td>LinkedIn Account:</td> <td><input type="text" name="linkedin1"><br><td></tr>


<tr><td><input class="button1" type= "submit" value="Update"><br></td></tr>
</form>	
</table>
====================
<h3> Delete a User </h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="team3" action="Team.php" method="post" onSubmit="return confirm('Delete Team Member?')">
<tr><td>Team Item: </td><td><select name='teamRemove'><?php

include 'connect_to_database.php' ;

$sql1 ="SELECT Name FROM Team ";
$result1 = mysql_query($sql1);


while ($row1 = mysql_fetch_array($result1)) {
    echo "<option value='" . $row1['Name'] . "'>" . $row1['Name'] . "</option>";
  
}


?></select><br></td></tr>


<tr><td><input class="button1"  type="submit" value="Delete"><br></td></tr>

</form>	
</table>


<?php	
include 'connect_to_database.php'; //connect to DB
$connectTeam=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectTeam) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectTeam,$db_name)or die(mysql_error()) ;


		
	if ($_POST['nameTeam']){	
	mysqli_query($connectTeam, "INSERT INTO Team (Name,Title,inCircleTitle, bio, website, facebook, twitter, linkedin,idTeam, styleTeam) VALUES ('{$_POST['nameTeam']}', '{$_POST['titleTeam']}','{$_POST['circleTitle']}','{$_POST['bioTeam']}','{$_POST['website']}','{$_POST['facebook']}','{$_POST['twitter']}','{$_POST['linkedin']}','{$_POST['teamID']}','{$_POST['teamStyle']}')");
	echo "A new Team member has been added... SUCCESS </br>";

//else {echo "<script type='text/javascript'>alert('ERROR.. Password did not MATCH .. Please Retype');</script>";}
}
	

	if ($_POST['teamNameUpdate']){	
	if ($_POST['teamID1']){	
	mysqli_query($connectTeam, "Update Team SET idTeam= '{$_POST['teamID1']}' WHERE Name= '{$_POST['teamNameUpdate']}'"); }
	if ($_POST['teamStyle1']){	
	mysqli_query($connectTeam, "Update Team SET styleTeam= '{$_POST['teamStyle1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");	}	
	if ($_POST['titleTeam1']){	
	mysqli_query($connectTeam, "Update Team SET Title= '{$_POST['titleTeam1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['circleTitle1']){	
	mysqli_query($connectTeam, "Update Team SET inCircleTitle= '{$_POST['circleTitle1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['bioTeam1']){	
	mysqli_query($connectTeam, "Update Team SET bio= '{$_POST['bioTeam1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['website1']){	
	mysqli_query($connectTeam, "Update Team SET website= '{$_POST['website1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['facebook1']){	
	mysqli_query($connectTeam, "Update Team SET facebook= '{$_POST['facebook1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['twitter1']){	
	mysqli_query($connectTeam, "Update Team SET twitter= '{$_POST['twitter1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
	if ($_POST['linkedin1']){	
	mysqli_query($connectTeam, "Update Team SET linkedin= '{$_POST['linkedin1']}' WHERE Name= '{$_POST['teamNameUpdate']}'");}
		echo "Team Member Info has been Updated... SUCCESS </br>";

}


	
		if ($_POST['teamRemove']){	
	mysqli_query($connectTeam,"DELETE FROM Team  WHERE  Name='{$_POST['teamRemove']}' ");
	echo "Team member has been DELETED Succusfully...</br>";
	}
	
	mysqli_close($connectTeam);
	?>
	

	

</body>
</html>