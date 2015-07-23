<?php 
/* =======================================
Defines directory for images, css, scripts, titles, and descriptions
======================================= */
$dir = array_filter(explode("/", $_SERVER['PHP_SELF']));

if(count($dir) > 1) {
	switch($dir[1]) {
		case 'product':
			$title = '| Product';
			$description = 'HEDDOKO is a smart compression garment that uses textile embedded sensors to continuously track your body movement and give you live 3D coaching.';
		break;

		case 'about':
			$title = '| About Us';
			$description = 'Who we are';
		break;

		case 'press':
			$title = '| Press';
			$description = 'Heddoko has received a lot of buzz - here is the latest!';
		break;

		case 'faq':
			$title = '| FAQ';
			$description = 'If you have questions regarding our product and how it works, don\'t hesitate to ask!';
		break;

		case 'signup':
			$title = '| Sign Up';
			$description = 'Subscribe to our mailing list to keep in touch and receive the latest Heddoko news!';
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

<title>Heddoko <?php echo $title; ?></title>

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

<!-- facebook -->
<meta property="og:title" content="Heddoko <?php echo $title; ?>" />
<meta property="og:site_name" content="Heddoko"/>
<meta property="og:description" content="HEDDOKO is a wearable technology that serves as a personal training partner and coaching companion. HEDDOKO is a smart compression garment that uses textile embedded sensors to continuously track your body movement and give you live 3D coaching. " />
<!-- end facebook -->

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

<!-- MIX PANEL -->
<!-- start Mixpanel --><script type="text/javascript">(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init("9d63065ca7ef6c3ce1a7c1da2f03c798");</script><!-- end Mixpanel -->

<!-- HOT JAR -->
<!-- Hotjar Tracking Code for www.heddoko.com -->
<script>
    (function(f,b){
        var c;
        f.hj=f.hj||function(){(f.hj.q=f.hj.q||[]).push(arguments)};
        f._hjSettings={hjid:35601, hjsv:4};
        c=b.createElement("script");c.async=1;
        c.src="//static.hotjar.com/c/hotjar-"+f._hjSettings.hjid+".js?sv="+f._hjSettings.hjsv;
        b.getElementsByTagName("head")[0].appendChild(c); 
    })(window,document);
</script>

