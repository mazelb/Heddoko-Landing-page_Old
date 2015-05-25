<!-- Contact -->
<section id="contact">
	<div class="container no-padding" data-animated="0">
		<h4>Posez vos questions !</h4>
		<p class="title-sub">Si vous avez des questions au sujet de notre produit et de son fonctionnement, n'hésitez pas à nous envoyez un message !</p>
		<form class="contact-form" data-animated="0" id="contactForm" action="/php/contact.php" method="post">
			<div class="col-md-12 no-padding">
				<div class="col-md-4">
					<input type="text" name="senderName" id="senderName" placeholder="Nom*" Required>
					<input type="email" name="senderEmail" id="senderEmail" placeholder="Courriel*" Required>
					<input type="text" name="subject" id="subject" placeholder="Sujet">
				</div>
				<div class="col-md-8">
					<textarea name="message" id="message" placeholder="Message*" rows="5" Required></textarea>
				</div>
			</div>
			<div class="col-md-12">
				<div class="space10"></div>
				<button type="submit" id="faq_pg_sendmessage_btn" >Envoyez-nous un message</button>
			</div>
		</form>
		<div id="successMessage" class="successmessage">
			<p><span class="success-ico"></span> Merci d'envoyer votre message! Nous vous répondrons sous peu.</p>
		</div>
		<div id="failureMessage" class="errormessage">
			<p><span class="error-ico"></span> Un problème est survenu en envoyant votre message. Veuillez essayer de nouveau.</p>
		</div>
		<div id="incompleteMessage" class="statusMessage">
			<p>Veuillez compléter tout les paramètres de la forme avant d'envoyer le message.</p>
		</div>
	</div>
</section>
<!-- Contact -->