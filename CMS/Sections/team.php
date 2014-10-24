  
        <div class="pattern_bottom"></div>

             <div class="opacy_02">
               <div class="container">
                <div class="row">
                <div class="about">
                  <h2>The Team</h2>
                </div>


                <div class="clearfix"></div>
                <div class="divider_light line"></div>

                <!--Carousel-->
                <ul class="ch-grid center">

                  <!--Item-->
                  <?php
include 'admin/connect_to_database.php'; //connect to DB
$teamLink=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$teamLink) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($teamLink,$db_name)or die(mysql_error()) ;
	
$setTeam= "SELECT *  FROM Team ";
$setTeamResults = mysqli_query($teamLink,$setTeam);
while($setTeam = $setTeamResults ->fetch_array()) {
            echo    " <li>";
              echo  "    <div class='".$setTeam['styleTeam']."'>";
              echo"  <div class='ch-info center'>";
               echo " <h2>".$setTeam['Name']."</h2>"; 
                echo "<div class='divisor'></div>";
                    echo " <p>".$setTeam['inCircleTitle']."</p>";
                      echo "  <a class='fancybox' title=' ' href='#".$setTeam['idTeam']."'>Read More</a>";
             echo "  <div style='display:none;'><div id='".$setTeam['idTeam']."' style='width: 400px;'>".$setTeam['bio']."</div></div>";
                        echo "      </div>";
             echo "   </div> ";
             echo "   <div> ";
             echo " <h2>".$setTeam['Name']."</h2>"; 
             echo "  <h2>".$setTeam['Title']."</h2>";
             echo "  <div class='social_icon_sm'> ";
             if ($setTeam['website'] != NULL) {
             echo "  <a href=".$setTeam['website']." class='tooltip_hover' title='Homepage Tooltip' target='_blank'><i class='fa fa-home'></i></a>" ;}
              if ($setTeam['linkedin'] !=NULL) {
             echo "  <a href=".$setTeam['linkedin']. " class='tooltip_hover' title='Linkedin Tooltip' target='_blank'><i class='fa fa-linkedin'></i></a>" ;}
               if ($setTeam['twitter'] !=NULL) {
             echo "   <a href=".$setTeam['twitter']." class='tooltip_hover' title='Twiiter Tooltip' target='_blank'><i class='fa fa-twitter'></i></a>" ;}
               if ($setTeam['facebook'] !=NULL) {
             echo "   <a href=".$setTeam['facebook']." class='tooltip_hover'title='Facebook Tooltip' target='_blank'><i class='fa fa-facebook'></i></a>" ;}
             echo "          </div> ";
             echo "        </div> ";
             echo "      </li>      ";    
}


mysqli_close($teamLink);

?>
             

                </ul>
                <!--Carousel-->     

                <div class="clearfix"></div>
                <div class="divider_light line display"></div>
                
              </div>
            </div>
          </div>
        <div class="pattern_top"></div>