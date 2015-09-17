<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="en"
							  xmlns:og="http://ogp.me/ns#"
     						  xmlns:fb="https://www.facebook.com/2008/fbml"> <!--<![endif]-->
<head>

	<?php include('../includes/meta.php'); ?>

	<?php $fileName = basename(__DIR__); ?>

	<link rel="stylesheet" href="../css/<?= $fileName; ?>.css?v=<?= time() ?>" />
</head>

<body id="page-top" class="template-<?= $fileName; ?>">

<?php include('../includes/header.php'); ?>

<?php include('../includes/404/message.php'); ?>

<?php include('../includes/footer.php'); ?>

</body>
</html>
