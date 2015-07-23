<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="fr"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="fr"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="fr"> <!--<![endif]-->
<head>
	
	<?php include('../includes/meta.php'); ?>
	
	<?php $fileName = basename(__DIR__); ?>

	<link rel="stylesheet" href="../../css/<?php echo $fileName; ?>.css?v=<?php echo rand(); ?>" />
</head>

<body id="page-top" class="template-<?php echo $fileName; ?>">

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

<?php include('../includes/product/brochure.php'); ?>

<?php include('../includes/footer.php'); ?>

<!-- page specific -->
<script src="../js/<?php echo $fileName; ?>.js"></script>

</body>
</html>