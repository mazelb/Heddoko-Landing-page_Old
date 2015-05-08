<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!-->	<html> <!--<![endif]-->
<head>
	
	<?php include('../includes/meta.php'); ?>
	
	<?php $fileName = basename(__DIR__); ?>

	<link rel="stylesheet" href="../css/<?php echo $fileName; ?>.css?v=<?php echo rand(); ?>" />
</head>

<body id="page-top" class="template-<?php echo $fileName; ?>">

<?php include('../includes/header.php'); ?>

<?php include('../includes/signup/slider.php'); ?>

<?php include('../includes/footer.php'); ?>

<!-- page specific -->
<script src="../js/<?php echo $fileName; ?>.js"></script>

</body>
</html>