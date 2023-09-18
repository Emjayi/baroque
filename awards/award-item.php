<?php 

// generate make the path 
$awardFolderPath = $path.$dataFolder.'/awards/*';

// search the path for folders
$awardFolderArray = glob($awardFolderPath,GLOB_ONLYDIR );
$awardFolderArrayLen = sizeof($awardFolderArray) - 1;
sort($awardFolderArray);

// a function for encoding the image to base64 url
function generateBase64Img($pathToImage) {
	$image_type = pathinfo($pathToImage, PATHINFO_EXTENSION);
	$image_data = file_get_contents($pathToImage);
	$base64 = 'data:image/' . $image_type . ';base64,' . base64_encode($image_data);
	return $base64;
}

// ------------- main loop 
for ( $i = 0 ; $i <= $awardFolderArrayLen ; $i++ ) {
	$j =  $awardFolderArrayLen - $i;
	// set the subfolder
	$awardFolder = $awardFolderArray[$j];
	// search subfolder for txt file
	$awardTextFile = $awardFolder.'/info.txt';
	$awardText = file($awardTextFile,FILE_IGNORE_NEW_LINES );
	// set the text varibles 
	$awardTitle = $awardText[1];
	$awardInfo  = $awardText[3];
	$awardYear  = $awardText[5];
	
	// search the folder for images 
	$awardImage = glob($awardFolder.'/*.png');
	// if there is some image in the fomder , set this pic
	if ( sizeof($awardImage) > 0 ) $awardImage = $awardImage[0];
	// id there is no image , set the default pic
	else $awardImage = $defaultAwardImage;

	$sectionClass = ($j % 2) + 1;
	
	
	// ------------- generate the html
	?> 
		<section class="award-sec award-sec-<?php echo $sectionClass ?> award-show">
			<div class="award-text">
				<h2><?php e($awardTitle) ?></h2>
				<p><?php e($awardInfo) ?></p>
			</div>
			<div class="award-img">
				<img
				src="<?php echo makePathAbs($awardImage); ?>"
				alt="<?php e($awardTitle) ?>">
			</div>
			<p class="award-year"><?php e($awardYear) ?></p>
		</section>
	<?php 
}
