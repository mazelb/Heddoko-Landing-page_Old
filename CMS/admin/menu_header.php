&nbsp; </br>
<a class="button" href="users.php"  >Users</a><a href="menu.php" class="button" >Menu</a><a href="home.php" class="button" >Home</a><a href="index.php" class="button" >Sections</a></br>
</br>
</br>
<?php 
include 'connect_to_database.php'; //connect the connection page
$getMenuSection="select Name FROM Sections";
$getMenuResult = mysql_query($getMenuSection);

while ($setMenuitem = mysql_fetch_array($getMenuResult)) {
    echo "<a class='button' href=".$setMenuitem['Name'].".php  >".$setMenuitem['Name']."</a>" ;
  
}


?>