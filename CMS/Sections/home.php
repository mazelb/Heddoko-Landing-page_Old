          <!-- main content -->
           <div class="opacy">
           
           
             <div class="container">
                 <div class="row-fluid"> 

                  <div class="home">

      
                    <h2></h2>
                   <div class="logo" style="padding-top: 40px;">
                      <a href="#" class="logo-link animated fadeInDown delay1">
                          <img src="img/logo-heddoko.png" alt="[Logo] Heddoko">
                      </a>
                    </div> 
                    <?php
include 'admin/connect_to_database.php'; //connect to DB
$homeLink=mysqli_connect($db_host,$db_username,$db_password) or die(mysql_error()); 
if (!$homeLink) {
    die('Could not connect: ' . mysql_error());
	}
mysqli_select_db($homeLink,$db_name)or die(mysql_error()) ;
	
$setHome= "SELECT * FROM Home  ";
$setHomeResults = mysqli_query($homeLink,$setHome);
while($setHome = $setHomeResults ->fetch_array()) {
//  echo " <h1 class='animated fadeInDown delay1' style='margin-top: 30px; color: #25d990;'>".$setHome['h1']."</h1>";
  echo " <h2 class='animated fadeInDown delay2' style='margin-top: 30px;'><span>".$setHome['h2P1']."</span>".$setHome['h2P2']."</h2>";
  echo " <h3 class='animated fadeInDown delay3' style='margin-top: 20px; margin-bottom: 80px; color: #25d990;'>" .$setHome['h3Line1']."</br>".$setHome['h3Line2']. "</h3>";
}
mysqli_close($homeLink);

?>
                    

    
                    
                    <div id="signup" class="container center animated fadeInDown delay3">
                      <div class="row">                      
                        <h2 style="margin-top: 30px;">Sign Up </p>
                        <h3>Be the first to get Heddoko Updates And Exclusive Access to Launch Discounts</h3>                      
                          <div id="cta_footer" class="row">
                            <div class="col-sm-2">&nbsp;</div>
                            <div class="col-sm-8"> 
                              <div id="mc_embed_signup" class="animated fadeInDown mc_embed_signup-class">
                                <form action="//heddoko.us8.list-manage.com/subscribe/post-json?u=4752cc710a498b9b75d697500&amp;id=b22a426cab&c=?" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
                                    <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="EMAIL" class="form-control mce-EMAIL-class" required>
                                    <div style="position: absolute; left: -5000px;"><input type="text" name="b_4752cc710a498b9b75d697500_b22a426cab" tabindex="-1" value=""></div>
                                    <input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe"  class="btn btn-primary mc-embedded-subscribe-class">
                                </form>
                                <div id="thankyoudiv" class="thankyoudiv_class"><h3>Thank You !</h3></div>      
                          </div>
                            </div>
                            <div class="col-sm-2">&nbsp;</div>
                          </div>                        
                        </div>
                      </div>
                    </div>


                    
                  </div>
               </div>
           </div>
            </div> 
          <!-- end main content -->