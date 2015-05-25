/* =====================================================================
PORFOLIO
===================================================================== */
$(function() {
	Grid.init();
	// adding more items
	$('#og-additems').on( 'click', function() {
		var $items = $( '<li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img class="img-responsive" src="images/portfolio/1.jpg" alt="img01"/></a></li>' ).appendTo( $( '#og-grid' ) );
		Grid.addItems( $items );
		return false;
		} );

    $('#folio').mixitup();
});

/* =====================================================================
Analytics
===================================================================== */
$(document).ready(function() {
	//menu buttons	
	$('#nav_menu_FR').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_FR_clicked');
		mixpanel.track("nav_menu_FR_clicked");
	});
	$('#nav_menu_home').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_home_clicked');
		mixpanel.track("nav_menu_home_clicked");
	});
	$('#nav_menu_product').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_product_clicked');
		mixpanel.track("nav_menu_product_clicked");
	});
	$('#nav_menu_prod_howitworks').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_howitworks_clicked');
		mixpanel.track("nav_menu_prod_howitworks_clicked");
	});
	$('#nav_menu_prod_garment').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_garment_clicked');
		mixpanel.track("nav_menu_prod_garment_clicked");
	});
	$('#nav_menu_prod_mobile').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_mobile_clicked');
		mixpanel.track("nav_menu_prod_mobile_clicked");
	});
	$('#nav_menu_prod_web').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_web_clicked');
		mixpanel.track("nav_menu_prod_web_clicked");
	});
	$('#nav_menu_prod_benefits').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_prod_benefits_clicked');
		mixpanel.track("nav_menu_prod_benefits_clicked");
	});
	$('#nav_menu_about').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_clicked');
		mixpanel.track("nav_menu_about_clicked");
	});
	$('#nav_menu_about_mission').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_mission_clicked');
		mixpanel.track("nav_menu_about_mission_clicked");
	});
	$('#nav_menu_about_team').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_team_clicked');
		mixpanel.track("nav_menu_about_team_clicked");
	});
	$('#nav_menu_about_join').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_join_clicked');
		mixpanel.track("nav_menu_about_join_clicked");
	});
	$('#nav_menu_about_contact').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_about_contact_clicked');
		mixpanel.track("nav_menu_about_contact_clicked");
	});
	$('#nav_menu_press').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_clicked');
		mixpanel.track("nav_menu_press_clicked");
	});
	$('#nav_menu_press_news').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_news_clicked');
		mixpanel.track("nav_menu_press_news_clicked");
	});
	$('#nav_menu_press_mediakit').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_press_mediakit_clicked');
		mixpanel.track("nav_menu_press_mediakit_clicked");
	});
	$('#nav_menu_faq').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_faq_clicked');
		mixpanel.track("nav_menu_faq_clicked");
	});
	$('#nav_menu_blog').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_blog_clicked');
		mixpanel.track("nav_menu_blog_clicked");
	});
	$('#nav_menu_signup').click(function() {
		ga('send', 'event', 'button', 'click', 'nav_menu_signup_clicked');
		mixpanel.track("nav_menu_signup_clicked");
	});	

	//Footer buttons
	$('#footer_social_twitter').click(function() {
		ga('send', 'social', 'twitter', 'follow', 'footer_social_twitter');
		mixpanel.track("footer_social_twitter");
	});
	$('#footer_social_facebook').click(function() {
		ga('send', 'social', 'facebook', 'like', 'footer_social_facebook');
		mixpanel.track("footer_social_facebook");
	});
	$('#footer_social_linkedin').click(function() {
		ga('send', 'social', 'button', 'follow', 'footer_social_linkedin');
		mixpanel.track("footer_social_linkedin");
	});
	$('#footer_social_gplus').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_gplus');
		mixpanel.track("footer_social_gplus");
	});
	$('#footer_social_instagram').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_gplus');
		mixpanel.track("footer_social_gplus");
	});
	$('#footer_social_pinterest').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_instagram');
		mixpanel.track("footer_social_instagram");
	});
	$('#footer_social_vimeo').click(function() {
		ga('send', 'social', 'button', 'like', 'footer_social_vimeo');
		mixpanel.track("footer_social_vimeo");
	});
	$('#footer_menu_home').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_home_clicked');
		mixpanel.track("footer_menu_home_clicked");
	});
	$('#footer_menu_product').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_product_clicked');
		mixpanel.track("footer_menu_product_clicked");
	});
	$('#footer_menu_prod_howitworks').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_howitworks_clicked');
		mixpanel.track("footer_menu_prod_howitworks_clicked");
	});
	$('#footer_menu_prod_garment').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_garment_clicked');
		mixpanel.track("footer_menu_prod_garment_clicked");
	});
	$('#footer_menu_prod_mobile').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_mobile_clicked');
		mixpanel.track("footer_menu_prod_mobile_clicked");
	});
	$('#footer_menu_prod_web').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_web_clicked');
		mixpanel.track("footer_menu_prod_web_clicked");
	});
	$('#footer_menu_prod_benefits').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_prod_benefits_clicked');
		mixpanel.track("footer_menu_prod_benefits_clicked");
	});
	$('#footer_menu_about').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_clicked');
		mixpanel.track("footer_menu_about_clicked");
	});
	$('#footer_menu_about_mission').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_mission_clicked');
		mixpanel.track("footer_menu_about_mission_clicked");
	});
	$('#footer_menu_about_team').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_team_clicked');
		mixpanel.track("footer_menu_about_team_clicked");
	});
	$('#footer_menu_about_join').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_join_clicked');
		mixpanel.track("footer_menu_about_join_clicked");
	});
	$('#footer_menu_about_contact').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_about_contact_clicked');
		mixpanel.track("footer_menu_about_contact_clicked");
	});
	$('#footer_menu_press').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_clicked');
		mixpanel.track("footer_menu_press_clicked");
	});
	$('#footer_menu_press_news').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_news_clicked');
		mixpanel.track("footer_menu_press_news_clicked");
	});
	$('#footer_menu_press_mediakit').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_press_mediakit_clicked');
		mixpanel.track("footer_menu_press_mediakit_clicked");
	});
	$('#footer_menu_faq').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_faq_clicked');
		mixpanel.track("footer_menu_faq_clicked");
	});
	$('#footer_menu_blog').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_blog_clicked');
		mixpanel.track("footer_menu_blog_clicked");
	});
	$('#footer_menu_signup').click(function() {
		ga('send', 'event', 'button', 'click', 'footer_menu_signup_clicked');
		mixpanel.track("footer_menu_signup_clicked");
	});	

	//inpage buttons
	$('#faq_pg_sendmessage_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'faq_pg_sendmessage_btn_clicked');
		mixpanel.track("faq_pg_sendmessage_btn_clicked");
	});
	$('#faq_pg_app_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'faq_pg_app_btn_clicked');
		mixpanel.track("faq_pg_app_btn_clicked");
	});
	$('#faq_pg_garment_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'faq_pg_garment_btn_clicked');
		mixpanel.track("faq_pg_garment_btn_clicked");
	});
	$('#faq_pg_team_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'faq_pg_team_btn_clicked');
		mixpanel.track("faq_pg_team_btn_clicked");
	});
	$('#faq_pg_athletes_btn').click(function() {
		ga('send', 'event', 'button', 'click', 'faq_pg_athletes_btn_clicked');
		mixpanel.track("faq_pg_athletes_btn_clicked");
	});
});