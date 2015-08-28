<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="en"
							  xmlns:og="http://ogp.me/ns#"
     						  xmlns:fb="https://www.facebook.com/2008/fbml"> <!--<![endif]-->
<head>

	
	<?php include('../includes/meta.php'); ?>
	
	<?php $fileName = basename(__DIR__); ?>

	<link rel="stylesheet" href="../css/<?php echo $fileName; ?>.css?v=<?php echo rand(); ?>" />
</head>

<body id="page-top" class="template-<?php echo $fileName; ?>">



<?php include('../includes/header.php'); ?>

<?php include('../includes/about/pageheader.php'); ?>

<?php include('../includes/about/video.php'); ?>

<?php include('../includes/about/about.php'); ?>

<?php include('../includes/about/mission.php'); ?>

<?php include('../includes/about/family.php'); ?>

<?php include('../includes/about/team.php'); ?>

<?php include('../includes/about/stats.php'); ?>

<?php include('../includes/about/testimonials.php'); ?>

<?php include('../includes/about/contact.php'); ?>

<?php include('../includes/about/map.php'); ?>

<?php include('../includes/footer.php'); ?>

<!-- page specific -->
<script src="../js/<?php echo $fileName; ?>.js"></script>

</body>
</html>