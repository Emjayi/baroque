<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title><?php echo $page_title; ?></title>

	<!-- fav icon -->
	<link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png" />
	<link rel="manifest" href="../favicon/site.webmanifest" />
	<link rel="mask-icon" href="../favicon/safari-pinned-tab.svg" color="#a09a8a" />
	<link rel="shortcut icon" href="../favicon/favicon.ico" />
	<meta name="msapplication-TileColor" content="#a09a8a" />
	<meta name="msapplication-config" content="../favicon/browserconfig.xml" />
	<meta name="theme-color" content="#ffffff" />

	<link rel="stylesheet" href="css/admin.css" />
</head>
<?php

require('../config.php');
//addres of link in the footer
$ftp_address = 'ftp://ftp.'.$domain_name.'/public_html/';
 
?>

<body>

	<div class="bg" id="bg-paralex"></div>
	<script>
		// add paralex effect to "bg-paralex"
		window.addEventListener('scroll', throttle(parallax, 14));

		function throttle(fn, wait) {
			var time = Date.now();
			return function() {
				if ((time + wait - Date.now()) < 0) {
					fn();
					time = Date.now();
				}
			}
		};

		function parallax() {
			var scrolled = window.pageYOffset;
			var parallax = document.getElementById("bg-paralex");
			// You can adjust the 0.4 to change the speed
			var coords = '-' + (scrolled * 0.4) + 'px';
			parallax.style.transform = 'translateY(' + coords + ')';
		};

	</script>
	
	<!-- ===== title ===== -->
	<h1>
		<?php if ( !isset($page_back_link)) $page_back_link = 'index.php'; ?>
		<?php if ( !isset($notBackLinkHead)) { ?> 
		<a href="<?php echo $page_back_link; ?>">
			<?php } ?>
			
			<!--<img src="css/img/logo.png">-->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.8 69" style="width:8em;max-width:90vw;"><title>mrk. office</title><path fill="#444" d="M12.6 51l.1 1.4c.9-1.1 2-1.6 3.4-1.6 1.5 0 2.6.6 3.1 1.8a4 4 0 013.6-1.8c2.4 0 3.7 1.5 3.8 4.4v7.9h-3.8v-7.6c0-.6-.1-1.1-.3-1.4-.2-.3-.6-.4-1.1-.4-.7 0-1.3.3-1.7 1v8.5H16v-7.6c0-.6-.1-1.1-.3-1.4-.2-.3-.6-.4-1.2-.4-.7 0-1.3.3-1.7 1v8.4H9.1V51h3.5zM36.1 54.4l-1.2-.1c-1.2 0-1.9.4-2.3 1.1V63h-3.8V51h3.5l.1 1.6c.6-1.2 1.5-1.8 2.6-1.8l1 .1.1 3.5zM42.3 58.6l-1.1 1.1v3.4h-3.8V45.9h3.8V55l.4-.5 2.8-3.5h4.5l-4.2 5 4.5 7.1h-4.3l-2.6-4.5zM52.2 59.4c.6 0 1.1.2 1.5.5s.6.8.6 1.4-.2 1-.6 1.4-.9.5-1.5.5-1.1-.2-1.5-.5c-.4-.4-.6-.8-.6-1.4 0-.5.2-1 .6-1.4.4-.3.9-.5 1.5-.5z"/><path fill="gray" d="M56.4 56.9c0-1.2.2-2.3.7-3.2a5.3 5.3 0 015.1-3c1.8 0 3.2.6 4.3 1.7S68 55.1 68 57v.1a6 6 0 01-1.6 4.5 5.6 5.6 0 01-4.2 1.7c-1.7 0-3.1-.5-4.1-1.5-1-1-1.6-2.4-1.7-4.2v-.7zm3.7.2c0 1.1.2 1.9.5 2.5.3.5.9.8 1.6.8 1.3 0 2-1 2.1-3.1v-.4c0-2.2-.7-3.2-2.1-3.2-1.3 0-1.9.9-2 2.8l-.1.6zM70.5 63.1v-9.5h-1.8V51h1.8v-1c0-1.4.4-2.4 1.2-3.2.8-.8 2-1.1 3.4-1.1l1.8.2v2.8l-.9-.1c-1.1 0-1.7.5-1.7 1.5v.9h2.4v2.6h-2.4v9.5h-3.8z"/><path fill="gray" d="M78.8 63.1v-9.5H76V51h2.8v-.4c0-1.6.6-2.8 1.6-3.7 1-.8 2.4-1.2 4.1-1.2 1.1 0 2.4.2 3.9.6l-.5 3-.6-.2c-.8-.2-1.7-.3-2.6-.3-1.4 0-2.2.7-2.2 2v.2H85v2.6h-2.4v9.5h-3.8zm11.4 0h-3.8V51h3.8v12.1zM97.6 60.4c.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.2h3.5c0 1.3-.5 2.4-1.4 3.3s-2.2 1.3-3.7 1.3c-1.8 0-3.1-.6-4.2-1.7a6.5 6.5 0 01-1.5-4.6v-.2c0-1.2.2-2.3.7-3.2.5-.9 1.1-1.7 1.9-2.2.8-.5 1.9-.8 3-.8 1.6 0 2.8.4 3.7 1.3s1.4 2.1 1.4 3.5h-3.5a2 2 0 00-.5-1.4c-.3-.3-.7-.5-1.2-.5-1 0-1.5.6-1.7 1.9l-.1 1.6c0 1.2.1 2.1.4 2.5.5.5 1 .8 1.6.8zM110.2 63.3a5.8 5.8 0 01-6.2-6V57c0-1.2.2-2.3.7-3.3a5.3 5.3 0 015.1-3 5 5 0 014 1.6c1 1.1 1.5 2.5 1.5 4.4v1.5h-7.5c.1.7.4 1.2.9 1.6s1 .6 1.8.6c1.2 0 2.1-.4 2.8-1.3l1.7 2c-.5.6-1.1 1.2-2 1.5-.9.5-1.8.7-2.8.7zm-.4-9.6c-1.1 0-1.8.7-2 2.2h3.8v-.3c0-.6-.1-1.1-.5-1.4s-.7-.5-1.3-.5z"/><path fill="#444" d="M77.4 17.7v-6.2h-6.2V5.3H65v6.2h-6.2V5.3h-6.2v6.2h-6.2v6.2h6.2v6.2h-6.2v6.2h6.2v6.2h6.2v-6.2H65v6.2h6.2v-6.2h6.2v-6.2h-6.2v-6.2h6.2zM65 23.9h-6.2v-6.2H65v6.2z"/></svg>
			
			<?php if ( !isset($notBackLinkHead)) { ?>
		</a> 
		<?php } ?> 
	</h1>
