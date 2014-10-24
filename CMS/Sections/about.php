      <!-- end Home -->

       <!-- About -->
           <?php
include 'admin/connect_to_database.php'; //connect to DB	
$getAbout= "SELECT *  FROM About ";
$getAboutResults = mysql_query($getAbout);
$aboutShow = mysql_fetch_array($getAboutResults);
?>
        <div class="container">
          <div class="row">
            <div class="works">
              <div class="col-md-6"><h2>About</h2></div>
              <div class="col-md-6">
                <p class="left"><?php echo $aboutShow['Description'];?></p>
              </div>
            </div>
  
            <div class="clearfix"></div>
            <div class="divider_dark top" style="margin-bottom: 0px;"></div>
              
            <!-- <div id="background-parallax" class="background-parallax"> -->
            <div class="row">
              <div id="video_1" class="col-md-12 visible-lg visible-md center videoWrapper">
                <iframe src="<?php echo $aboutShow['VideoLink'];?>" width="1024" height="575" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>

              <div id="video_2" class="col-md-12 visible-sm center videoWrapper">
                <iframe src="http://player.vimeo.com/video/100647234" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>

              <div id="video_3" class="col-md-12 visible-xs center videoWrapper">
                <iframe src="http://player.vimeo.com/video/100647234" width="400" height="225" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>             
            </div>

            <div class="clearfix"></div>
            <div class="divider_dark" style="margin-top: 0px;"></div>

            <!-- social -->
            <div class="social">
               <div class="row">
                  <div class="col-md-6 left">
                    <h3><span>Want to know more? </span> follow us on:</h3>
                  </div>
                  <div class="col-md-6 right">
                    <div class="social_icon">
                        <a id="about_social_twitter" href="https://twitter.com/heddoko" class="tooltip_hover" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
                        <a id="about_social_facebook" href="https://www.facebook.com/heddoko/" class="tooltip_hover" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                        <a id="about_social_linkedin" href="http://www.linkedin.com/company/5239645?trk=tyah&trkInfo=tarId%3A1402899675410%2Ctas%3Aheddoko%2Cidx%3A1-1-1" class="tooltip_hover" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a id="about_social_gplus" href="https://plus.google.com/u/0/b/103238145180860999603/103238145180860999603/about?hl=en" class="tooltip_hover" title="Google Plus" target="_blank"><i class="fa fa-google-plus"></i></a>
                      </div>
                  </div>
                </div>
            </div>
            <!-- end social -->

          </div>
        </div>
        <!-- end container -->