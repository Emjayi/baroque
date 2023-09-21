<?php require($path . 'php/head.php') ?>

<body class="<?php
echo $pageClass;
if (isset($bodyClass))
	echo ' ' . $bodyClass;
if (isset($pageClass_noJS))
	echo ' ' . $pageClass_noJS;
?>">

	<!-- if these is js enabled , show the loading logo splash at the first -->
	<script>
		var theSiteTitle = document.getElementsByTagName('body')[0];
		theSiteTitle.classList.add('intro-loading');
		<?php if (isset($pageClass_noJS)):
			$pageClass_noJS = trim($pageClass_noJS);
			$pageClass_noJS_array = explode(' ', $pageClass_noJS);
			foreach ($pageClass_noJS_array as $pageClass_noJS) {
				?>
				theSiteTitle.classList.remove("<?= $pageClass_noJS ?>");
			<?php }endif ?>
	</script>

	<header class="main-container" id="header">
		<!-- main menu -->
		<nav class="nav">
			<div class="nav-ul" id="nav">
				<div class="nav-li">
					<a href="<?php echo $rootPath ?>about/" data-nav="about" tabindex="-1"
						class="smoooth focusable">about</a>
				</div>
				<div class="nav-li">
					<a href="<?php echo $rootPath ?>projects/" data-nav="projects" tabindex="-1"
						class="smoooth focusable">projects</a>
				</div>
				<div class="nav-li">
					<a href="<?php echo $rootPath ?>awards/" data-nav="awards" tabindex="-1"
						class="smoooth focusable">awards</a>
				</div>
				<div class="nav-li">
					<a href="<?php echo $rootPath ?>contact/" data-nav="contact" tabindex="-1"
						class="smoooth focusable">contact</a>
				</div>
			</div>
		</nav>

		<!-- logo -->
		<div id="logo" class="logo">
			<span class="logo-l">
				<span class="logo-1"></span>
				<span class="logo-2"></span>
				<span class="logo-3"></span>
				<span class="logo-4"></span>
				<span class="logo-5"></span>
			</span>
			<span class="logo-r">
				<span class="logo-1"></span>
				<span class="logo-2"></span>
				<span class="logo-3"></span>
				<span class="logo-4"></span>
				<span class="logo-5"></span>
			</span>
			<span class="logo-t">
				<span class="logo-1"></span>
				<span class="logo-2"></span>
				<span class="logo-3"></span>
				<span class="logo-4"></span>
				<span class="logo-5"></span>
			</span>
			<span class="logo-b">
				<span class="logo-1"></span>
				<span class="logo-2"></span>
				<span class="logo-3"></span>
				<span class="logo-4"></span>
				<span class="logo-5"></span>
			</span>
		</div>

		<!-- menu button -->
		<button title="menu" class="menu-btn" id="menu-btn" onclick="this.blur();">
			<span class="font-size-0">menu</span>
			<span class="menu-1"></span>
			<span class="menu-2"></span>
			<span class="menu-3"></span>
			<span class="menu-4"></span>
		</button>
		<noscript>
			<a href="<?= $rootPath ?>" class="menu-btn menu-btn-noJS">
				<span class="font-size-0">menu</span>
				<span class="menu-1"></span>
				<span class="menu-2"></span>
				<span class="menu-3"></span>
				<span class="menu-4"></span>
			</a>
		</noscript>

		<!-- instagram button -->
		<a href="<?php echo $insta_location; ?>" class="menu-soc focusable" target="_blank" tabindex="-1">
			<?php include($path . 'img/misk/insta.svg') ?>
			<span>our instagram page</span>
		</a>

		<!-- these divs have onclick event related to the menu -->
		<div id="menu-closer"></div>
		<div id="menu-go"></div>

		<!-- site title -->
		<div class="site-title" id="site-title">
			<h2><b>baroque</b></h2>
		</div>

	</header>

	<!-- start smooth state container -->
	<main class="main-container" id="smooth-con">

		<!-- this script contains page name , and changed by smoothstate -->
		<script>pageClass = '<?php echo $pageClass; ?>';</script>