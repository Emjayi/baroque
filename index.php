<?php

// ------------ page parameters 
$path = '';
$pageClass = 'home';
$pageClass_noJS = ' home-text-show menu-show';

// ------------- load basic parameters and functions 
require($path . 'php/intro.php');

// ------------- generate page description
$page_description =
	$description . '. ' . $description_fa;

// ------------- load the page 
require($path . 'php/header.php');

?>

<article>
	<!-- visible texts -->

	<h1 class="hiddener">mohammad khodayi</h1>
	<h2 class="home-title"><span>architecture.</span><span>design.</span></h2>

	<!-- hidden txts , in order to improve seo -->
	<p class="home-texts">
		<?php e($description); ?>
		<span lang="fa">
			<?php e($description_fa); ?>
		</span>
	</p>

	<!-- enter button -->
	<button class="home-enter" id="home-enter">
		<span>enter</span>
	</button>

	<div class="home-svg" id="home-svg">
		<!--
			be careful :
			remove id="Layer_1" from svgs generated by illustrator
		-->
		<?php include('img/intro/3.svg') ?>
		<?php include('img/intro/2.svg') ?>
		<?php include('img/intro/1.svg') ?>
	</div>
</article>

<?php

// ------------ load the footer 
require($path . 'php/footer.php');

?>