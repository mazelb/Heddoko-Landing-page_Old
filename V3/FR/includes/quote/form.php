<?php
// Include the "quotation" token to validate requests.
require '../../php/quote.php';
?>

<section class="quotation-form">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12 col-mg-8 col-lg-8 col-mg-offset-2 col-lg-offset-2">
                <h1>Demandez votre kit de développement maintenant</h1>
                <p><em>
                    Veuillez compléter ce formulaire pour demander un devis.
                </em></p>

                <form class="form" name="quotation" action="/php/quote.php" method="post">

                    <!-- First name -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="first_name" placeholder="Prénom" required autofocus>
                    </div>

                    <!-- Last name -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="last_name" placeholder="Nom" required>
                    </div>

                    <!-- Organization -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="organization" placeholder="Organization" required>
                    </div>

                    <!-- Title -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="Titre" required>
                    </div>

                    <!-- Phone number -->
                    <div class="form-group">
                        <input type="tel" class="form-control" name="phone" placeholder="Numéro de téléphone" required>
                        <div class="error">
                            Veuillez saisir un numéro de téléphone valide.
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" value="" placeholder="Courriel">
                    </div>

                    <!-- Website -->
                    <div class="form-group">
                        <input type="url" class="form-control" name="website" value="" placeholder="Site web">
                    </div>

                    <!-- Submit button -->
                    <div class="form-group">
                        <input type="submit" class="form-control btn btn-default" value="Soumettre">
                    </div>

                    <input type="hidden" name="token" value="<?= Quote::getToken() ?>">
                </form>

                <img src="../images/ajax-loader.gif" class="ajax">

                <div class="errormessage">
                    Nous n'avons pas pu traiter votre demande. Veuillez réessayer plus tard.
                </div>

                <div class="successmessage">
                    Merci pour votre requête. Un représentant des ventes prendra contact avec vous très bientôt.
                </div>
                <br>
                <br>
                <br>

            </div>
        </div>
    </div>
</section>
