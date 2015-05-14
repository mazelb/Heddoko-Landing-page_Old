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
					<li class="<?php echo $links[0]; ?>"><a href="/">Home <span></span></a></li>
					<li class="<?php echo $links[1]; ?>"><a href="/product">Product <span></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="/product/#howitworks">How it works</a></li>
							<li><a href="/product/#garment">Garment</a></li>
							<li><a href="/product/#mobile">Mobile App</a></li>
							<li><a href="/product/#web">Web App</a></li>
							<li><a href="/product/#benefits">Benefits</a></li>
						</ul>
					</li>
					<li class="<?php echo $links[2]; ?>"><a href="/about" role="button">About Us <span></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="/about/#mission">Our Mission</a></li>
							<li><a href="/about/#team">Our Team</a></li>
							<li><a href="/about/#jointeam">Jobs</a></li>
							<li><a href="/about/#contact">Contact Us</a></li>
						</ul>
					</li>
					<li class="<?php echo $links[3]; ?>"><a href="/press" role="button">Press <span></span></a>
						<ul class="dropdown-menu" role="menu">
								<li><a href="/press/#inpress">In The News</a></li>
								<li><a href="/press/#packages">Media Kit</a></li>
							</ul>
					</li>
					<li class="<?php echo $links[4]; ?>"><a href="/faq">FAQ <span></span></a></li>
					<li class="<?php echo $links[5]; ?>"><a target="_blank" href="http://blog.heddoko.com">Blog <span></span></a></li>
					<li class="<?php echo $links[6]; ?>"><a href="/signup">Sign Up <span></span></a></li>
					<li class="<?php echo $links[6]; ?>"><a href="/FR/">fr <span></span></a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container -->
	</nav>
</header>
<!-- Header -->
