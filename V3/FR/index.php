<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="fr"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="fr"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="fr"
							  xmlns:og="http://ogp.me/ns#"
     						  xmlns:fb="https://www.facebook.com/2008/fbml"> <!--<![endif]-->
<head>

	<meta property="og:title" content="Heddoko" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="heddoko.com" />
	<meta property="og:image" content="http://heddoko.com/images/android-icon-48x48.png" />
	<meta property="og:description" content="Le premier habit intelligent à detecter tous les mouvements du corps en 3D" />

	
	<?php include('includes/meta.php'); ?>
	
	<?php $fileName =  str_replace('.php', '', basename($_SERVER['PHP_SELF']) ); ?>

	<link rel="stylesheet" href="../css/<?php echo $fileName; ?>.css?v=<?php echo rand(); ?>" />
</head>

<body id="page-top" class="template-<?php echo $fileName; ?>">

<?php include('includes/header.php'); ?>

<?php include('includes/index/slider.php'); ?>

<?php include('includes/index/garment.php'); ?>

<?php include('includes/index/productspecs.php'); ?>

<?php include('includes/index/seeitlive.php'); ?>

<?php include('includes/index/productbenefits.php'); ?>

<?php include('includes/index/learnproduct.php'); ?>

<?php include('includes/index/awards.php'); ?>

<?php include('includes/index/partners.php'); ?>

<?php include('includes/index/subscribe.php'); ?>

<?php include('includes/footer.php'); ?>

<!-- page specific -->
<script src="js/<?php echo $fileName; ?>.js"></script>

</body>
</html>