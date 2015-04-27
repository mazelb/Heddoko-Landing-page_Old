<?php 
	
	//create cached file

	//json structure
	$json = array( 
		'result' => 1,
		'data' => array(
			
			array(
				'text' => 'On paper, coming from a small town with a population pushing 500 isn’t an ideal springboard for success. But for Collin Baikie, it provided the perfect foundation of heart, dedication, and humility to launch him into his newfound career as a professional MMA fighter.

				The 25-year-old from North West River, Labrador recently stepped into the Octagon at Montreal’s Rivals MMA in the Verdun Auditorium and won his professional debut fight in outstanding fashion – with a TKO just two minutes and two seconds into the first round.

				“There was so much going on in the past two months – it was a lot to handle,” Baikie said. “But at the end of the day, I got in there, I fought the best I could, and I got the win.”',

				'title' => 'Athlete spotlight: Marc-andré Lauzier',

				'author' => 'Lisa Zane',

				'link' => 'http://blog.heddoko.com/'
				),

			array(
				'text' => 'Originally from London, England, Charlotte Greenwood is a CrossFit athlete and coach, a former junior national gymnast, a rock climber, and was once the 12th seed in the Greater London tennis circuit. A Montreal implant as of 2005, the 42-year-old is certified in Olympic Weightlifting, Strongman, Mobility, and Endurance through CrossFit, and is a recognized Gymnastic Bodies Trainer. ',

				'title' => 'Athlete spotlight: Charlotte Greenwood',

				'author' => 'Lisa Zane',

				'link' => 'http://blog.heddoko.com/'
				),

			array(
				'text' => 'We’ve had a very productive and action-packed last few weeks! We travelled across the Atlantic for the Wearable Technologies Innovation World Cup, have an exciting new mentorship to announce, were invited to Montreal’s City Hall for an important announcement from the Mayor, released a brand-new teaser, and hosted a workshop at the inaugural John Molson Startup Conference. Without further ado, here’s our monthly recap:',

				'title' => 'Heddoko news: March update',

				'author' => 'Lisa Zane',

				'link' => 'http://blog.heddoko.com/'
				)
		)
	);

	echo json_encode($json);