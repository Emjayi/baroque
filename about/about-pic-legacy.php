<?php

$paralexRatio = array(
	0.1,
	0.15,
	0.2
);

$fillerImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
$aboutImageLen = sizeof($aboutImage);


for ( $i = 0 ; $i < $aboutImageLen ; $i++ ) {
	
	$src = makePathAbs($aboutImage[$i]);
	$imgAlt = $pageTitle.' '.$domain_name.' '.$site_owner.' -'.($i + 1);
	$imgClass = 'about-img-ovr';
	if ( $i == 0 ) $imgClass = 'about-img';
	$imgClass .= ' about-img-paralex';
		?> 
		<img
			class="<?php e($imgClass) ?>"
			alt="<?php e($imgAlt); ?>"
			data-ratio="<?php echo $paralexRatio[$i] ?>"
		<?php if ( $i == 0 ) { ?> 
			src="<?php e($src) ?>"
		<?php } else { ?> 
			src="<?php e($fillerImg) ?>"
			data-src ="<?php e($src) ?>"
		<?php } ?> 
		>
<?php } // end loop

