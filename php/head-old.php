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

// ------------- start the html ------------------
// -----------------------------------------------

?><!DOCTYPE html>
<html lang="en">
<head>

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
			var cssVarArray = [
					['--vh40' , 40 ], ['--vh10' , 10 ],
					['--vh12' , 12 ], ['--vh20' , 20 ],
					['--vh50' , 50 ], ['--vh70' , 70 ],
					['--vh-50', -50], ['--vh85' , 85 ],
					['--vh75' , 75 ], ['--vh80' , 80 ],
					['--vh25' , 25 ], ['--vh-25', -25],
					['--vh52' , 50 ], ['--vh100', 100],
					['--vh72' , 72 ], ['--vh2'  , 2  ],
					['--vh35' , 35 ], ['--vh82' , 82 ],
					['--vh4'  , 4  ], ['--vh333', 33.333]
				];
			var docHeightVh = window.innerHeight * 0.01 ;
			var cssVaribleHeader , cssVaribleData;
			for ( i = 0 ; i < cssVarArray.length; i++ ) {
				cssVaribleHeader = cssVarArray[i][0] ;
				cssVaribleData = (cssVarArray[i][1] * docHeightVh) + 'px';
				document.documentElement.style.setProperty(cssVaribleHeader, cssVaribleData);
			}
		};
		generateCssVarinbles();
	</script>

<?php if(!$detectmobile && !$isMobileOs){// prevent viewing by mobile and caching css files ?>

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
	</noscript>
	
	<?php } else { ?>
	
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo $rootPath; ?>css/<?php e($css_pages_file) ?>.css">
	
	<?php } // end if (not LazyLoad cssFiles) 

} // end if (detectmobile & isMobileOs) ?> 
</head>
<?php
	
	// when viewing by mobile is prevented, show this massage 
	if ( $detectmobile && $isMobileOs ) {  ?>
	<body
		style="display:flex;
		align-items:center;
		justify-content:center;
		margin:0;
		padding:0;
		height:100vh;
		width:100vw">
		<p  style="font-family:sans-serif;
			margin:0;
			padding:0;
			font-size:3vmin"
		>
			this website is not optimized for mobile browsers yet :(
		</p>
	</body><?php

	// when viewing by mobile is prevented, do not show rest of page
	die();

} ?>