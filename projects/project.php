<?php

// --------------------------------------------
// ---------------- setings -------------------
// --------------------------------------------

// name of folders 
$nameOfImgFoder = 'slides';
$nameOfTmbFoder = 'tmb';
$nameOfBigImageFoder = 'img';

// number of line ( in info.txt ) that fixed project info ends and dynamic one begins 
$projectIndexStartingData = 10;

// after this number, images will be lazy loaded
$lazyIndex = 1;


// --------------------------------------------
// ----------------- basics -------------------
// --------------------------------------------

// set curent project folder ( defined on index.php ) in a varible for easy access
$projectFolder = $projectsFolderArray[$projectsIndoxToShow];
// set curent  project title in a varible for easy access
$projectTitle = $pageTexts[1];
$projectTitle = str_replace( '-' , ' ' , $projectTitle);


// check project Has Text
$projectHasText = false;
$projectTextFile = $projectFolder.'/text.txt';
if ( file_exists($projectTextFile) ) {
	$projectHasText = true;
}

// check project Has Award
$projectHasAward = false;
$projectAwardFile = $projectFolder.'/awards.txt';
if ( file_exists($projectAwardFile) ) {
	$projectHasAward = true;
}

// check project Has Team
$projectHasTeam = false;
$projectTeamFile = $projectFolder.'/team.txt';
if ( file_exists($projectTeamFile) ) {
	$projectHasTeam = true;
}

// check project Has Video
$projectHasVideo = false;
$projectVideoFile = $projectFolder.'/video';
if ( file_exists($projectVideoFile) ) {
	$projectHasVideo = true;
	$videoImg = glob(
		$projectVideoFile.'/*.{jpg,Jpg,JPG,png,Png,PNG,gif,Gif,GIF}',
		GLOB_BRACE );
	$videoTmb = $videoImg[0];
	$poster = $videoImg[1];

	$video = glob($projectVideoFile.'/*mp4', GLOB_BRACE);
	if ( sizeof($video) < 1 ) $projectHasVideo = false;
}


// --------------------------------------------
// --------- images and thumbnails ------------
// -------------------------------------------- 

// scan for images 
$imagesArray = glob(
	$projectFolder.'/'.$nameOfImgFoder.'/*.{jpg,Jpg,JPG,png,Png,PNG,gif,Gif,GIF}',
	GLOB_BRACE );
$imagesArraySize = sizeof($imagesArray) ;

// scan for thumbnail images 
$tmbImgArray = glob(
	$projectFolder.'/'.$nameOfTmbFoder.'/*.{jpg,Jpg,JPG,png,Png,PNG,gif,Gif,GIF}',
	GLOB_BRACE );
$tmbImgArraySize = sizeof($tmbImgArray) ;

// Sort image arrays using a case insensitive "natural order" algorithm
natcasesort($imagesArray);
natcasesort($tmbImgArray);

// put the sorted array keys to the original array 
$imagesArray1 = array();
$tmbImgArray1 = array();
foreach ( $imagesArray as $imagesArrayIttem ) array_push($imagesArray1,$imagesArrayIttem);
foreach ( $tmbImgArray as $imagesArrayIttem ) array_push($tmbImgArray1,$imagesArrayIttem);
$imagesArray = $imagesArray1;
$tmbImgArray = $tmbImgArray1;
	

// check project has specific poster image 
$projectPosterFolder = $projectFolder.'/poster';
if ( file_exists($projectPosterFolder) ) {
	$mainImgg = glob(
		$projectPosterFolder.'/*.{jpg,Jpg,JPG,png,Png,PNG,gif,Gif,GIF}',GLOB_BRACE );
	$mainImgg = $mainImgg[0];
} else {
	$mainImgg = makePathAbs($imagesArray[0]);
}


// --------------------------------------------
// ------------- make the HTML ----------------
// --------------------------------------------

?> 
<article class="project-article scrolbar horizential" id="project-article">
	<div class="container">

		<!-- main title -->
		<div class="title-box project-title-box">
			<h1><?php e($projectTitle); ?></h1>
			<div class="guide-line" id="guide-line"></div>
		</div>

		<!-- main image of the project -->
		<figure
			id="project-pic"
			class="project-main-pic <?php echo isImgLandScapeOrPortrait($imagesArray[0]) ?>">

			<img alt="<?php e($page_description) ?>" src="<?php echo $mainImgg  ?>">
		
			<!-- RGB split effect  -->
			<div class="project-pic-RGB" >
				<div class="r" style="background-image:url(<?php echo $mainImgg ?>)"></div>
				<div class="g" style="background-image:url(<?php echo $mainImgg ?>)"></div>
				<div class="b" style="background-image:url(<?php echo $mainImgg ?>)"></div>
			</div>

			<figcaption><?php e($page_description) ?></figcaption>
		</figure>


		<!-- project info  -->
		<section class="about-section project-text-section">
			<h2 class="prject-info-title">
				<span>project info</span>
			</h2>
			<div
				class="about-text project-text-list"
				id="project-list"
				data-maxHeight="200">
				<div  class="about-text-con" >
					<dl>
						<dt>project type</dt>
						<dd> <span><?php e($pageTexts[7]) ?></span></dd>

						<dt>status</dt>
						<dd> <span><?php e($pageTexts[9]) ?></span></dd>

						<dt>design year</dt>
						<dd> <span><?php e($pageTexts[3]) ?></span></dd>

						<dt>built area</dt>
						<dd> <span><?php e($pageTexts[5]) ?> m<sup>2</sup></span></dd>

						<?php
							// read text file
							require_once($path.'php/text-reader.php');
							listReader($pageTexts, $projectIndexStartingData , false);
						?> 
					</dl>

				<?php if ( $projectHasTeam ) { ?>
					<!-- project team -->
					<h3>
						<?php require($path.'img/misk/team-min.svg'); ?>
						<span>team</span>
					</h3>
					
					<?php // read text file
						require_once($path.'php/text-reader.php');
						listReader($projectTeamFile);
					?> 
				<?php } ?>

				<?php if ( $projectHasAward ) { ?>
					<!-- project awards -->
					<h3>
						<?php require($path.'img/misk/award-min.svg'); ?>
						<span>awards</span>
					</h3>
					<?php // read text file
						require_once($path.'php/text-reader.php');
						listReader($projectAwardFile,0,false);
					?> 
				<?php } ?>
				
				</div>
			</div>
		</section>

		<!-- project text -->
		<?php if ( $projectHasText ) { ?>
		<section class="about-section project-text-section">
			<h2 class="prject-info-title">
				<span>design proccess</span>
			</h2>
			<div class="about-text  project-text"
			id="project-text" data-maxHeight="400">
				<div  class="about-text-con" >
				<?php // read text file
					$previus_h_level = 2;
					require_once($path.'php/text-reader.php');
					theTextReader($projectTextFile);
				?> 
				</div>
			</div>
		</section>
		<?php } ?>

	</div>
</article>

<script>
	var projectGallaryMode = false;
	var showingVideoSlider = false;
	
	var isTehreAnyProjectText = <?php 
		if ($projectHasText) echo 'true'; else echo 'false';
	?>;
	var isThereAnyVideo = <?php 
		if ($projectHasVideo) echo 'true'; else echo 'false';
	?>;
</script>

<?php require('project-sliders.php'); ?>