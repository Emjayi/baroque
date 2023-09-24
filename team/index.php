<?php

// ------------ folders
$path = '../';
$officePath = $path . 'DATA/team/';
$teamPath = $path . 'DATA/team/team-members/';

// ------------ search folder for team image
$teamImage = glob($officePath . '*.jpg');

// ------------ page parameters 
$pageClass = 'team';
$pageTitle = 'Team';

// ------------- load basic parameters and functions 
require($path . 'php/intro.php');

$pageOGimage = makePathAbs($teamImage[0]);

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

		<figure class="team-pic">
			<?php require('team-pic.php') ?>
			<figcaption>baroque members</figcaption>
		</figure>

		<!-- team text -->
		<section class="team-section">
			<h2 class="team-title">Where is baroque?</h2>
			<div class="team-text" id="team-text" data-maxHeight="400">
				<div class="team-text-con">
					<?php
					// read text.txt file
					$team_txt_file = $officePath . 'text.txt';
					$previus_h_level = 2;
					require($path . 'php/text-reader.php');
					theTextReader($team_txt_file);
					?>
				</div>
			</div>
		</section>

		<!-- team members -->
		<section class="team-section team-members-section">
			<h2 class="team-title">our team</h2>
			<ul class="team-members">
				<?php require('team-members.php') ?>
			</ul>
		</section>

		<!-- Job Opportunities -->
		<?php require('team-job.php') ?>
	</div>
</article>

<?php

// ------------ load the footer 
require($path . 'php/footer.php');

?>