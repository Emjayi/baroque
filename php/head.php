<?php

// load basic parameters and functions
require_once( $path.'php/intro.php');

// title
	$header_title = $title;
if (isset($pageTitle)){
	$header_title = $pageTitle.' | '.$title;
}

// description
if (!isset($page_description)) {
	$page_description = $description;
} 

// og image
	$defaultOGimage =$rootPath.'img/og.png';
if (!isset($pageOGimage)) {
	$pageOGimage = $defaultOGimage;
} 

// css varibles txt file 
$cssVaribles_fileName =
	'varibles.txt';

// ------------- start the html ------------------
// -----------------------------------------------

?><!DOCTYPE html>
<html lang="en" class="mob noJs">
<head>
	<!-- when these is no js , display something normal-->
	<script>
		document.documentElement.classList.remove('mob');
		document.documentElement.classList.remove('noJs');
	</script>
	
	<!-- general -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<title><?php e($header_title) ?></title>

	<meta name="keywords" content="Architect,
		designer, interior design,urbanism, landscape design, environment,
		public space,facade, elevation, plan, villa, architectural detail">

	<meta name="description" content="<?php e($page_description) ?>">
	<meta name="author" content="<?php e($site_owner) ?>">

	<!-- open graph -->
	<meta property="og:type" content="business.business">
	<meta property="og:title" content="<?php e($header_title); ?>">
	<meta property="og:description" content="<?php e($page_description); ?>">
	<meta property="og:image" content="<?php echo $pageOGimage ?>">
	<meta property="business:contact_data:locality" content="tehran">
	<meta property="business:contact_data:region" content="tehran">
	<meta property="business:contact_data:country_name" content="iran">

	<!-- tweter card -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="<?php e($header_title) ?>">
	<meta name="twitter:description" content="<?php e($page_description) ?>">
	<meta name="twitter:image" content="<?php echo $pageOGimage ?>">
	<meta name="twitter:image:alt" content="<?php e($header_title) ?>">

	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $rootPath ?>favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $rootPath ?>favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $rootPath ?>favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo $rootPath ?>favicon/site.webmanifest">
	<link rel="mask-icon" href="<?php echo $rootPath ?>favicon/safari-pinned-tab.svg" color="#333333">
	<link rel="shortcut icon" href="<?php echo $rootPath ?>favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#888888">
	<meta name="msapplication-config" content="<?php echo $rootPath ?>favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<!-- json LD -->
	<script type="application/ld+json">
		{
			"@context": "http://schema.org/",
			"@type": "Person",
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "iran",
				"addressLocality": "Tonekabon",
				"addressRegion": "Mazandaran",
				"telephone": "<?php echo $phone; ?>"
			},
			"name": "<?php e($site_owner); ?>",
			"url": "<?php echo $site_url; ?>",
			"image": "<?php echo $defaultOGimage; ?>",
			"sameAs":
			[
				"<?php echo $facebook_location; ?>",
				"<?php echo $insta_location; ?>",
				"<?php echo $linkedin_location; ?>"
			],
			"jobTitle": "architect"
		}
	</script>
	<?php

	// read css varibles tt file and load it 
	$cssVaribles =
		file( $path.'css/'.$cssVaribles_fileName,FILE_IGNORE_NEW_LINES);
	
	?> 
	<!-- basic js parameters -->
	<script>

		var SiteDomain = '<?php e($domain_name) ?>',
			siteIsLoaded = false,
			page,
			isotopScriptIsloaded = false,
			projectPageScriptIsLoaded = false,
			smoothLoaded = false,
			bypassEntranceAnimation = <?php if($bypassEntranceAnimation) echo 'true';else echo 'false';?>;

		function generateCssVarinbles() {
			var cssVarArray = [<?php
				$cssVaribles_index = 0 ; 
				foreach ($cssVaribles as $cssVarible){
					$cssVarible = trim( $cssVarible );
					if ( $cssVaribles_index != 0 ) echo ',';
					echo '"'.$cssVarible.'"';
					$cssVaribles_index++;
			}?>];
			var docHeightVh = window.innerHeight * 0.01 ,
				cssVaribleHeader,
				cssVaribleData;
			for ( i = 0 ; i < cssVarArray.length; i++ ) {
				cssVaribleHeader =
					cssVarArray[i] ;
				cssVaribleData =
					parseFloat(cssVarArray[i].substring(4));
				if ( cssVaribleData == 333 )
					cssVaribleData = 33.33333;
				cssVaribleData =
					(cssVaribleData * docHeightVh) + 'px';
				document.documentElement.style.setProperty(
					cssVaribleHeader, cssVaribleData
				);
			}
		};
		generateCssVarinbles();

	</script>
	<!-- css varibles when no js -->
	<noscript>
		<style>
			html{<?php
				foreach ($cssVaribles as $cssVarible) {
					$cssVarible = trim( $cssVarible );
					echo $cssVarible .':'. substr($cssVarible, 4) .'vh;';
				}
			?>}
		</style>
	</noscript>
	

	<!-- base css -->
	<link rel="stylesheet" href="<?php echo $rootPath ?>css/<?php e($css_style_file) ?>.css">

	<!-- page css -->
	<?php  if ( !isset($not_LazyLoad_cssFiles)) { ?>

	<script>var pagesCssFiles = [
		"<?php echo $rootPath; ?>css/<?php e($css_pages_file) ?>.css",
		"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;900&display=swap"];
	</script>

	<noscript>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="<?php echo $rootPath; ?>css/<?php e($css_pages_file) ?>.css">
		<link rel="stylesheet" href="<?php echo $rootPath; ?>css/no-js.css">
	</noscript>

	<?php } else { ?>

	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo $rootPath; ?>css/<?php e($css_pages_file) ?>.css">

	<?php } // end if (not LazyLoad cssFiles) ?> 
</head>