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
SOCIAL ANIMATED NUMBERS
===================================================================== */
$(document).ready(function($) {
	$.ajax({
		method: 'GET',
		url: '/php/social.php',
		dataType: 'json'
	}).done(function(data) {
		$('#facts ul').appear(function() {
			$('#fact1').animateNumber({ number: data.data.articles, numberStep: $.animateNumber.numberStepFactories.separator(',') }, 1500 );
			$('#fact2').animateNumber({ number: data.data.likes, numberStep: $.animateNumber.numberStepFactories.separator(',') }, 1500 );
			$('#fact3').animateNumber({ number: data.data.followers, numberStep: $.animateNumber.numberStepFactories.separator(',') }, 1500 );
			$('#fact4').animateNumber({ number: data.data.tweets, numberStep: $.animateNumber.numberStepFactories.separator(',') }, 1500 );
		},{accX: 0, accY: -200});
	});
});