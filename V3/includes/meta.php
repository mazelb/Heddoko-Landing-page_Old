<?php 
/* =======================================
Defines directory for images, css, scripts, titles, and descriptions
======================================= */
$dir = array_filter(explode("/", $_SERVER['PHP_SELF']));

if(count($dir) > 1) {
	switch($dir[1]) {
		case 'product':
			$title = '| Product';
			$description = '';
		break;

		case 'about':
			$title = '| About Us';
			$description = '';
		break;

		case 'press':
			$title = '| Press';
			$description = '';
		break;

		case 'faq':
			$title = '| FAQ';
			$description = '';
		break;

		case 'signup':
			$title = '| Sign Up';
			$description = '';
		break;
	}
	$dir = '../';
} else {
	$title = '| Home';
	$description = 'Heddoko Empowers perfection in your training by tracking your movement and getting live coaching feedback, it\'s your own personal performance centre';
	$dir = '';
} ?>
<!-- Meta -->
<meta charset="utf-8">
<meta name="keywords" content="" />
<meta name="description" content="<?php echo $description; ?>">
<meta name="author" content="">

<title>Heddoko <?echo $title; ?></title>

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Favicons -->
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $dir; ?>images/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $dir; ?>images/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $dir; ?>images/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $dir; ?>images/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $dir; ?>images/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $dir; ?>images/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $dir; ?>images/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $dir; ?>images/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $dir; ?>images/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $dir; ?>images/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $dir; ?>images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo $dir; ?>images/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $dir; ?>images/favicon-16x16.png">
<link rel="manifest" href="<?php echo $dir; ?>images/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<?php echo $dir; ?>images/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<!-- Custom Google Web Font -->
<link href="<?php echo $dir; ?>font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- Bootstrap core CSS -->
<link href="<?php echo $dir; ?>css/bootstrap.css" rel="stylesheet">
<link href="<?php echo $dir; ?>css/style.css" rel="stylesheet">
<link href="<?php echo $dir; ?>js/owl-carousel/owl.carousel.css" rel="stylesheet">
<link href="<?php echo $dir; ?>js/owl-carousel/owl.theme.css" rel="stylesheet">
<link href="<?php echo $dir; ?>js/owl-carousel/owl.transitions.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?php echo $dir; ?>css/component.css" />

<!-- Fonts -->
<link rel="stylesheet" type="text/css" href="<?php echo $dir; ?>css/font.css" />

<!--[if lt IE 9]>
  	<script src="<?php echo $dir; ?>/js/libs/html5shiv.js"></script>
      <script src="<?php echo $dir; ?>./js/libs/respond.js"></script>
<![endif]-->

<script type="text/javascript" src="<?php echo $dir; ?>js/modernizr.custom.js"></script>
<script src="<?php echo $dir; ?>js/jquery.js"></script>
<script src="<?php echo $dir; ?>js/bootstrap.js"></script>
<script src="<?php echo $dir; ?>js/jquery.easing.min.js"></script>

<script type="text/javascript" src="<?php echo $dir; ?>js/source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="<?php echo $dir; ?>js/source/jquery.fancybox.css?v=2.1.5" media="screen" />
<script type="text/javascript" src="<?php echo $dir; ?>js/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

<!-- Style Switch -->
<link rel="stylesheet" href="<?php echo $dir; ?>css/colors/heddoko.css" />
<link rel="stylesheet" href="<?php echo $dir; ?>css/defaults.css" />

<!-- WEBFONTS -->
<!-- insert script here -->
