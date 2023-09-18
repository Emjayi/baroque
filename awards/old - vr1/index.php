<?php

// ------------ page parameters 
$path = '../';
$pageClass = 'awards';
$pageTitle = 'Awards';

// ------------ default image for award
$defaultAwardImage = $path.'img/misk/award-icon.png';



// ------------- load the page 
require ($path.'php/header.php');

?>
<article class="scrolbar horizential">
	
	<div class="container">
		<div class="title-box">
			<h1><?php echo $pageTitle; ?></h1>
		</div>
		<div class="award-line"></div>
		<?php require('award-item.php') ?>
	</div>


</article>
<div class="awards-scrolHider" id="scrolHider"></div>
<?php

// ------------ load the footer 
require ($path.'php/footer.php');

?>