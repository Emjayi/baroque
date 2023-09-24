<?php

// ------------- search team folder
// Path specified in the main about.ohp file
$teamMembersArray = glob($teamPath . '*', GLOB_ONLYDIR);

// sort team folders by name 
$teamMembersArray1 = array();
foreach ($teamMembersArray as $teamFolderArrayItem)
	array_push($teamMembersArray1, $teamFolderArrayItem);
$teamMembersArray = $teamMembersArray1;

$teamMembersLen = sizeof($teamMembersArray);

// read text file for order of team items
$sort_File = $path . 'DATA/team-sort.txt';
$sortBYFile = false;
if (file_exists($sort_File)) {
	$sortBYFile = true;
	$sortArray = file($sort_File, FILE_IGNORE_NEW_LINES);
}

// ------------- lazy load placeholder
$loading_img =
	'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

// ------------- logomark svg 
$logoMark =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284 284"><path d="M284 113V57h-57V0h-57v57h-57V0H57v57H0v56h57v57H0v57h57v57h56v-57h57v57h57v-57h57v-57h-57v-57h57zm-114 57h-57v-57h57v57z" id="mrk-logo-mark"/></svg>';

$logoMarkCopy =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284 284"><use xlink:href="#mrk-logo-mark"/></svg>';

$instaIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><use xlink:href="#insta-icon"/></svg>';

$lazyIndex = 2;

// ------------- main loop 
for ($index = 0; $index < $teamMembersLen; $index++) {

	if ($sortBYFile)
		$i = $sortArray[$index];
	else
		$i = $index;

	$member = $teamMembersArray[$i];

	// read about team member txt file 
	$memberTextFile = glob($member . '/*.txt');
	$memberText = file($memberTextFile[0], FILE_IGNORE_NEW_LINES);

	$memberName = $memberText[1];
	$memberTitle = $memberText[3];
	$memberYear = $memberText[5];
	$memberInfo = $memberText[7];
	$memberSoc = $memberText[9];
	$memberNike = $memberText[11];

	// check user has link 
	$memberHasLink = false;
	if (strlen($memberSoc) > 10) {
		// $memberSoc   = substr($memberSoc,0, -1);
		$memberHasLink = true;
	}

	// search folder for images 
	$memberImage = glob($member . '/*[.jpg,.JPG]', GLOB_BRACE);
	$memberImageHover = makePathAbs($memberImage[1]);
	$memberImage = makePathAbs($memberImage[0]);


	// ------------- generate the HTML
	?>
	<li class="team-item">
		<div class="team-text">
			<h3 class="team-title">
				<?php e(ucwords($memberName)) ?>
			</h3>
			<p class="team-subtitle">
				<?php e(ucwords($memberTitle)) ?>
			</p>
			<p class="team-info">
				<?php e($memberInfo) ?>
				<span>
					<?php
					echo 'since ';
					e($memberYear);
					if ($memberHasLink) { ?>
						<a href="<?php e($memberSoc) ?>" title="<?php e($memberName) ?>&#39;s instagram page" target="_blank">
							<?php echo $instaIcon ?>
						</a>
					<?php } ?>
				</span>
			</p>
			<div class="team-top">
				<div class="team-number">
					<?php
					if ($index == 0)
						echo $logoMark;
					else
						echo $logoMarkCopy;
					echo ($index + 1);
					?>
				</div>
				<p class="team-nikname">
					<?php e($memberNike); ?>
				</p>
			</div>
		</div>
		<figure class="team-img <?php if ($index > $lazyIndex)
			echo 'lazy'; ?>">
			<div class="team-img-paralex">
				<!-- normal image -->
				<img data-src="<?php echo $memberImage ?>" src="<?php
				   if ($index > $lazyIndex)
					   echo $loading_img;
				   else
					   echo $memberImage; ?>" alt="<?php e($memberName) ?>" class="team-img-main" />
				<!-- smile image -->
				<img data-src="<?php echo $memberImageHover ?>" src="<?php
				   if ($index > $lazyIndex)
					   echo $loading_img;
				   else
					   echo $memberImageHover; ?>" alt="<?php e($memberName) ?>, smiling" class="team-img-hover" />
			</div>
			<?php if ($index > $lazyIndex) { ?>
				<div class="team-loading" aria-hidden="true">
					<div class="ld" aria-hidden="true">
						<span class="ld-1"></span>
						<span class="ld-2"></span>
						<span class="ld-3"></span>
						<span class="ld-4"></span>
						<span class="ld-5"></span>
						<span class="ld-6"></span>
						<span class="ld-7"></span>
						<span class="ld-8"></span>
						<span class="ld-9"></span>
					</div>
				</div>
			<?php } ?>
		</figure>
	</li>
	<?php

} // end loop 

// last team item, the job : 
?>
<li class="team-item team-item-job" id="job-btn">
	<div class="team-text">
		<div class="team-title" aria-hidden="true"> You </div>
		<p class="team-subtitle"> Job Opportunities </p>
		<p class="team-info">
			for more information ,<br> just click here
			<span aria-hidden="true"> In the near future </span>
		</p>
		<div class="team-top">
			<div class="team-number">
				<?php
				echo $logoMarkCopy;
				echo ($teamMembersLen + 1);
				?>
			</div>
			<p class="team-nikname"> newbie </p>
		</div>
	</div>
	<div class="team-img team-img-job" aria-hidden="true">
		<div class="team-img-paralex team-img-job">
			<!-- plus picture -->
			<div class="job-icon" role="img">
				<span class="job-icon-1"></span>
				<span class="job-icon-2"></span>
			</div>
			<!-- people picture -->
			<svg class="job-icon-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 458 522">
				<path
					d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
					class="team-svg"></path>
			</svg>
		</div>
	</div>
</li>