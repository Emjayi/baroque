<?php

// ------------ page parameters 
$path = '../';
$pageClass = 'contact';
$pageTitle = 'Contact us';

// ------------- load contact-icons svg 
require ('contact-svg.php');

// load basic parameters and functions
require( $path.'php/intro.php');

// ------------- generate page description
$page_description =
	'Be in Touch with MRK office , contact info, address, telephone, email and online links. '. $site_owner. ', architect and designer';

// ------------- load the page 
require ($path.'php/header.php');

// ------------ url of map ifremae  
$mapURL = 'https://pejmantayebi.com/my-webs/mrk-map/';
// $mapURL = $rootPath .'map/';

?> 
<!-- go back button -->
<button class="hide-until-load header-button"
		id="go-back"
		onclick="this.blur();">
	<span class="header-button-txt">go back</span>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		<path d="M92 100L36 50 92 0H58L2 50l56 50z"/>
	</svg>
</button>

<!-- contact main page container -->
<article class="scrolbar horizential" id="contact-con">
	<div class="container contact-container" id="contact-container">
	
		<!-- title -->
		<div class="title-box">
			<h1>Contact<span class="hide-mob"> us</span></h1>
			<div class="guide-line" id="guide-line"></div>
		</div>
		
		<!-- contact info -->
		<section class="contact-section">

			<h2 class="contact-title">
				<span>contact info</span>
			</h2>

			<ul class="contact-text-section">
				<li>
					<a class="contact-item" href="#"
					   id="show-map-btn">
						<span class="contact-icon">
							<?php mapicon() ?> 
						</span>
						<span class="contact-link-txt">
							<?php e($postal_address) ?> 
						</span>
					</a>
				</li>
				<li>
					<!-- phone -->
					<a class="contact-item"
					   href="tel:<?php e($phone);?>" target="_blank">
						<span class="contact-icon">
							<?php phoneicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>Phone:</b>
							<?php e($phone_display) ?> 
						</span>
					</a>
				</li>
				<li>
					<!-- mobile -->
					<a class="contact-item"
					   href="tel:<?php e($phone_mob);?>" target="_blank">
						<span class="contact-icon">
							<?php mobicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>mobile<span class="hide-mob"> &amp; whatsapp</span>:</b>
							<?php e($phone_mob_display) ?> 
						</span>
					</a>
				</li>
				<li>
					<!-- email -->
					<a class="contact-item" target="_blank" id="email-link" href="#"
					   data-mail="info" data-mailinfo="<?php e($domain_name);?>">
						<span class="contact-icon">
							<?php mailicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>Email:</b>
							<i class="contact-mail-sign">info </i> 
							<?php e($domain_name);?> 
						</span>
					</a>
				</li>
			</ul>
		</section>
		<!-- Social networds -->
		<section class="contact-section">
		
			<h2 class="contact-title">
				<span>Social networks</span>
			</h2>	
			
			<ul class="contact-text-section">
				<li>
					<!-- instagram -->
					<a class="contact-item"
					   href="<?php e($insta_location);?>" target="_blank">
						<span class="contact-icon">
							<?php instaicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>Instagram:</b>
							<?php e($insta_location_txt);?> 
						</span>
					</a>
				</li>
				<li>
					<!-- linked In-->
					<a class="contact-item"
					   href="<?php e($linkedin_location);?>" target="_blank">
						<span class="contact-icon">
							<?php linkedInicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>LinkedIn:</b>
							<?php e($linkedin_location_txt);?> 
						</span>
					</a>
				</li>
				<li>
					<!-- facebook -->
					<a class="contact-item"
					   href="<?php e($facebook_location);?>" target="_blank">
						<span class="contact-icon">
							<?php fbicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>FaceBook:</b>
							<?php e($facebook_location_txt);?> 
						</span>
					</a>
				</li>
				<li>
					<!-- telegram -->
					<a class="contact-item"
					   href="<?php e($telegram_location);?>" target="_blank">
						<span class="contact-icon">
							<?php telegramicon() ?> 
						</span>
						<span class="contact-link-txt">
							<b>Telegram:</b>
							<?php e($telegram_location_txt);?> 
						</span>
					</a>
				</li>
			</ul>
		</section>

		<!-- maps section -->
		<div class="map-container no-pointer-events" id="map-container">
			<script>
				var mapFrameSrc = 
				'<iframe  ' +
				'	class="map-frame"  ' +
				'	id="mapFrame"  ' +
				'	src="<?php echo $mapURL ?>"  ' +
				'	title="mrk office location in map">  ' +
				'</iframe>  ';
			</script>
		</div>
	</div>
</article>
<?php

// ------------ load the footer 
require ($path.'php/footer.php');


?> 