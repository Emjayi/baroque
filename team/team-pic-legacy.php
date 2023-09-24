<?php

$paralexRatio = array(
	0.1,
	0.15,
	0.2
);

$fillerImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
$teamImageLen = sizeof($teamImage);


for ($i = 0; $i < $teamImageLen; $i++) {

	$src = makePathAbs($teamImage[$i]);
	$imgAlt = $pageTitle . ' ' . $domain_name . ' ' . $site_owner . ' -' . ($i + 1);
	$imgClass = 'team-img-ovr';
	if ($i == 0)
		$imgClass = 'team-img';
	$imgClass .= ' team-img-paralex';
	?>
	<img class="<?php e($imgClass) ?>" alt="<?php e($imgAlt); ?>" data-ratio="<?php echo $paralexRatio[$i] ?>" <?php if ($i == 0) { ?> src="<?php e($src) ?>" <?php } else { ?> src="<?php e($fillerImg) ?>" data-src="<?php e($src) ?>" <?php } ?>>
<?php } // end loop
