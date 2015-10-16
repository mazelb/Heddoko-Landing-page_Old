<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->	<html lang="en"
							  xmlns:og="http://ogp.me/ns#"
     						  xmlns:fb="https://www.facebook.com/2008/fbml"> <!--<![endif]-->
<head>
    <?php

    // Include meta tags.
    include('../includes/meta.php');

    // Define base name.
    $fileName = basename(__DIR__);
    $self = array_filter(explode("/", $_SERVER['PHP_SELF']));
    $baseName = $self[1] == 'FR' ? '../..' : '..';
    ?>
	<link rel="stylesheet" href="<?= $baseName ?>/css/<?= $fileName ?>.css?20151007">
</head>

<body id="page-top" class="template-<?= $fileName; ?>">

<?php include('../includes/header.php'); ?>

<?php include('../includes/quote/form.php'); ?>

<?php include('../includes/quote/javascript.php'); ?>

<?php include('../includes/footer.php'); ?>

    <script type="text/javascript" src="<?= $baseName .'/js/'. $fileName .'.js?20151016' ?>"></script>
</body>
</html>
