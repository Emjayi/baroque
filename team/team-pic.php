<?php

$imgPAth = $rootPath . 'img/team-bg/';

$fillerImgTrasparent =
	'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

$fillerImg1 =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAxCAQAAACGqMSbAAAAQ0lEQVR42u3PMREAAAgEIL9/DnNqCwcPGpCeeiEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJxa+nlCWaAUy1AAAAABJRU5ErkJggg==';

$fillerImg2 =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAQAAADAQmhRAAAAUUlEQVR42u3PMREAAAgEIL9/HANqCwcPGpCeeiEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKHFmU7cdqr9/XEAAAAAElFTkSuQmCC';

$fillerImg3 =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA/CAQAAAC8oqXrAAAATklEQVR42u3PMREAAAgEIL9/KpNpCScPGpCeeiEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKnFl3+boDsZxURAAAAAElFTkSuQmCC';

$fillerImg4 =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABKCAQAAADnTTmZAAAAVklEQVR42u3PAQ0AAAgDIN+/nI20xwcNyN5UiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhIe+QBaSGGIarVrhgAAAAASUVORK5CYII=';


?>
<!-- placeholder low quality picture  -->
<img src="<?php echo makePathAbs($teamImage[1]); ?>"
	alt="<?php e($pageTitle . ' ' . $domain_name . ' ' . $site_owner); ?>" class="team-img" style="visibility:hidden" />

<!-- parallex background on right side -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="432.3 0 46.7 320"
	class="team-main-svg-bg">
	<defs>
		<path id="team-svg-a1" d="M432 0v320h47V0h-47z" />
	</defs>
	<clipPath id="team-svg-b1">
		<use xlink:href="#team-svg-a1" overflow="visible" />
	</clipPath>
	<g clip-path="url(#team-svg-b1)">
		<image overflow="visible" width="2117" height="1338" transform="translate(-28) scale(.2393)"
			xlink:href="<?php echo $fillerImg2 ?>" data-src="<?php echo $imgPAth ?>bg-main.jpg" class="team-main-lazy">
		</image>
	</g>
</svg>

<!-- parallex picture -->
<svg viewBox="1617 854 479.1 320.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" class="team-main-svg">

	<!-- bg 0 (back wall) -->
	<!-- original transform = "matrix(.2391 0 0 .2391 1740.5 890.01)" -->
	<g class="team-img-paralex" data-ratio="0.018">
		<image transform="matrix(.2391 0 0 .2391 1735 890.01)" width="1079" height="788" overflow="visible"
			xlink:href="<?php echo $fillerImg4 ?>" data-src="<?php echo $imgPAth ?>bg-back.jpg" class="team-main-lazy">
		</image>
	</g>


	<!-- bg 1  -->
	<defs>
		<path id="team-svg-i"
			d="m1603.3 854v320h506.9v-320h-506.9zm373.7 216h-219v-170.6c73-0.1 146-0.2 219-0.2v170.8z" />
	</defs>
	<clipPath id="team-svg-h">
		<use overflow="visible" xlink:href="#team-svg-i" />
	</clipPath>
	<g clip-path="url(#team-svg-h)" class="team-img-paralex" data-ratio="0.015">
		<image transform="matrix(.24 0 0 .24 1603.2 854)" width="2112" height="1333" overflow="visible"
			xlink:href="<?php echo $fillerImg3 ?>" data-src="<?php echo $imgPAth ?>bg-main.jpg" class="team-main-lazy">
		</image>
	</g>


	<!-- bg 1 floor -->
	<defs>
		<path id="team-svg-y" d="M1658,1070.7V1174h409.3v-103.3H1658z" />
	</defs>
	<clipPath id="team-svg-z">
		<use xlink:href="#team-svg-y" overflow="visible" />
	</clipPath>
	<g clip-path="url(#team-svg-z)" class="team-img-paralex" data-ratio="0.012">
		<image overflow="visible" xlink:href="<?php echo $fillerImg3 ?>" data-src="<?php echo $imgPAth ?>bg-main.jpg"
			transform="matrix(.24 0 0 .24 1603.2 854)" width="2112" height="1333" class="team-main-lazy"></image>
	</g>



	<!-- fg 1 a -->
	<defs>
		<path id="team-svg-g"
			d="m1868.4 959.2c-0.1-0.1-0.2-0.1-0.2-0.2 0.1 0 0.1-0.1 0.2-0.1v0.3zm156 95.7c-0.7-2.8-1.5-5.7-2.3-8.4-0.2-1.5-0.3-3-0.5-4.5-0.4-2.1 0-5.7 0.9-6.7 0.7-0.8 1.7-1 2.3-1.9s0.5-2.3 1-3.4c0.4-1 1.5-2.4 1.2-3.8-0.4-0.7-0.8-1.5-1.1-2.2-0.1-0.8-0.1-1.5-0.2-2.3-0.3-1.1-0.7-2.2-1-3.3 0-1.4-0.1-2.7-0.1-4.1-0.9-4.8-1.3-10.4-3.7-13.9-1.1-1.7-3.3-3.3-5.4-4-1.4-0.5-3.4-0.1-3.8-1.5v-0.7c-0.1-0.4-0.9-0.8-0.9-1.4v-3.2c0-0.9-0.7-1.8-1.1-2.8-0.4-1.6 0.8-2.7 0.4-4.5-0.4-2.1-1-4.8-1.9-6.6-2-3.6-8.1-6.8-13.1-3.7-4.2 2.7-4.5 6.6-5.8 11.9l-0.3 2.4c-0.4 1.2-1.8 3.3-1.9 4.5-1.2 0.3-2.7-0.1-3.8-0.2-0.1-0.8-0.1-1.7-0.2-2.5 0.2-1.5 0.8-3.3 0.4-5.3-1.3-6.3-4-14.8-10.4-15.8-2.2-0.3-4.8 1.4-6 2.4-1.9 1.4-4 2.9-4.9 5.3-0.6 1.4 0 3.3-0.3 5-0.7 3.7-0.4 7.3 0.2 11 0 1.1 0.1 2.2 0.1 3.2-1.8 0.6-3.6 1.2-5.4 1.9-1.6 1-1.7 3.4-2.4 5.5-0.4 0.5-0.8 1-1.1 1.5-0.9 1.2-1.3 2.6-1.5 4.5-0.1 0-0.1 0.1-0.2 0.1-0.6-1.3 0.4-4.9 0-6.8-0.6-1.5-1.1-3.1-1.7-4.6-0.9-1.4-6.9-3.5-9-3.9-0.3-0.6 0.3-4.4 0.5-5.2 0.8-3-0.1-11.5-1.8-12.8l-3.3-1.8c-2.8-1-5.7 0.5-6.8 1.9-1 1.3-2.2 1.9-2.7 3.6-0.3 2.6-0.6 5.1-0.9 7.7-0.3 1.7 0.3 3.2-0.2 4.5-0.1 0.1-0.2 0.2-0.3 0.2-0.9-1.3-1.6-2.6-3.2-3.1-1.5-0.4-3.1-0.1-3.7-1.5-0.6-1.6 0.4-3.4 0.1-5.3-1-5.2-0.3-8.7-5.2-10.2-1.2-0.4-2.1-0.1-3.1 0.2-4.5 1.4-4.6 6-5.4 10.9-0.3 1.5 0.8 2.5 0.6 3.7-0.2 0.9-0.5 1.9-0.5 3.2-1.3 0.9-3.9 1.2-4.9 2-1.3 1-3 6.4-3.5 8.3 0 0.9-0.1 1.7-0.1 2.6-0.4 0.8-0.8 1.5-1.1 2.3-0.4 1.8-0.2 5.6 0.5 6.6 0.5 0.7 4.7 0.9 5.7 1.2 0.8 1.9-0.8 4.2-0.8 5.6v15.3c0 1.3-1.7 3.2-0.9 4.6 0.3 0.5 1.5 0.4 2.2 0.6 0.2 0.7 0.5 1.4 0.8 2 0 0.8 0.1 1.6 0.1 2.4 1 4.3 2.7 8.9 3.4 13.6 0.4 2.4 0 4.7-0.3 6.7-0.1 1.9-0.2 3.8-0.2 5.8-0.3 0.9-0.6 1.8-1 2.7-0.2 1.2 0.8 2.6 0.5 3.9-1.3 2.7-5.9 2.7-7.2 5 0.1 0.8 0.4 1 0.6 1.6 1.2 0.5 3-0.1 4.1-0.2 3.5-0.4 7.2-0.3 10.6-1 0.4-1-0.4-3.4-0.6-4.4 0-3-0.1-5.9-0.1-8.9 1 2 0.5 3.3 1 6 0.4 2.1 2.4 6.7 2 8.6-0.3 1.5-1.5 2.8-1.1 5 2.3 1.4 6.8 0.5 7.6-1.6 0.3-0.8-0.1-1.8-0.2-2.8 0.3-0.3 0.4-0.4 0.6-0.9 0.1-0.1 0.2-0.2 0.3-0.2 0.2 1.9 0.5 3.8 0.7 5.8 0.7 2 1.4 4.1 2 6.1 0.2 1.3 0.4 2.5 0.6 3.8 0.3 0.8 1.2 1.1 1.5 1.8 0.2 0.6-0.1 1.7-0.2 2.1-0.3 1.5-0.4 2.5-0.8 3.8-0.6 1.9-1.9 3.5-1.4 6.3 0.2 1 0 1.6 0.4 2.3 0.5 0.9 1.9 0.5 3.1 0.7 5.3 1.1 5.7-3.8 6.4-7.8 0.2-1.2-0.6-2.7-0.8-3.7-0.6-2.5-1.1-4.9-1.5-7.2 0.1-3.5 0.1-7 0.2-10.5-0.4-2.7-1-6.3-0.3-9.6 0.4-1.9 1.3-3.3 1.7-5.4 0-1.7 0.1-3.4 0.1-5 0.2 0 0.4-0.1 0.6-0.1 0.2 1.8 0.4 3.7 0.7 5.5 0.1 1.3 0.1 2.7 0.2 4 0.5 1.7 1.5 3.6 2 5.3 0.2 0.7 0 1 0.1 1.7 0.4 2.1-0.2 5.3 0.8 7.6v3.8c0 1.9 0.8 4.6 0.5 6.7-0.4 2.7-1 6-1.7 8.5-0.1 1.1-0.3 2.3-0.5 3.4-0.6 2.2-3.5 3.7-2.1 7.1 0.8 1.9 6.1 1.6 7.6 0.4 0.7-1.1 1.3-2.2 2-3.2 0.3-1.3 0-3.9-0.2-4.8-0.2-1.3 0.3-4.3 0.2-6.1 0.4-0.3 0.7-0.5 1.4-0.5 0-2.1-0.8-3.9-0.3-6.2 0.4-2 1.6-3.8 2-6.1 0.6-2.8-0.2-5.7 0.6-8.3-0.2-1.2-0.3-2.4-0.5-3.7-0.2-4.5-1.1-7.6-1.1-12.5 1.3-0.8 2.7-1.2 4.2-1.9 0-3.2-1.1-6.6-0.8-10.3 0.8 0 3.5 2.2 3.9 2.8 0.8 1.1 0.6 4.2 1 5.8 0.5 2.7 0.6 6.4 0.6 9.6v4c0 2 0 4.6 1 6.9v3.6c0 3.9-0.6 8.3 0.5 11.2 0.7 2 3.5 1.8 4.5 3.3v2.6c0 1.4 3.8 4 4.8 5.3-0.9 5.1-3.4 8.7-5.6 12.5-0.9 1.5-4.1 2.9-2.3 5.8 0.6 1 2.2 1.2 3.4 1.6 2.3 0.8 2.6 0.6 4.6-0.2 1.3-0.5 2.3-0.8 3.3-1.5 2.3-1.8 2.6-5.8 4.9-7.6 1.5-1.2 4.3-1.3 5.1-3.2 1-2.5-2.5-6.3-2.4-9.4 3-1.7 8.6-1.4 10.8-3.9 0.3-1.9 0.7-3.8 1-5.8h0.1c0.7 3 1.5 6.9 2.2 10.3 1.3 4.6 4 7.1 3.9 13-0.6 0.6-1.2 1.1-1.8 1.7-0.2 0.4-0.4 0.7-0.6 1.1-0.5 0.2-1 0.5-1.5 0.7l-1.5 1.8c0.2 2.5-1.1 2.5-1.1 5.3 0.8 1 5.9 3 8.1 1.9 0.8-0.4 1.3-1.3 1.5-1.9 0.1 0 0.1-0.1 0.2-0.1 0.1 2.2 1.3 2.3 2.2 3.6 1.5 2.2 0.1 4.1 3.3 5.2 2.2 0.8 7.1-0.1 7.6-1.4s-0.9-3.4-1.4-4.3c0.3 0 0.5 0.1 0.8 0.1-0.2-1.7-2.9-5.4-3.8-6.8-0.3-0.3-0.6-0.6-0.9-1-1.3-3.5 2.3-7.1 3-9.8 1.1-4.5 2-8.7 3-13.2v-2.8c0-2.5 0-5.3 0.6-8 0.3-1.2 0.3-2.9 0.6-4.2 0.4-1.3 1.1-2.6 1.6-3.8 0.8-2.1-0.5-9.6 0.5-10.6 1.2-1.3 8-1.7 10.2-2.5 0.5-2.7-0.6-8-1.2-10.3-0.1-2.2-0.4-4.5-0.7-6.8z" />
	</defs>
	<clipPath id="team-svg-f">
		<use overflow="visible" xlink:href="#team-svg-g" />
	</clipPath>

	<g clip-path="url(#team-svg-f)" class="team-img-paralex" data-ratio="0.014">
		<image transform="matrix(.2394 0 0 .2394 1736.2 951.5)" width="1242" height="833" overflow="visible"
			xlink:href="<?php echo $fillerImg2 ?>" data-src="<?php echo $imgPAth ?>fg-0.jpg" class="team-main-lazy">
		</image>
	</g>


	<!-- fg 1 - kohzadi -->
	<defs>
		<path id="team-svg-e"
			d="m1868.4 959.2c-0.1-0.1-0.2-0.1-0.2-0.2 0.1 0 0.1-0.1 0.2-0.1v0.3zm21 121.5c0.3-1.5-0.5-3.4-0.2-4.9 0.2-1.1 0.8-3.1-0.2-4.2v-4.1c0-2.1-0.2-4.6-0.5-6.5 0.1-2.4 0.3-4.8 0.4-7.1-0.4-1.2-0.7-2.4-1-3.7-0.4-2.1 0-5 0.3-6.8 0.4-2.5 0.1-5.1 0.7-7 0.5-1.5 0-4.1-0.2-5.3-0.5-3.5 0.7-6.7 0.2-9.9-0.5-3.3-0.2-6.8-0.6-9.8 0-1.3-0.1-2.5-0.1-3.8-0.4-1.9-1-6.4-0.5-8.9 0.3-1.5 1.4-2.6 2-3.7 1.1-1.9 2.1-5.8 1.4-9.3-0.9-4.4-2.9-4.2-6.7-5.4-0.7-0.4-1.4-0.8-2-1.1-0.9-0.4-1.6-0.4-2-1.2-0.5-1-0.8-4.2-0.4-5.8 0.2-0.6 0.5-1.3 0.7-1.9 0.6-2.8-0.9-4.7-1.4-6.3-0.1-0.6-0.2-1.1-0.3-1.7-1.1-0.5-2.2-1-3.3-1.5-1.4-0.7-3.4-0.5-4.8 0-3.4 1.2-3 3.1-2.9 7.3-0.1 1.1-0.1 2.2-0.2 3.2 0.5 1.2 0.9 2.4 1.4 3.6l0.6 3.6c-0.7 0.5-1.7 1.3-2.6 1.5-1.8 0.5-4.9 0.1-6 1.2-1.9 1.9-3 4.3-3.7 7.6 0 1.1-0.1 2.1-0.1 3.2-0.2 1-0.4 1.9-0.2 2.9 0.3 1.9-0.9 3.9 0.2 5.8 0.9 1.5 3.3 1.6 4.7 2.6 0.7 2.9 0.4 10.5-0.1 13.4-0.1 2.2-0.1 4.5-0.2 6.7-0.4 2.1-0.7 5.3-0.2 7.8 0.3 2.4 0.5 4.8 0.8 7.1 0.5 2 1.7 4.9 1.7 7v3.9c1 3.3 0.3 7.9 0.9 11.4-0.1 1.1 0 2.3-0.1 3.4 0.6 2.4 0.2 4.6 0.2 7.3v5.1c-1 4.7-8.5 5.5-8.5 9.9 4.6 0.7 9-0.4 13.2-1.5 1.3-0.3 3.3-0.2 4-1.2 0.8-1.9-2.1-5.2-1.4-8.9l0.6-1.5c-0.1-0.8-0.1-1.6-0.2-2.4 0.3-2 0.7-4.8 0.3-7.1-0.3-1.5-0.9-3.1-0.6-5 0.6-3.2 0.8-7.2 1.5-10.4 0.1-2 0.3-4 0.4-6 0.5-1.9 1-3.9 1.5-5.8 0.1-0.1 0.1-0.3 0.2-0.3s0.2 0 0.3 0c0.6 4 1.2 6.8 1.9 9.8 0.1 1 0.2 2 0.3 3.1 0.4 1.2 0.7 2.4 1.1 3.6 0.3 0.4 0.8 0.8 1 1.2 1.3 3.9 1.4 8.8 2.4 13v6.7c0 2.1 0.7 5.2 0.8 7.5 0 1.9-1.2 5.9-0.3 7.5 1.4 2.3 5.7 1.3 8.2 0.6 0.8-2.9-3-5.3-2.4-8.5z" />
	</defs>
	<clipPath id="team-svg-d">
		<use overflow="visible" xlink:href="#team-svg-e" />
	</clipPath>
	<g clip-path="url(#team-svg-d)" class="team-img-paralex" data-ratio="0.016">
		<image transform="matrix(.2394 0 0 .2394 1736.2 951.5)" width="1242" height="833" overflow="visible"
			xlink:href="<?php echo $fillerImg2 ?>" data-src="<?php echo $imgPAth ?>fg-0.jpg" class="team-main-lazy">
		</image>
	</g>


	<!-- fg 1 c -->
	<defs>
		<path id="team-svg-c"
			d="m1868.4 959.2c-0.1-0.1-0.2-0.1-0.2-0.2 0.1 0 0.1-0.1 0.2-0.1v0.3zm-18.5 38.6c-1.6-1-3.8-2.5-4.9-4s-2-3.9-3.5-5c-1.4-1-3.6-1.4-4.3-3.1s0.1-4.5-0.2-6.6c-0.4-2.2-2.4-6.9-3.9-7.7-3.2-1.7-7.8-1-9.3 1.9-0.2 0.8-0.3 1.7-0.5 2.5-1.1 2.8-2.3 5.2-1.4 9-1.3 1.7-3.6 2-5.4 3.3-1.2 0.9-1.5 2.3-2.4 3.4-1.2 1.5-3.2 2.6-4.6 4.1-2.7 0.5-3.8-1.8-5.6-2.4-1.1-0.1-2.2-0.1-3.3-0.2-3.2-1.8-1.3-8.4-2.2-12.9-0.7-3.3-4.4-7-7.7-7.8-1.3-0.3-2.6 0.5-3.5 0.8-3.6 1-3.5 1.6-4.9 4.8-2.1 5.2 0.1 11.3 1.6 16-0.3 0.3-0.5 0.6-0.8 1 0-1.8-1.1-2.8-1.1-4.1v-1.6c-1-1.3-2.3-3-3.6-3.4-0.8-0.1-1.6-0.1-2.4-0.2-2.3-0.5-4.4-1.5-6.3-2.4-0.5-0.2-1-0.3-1.6-0.5-2.7-2.6 1.1-6.6 1.1-9.9-0.2-0.1-0.5-0.3-0.7-0.4-0.2-1.5 1-3.9 0.8-4.7-0.4-0.6-0.7-1.1-1.1-1.7-0.2-0.5-0.5-1.1-0.7-1.6-0.7-0.2-1.3-0.4-2-0.6-1.7-0.7-4.4-2.2-6.8-1.2l-1.3 1.3c-0.9 0.5-2 1.3-2.5 2.2-1 1.7 0.5 5.3 0.6 7.2-0.1 0-0.3 0.1-0.4 0.1s-0.2 0.1-0.2 0.1c-0.6 3.5 4.7 6.4 1.9 10.2-0.9 1.2-3.6 1-5.2 1.6-4 1.4-6.4 4.5-7.4 9-0.5 2.5 0.4 4.7 0.9 6.7 0.3 1.3 0 2.7 0.4 4.1 0.8 2.9 2.2 5.5 3.2 8.3 0.3 0.5 0.6 1.1 0.9 1.6 0.4 1.5-0.7 3.3-1 4.4-0.7 2.9 1.4 4.3 0.9 7.5-0.5 2.8-2 7.8-1.3 11 0.4 2 0.8 4.7 1.4 6.7 0.5 1.8-0.1 4.3 0.4 6.1 1 3.6 2.3 6.9 3 10.6 0.4 2-1.4 2.9-1.1 4 0.2 0.5 0.5 1.1 0.7 1.6 0 0.7-0.1 1.5-0.1 2.2 0.2 0.8 0.9 1.5 1.1 2.5 0.3 1.5 0.3 3.9-0.2 5.1-0.3 0.9-1.1 1.8-0.8 3.4 0.3 1.1 0.7 2.3 1 3.4 0.1 1.1 0.1 2.1 0.2 3.2 0.5 1.5 1.8 2.2 1.2 4.7-0.7 2.7-5.7 5.7-3.7 8.6 0.9 1.3 4.7 0.8 5.8 0.1 0.5-0.5 1-1.1 1.5-1.6 1-0.7 2-1.4 2.9-2 0.2-1.7 0.4-3.4 0.6-5-0.2-0.6-0.5-1.1-0.7-1.7 0-1.1 0.7-1.1 0.9-1.8-0.1-0.4-0.1-0.9-0.2-1.3 0.1-1 0.1-1.9 0.2-2.9-0.1-1.2-0.2-2.5-0.2-3.7 0.4-2.3 1.1-6.1 0.7-8.8-0.3-1.7-1-3.9-0.7-5.9 0.1-0.7 0.5-1.4 0.6-2.1 0.4-0.7 0.5-1.4 1.5-2.1v-2.8c0-3.8-1.2-7.7-0.2-11 0.5-0.1 1-0.3 1.5-0.4 0.2 1.4 0.3 2.8 0.5 4.1 1.1 4.6 0.8 9.7 1.7 14.6 0.5 3-1.1 5.3-0.4 8.1 0.2 0.7 0.9 1.1 0.9 1.5v1.7c0 2.7-1.2 5.2 0 7 0.3 0.4 0.3 0.7 0.5 0.7-0.4 1.3-1.1 2.9 0.1 3.8-0.1 1.1-0.7 5.5-0.3 6.3 0.8 0.9 1.6 1.9 2.4 2.8 0.1 0.2 0.2 0.5 0.2 0.7 0.8 0.9 6.7 1.1 7.2-0.2 1.2-2.9-3.3-5.9-3.3-7.7v-2c0-0.9 0.1-1.7 0.1-2.6 0.2-0.4 0.7-0.5 0.9-1 0.1-1.7 0.1-3.5 0.2-5.2 0.5-2.7 1.1-6.4 1.7-9.3 0.3-1.4-0.2-2.8-0.4-3.7 0-1.1-0.1-2.2-0.1-3.2-0.4-1.2-1.1-1.8-0.9-3.7 1.3-0.3 2.2 1.1 3.5 0.2 0.8 1.8 0.7 4.4 1.4 6.6 0.5 1.7 1.6 3 2 4.9 0.7 3.4-0.5 7.3 0.2 11 0.6 3.3 1.7 6.6 2.5 9.7 0.2 0.9-0.1 2 0.1 2.8 0.1 0.5 0.8 0.9 0.7 1.6-0.1 0.4-0.5 0.4-0.4 1.1 0.2 1.4 1.1 2.1 1.5 3.2 0 0.6 0.1 1.3 0.1 1.9 0.1 0.6 0.7 1 0.8 1.5 0.3 0.8-0.5 1.6-0.7 2.1-0.4 1.6-0.6 3.1-1.5 4.3-0.5 0.8-1.8 1.2-2 2.3-0.2 0.9-0.5 2.9-0.1 3.7 0.9 1 6.9-0.5 7.8-0.6 0.5-0.7 0.6-1.8 1.1-2.6 0.4-0.6 1.5-1.2 2-1.6 0-0.1 0.1-0.1 0.1-0.2 0.8 1.5-0.2 3.5-0.2 5 0.7 0.4 1.4 0.7 2 1.1 3.5 1 7.8-0.5 6.8-4.7-0.3-0.8-0.7-1.5-1-2.3-0.1-0.9-0.2-1.9-0.2-2.8-0.3-0.4-0.8-0.6-1.1-1.1 0.6-2.9 1.2-5.7 1.8-8.6 0-0.7-0.1-1.5-0.1-2.2 0.7-3.3 1.1-8 1.7-11.7 0.4-2.5-0.5-4.7-0.8-6.3 0-1 0.1-1.9 0.1-2.9-0.8-2.9 0-6.6 0.4-9.3 0.3-1.9-0.3-4.2 0.2-5.8 0.7-2.1 1.6-3.1 3.7-3.8 1.1-0.4 3.8-0.1 4.1-1.2 0.4-1.5-0.4-3.5-0.7-4.7-0.4-2.3 0.1-4.6-0.3-6.6-0.5-2.2-1-4.3-1.5-6.5-0.4-0.9-0.7-1.8-1.1-2.7-0.9-4.3 3.5-7.8 6.3-8.9 0.2-0.2 0.4-0.7 0.6-0.7h0.1c-0.2 2-2.1 7.6-1.5 9.7 0.4 0.4 0.8 0.8 1.1 1.2 0.4 0.6 0.3 2.9 0.2 3.8-0.2 1.7-0.4 3.4-0.7 5.1 0 1.3 0.1 2.6 0.1 3.9-1.2 7.3-1 15.2 0.1 22.4 0.6 3.7-1.4 6.3-2.1 8.8-0.3 0.9-0.4 3.5 0.2 4.1 0.8 0.9 5 0.1 6.5 0 0.9-2.5-0.9-7.2-0.7-10.4 0.2-3.7 1.4-5.4 2-8.5 1.1-5.5-0.6-15.3 3.5-17.5 1.1 0 5.7-0.2 5.7 0.4 0.2 0 0.3 0.1 0.6 0.1 2 3.5 2.5 9.7 2.5 14.3v2.4c1 1.5 0.8 4.1 0.5 5.8-0.2 0.5-0.5 1-0.5 1.5v2.4c0 1.2-0.8 2.1-0.8 3.8 0.3 0.1 0.7 0.6 1 0.6h1.9c0.3 0 0.6 0.4 0.9 0.6 1.9 1.3 5.6 1.6 7.6 0.2 0.1-0.5 0.2-1.1 0.3-1.7-1.9-2.4-4.5-2.7-5.5-6.5-0.8-3-0.2-7.7 0.3-10.6 0.6-3.5 0.4-6.5 1.4-9.9v-3.1-4c-0.2-1-0.6-2.3-0.8-3.6-0.5-3.3 0.5-6.1 0.9-8.4 0.4-1.8 0.1-4 0.3-5.5 0.4-2.2-0.3-4.7-0.6-6.3 0.1-1.3 0.2-2.7 0.2-4 1-0.1 1.8-0.3 2.4-0.7 0.4-0.6 0.8-1.1 1.2-1.7 0.3-0.4 0.8-0.4 1.1-0.7 0.7-0.7 1.1-1.7 1.7-2.5 1-1.3 2.5-2.3 3.4-3.8 0.3-0.7 0-1.5 1-2.2v-0.2c0 0.2-0.1 0.4 0 0.6 1.3-1.3 0.9-4.4-0.1-5.8-0.2-0.5-1.2-0.8-1.8-1.2z" />
	</defs>
	<clipPath id="team-svg-b">
		<use overflow="visible" xlink:href="#team-svg-c" />
	</clipPath>
	<g clip-path="url(#team-svg-b)" class="team-img-paralex" data-ratio="0.013">
		<image transform="matrix(.2394 0 0 .2394 1736.2 951.5)" width="1242" height="833" overflow="visible"
			xlink:href="<?php echo $fillerImg2 ?>" data-src="<?php echo $imgPAth ?>fg-0.jpg" class="team-main-lazy">
		</image>
	</g>


	<!-- fg 2 -->
	<defs>
		<path id="team-svg-a"
			d="m2089.2 1068.2v50.2 2.2c-0.6 2.2-5.1 7-4.6 9.7 0.4 2 2.3 2.7 3.1 4.2-0.2 0.3-0.5 0.5-0.7 0.8 0 1.6 0.8 2.7 1.7 3.3h0.2v-4.1c0.1 0 0.1 0.1 0.2 0.1 0 3.4-0.1 6.8-0.1 10.2v-0.2c-1-1-1.1-3.3-3.5-2.6-0.5 0.1-1.1 0.4-1.3 0.7-0.9 1.1-0.4 7.2-0.4 9.3-0.1 3.7-0.1 7.5-0.2 11.2-0.6 3.2-1.1 7.1-1.2 10.6h-3.6c0.1-1 0.2-1.9 0.3-2.9h-0.3c-4.8 2.5-8.1 2.6-13.1 0.3-1.1-0.5-2.6-0.7-2.9-2-0.7-3.2 4-7.4 4.4-10.3-0.5 0.3-1.2 1.2-1.8 0.7h0.2c0.6-0.8 2.1-1.2 2.5-2 0.8-1.6 0.6-2.9 1.7-4.2-4.9 0.1-8.2 1.4-13.4 1.4h-3.2c-1.4-0.3-2.7-0.5-4.1-0.8-0.7-0.2-1.4-0.5-2.1-0.7 0 1.7-0.1 3.5-0.1 5.2-0.4 2.8-0.2 6.4-0.2 9.5v4.4c0.1 0.7 0.5 1 0.7 1.5h-12.4c-1 0-3.8 0.4-4.4-0.2-0.9-1.9-0.7-4.6-1.2-6.8-0.4-2.2-0.4-4.5-0.9-7.1-0.5-2.9-1.2-6.9-0.8-10.3-0.8 0.3-2.5 2.7-2.8 3.6 0.2 5.5 0.3 11 0.5 16.5 0 1.3 0.1 2.7 0.1 4-1.3 0-2.2-0.3-2.9-0.8 0.4-1.5 0.4-4.1 0.2-5.8-0.1-3.5-0.1-7.1-0.2-10.6-0.1 0.1-0.2 0.1-0.2 0.2-0.2 0.6-0.6 1.2-1 1.5h-0.3c-0.2-0.3-0.5-0.6-0.7-1-0.3 0.1-0.6 0.3-0.9 0.4-0.3 2.5-0.2 6.1-0.6 8.8-0.4 2.2-1.1 4.6-0.6 7.1-0.7 0-1.5-0.1-2.2-0.1-0.6-0.5-0.5-2.2-0.3-3.2l0.6-8.4c-0.1 0-0.2 0.1-0.2 0.1-1.8 3.5-4.7 5.2-6.9 8-1.1 1.4-2.1 3.2-3.5 4.3h-20.5c0.1-0.5 0.1-1 0.2-1.5l-0.1-0.1c-1.8 0.9-9.3-0.4-9.8-1.5v-1.5c-0.1-0.3-0.7-0.8-0.4-1.5 0.7-1.9 3.2-2.9 4.1-4.7 0.3-0.7 0.5-1.4 0.8-2 0-3.6 0.1-7.1 0.1-10.7-0.3-1.1-0.5-2.3-0.8-3.4-0.2-1.4 0.7-1.7 0.4-2.9-0.6-2.6-1.9-5.3-2.8-7.6-1.6-4.2-2.8-8.7-4.3-12.8-0.8-2.2-0.7-5.4-1.9-7.4-3.4 0-7.6 2.7-9 4.8 0 3.3-0.5 7-1.1 9.8v4.6c-0.5 5.8-1 11.6-1.5 17.5h-2.3c0.5-7.2 1-14.5 1.6-21.7 0.4-2.3 0.9-6.7-0.2-8.1-0.5 0.5-1.1 0.7-1.7 1.1-1.2 1-2.4 2-3.5 3-0.7 0.4-1.2 0.4-1.8 0.8-0.4 2.4-0.5 5.5-0.5 8.4v2.6c0.4 0.7 0.9 1.4 1.3 2 0.6 1.2 1.2 3.2 1.5 4.5 1.4 6.1-3.6 7.4-7.8 5.1-1.3-0.7-1.2-3-2.4-3.8s-3.2 2.5-5.4 1.2c-1.6-0.9-2.1-2.8-2.8-4.7-0.6-1.7-1.2-3.5-1.8-5.4-0.4-0.8-0.8-1.7-1.2-2.5-0.6-2.8-1.1-5.5-1.7-8.3-2.4-1.2-2.7-3.4-3.8-5.9-1.2-2.7-2.7-5.3-4.2-7.7-1.2-1.9-2.6-3.1-3-5.8h-0.1c0 3.9 0.1 7.3 0.7 10.6 0.1 0.8 0.2 3.1-0.2 3.5-0.8 0.4-2 0.1-2.9 0-0.1-6.9-0.2-13.9-0.3-20.8-1.4-1.3-2.9-1.1-5-1.9-0.4-0.2-0.7-0.5-1.1-0.7-2.7-1.2-3.9-1.3-5.9-3.2-1.3 0.9-2.5 1.9-3.8 2.8l-0.6 37.2c-0.7 0-1.4 0.1-2 0.1l0.9-36c-0.9 0-1.9-0.1-2.8-0.1-0.2-3.7 1.3-5.3 2-8 0.7-2.5 0.3-6 0.3-8.9-1.8 0.1-2.8-0.6-3.4-1.8 0.6-1.2 2.4-1.6 3.9-1.9 1.7-3.4 3.5-6.7 5.2-10.1 0.3-1.5-0.4-2.6-0.6-3.7-0.4-2.1 0.6-3.5 0.9-4.9 0.3-1.2-0.5-2.6-0.2-3.5 0.7-0.9 1.5-1.8 2.2-2.7 0.7-1.3 0.9-2.6 1.5-4.1 0.6-1.1 1.1-2.2 1.7-3.3 0.2-0.7 0.3-1.4 0.5-2.1 0.4-0.6 0.7-1.3 1.1-1.9 0.3-0.9-0.6-1.5-0.2-2.6 0.5-1.6 2.5-5.1 3.6-6.1 1.4-0.2 2.8-0.4 4.2-0.6 3.5-2.5 1.4-12.4 2.8-17.4 0.4-1.3 3.6-5.2 4.8-5.7 1.1-0.5 3.4-0.2 4.6 0 1.3 0.2 2.8 0.2 3.8 0.8 2.3 1.5 4.3 7 4.9 10.4v7.2c-0.1 0.5-0.4 1.1-0.2 1.6 0.8 2.3 3.7 2.8 6.1 3.3 0.7 0.1 1.4 0.1 2.1 0.2 2.6 1.3 2.1 8.5 3.5 11.5 2.6 0.3 5.5-1.2 8.3-0.7 0 0.1 0.1 0.2 0.1 0.2 0.6 1.4-0.1 4.3-0.4 5.8-0.5 4.7-1 9.5-1.5 14.2-0.2 1.4-1 3.9-0.5 5.4 1.5-0.7 2.5 0.1 3.7-1.1 0 3.6-0.3 6.2-1.3 8.7-0.9 1.9-1.9 3.9-2.8 5.8-0.4 1.8 0.4 3.4 0.7 4.4v2.1c0.4 0.8 1.2 1.4 1.5 2.4h0.1c0.3-4.8 3.1-9.5 6-11.9 1.4-1.1 4.9-2.3 4.4-5-1.1-1.2-2.4-1.3-3.1-3-2.4-6 0.5-16.1 3-20 0.7-1.2 2.2-1.5 2.8-2.9 1.1-2.7 0.1-7.2 0.9-10.2 2.4-0.5 4.7-0.5 7.2-1 1.2-0.2 2.9 0.3 3.9-0.2s2.4-2.6 2.8-3.7c0.5-1.4-0.2-3.1-0.5-4.1 0-2.1-0.1-4.1-0.1-6.2 1.2-5.2 2.1-9.4 6-11.7 2-1.2 5.1-0.3 6.8 0.5 4.8 2.2 7.6 5.4 8.7 11.3 0.5 2.6-0.2 5.4-0.7 7.6-0.2 0.8-0.8 2.2-0.5 3.3 0.4 1.5 2.6 1.7 4 2.3 2.2 0.9 3.5 2.8 5.3 4 0.6 0.2 1.1 0.5 1.7 0.7 0.1 2.4 1.9 2.7 3.1 3.9 1 1.1 0.7 3.2 2 4 0.6 0.4 2.8 0.3 3.5 0.1 2.7-0.8 6.1-1.6 8.3-3.1-0.2-2-0.4-4.1-0.6-6.1-0.1-0.8 0.2-2.4 0.2-3.5 0-5.5 0-11.2 1.7-14.3-0.8-1.2 0.2-1.2 0-2 0-0.2-0.4-0.6-0.2-1.1 0.2-0.6 0.8-1.7 0.6-2.4-0.3-0.4-0.6-0.7-0.9-1.1 0.3-0.6 0.6-4.3 0.3-5.4-0.4-1.2-1.7-3.1-1.1-5.1 1.1-3.7 1.6-8.7 3.1-12 1.3-2.8 4.5-4.5 7.2-6h0.9c0.9-0.2 4.8-2 5.2-2.6 0.6-1.4-0.3-2.7-0.4-3.9 1.2-1.8 0.8-2.7 0.3-5 0-0.5-0.1-1-0.1-1.5-0.3-0.3-0.6-0.6-0.9-1-0.2-0.8-0.4-1.5-0.6-2.3-0.5 0-1-0.2-1.3-0.6-0.1-0.5-0.1-1.1-0.2-1.6-0.3-1.1-1.7-4.6-0.2-5.6 0.5-0.3 1.1 0 1.7 0.2 0-0.1 0.1-0.1 0.1-0.2 0.5-2.4-0.7-5.1-1.2-7.1-0.2-0.9 0-2-0.2-2.8 0.5 0.1 1.5-1.1 1.7-1.6-0.3 0.1-0.5 0.2-0.8 0.2v-0.6c0.6-1.1 1.7-2.1 3.5-2v-0.3c-0.3-0.1-0.2-0.1-0.4-0.2 0.1-0.3 0.1-0.4 0.1-0.9h0.1l0.1-0.1c0.7-0.2 0.4-0.6 0.9-0.9s1.3-0.1 1.7-0.3c0.1-0.1 0.2-0.3 0.3-0.5 1.6-0.7 3.4 0.4 4.7 0 0.9-0.3 1.4-1.1 2.9-0.8 0.7 0.7 1.4 1.5 2 2.2 0.6 0.1 1.2 0.1 1.7 0.2 0.9 0.6 1.8 1.1 2.8 1.7 0.8 0.7 1.2 2.1 1.7 3.1 1.1 2.3 3.3 4.9 2.5 9-0.5 1.1-1 2.3-1.5 3.4 0.2 0.5 0.4 0.6 0.7 0.9 0 1.4-2.6 5.3-3.4 6.5-0.9 0.1-1.2 0.1-1.7-0.4-0.4 0.5-0.4 1-0.6 1.9-0.7 3.9 1.1 3.6 2.4 5.7 0.1 0.6 0.3 1.2 0.4 1.8 0.6 1.1 5.2 2.4 6.6 3.1 1.8 0.9 4.2 1.3 6.2 2.2 2.4 1.1 4.7 3.4 6.2 5.5v44.8c-1 3.5-3.1 6.1-5 8.7-0.7 0.9-1.9 1.6-2.3 2.8-0.7 2.4 1.5 7 2 9.4 0.5 2.7-0.7 7.1 0.5 9.2 1.6 0.3 3.1 0.4 4.9 0.4zm-196.9 50.9h-2c-0.3-5-0.5-9.9-0.8-14.9h-0.1c-0.2 7.3-0.4 14.7-0.6 22-0.4 2.8 0.5 6.3-0.4 8.6-0.6-0.1-1.2-0.2-1.8-0.2l0.9-41.7c-0.4 0.2-0.6 0.4-0.9 0.2-0.9-0.3-1.4-0.9-2.6-0.9l-1.5 1.2c-0.9 0.6-2.1 0.7-3.2 1.1-0.1 0.7-0.8 1.5-0.6 2.4l0.6 0.9c0.2 0.7-0.1 1-0.2 1.5-0.4 1.8 1 3.4-0.4 4.6l-0.2-0.2c-0.3-1.3 0.3-2.6 0-4.1-0.1-0.6-0.5-1.3-0.3-2.2 0.1-0.8 0.6-2 0.2-2.8h-0.1c-0.1 2.1-1.8 2.7-1.3 5.7 0.2 2.5 0.4 5.1 0.6 7.6 0.1 0.6 0.7 1.4 0.4 2.2-0.4-0.1-0.8-0.1-1.2-0.2 0.2-1.4 0-3.2-0.6-4.1-0.3-0.3-0.5-0.6-0.8-0.9-0.3-0.9 0.4-1.7 0.5-2.3 0.3-1.5 0-3.9-0.5-4.8-0.4-0.8-1.3-0.6-1.9-1.1-0.2-0.4-0.5-0.9-0.7-1.3-2.3 0.2-4.6 0.4-6.8 0.6-0.1 0.2-0.3 0.3-0.4 0.5-0.3 1 0.1 2.3 0.2 3.1 0.1 3.8 0.1 7.6 0.2 11.4-0.5 3.1-0.8 6.2-1.3 9.7-0.3 1.9 0.7 4.9 0.4 7-0.2 0.9-0.4 1.9-0.6 2.8 0 2.7-0.1 5.3-0.1 8-0.4 0.9-1.6 1.2-2 2v3.2c-0.4 1.8-3 2.6-5.5 2.1-2.3-0.4-3.7-0.6-4.2-3 0-0.7-0.1-1.5-0.1-2.2 0.9-3 3.5-5.7 4.2-9.4 0.5-2.9-0.7-8.1-1.1-10.9 0-0.8-0.1-1.7-0.1-2.5-1.2-6.2-1.5-13-1.5-20.6-0.1 0.1-0.2 0.1-0.2 0.2-1.4 2.2-2.7 4.4-4.1 6.6 0.1 4.1 0.2 8.2 0.2 12.3h-0.1c-0.4-0.1-0.9-0.2-1.3-0.2-0.2-2.9-0.4-5.8-0.6-8.8-0.4 0-0.7 0-0.9 0.2-0.6 0.3-1.5 2.8-2 3.5-1.3 2.3-2.5 4.7-3.8 7-0.5 1.1-0.8 2.3-1.4 3.2-0.4 0.6-3.6 3.1-4.5 2.9-1.2-0.2-4.3-2.1-4.4-2 0-0.2-0.1-0.3-0.1-0.5h-0.1c0.5 4.4 1 8.7 1.5 13.1-0.2 0.1-0.3 0.2-0.5 0.3-0.4 0.1-0.8 0.1-1.3 0.2-0.1 0-0.1-0.1-0.2-0.1-0.3-4.5-0.7-9-1-13.5-0.3-1.2-2.4-1.5-2.1-3 0.4-0.4 0.7-0.8 1.1-1.2 0-0.8 0.1-1.7 0.1-2.5 0-3.9-0.4-7.3-1.1-10.8-0.3-3.1-0.5-6.2-0.8-9.3-0.4-0.3-2.1-1.4-2.6-0.6-2.6 2.2-5.2 4.7-8.1 6.5-1.4 0.8-2.9 0.6-4.2 1.4l0.3 9.3c-0.5 2.7-0.4 6.4-0.4 9.7v3.7c0.3 1.4 1.2 2.5 1.5 4.1 0.5 2.6-0.1 5.9 0.7 8.1 0.4 1.1 1.3 1.6 1.9 2.4 0.8 0.9 1.6 1.9 2.4 2.8 1.5 1.2 3.1 2.1 4.4 3.6 0.9 1.1 2.6 1.3 2.6 3.3-0.5 1.3-1.6 2.3-2.7 3.1-5.3 3.7-10.3-2.3-13.1-4.5-1.2-0.6-2.3-1.2-3.5-1.8-0.8-1.4 0.1-3.7-0.3-5.5-0.3-1.4-1.4-2.3-2.3-3.2 0-1.3 0.8-2.6 0.3-3.9-0.3-0.9-1.9-1.5-2.3-3.2 0.2-1.2 0.3-2.4 0.5-3.6-0.4-2.2-1.2-4.3-1.9-6.1-0.4-1 0.1-2.1-0.6-2.7-1.3-0.8-2.3-0.7-2.4-2.9 0-0.7 0-1.6-0.2-2h-1.4c-1.8 1.1-0.9 4.7-1.3 7.3-0.3 1-0.5 1.9-0.8 2.9-0.3 1.4 0.7 2.3 0.3 3.3-0.9 2.2-6.7-3.1-7.7-3.8 0.7 8.9 1.4 17.8 2 26.7-0.6 0.2-1.3 0.3-1.9 0.5-1-3.1-0.5-7.4-1.1-11-1.1-7-1-14-2.1-20.7-0.4-3.5-0.7-7-1.1-10.5h-0.3c-1 0-5.5 1.3-6 1.8 0.1-3.9-0.5-5.6-1.3-8.2-0.3-1-0.4-2.4-1.1-3-0.2 0.1-0.3 0.1-0.5 0.2-0.6 0.6-0.1 3 0 3.9 0.2 2.6 3.5 4.7 2.8 7.8-1.5 6-1.4 13.7-0.4 20.3 0.8 10.5 1.5 21 2.3 31.5-0.6 0.2-1.3 0.4-1.9 0.6-0.4-4.9-0.7-9.7-1.1-14.6-0.9-6-0.6-12.4-1.6-18-0.4-3.5-0.8-7-1.3-10.5-0.3-0.1-0.7-0.2-1-0.2-1.4-0.6-3.3-1.5-3.6-3.2-3.6 0.7-2.3 11.1-3.1 15.2-0.3 1.6 0.2 4-0.7 5-0.7-0.2-1.4-0.3-2-0.5 0.1-5.7 1.5-11.6 1.9-17.1h-0.1c-1.3 0.8-2.5 1.5-3.8 2.3-2.5 1-5 1.9-7.5 2.9l-0.3 17.1c0 1.2 0.2 5.8-0.2 6.4-0.4 0.4-1.4 0.4-2.2 0.3-0.1-4.8-0.2-9.6-0.2-14.4 0-2.1 0.4-6-0.2-7.6-0.3 2.4-1 4.9-1.8 7-0.4 0.9-0.8 1.8-1.2 2.8-0.2 1.4-0.4 2.8-0.6 4.1-0.7 2.8-1.5 5.7-2.2 8.5-0.3 1.5-0.5 3-0.8 4.5-0.6 1.4-1.1 2.8-1.7 4.2-0.2 0.7 0 1.7-0.3 2.5-0.2 0.5-0.8 0.7-1 1.4-1.2 3.7-3.4 9.8-0.8 13.3h-21.1c0.2-1.4 0.4-3.4 0.1-4.8-0.2-1.1-1.2-2.2-0.9-3.8 0.7-3.1 0-8.8-0.6-12.5-0.5-6.4-1-12.8-1.6-19.2-1-0.2-1.9-0.5-2.9-0.7v0.6c1 13.5 1.9 26.9 2.9 40.4h-3.1c-0.9-13.2-1.7-26.5-2.6-39.7-0.1 0-0.1 0.1-0.2 0.1-0.7 3.4-5.4 3.1-6.5 5-0.6 1.4-0.1 4.3-0.2 6-0.2 2.7-0.3 5.3-0.5 8v5.4c-0.3 1.1-0.6 2.3-0.9 3.4-0.2 1 0 1.7-0.2 2.5-0.8 2.7-2 6.4-2.6 9.3-4.4 0-8.8-0.1-13.2-0.1l-0.9-4.8-0.9-6.9c0.1-2.9 0.1-5.8 0.2-8.8-0.8 0.5-1.8 0.8-2.7 1.3 0 3.2 0.3 5.9 0.8 8.7 0.1 3.5 0.1 7 0.2 10.6h-29.4v-0.1l0.2-0.2c0.2-0.4 0.5-0.8 0.7-1.2-0.8-0.1-1-0.4-1.3-0.9 0.1-2.4 2-2.5 3-3.9 0.7-1.1 1.5-2.2 2.2-3.2 2.2-3.8 0.2-7.2-0.7-10.6-2.9 0-5.4-0.1-7.2-1.2-0.8-0.5-2.2-2.1-3.5-1.6-0.8 0.4-1.1 1.3-1.6 2-0.7 1-1.9 1.7-3 2.3-0.3 1.7 0 4.3 0.3 6.2 0.3 4.1 0.6 8.3 0.9 12.4h-3.9c-0.2-4.8-0.9-9.4-1.5-14-0.1 0-0.1-0.1-0.2-0.1-0.2 0.1-0.4 0.3-0.6 0.4-0.4 1.5-2.1 4.4-3.6 4.7v-0.5c0.2-0.5 0.6-1.8 0.2-2.4-0.6-0.6-1.2-1.1-1.8-1.7-1.1-1.6-2.1-3.2-3.2-4.8 0 0.1-0.1 0.2-0.1 0.3-0.1-0.4-0.1-0.7-0.2-1.1h-0.1c-0.1 0.1-0.1 0.2-0.2 0.3 0-0.1-0.1-0.2-0.1-0.3-0.2 6.4-0.4 12.7-0.6 19.1h-0.6v-46.8c0.4-1.3 1.3-3.3 2-4.4 0.7-0.9 1.7-1.3 2.3-2.3-1-1.9-2.1-3.7-3.1-5.6l-1.2-1.5c-0.2-0.5 0-5.5 0.2-5.7 0.7-0.8 2.2-0.4 3.2-0.3 0-2.2-0.5-4.5-0.9-6.3-0.5-2.3-0.7-5-1.1-7.1-0.1-1.4-0.2-2.8-0.2-4.1-0.4-2.2-0.7-4.5-1.1-6.7v-13.5c2.7 0 5.5 0.5 8 0 0.4-1 0.7-2 1.1-3 0.1-1.1 0.1-2.1 0.2-3.2 0.4-1.5 1.4-3.1 2.2-4.3 0.9-1.4 3.6-1.4 4-2 0.6-0.6-0.3-6.4-0.5-7.6-0.5-2.8-1-5.2-1.4-7.7v-3.7c-0.7-3.9-0.5-8.8-1.4-12.3-1.3-0.3-2.7-0.8-3.6-1.5 0-2.6 1.5-5.1 2.2-7.4 0.7-2.4 1.4-4.8 2.7-6.7 0.7-0.8 1.4-1.7 2.1-2.5 2.8-4.5 5.4-8.8 9.9-11.5 2.6-1.5 6.4-1.2 9-2.7 0-1.1-0.4-1.7-0.6-2.5-0.3-1.5 0.8-2.2 0.5-3.4-0.3-0.5-0.6-1-0.9-1.5-0.1-1.1-0.1-2.2-0.2-3.3-0.2-1.5-0.5-3-0.7-4.5-0.2-2.4 0.8-4.3 1.2-5.8 0.1-0.6 0.2-1.3 0.2-1.9 0.7-0.6 1.3-1.2 2-1.9 0.3-0.6 0.5-1.2 0.8-1.8 1.4-2 3.4-3.1 6.1-3.7 0.9-0.2 2.3 0 3 0.2 6.2 1.1 8.2 2.3 11.2 6.7 0.7 1 1.6 2.1 1.9 3.5 0.4 1.9-0.5 3.2-0.2 5.2 0.2 1.6 0.8 3.2 0.6 5-0.4 2.3-1.3 4.2-2 6-0.2 0.9-0.3 1.7-0.5 2.6-0.2 0.5-0.5 0.6-0.6 1.4 1.4 3.1 2.4 6 5 8h0.1c0-2.5 0-6.2 1-7.6 0.8-1.1 2.7-1 3.9-1.5 1.2-0.8 2.4-1.7 3.5-2.5 1.4-0.8 3-1.2 4.3-2.1 0-2.4-1.1-3.2-1.5-5.1-0.8-3.8 0.4-6.7 1.1-9.5 0.5-2-0.1-4.5 0.7-6.1 0.7-1.4 2-1.8 3.1-2.8 0.8-0.7 0.8-1.9 2-2.4s3.9-0.1 5 0.1c4.4 0.9 8.2 4.6 10.1 8l1.5 3.3c0.3 1.4-0.3 2.4-0.6 3.2v6.5c0.3 0.6 0.7 1.2 1 1.8 0.4 1 0.3 2 0.9 2.8 2 3.1 9.1 2.5 11.4 6.5 0.5 0.9 1.1 3.6 0.6 5.3-0.2 0.6-0.7 1.1-0.5 2.2 0.5 3.1 1.9 6.4 2.7 9.6 0.3 1.8 0.6 3.7 0.9 5.5 0.6 1.3 2.6 1.5 3.8 2.2 1.7 1.1 4.6 5.5 5.4 7.6 1.2 3.1 1.3 5.7 1.8 9.5 0.3 1.8-0.9 3.8-0.6 4.6 0.5 0.9 3 1.5 3.8 2.3 0.9 0.9 1.3 2.1 2.4 2.8 0.8 0.2 1.5 0.5 2.3 0.7 1.7 0.6 2.9 2.1 3.9 3.5 0 3-1.9 11.1-0.2 13.3 0.1-3.2 2.5-4.9 3.1-7.6 0.5-2.2-0.9-4.1-1-5.8v-0.1c0-0.6 0.3-0.4 0.5-0.6v-1.4h0.1c0.7 0.1 1.4 0.2 2.1 0.3 0.2-5.3 2.5-6.1 5.7-8.1 1-0.6 3.3-0.9 3.6-2.1 0.1-1.2 0.1-2.5 0.2-3.7 0.4-1.6 1.7-2.5 2-3.9-0.1-2.5-0.1-5-0.2-7.6 1-6.3 2.9-10.2 8.7-11.5 1.1-0.2 2.3-0.3 3.4 0.1 1.2 0.5 2.4 1 3.5 1.5 2.5 1.7 3.4 5.7 4 9.1v2.6c0.2 1.3 0.3 2.9-0.1 4.1-0.5 1.8-2 5.6-1.7 7.4 3.9 1.6 7.8 2.3 10.1 5.6 1.4 2 1.9 4.8 2.9 7.1 1.4 3.2 2.7 6.5 4.1 9.7 0.8 1.3 1.7 2.6 2.5 3.9l1.5 3.6c0.8 0.6 1.7 1.3 2.5 1.9 3.4 2.7 9.1 6.7 10.1 11.5 1.1 11.9 2.3 23.7 3.4 35.6h0.1c2.6-0.7 3.4-3 4.7-5 0.6-0.5 1.1-1 1.7-1.5 0.3-0.7-0.2-1.3-0.3-2 0.1-2.5 0.1-5.1 0.2-7.6l0.6-24c0.7-3.8 2.9-6.4 3.8-10.1 0.3-1.1-0.4-1.8-0.6-2.5-0.3-1.6-0.2-4.3 0.1-5.8 0.5-2.5 2.1-4.1 3-6.3 0.7-1.7 1-3.5 1.8-5.2l0.9-0.9c0.7-1.1 1.3-2.3 2-3.4 0.4-1.2 0.7-2.3 1.1-3.5 1.8-3.3 8.1-3.1 9.4-6.3 0.3-0.8-0.1-1.7 0.1-2.6 0.4-2.5-0.4-5.4-0.9-7.4-0.8-3.8 0-8.9 2-10.5 0.8-0.7 2.1-1.5 3.2-1.8 1-0.2 2.4-0.1 3.2 0.1 1.1 0.2 2.8 0.1 3.5 0.7 3.2 2.7 4 7.6 5 12.7 0 1.8 0.1 3.6 0.1 5.4 0.8 3 2.2 4.2 4.8 5.4 0.8 0.2 1.6 0.5 2.4 0.7 1.3 0.9 2.3 2.4 2.7 4.2 0.2 0.8-0.1 1.6 0.3 2.2 0.5 0.8 1.3 0.5 1.7 1.9v5.6c0.6 3.6 0.6 8.3 1 11.8 0.3 2.3 0 4.4 0.6 6.3 0.1-0.1 0.2-0.1 0.2-0.2 0.7-2.3 4.2-4.5 5.1-0.9 0.5 2-3.1 8.6-3.8 10.4-0.8 2.1-0.6 5.9-0.9 8.2-0.4 2.6 1.1 3.9 1.4 6v6.9c0.4 2.9 0 6 0.6 9.7 0.6 4.7 0.8 9.1 1 13.5zm-105.5-108.8h0.2s-0.1 0-0.2 0zm-0.9 0.1h0.2-0.2zm63.4 57.9c0 1.4-0.6 1.8-0.9 2.8-0.4 1.5 0.4 2.8 0.6 3.9 0.4 2.9-2.2 4.6-3.9 5.4-0.3 0.5-0.4 1.3-0.4 2.1-1.3 0.9-2.9 1.2-4.6 1.8-0.9-5.2 0.4-10.5 2.1-13.4 1-1.6 2.4-3.2 3-5.1 1.2 0.8 2.9 1.5 4.1 2.5zm-32.1 3.4v0.2-0.2zm-56.1 1.5c0.7 0.6 1.3 1.1 2 1.7 1.4 1.4 2.4 4.2 5.7 3.2 0 0.1 0.1 0.3 0.1 0.4v-0.6c0.3 0.1 0.2 0.8 0.2 1.4h0.1c0-0.2 0.1-0.4 0.1-0.6 0.4 1 0.2 8.9 0.1 9.7h-0.7c-1.5-2.1-3-4.8-5-6.5-1.1-1-3.2-2.3-3.8-3.7-0.7-1.8 0.1-4.8 0.2-6.5 0.5 0.3 0.7 1 1 1.5zm63.3 5.1c1 2.1 0.8 4.6 1.3 7.5 0.2 1.4 1.4 4.2 0.6 5.8-0.1 0.1-0.1 0.2-0.2 0.2-0.6-0.5-0.3-1.5-0.6-2.4-0.7-1.8-2.5-2.8-4.9-3.1-0.5-2-0.9-5-1.3-7.1-0.2-1.5 0.1-2.9-0.2-4.1-0.4-1.4-1.4-2.1-1.9-3.2 1.6 1.1 6.5 4.9 7.2 6.4zm149.2 1.2c-1.5 0.5-0.7 1.7-1.3 2.8l-1.2 1.2c-0.3 0.7-0.6 1.5-0.9 2.2-1.9 4.8-4.5 10.4-7.5 14.1h-0.1c-1-1.9-0.4-5.7 0.2-7.6 1.6-6.1 5.4-9.9 10.2-12.7h0.6zm-130.2 11c0.2 0.2 0.2 0.7 0.2 1.2 0.5 0.3 0.9 0.5 1.4 0.8 0.4 0.9 0 2.2-0.4 2.8-1.8 2.9-3.6 5.8-5.3 8.8v0.2c-0.4-1.1 0-3.2 0.2-4.2l0.3-9h0.2c0.7-0.6 2.5-0.2 3.4-0.6zm114.9 5.5c1 0.8 1.5 6.2 1.2 8.3-0.3 1.5-1.2 3.4-2.4 3.8-0.4 0.1-0.9 0.1-1.3 0.2-1.1 0.4-1.3 1.3-3.2 1.1-0.5-2 0-11.3 0.6-12.3 0.6-0.9 1.9-0.9 3-1.4 0.8-0.1 1.6-0.1 2.1 0.3zm-191.7 5.3c-0.9-1.3-0.1-2.7 0.8-3.6 0.5-0.1 1.3-0.2 1.7 0.1 0.8 0.5 1 3.2 1 4.3-1.2-0.2-2.3-0.5-3.5-0.8zm178.8 1.7c-0.1-0.6-0.6-1.8-0.3-2.7l1.2-1.2c2.3 0 2.4 1 4 1v9.7c-1.7 0.1-2.8 0.7-4.2 0.7-0.2-2.5-0.5-5-0.7-7.5zm-15.4-1.3c0.4 0.5 1.7 0.4 2.6 0.3 1.7 4.2 2.6 9.5 4 14.1 0.6 2 1.1 4 1.8 6.2 0.5 1.6 1.3 2.9 1.3 5-0.3 0.1-0.6 0.1-0.9 0.2l-2.4-2.1c-0.1-0.7 0.2-1.4 0.2-1.9-0.7-4-2.4-7.9-3.5-11.6-1.2-3.5-2.2-6.8-3.1-10.2-0.1 0 0 0 0 0zm79.2 15.9c0.8 0.6-0.3 4.9-0.6 6.3-0.4 1.7-2.3 1.7-3.5 2.7-0.8 0.6-2.6 4.1-2.3 5.8 0.5 3.1 3.3 6 5.4 7.4 1 0.6 4.3 2.4 4.6 3.4 0.3 1.2-0.3 2.9-0.9 3.2-0.6 0.5-1.8 0.2-2.3 0.7-1.1 1.1-1.9 2.6-2.8 3.9-1.2 1.4-2.4 2.7-3.6 4.1-0.6 0.6-2.2 3-2.9 2.8-0.1 0.2-0.1 0.4-0.2 0.6 0.1-1.5 0.2-3.1 0.2-4.6 0 0.2 0.1 0.4 0.1 0.6 0.5-1.1 0.3-3.1 0.3-4.6-0.1 0.6-0.1 1.3-0.2 1.9 0-2.2 0.1-4.4 0.1-6.6l0.3-14.7c0.3-1.8 0.4-4.8-0.1-6.4-0.4-1.4 0.5-6 0-6.3 1.6-0.1 3.2-0.2 4.8-0.2 1.3-0.1 2.4 0 3.6 0zm-11.4 12.2c0 9.9-0.8 19.1-0.8 28.9-0.1-1.9-0.2-3.8-0.2-5.7-0.8-1.4-1.6-2.8-2.4-4.1-1.1-3-0.5-5.5-3.5-6.6-0.5-1.6-0.3-3.9-0.3-5.8 0 0.2-0.1 0.4-0.1 0.6-0.5-1.1-0.3-3 0.1-3.9 0-2.8-0.1-5.6-0.1-8.4-0.4-2.2-1.5-3.9-1.7-5.9l0.9 0.6c1.2 0.3 7.6-0.4 8.2-0.7 0 3.5-0.1 7.2-0.1 11zm-48.6 4.8s-0.1 0 0 0c-1.2-1-3.3-7.7-2-9.7 3 0.9 2.1 6.1 2 9.7zm-223.8 5.1c0.9 1.4 0.1 3.4-0.2 5-0.1 0.9-0.2 1.9-0.3 2.8-0.6 2.7-1.6 5.1-2 8.1-0.9 0.6-2.6 0.8-3.2 1.6-0.2 0.4-0.4 0.9-0.6 1.3v0.2c-0.4-4.5-0.7-9-1.1-13.6 1.9 0.3 4.9-0.8 5.3-2.2 0.4-1.2 0.1-2.5 0.6-3.5l1.5 0.3zm275.1 12.7c0-0.2-0.1-0.4-0.1-0.6 0.1 0.3 0.1 0.5 0.1 0.6zm22.6 3.6c-0.3-0.1-0.1 0-0.2-0.2 0 0.1 0.1 0.1 0.2 0.2z" />
	</defs>
	<clipPath id="team-svg-j">
		<use overflow="visible" xlink:href="#team-svg-a" />
	</clipPath>
	<g clip-path="url(#team-svg-j)" class="team-img-paralex" data-ratio="0.01">
		<image transform="matrix(.2394 0 0 .2394 1624.6 945.43)" width="1942" height="954" overflow="visible"
			xlink:href="<?php echo $fillerImg1 ?>" data-src="<?php echo $imgPAth ?>fg-1.jpg" class="team-main-lazy">
		</image>
	</g>

</svg>