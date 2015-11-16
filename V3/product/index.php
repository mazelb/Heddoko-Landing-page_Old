<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="en"
							  xmlns:og="http://ogp.me/ns#"
     						  xmlns:fb="https://www.facebook.com/2008/fbml"> <!--<![endif]-->
<head>

	<?php include('../includes/meta.php'); ?>

	<?php $fileName = basename(__DIR__); ?>

	<link rel="stylesheet" href="../css/product.css?20150922" />
</head>

<body id="page-top" class="template-<?php echo $fileName; ?>" itemscope itemtype="http://schema.org/WebPage">

<?php include('../includes/header.php'); ?>

<?php include('../includes/product/pageheader.php'); ?>

<?php include('../includes/product/mobileapp.php'); ?>

<?php include('../includes/product/howitworks.php'); ?>

<?php include('../includes/product/better.php'); ?>

<?php include('../includes/product/garment.php'); ?>

<?php include('../includes/product/mobile.php'); ?>

<?php include('../includes/product/web.php'); ?>

<?php include('../includes/product/benefits.php'); ?>

<?php include('../includes/product/benefitsathletes.php'); ?>

<?php include('../includes/product/divider.php'); ?>

<?php include('../includes/product/benefitscoaches.php'); ?>

<?php include('../includes/product/devkit.php'); ?>

<?php include('../includes/product/brochure.php'); ?>

<?php include('../includes/footer.php'); ?>

<!-- page specific -->
<script src="../js/<?php echo $fileName; ?>.js"></script>

</body>
</html>
