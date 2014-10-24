<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>How It Works Admin Page</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">Logout</a> </h3> 
    </head>



<body>

 <div style="width: 100%;">
 <div style="float: left; width: 60%;">

<?php
 include 'connect_to_database.php';
$currentHowDesc="SELECT Description  From How LIMIT 1";
$currentHowResultsDesc = mysql_query($currentHowDesc);

	echo "<table border='1'> <tr> <th colspan='2'> <h3>Current Description </h3> </th> </tr>";
while ($showHowDesc = mysql_fetch_array($currentHowResultsDesc))
 {
	echo "<tr><td>".$showHowDesc['Description']."</td></tr>";
}
	echo "</table>";
?>
</div>

<div style="float: left; width: 40%;">

<table border="1"> <tr> <th colspan="2">   <h3> Update How Description </h3>  </th> </tr>
<form name="how0" action="How.php" method="post">
<tr><td> Description Max. 225 Chracters:</td> <td><input type="text" name="DescriptionHowUpdate" maxlength="225"><br></td></tr>

<tr><td><input class="button1" type= "submit" value="Update Description"><br></td></tr>
</form>	
</table>

</div>
</div>
 <!-- <br style="clear: left;" />
 -->

 <?php
include 'connect_to_database.php'; //connect to DB
$connectHow1=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectHow1) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectHow1,$db_name)or die(mysql_error()) ;

			if ($_POST['DescriptionHowUpdate'])
			{	
	mysqli_query($connectHow1, "Update How SET Description= '{$_POST['DescriptionHowUpdate']}' WHERE idHow= 1");
	echo " Description has been Updated .. Success";
	}
 
 ?>
 
 
 
&nbsp;</br>
&nbsp;</br>
 <div style="width: 100%;">
 <div style="float: left; width: 50%;">
<?php
 include 'connect_to_database.php';
$currentHow="SELECT idHow, extTitle,intTitle, image, intDescription From How";
$currentHowResults = mysql_query($currentHow);

	echo "<table border='1'> <tr> <th colspan='5'> <h3>How it Works Instructions</h3> </th> </tr>";
	echo "<tr> <td> ID </td> <td> External Title  </td><td> In circle Title  </td><td> Image  </td><td> Internal Description  </td> </tr>";
while ($showHow = mysql_fetch_array($currentHowResults))
 {
	echo "<tr><td>".$showHow['idHow']."</td><td>".$showHow['extTitle']."</td><td>".$showHow['intTitle']."</td><td>".$showHow['image']."</td><td>".$showHow['intDescription']."</td></tr>";
}
	echo "</table>";
?>
 </div>

<div style="float: left; width: 25%;">
 

<table border="1"> <tr> <th colspan="2">   <h3> Update How it works Info </h3>  </th> </tr>
<form name="how1" action="How.php" method="post">
<tr><td>Section Name: </td><td><select name='howidUpdate'><?php

include 'connect_to_database.php' ;

$sqlHow1 ="SELECT idHow FROM How ";
$resultHow1 = mysql_query($sqlHow1);


while ($rowHow1 = mysql_fetch_array($resultHow1)) {
    echo "<option value='" . $rowHow1['idHow'] . "'>" . $rowHow1['idHow'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>External Title:</td> <td><input type="text" name="titleExternalHowUpdate"><br></td></tr>
<tr><td>InCircle Title:</td> <td><input type="text" name="inCircleHowUpdate"><br></td></tr>
<tr><td>Image: </td><td> <input type="text" name="imageHowUpdate"><br></td></tr>
<tr><td>interal Description:</td> <td><input type="text" name="intDescriptionHowUpdate"><br></td></tr>

<tr><td><input class="button1" type= "submit" value="Update"><br></td></tr>
</form>	
</table>

</div>
<div style="float: left; width: 25%;">
 

<table border="1"> <tr> <th colspan="2">   <h3> Add How it works item </h3>  </th> </tr>
<form name="how2" action="How.php" method="post">
<tr><td>ID:</td> <td><input type="text" name="idHowAdd"><br></td></tr>
<tr><td>External Title:</td> <td><input type="text" name="titleExternalHowAdd"><br></td></tr>
<tr><td>InCircle Title:</td> <td><input type="text" name="inCircleHowAdd"><br></td></tr>
<tr><td>Image: </td><td> <input type="text" name="imageHowAdd"><br></td></tr>
<tr><td>interal Description:</td> <td><input type="text" name="intDescriptionHowAdd"><br></td></tr>

<tr><td><input class="button1" type= "submit" value="Add"><br></td></tr>
</form>	
</table>
</div>
 </div>
 
 &nbsp;</br>
&nbsp;</br>
 
<h3> Delete a How Item </h3></br>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<form name="how3" action="How.php" method="post" onSubmit="return confirm('Delete How Item?')">
<tr><td>How Item ID: </td><td><select name='howRemove'><?php

include 'connect_to_database.php' ;

$sqlHow3 ="SELECT idHow FROM How ";
$resultHow3 = mysql_query($sqlHow3);


while ($rowHow3 = mysql_fetch_array($resultHow3)) {
    echo "<option value='" . $rowHow3['idHow'] . "'>" . $rowHow3['idHow'] . "</option>";
  
}


?></select><br></td></tr>


<tr><td><input class="button1"  type="submit" value="Delete"><br></td></tr>

</form>	
</table>
 
 
 <?php	
include 'connect_to_database.php'; //connect to DB
$connectHow=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectHow) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectHow,$db_name)or die(mysql_error()) ;


		
	if ($_POST['idHowAdd']){	
	mysqli_query($connectHow, "INSERT INTO How (idHow, extTitle,intTitle, image, intDescription) VALUES ('{$_POST['idHowAdd']}','{$_POST['titleExternalHowAdd']}', '{$_POST['inCircleHowAdd']}','{$_POST['imageHowAdd']}','{$_POST['intDescriptionHowAdd']}')");
	echo "A new How Item has been added... SUCCESS </br>";


}
	

	if ($_POST['howidUpdate']){	
	if ($_POST['titleExternalHowUpdate']){	
	mysqli_query($connectHow, "Update How SET extTitle= '{$_POST['titleExternalHowUpdate']}' WHERE idHow= '{$_POST['howidUpdate']}'"); }
	if ($_POST['inCircleHowUpdate']){	
	mysqli_query($connectHow, "Update How SET intTitle= '{$_POST['inCircleHowUpdate']}' WHERE idHow= '{$_POST['howidUpdate']}'");	}	
	if ($_POST['imageHowUpdate']){	
	mysqli_query($connectHow, "Update How SET image= '{$_POST['imageHowUpdate']}' WHERE idHow= '{$_POST['howidUpdate']}'");}
	if ($_POST['intDescriptionHowUpdate']){	
	mysqli_query($connectHow, "Update How SET intDescription= '{$_POST['intDescriptionHowUpdate']}' WHERE idHow= '{$_POST['howidUpdate']}'");}

		echo "How Info has been Updated... SUCCESS </br>";

}


	
		if ($_POST['howRemove']){	
	mysqli_query($connectHow,"DELETE FROM How  WHERE  idHow='{$_POST['howRemove']}' ");
	echo "How Item has been DELETED Succusfully...</br>";
	}
	
	mysqli_close($connectHow);
	?>
	
 
</body>
</html>