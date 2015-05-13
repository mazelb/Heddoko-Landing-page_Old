<!--[if lt IE 10]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<?php //include('includes/loader.php'); ?>
<?php //include('includes/responsive.php'); ?>

<?php 
$links = array(null, null, null, null, null, null, null);
switch($fileName) {
	case 'index':
		$links[0] = 'active';
	break;
	case 'product':
		$links[1] = 'active';
	break;
	case 'about':
		$links[2] = 'active';
	break;
	case 'press':
		$links[3] = 'active';
	break;
	case 'faq':
		$links[4] = 'active';
	break;
	case 'blog':
		$links[5] = 'active';
	break;
	case 'signup':
		$links[6] = 'active';
	break;
}
?>
<!-- Header -->
<header>
	<nav class="navbar navbar-custom navbar-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
					<i class="fa fa-bars"></i>
				</button>
				<a class="navbar-brand" href="/">
					<img src="<?php echo $dir; ?>images/heddoko_logo.svg" alt="Heddoko">
				</a>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse navbar-right navbar-main-collapse">
				<ul class="nav navbar-nav">
					<!-- Hidden li included to remove active class from about link when scrolled up past about section -->
					<li class="<?php echo $links[0]; ?>"><a href="/FR/">Accueil <span></span></a></li>
					<li class="<?php echo $links[1]; ?>"><a href="/FR/product">Produit <span></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="/FR/product/#howitworks">Fonctionnement</a></li>
							<li><a href="/FR/product/#garment">L'habit</a></li>
							<li><a href="/FR/product/#mobile">Application mobile</a></li>
							<li><a href="/FR/product/#web">Application Web</a></li>
							<li><a href="/FR/product/#benefits">Les avantages</a></li>
						</ul>
					</li>
					<li class="<?php echo $links[2]; ?>"><a href="/FR/about" role="button">À propos <span></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="/FR/about/#mission">Notre Mission</a></li>
							<li><a href="/FR/about/#team">Notre équipe</a></li>
							<li><a href="/FR/about/#jointeam">Postuler</a></li>
							<li><a href="/FR/about/#contact">Contactez-nous</a></li>
						</ul>
					</li>
					<li class="<?php echo $links[3]; ?>"><a href="/FR/press" role="button">Médias <span></span></a>
						<ul class="dropdown-menu" role="menu">
								<li><a href="/FR/press/#inpress">Dans les Médias</a></li>
								<li><a href="/FR/press/#packages">Trousse média</a></li>
							</ul>
					</li>
					<li class="<?php echo $links[4]; ?>"><a href="/FR/faq">FAQ <span></span></a></li>
					<li class="<?php echo $links[5]; ?>"><a href="http://blog.heddoko.com">Blog <span></span></a></li>
					<li class="<?php echo $links[6]; ?>"><a href="/FR/signup">S'inscrire <span></span></a></li>
					<li class="<?php echo $links[6]; ?>"><a href="/">en <span></span></a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container -->
	</nav>
</header>
<!-- Header -->
