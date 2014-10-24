<?php

include 'session_header.php'; //start session

?>
<!doctype html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<link rel="stylesheet" type"text/css" href="heddoko_admin.css">
<title>Index</title>
<?php include 'menu_header.php'; ?>
<h3 align="right"> Welcome <?php echo $_SESSION['username']; ?>, <a href="logout.php">Logout</a> </h3> 
    </head>
<body>

<form name="section1" action="index.php" method="post" enctype="multipart/form-data">
<h3> Add a New Image(background/team member/general images ..etc)</h3>
<table border="0"> <tr> <th>  </th> <th>  </th> </tr>
<tr><td><label for="file">Filename:</label></td><td><input type="file" name="file" id="file"><br></td></tr>
<tr><td><input class="button1" type="submit" value="Add"><br></td></tr>
</form>	
</table>
 
 <?php
$allowedExts = array("gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 20000000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
    }
  else
    {
 

    if (file_exists("/home/u618879135//public_html/heddoko/img/" . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "/home/u618879135/public_html/heddoko/img/" . $_FILES["file"]["name"]);
      
      }
    }
  }
else
  {
  echo "Invalid file</br>";
  }
 ?>
 ===================== </br>

 <div style="width: 100%;">
 <div style="float: left; width: 20%;">
<?php
 include 'connect_to_database.php';
$currentOrder="SELECT Name, secOrder From Sections";
$currentOrderResult = mysql_query($currentOrder);

	echo "<table border='1'> <tr> <th colspan='2'> <h3>Current Order </h3> </th> </tr>";
	echo "<tr> <td> Order </td> <td> Section  </td> </tr>";
while ($showOrder = mysql_fetch_array($currentOrderResult))
 {
	echo "<tr><td>".$showOrder['secOrder']."</td><td>".$showOrder['Name']."</td></tr>";
}
	echo "</table>";
?>
 </div>
<div style="float: left; width: 40%;">
 

<table border="1"> <tr> <th colspan="2">  <h3> Assign new section's Order </h3>  </th> </tr>
<form name="section2" action="index.php" method="post">
<tr><td>Section Name: </td><td><select name='sectionOrderUpdate'><?php

include 'connect_to_database.php' ;

$sqlSection ="SELECT Name FROM Sections ";
$resultSection = mysql_query($sqlSection);


while ($rowSection = mysql_fetch_array($resultSection)) {
    echo "<option value='" . $rowSection['Name'] . "'>" . $rowSection['Name'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>Section Order: </td><td><select name='sectionOrder'><?php
include 'connect_to_database.php';
$loopSelect="SELECT COUNT(idSections) as countSections From Sections";
$loopResult = mysql_query($loopSelect);
while ($loopCount = mysql_fetch_array($loopResult)) {
$sectionsCount= $loopCount['countSections'];
}

 for($i=1;$i<=$sectionsCount;$i++) {
    echo "<option value='". $i ."'>".$i. "</option>";
  
}
?></select><br></td></tr>

<tr><td><input class="button1" type= "submit" value="Assign New Order" colspan="2"><br></td></tr>
</form>	
</table>
 
</div>

<div style="float: left; width: 40%;">
 

<table border="1"> <tr> <th colspan="2">   <h3> Update Section's Info </h3>  </th> </tr>
<form name="section3" action="index.php" method="post">
<tr><td>Section Name: </td><td><select name='sectionNameUpdate'><?php

include 'connect_to_database.php' ;

$sqlSection3 ="SELECT Name FROM Sections ";
$resultSection3 = mysql_query($sqlSection3);


while ($rowSection3 = mysql_fetch_array($resultSection3)) {
    echo "<option value='" . $rowSection3['Name'] . "'>" . $rowSection3['Name'] . "</option>";
  
}


?></select><br></td></tr>
<tr><td>Section ID:</td> <td><input type="text" name="sectionID"><br></td></tr>
<tr><td>Name:</td> <td><input type="text" name="sectionName"><br></td></tr>
<tr><td>Link: </td><td> <input type="text" name="sectionLink"><br></td></tr>
<tr><td>Background:</td> <td><input type="text" name="sectionBackground"><br></td></tr>

<tr><td><input class="button1" type= "submit" value="Update"><br></td></tr>
</form>	
</table>

</div>
 <br style="clear: left;" />
</div>

<?php
include 'connect_to_database.php'; //connect to DB
$connectSection=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$connectSection) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($connectSection,$db_name)or die(mysql_error()) ;

			if ($_POST['sectionOrderUpdate'])
			{	
	mysqli_query($connectSection, "Update Sections SET secOrder= '{$_POST['sectionOrder']}' WHERE Name= '{$_POST['sectionOrderUpdate']}'");
	}

	if ($_POST['sectionNameUpdate']){	
	if ($_POST['sectionID']){		
	mysqli_query($connectSection, "Update Sections SET idSections= '{$_POST['sectionID']}' WHERE Name= '{$_POST['sectionNameUpdate']}'");}
		if ($_POST['sectionName']){	
	mysqli_query($connectSection, "Update Sections SET Name= '{$_POST['sectionName']}' WHERE Name= '{$_POST['sectionNameUpdate']}'");}
		if ($_POST['sectionLink']){	
	mysqli_query($connectSection, "Update Sections SET internalLink= '{$_POST['sectionLink']}' WHERE Name= '{$_POST['sectionNameUpdate']}'");}
		if ($_POST['sectionBackground']){	
	mysqli_query($connectSection, "Update Sections SET background= '{$_POST['sectionBackground']}' WHERE Name= '{$_POST['sectionNameUpdate']}'");}

		echo "Section Info has been Updated... SUCCESS </br>";

}


mysqli_close($connectSection);
?>




 
 


</body>
</html>