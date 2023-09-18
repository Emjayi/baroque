<!-- =========== project slider =========== -->
<div class="project-slider-con hid" id="slider-con">

	<!--next and prev icons near websiteName on mobile  -->
	<div class="slider-mob-icons" aria-hidden="true">
		<svg
			class="slider-mob-icons-next"
			id="slider-mob-icons-next" role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512">
			<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" ></path>
		</svg>
		<svg
			class="slider-mob-icons-prev"
			id="slider-mob-icons-prev" role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512">
			<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
		</svg>
	</div>
	<?php
	// generate the src of the big picture 
	function searchBigPic ( $imgPath ) {
		global $nameOfImgFoder, $nameOfBigImageFoder;
		$projectSlideBigImage =
			str_replace("/$nameOfImgFoder/", "/$nameOfBigImageFoder/", $imgPath);
		// check if there is any big image 
		if( !file_exists( $projectSlideBigImage) ) return makePathAbs($imgPath);
		else return makePathAbs( $projectSlideBigImage );
	}
	?>
	<!-- ======= the slider ======= -->
	<div class="project-slider" id="slider">

		<!-- first slide of the project -->
		<a  class="project-slide zoomable no-smooth"
			data-ratio="<?php calculateImgRatio($imagesArray[0]) ?>"
			href="<?php echo makePathAbs($imagesArray[0]) ?>"
			href="<?= makePathAbs( searchBigPic( $imagesArray[0], $projectSlideSrc )) ?>"
		>   <img
				class="project-slide-img"
				data-ratio="<?php calculateImgRatio($imagesArray[0]) ?>"
				alt="picture no. 1 of <?php e($projectTitle) ?>"
				src="<?php echo makePathAbs($imagesArray[0]) ?>" >
		</a>

	<?php if ( $projectHasVideo ) { ?> 
		<!-- generate video slide -->		
		<div
			class=" project-slide video"
			id="video-con"
			data-ratio="<?php calculateImgRatio($poster) ?>"
			>
			<video
				 class="video-vid" id="video"
				 poster="<?php echo makePathAbs($poster) ?>"
				 controlslist ="nodownload">
				 <source src="<?php echo makePathAbs($video[0]) ?>" type="video/mp4">
			</video>
			<img class="video-poster"
				 alt="video of <?php e($projectTitle)?> project, designed by <?php e($site_owner)?>"
				 src="<?php echo makePathAbs($poster) ?>"
			/>
			<div class="video-img-ovr"></div>
			<div class="player">
				<div class="player-ovr" id="fullscreen"></div>
				<div class="play-pause play" title="Play or Pause the video">
					<svg class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
						<path class="play-path"  d="M21 13l63 37-63 37V13z"/>
						<path class="pouse-path" d="M72.5,88V12 M27.5,12v76"/>
					</svg>
				</div>
			</div>
		</div>
	<?php } ?> 
		
		<!-- generate other slides -->
	<?php for ( $i = 1 ; $i < $imagesArraySize ; $i++ ) {

		// lazy load images 
		$projectSlideSrc = makePathAbs($imagesArray[$i]);
		if ( $i > $lazyIndex ) $projectSlide = $loading_img;
		else $projectSlide = $projectSlideSrc;

		// make the html 
		?> 
		<a  class="project-slide zoomable no-smooth <?php if ($i > $lazyIndex ) echo 'lazy'; ?>" 
			data-ratio="<?php calculateImgRatio($imagesArray[$i]) ?>"
			href="<?= searchBigPic( $imagesArray[$i] ) ?>"
		>   <img
				class="project-slide-img" 
				src="<?php echo $projectSlide ?>" 
				<?php if ($i > $lazyIndex ) echo 'data-lazy="'. $projectSlideSrc .'"' ; ?> 
				alt="picture no. <?php e($i + 1)?> of <?php e($projectTitle)
				?> project, designed by <?php e($site_owner)?>" 
			/>
		</a>
	<?php }// end loop ?> 

	</div>
	
	
	<?php if ( $projectHasVideo ) : ?> 
	<!-- video progressbar (footer) -->
	<div class="progress-bar-con" id="videofooter">
		<div class="time">
			<span class="ctime">00:00</span>
			<span class="stime"> / </span>
			<span class="ttime">00:00</span>
		</div>
		<div class="progress ">
			<div class="progress-bar">
				<div class="button-holder">
					<div class="progress-button"> </div>
				</div>
			</div>
		</div>
	</div>
	<?php endif ?> 
</div>


<!-- =========== thumbnails slider =========== -->
<div class="project-tmb-con scrolbar hid" id="tmb-con">

	<!-- link to project info mode -->
	<div class="project-tmb project-tmb-first-slide">
		<div id="project-info-btn" class="project-info-btn">
			<p>view project information</p>
		</div>
	</div>
	<!-- ============= the slider ============= -->
	<div class="project-tmb" id="tmb">
		<!-- generate thumbnail of the first slide -->
		<img
		alt="thumbnail of picture no. 1 of <?php e($projectTitle)
		?> project, designed by <?php e($site_owner)?>"
		src="<?php echo makePathAbs($tmbImgArray[0]) ?>" >
		
	<?php if ( $projectHasVideo ) { ?> 
		<!-- generate video thumbnails -->		
		<div class="project-video-btn" id="project-video-btn">
			<img
				alt="view video of <?php e($projectTitle);
				?> project, designed by <?php e($site_owner)?>"
				src="<?php echo makePathAbs($videoTmb)?>"
			/>
			<svg enable-background="new 0 0 494.942 494.942"
				 viewBox="0 0 494.942 494.942"
				 xmlns="http://www.w3.org/2000/svg"
			><path d="m35.353 0 424.236 247.471-424.236 247.471z"/></svg>
		</div>
	<?php } ?> 

		<!-- generate other thumbnails -->
	<?php for ( $i = 1 ; $i < $tmbImgArraySize ; $i++ ) { ?> 
		<img
			alt="thumbnail of picture no. <?php e($i + 1)?> of <?php e($projectTitle)
			?> project, designed by <?php e($site_owner)?>"
			src="<?php echo makePathAbs($tmbImgArray[$i]) ?>"
		/>
	<?php } ?> 

	</div>
</div>

<!-- =========== header buttons =========== -->

<!-- go back button -->
<a  class="hide-until-load header-button go-back-button hidden smoooth"
    id="go-back-btn"
    onclick="this.blur();"
    href="<?php echo $rootPath ?>projects/"
    tabindex="-1"
>
	<span class="header-button-txt">back to all</span>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		<path d="M92 100L36 50 92 0H58L2 50l56 50z"/>
	</svg>
</a>

<!-- galery/info mode switch button -->
<button
class="hide-until-load header-button project-button hidden"
id="project-btn" onclick="this.blur();">
	<span class="header-button-txt">
		<span aria-hidden="true"
			  class="project-button-list-txt"
			  id="project-button-list-txt" >View Project Info</span>
		<span aria-hidden="false"
			  class="project-button-tmb-txt"
			  id="project-button-tmb-txt" >Go to Gallery</span>
	</span>
	<svg class="project-button-list"
		 xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 100 100">
		<path d="M5 6h22v22H5zM37 6h58v22H37zM5 39h22v22H5zM37 39h58v22H37zM5 72h22v22H5zM37 72h58v22H37z" />
	</svg>
	<svg class="project-button-tmb"
		 aria-hidden="true"
		 role="img"
		 xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 100 100 ">
		<path d="M5 5h40v40H5zM55 5h40v40H55zM5 55h40v40H5zM55 55h40v40H55z" />
	</svg>
</button>


<!-- toggle thumbnails button -->
<button
class="hide-until-load header-button tmb-button hidden"
id="tmb-btn" onclick="this.blur();">
	<span class="header-button-txt">navigations</span>
	<svg class="project-button-tmb"
		 aria-hidden="true"
		 role="img"
		 xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 100 100 ">
		<path d="M5 5h40v40H5zM55 5h40v40H55zM5 55h40v40H5zM55 55h40v40H55z" />
	</svg>
</button>

<!-- load project script -->
<script>
	function addProjectScriptsToDom() {
		if (!projectPageScriptIsLoaded) {
			var projectPageScript = document.createElement("script");
			projectPageScript.src = "<?php echo $rootPath ?>js/project.js";
			document.body.appendChild(projectPageScript);
		}
	}
	if (smoothLoaded) {
		addProjectScriptsToDom();
	} else {
		document.addEventListener("DOMContentLoaded", addProjectScriptsToDom);
	}
</script>