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

<body id="page-top" class="template-<?php echo $fileName; ?>" itemscope itemtype="http://schema.org/QAPage">

<?php include('../includes/header.php'); ?>

<?php include('../includes/faq/pageheader.php'); ?>

<?php include('../includes/faq/questions.php'); ?>

<?php include('../includes/faq/contact.php'); ?>

<?php include('../includes/footer.php'); ?>

<!-- page specific -->
<script src="../js/<?php echo $fileName; ?>.js"></script>

</body>
</html>
