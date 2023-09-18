<?php

// ------------ page parameters 
$path = '../';
$pageClass = 'awards';
$pageTitle = 'Awards';

// ------------ default image for award
$defaultAwardImage = $path.'img/misk/award-icon.png';

// ------------- load basics
require ($path.'php/intro.php');

// ------------- generate page description
$page_description =
	'Our awards, prizes and Recognitions. '. $description;

// ------------- load the page 
require ($path.'php/header.php');

?>
<article class="scrolbar horizential">
	
	<div class="container">
		<div class="title-box">
			<h1><?php echo $pageTitle; ?></h1>
		</div>
		<div class="award-line award-show"></div>
		<?php require('award-item.php') ?>
	</div>

	<!--when there is no javascript, show something -->
	<script>
		var awwwardSecItem = document.querySelectorAll('.award-sec, .award-line');
		for ( i = 0 ; i < awwwardSecItem.length; i++ ) {
			awwwardSecItem[i].classList.remove('award-show');
		}
	</script>

</article>
<div class="awards-scrolHider" id="scrolHider"></div>
<?php

// ------------ load the footer 
require ($path.'php/footer.php');

?>