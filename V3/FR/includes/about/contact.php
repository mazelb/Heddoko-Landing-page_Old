<!-- Contact -->
<section id="contact">
	<div class="container no-padding">
		<h2>Nous Contacter <span></span></h2>
		<p class="title-sub">Vous avez des questions? Vous souhaitez rester en contact? Ce que vous avez à dire nous intéresse!</p>
		<h4>Nous joindre</h4>
		<form class="contact-form" data-animated="0" id="contactForm" action="../php/contact.php" method="post">
			<div class="col-md-12 no-padding">
				<div class="col-md-4">
					<input type="text" name="senderName" id="senderName" placeholder="Prénom et nom*" Required>
					<input type="email" name="senderEmail" id="senderEmail" placeholder="Courriel*" Required>
					<input type="text" name="subject" id="subject" placeholder="Sujet">
				</div>
				<div class="col-md-8">
					<textarea name="message" id="message" placeholder="Message*" rows="5" Required></textarea>
				</div>
			</div>
			<div class="col-md-12">
				<div class="space10"></div>
				<button type="submit" id="about_pg_sendmessage_btn" >Envoyer</button>
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