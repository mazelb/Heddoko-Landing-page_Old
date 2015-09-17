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

    // Define base name and filename for stylesheet.
    $fileName = basename(__DIR__);
    $dir = array_filter(explode("/", $_SERVER['PHP_SELF']));
    $stylesheet = $dir[1] == 'FR' ? '../..' : '..';
    $stylesheet .= '/css/'. $fileName .'.css?20150917';
    ?>

	<link rel="stylesheet" href="<?= $stylesheet ?>">
</head>

<body id="page-top" class="template-<?= $fileName; ?>">

<?php include('../includes/header.php'); ?>

<?php include('../includes/404/message.php'); ?>

<?php include('../includes/footer.php'); ?>

</body>
</html>
