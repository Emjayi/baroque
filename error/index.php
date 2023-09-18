<?php

// ------------ page parameters 
$path = '../';
$pageClass = 'errorr';
$pageTitle = 'Not Found';

// ------------- load the page 
require ($path.'php/header.php');

?> 
<article>

	<h1 class="home-title error-page-title">page not found</h1>

	<div class="home-svg">
		<svg id="error-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="267.8px" height="119px" viewBox="0 0 267.8 119" enable-background="new 0 0 267.8 119" xml:space="preserve">
			<path stroke-miterlimit="10" d="M226.5,65.5v-65h-23l-12,15.8V0.5h-113v65h-5v-65H50.7L0.5,70.6v23.9 h43v24h30v-24h5v24h113v-24h5v24h30v-24h14v-29H226.5z" />
			<polygon stroke-miterlimit="10" points="43.5,65.5 39,65.5 43.5,57.2 " />
			<polygon stroke-miterlimit="10" points="196.5,65.5 191.9,65.5 196.5,57.2 " />
		</svg>
	</div>

</article>

<?php
// ------------ load the footer 
require ($path.'php/footer.php');

?>