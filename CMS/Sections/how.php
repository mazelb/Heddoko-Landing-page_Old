                  <?php
include 'admin/connect_to_database.php'; //connect to DB
	
$setHow= "SELECT *  FROM How ";
$setHowResults = mysql_query($setHow);

$howShow = mysql_fetch_array($setHowResults);
?>

 <div class="container">
          <div class="row">
            <div class="works">
              <div class="col-md-6"><h2>How</h2></div>
              <div class="col-md-6">
                <p class="left"> <?php echo $howShow['Description'];?></p>
              </div>
            </div>
  
            <div class="clearfix"></div>
  <div class="divider_dark top"></div> 
    
            <!--Carousel-->
            <ul class="ch-grid center">

              <!--Item-->
              
               <?php
include 'admin/connect_to_database.php'; //connect to DB
$howLink=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$howLink) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($howLink,$db_name)or die(mysql_error()) ;
	
$getHow= "SELECT idHow, intTitle, extTitle, image, intDescription  FROM How ORDER BY idHow ASC ";
$getHowResults = mysqli_query($howLink,$getHow);
while($getHow = $getHowResults ->fetch_array()) {
          echo "    <li>";
          echo "     <div class='".$getHow['image']."'>";
           echo"       <div class='ch-info center'>";
          echo "       <h2>".$getHow['intTitle']."</h2>";
           echo"         <div class='divisor'></div>";
            echo"        <p>".$getHow['intDescription']."</p>";
           //         <!-- <a class="fancybox" title="" href="img/lightbox01.jpg">View</a> -->
             echo"     </div>";
             echo"   </div>";
             echo"   <div>";
              echo"    <h2>".$getHow['idHow'].".".$getHow['extTitle']."</h2>";
            //      <h2>And Connect</h2>
           echo"     </div>";
         echo"     </li>";
          }
          mysqli_close($howLink);
          ?>
              <!--Item-->

            
              
            </ul>
            <!--Carousel-->

          </div>
        </div>
        <!-- end container -->