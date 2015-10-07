<?php
// Include the "quotation" token to validate requests.
require '../php/quote.php';
?>

<section class="quotation-form">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12 col-mg-8 col-lg-8 col-mg-offset-2 col-lg-offset-2">
                <h1>Ask for a quote</h1>
                <p><em>Ask for a quote</em></p>

                <form class="form" name="quotation" action="../php/quote.php" method="post">

                    <!-- First name -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="first_name" placeholder="First Name" required autofocus>
                    </div>

                    <!-- Last name -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="last_name" placeholder="Last Name" required>
                    </div>

                    <!-- Organization -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="organization" placeholder="Organization" required>
                    </div>

                    <!-- Title -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="Title" required>
                    </div>

                    <!-- Phone number -->
                    <div class="form-group">
                        <input type="tel" class="form-control" name="phone" placeholder="Phone #" required>
                        <div class="error">
                            Please enter a valid phone number.
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" value="" placeholder="Email address">
                    </div>

                    <!-- Website -->
                    <div class="form-group">
                        <input type="url" class="form-control" name="website" value="" placeholder="Website">
                    </div>

                    <!-- Submit button -->
                    <div class="form-group">
                        <input type="submit" class="form-control btn btn-default" value="Submit">
                    </div>

                    <input type="hidden" name="token" value="<?= Quote::getToken() ?>">
                </form>

                <img src="../images/ajax-loader.gif" class="ajax">

                <div class="errormessage">
                    We could not process your request. Please try again later.
                </div>

                <div class="successmessage">
                    Thank you for your inquiry.
                </div>
                <br>
                <br>
                <br>

            </div>
        </div>
    </div>
</section>
