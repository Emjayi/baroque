<?php

// ------------ folders
$path = '../';
$officePath = $path . 'DATA/about/';
$teamPath = $path . 'DATA/team/';

// ------------ search folder for about image
$aboutImage = glob($officePath . '*.jpg');

// ------------ page parameters 
$pageClass = 'about';
$pageTitle = 'About us';

// ------------- load basic parameters and functions 
require($path . 'php/intro.php');

$pageOGimage = makePathAbs($aboutImage[0]);

// ------------- generate page description
$page_description =
	'About us , Our team and more information about ' .
	$site_owner . '; architect and designer';

// ------------- load the page 
require($path . 'php/header.php');

?>
<article class="scrolbar horizential">
	<div class="container">

		<div class="title-box">
			<h1>
				<?php e($pageTitle); ?>
			</h1>
			<div class="guide-line" id="guide-line"></div>
		</div>

		<figure class="about-pic">
			<?php require('about-pic.php') ?>
			<figcaption>baroque members</figcaption>
		</figure>

		<!-- about text -->
		<section class="about-section">
			<h2 class="about-title">Where is baroque?</h2>
			<div class="about-text" id="about-text" data-maxHeight="400">
				<div class="about-text-con">
					<?php
					// read text.txt file
					$about_txt_file = $officePath . 'text.txt';
					$previus_h_level = 2;
					require($path . 'php/text-reader.php');
					theTextReader($about_txt_file);
					?>
				</div>
			</div>
		</section>

		<!-- about team -->
		<section class="about-section about-team-section">
			<h2 class="about-title">our team</h2>
			<ul class="about-team">
				<?php require('about-team.php') ?>
			</ul>
		</section>

		<!-- Job Opportunities -->
		<?php require('about-job.php') ?>
	</div>
</article>

<?php

// ------------ load the footer 
require($path . 'php/footer.php');

?>