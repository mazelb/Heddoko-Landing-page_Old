 <div class="container">
          <div class="row">
            <h2>Contact</h2>


            <div class="clearfix"></div>
            <div class="divider_dark line"></div>
            
                  <?php
include 'admin/connect_to_database.php'; //connect to DB
	
$setContact= "SELECT *  FROM Contact ";
$setContactResults = mysql_query($setContact);

$contactShow = mysql_fetch_array($setContactResults);
?>

            <p><?php echo $contactShow['HeaderMessage'];?></p>

            <h3><a href="<?php echo "mailto:".$contactShow['Email'];?>"><i class="fa fa-envelope"></i><?php echo $contactShow['Email']; ?></a></h3>

            
            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Send a Message</button>
            <!-- Modal -->
            <div class="modal fade left" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Send us a Message</h4>
                  </div>
                  <div class="modal-body">
                    <!--Form Contact-->
                      <form class="form-contact" action="php/send-mail-contact.php">

                        <div class="form_contact">
                          <input type="text" class="name form-control" placeholder="Full Name" required="required" name="Name">
                          <input type="email" class="email form-control" placeholder="Email" required="required" name="Email">
                          <textarea class="form-control" rows="4" placeholder="Message" required="required" name="Message"></textarea>
                          <div class="clearfix"></div>
                        </div>

                        <input type="submit" value="Send Message" name="subscribe">

                        <div class="result"></div>
                      </form>
                    <!--Form Contact-->
                  </div>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="divider_dark line"></div>

            <div class="row">
              <div class="col-md-6 right">
                <div class="number">
                  <p><i class="fa fa-mobile-phone"></i> <?php echo $contactShow['Phone'];?></p>
                </div>
              </div>

              <div class="col-md-6 left">
                <div class="address">
                  <p> <a href="http://goo.gl/2WjLfv" target="_blank"><i class="fa fa-map-marker"></a></i> 
                 <?php echo $contactShow['Address'];?> <br><span>Canada</span></p>
                </div>
              </div>
            </div>            
          </div>
        </div>