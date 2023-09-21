<?php

// root address of urls that will be generated for each project
$arch_project_link = $rootPath . 'projects/';


$sort_File = $path . 'DATA/projects-sort.txt';
$sortBYFile = false;
if (file_exists($sort_File)) {
	$sortBYFile = true;
	$sortArray = file($sort_File, FILE_IGNORE_NEW_LINES);
	if (sizeof($sortArray) != sizeof($projectsFolderArray))
		$sortBYFile = false;
}


// replace whitepace with '-' and tehn echo given text 
function removeSpace($txt)
{
	$txt = trim($txt);
	$txt = str_replace(' ', '-', $txt);
	$txt = strtolower($txt);
	return htmlspecialchars($txt);
}


// grab type and status of projects into an array
$arch_type_array = array();
$arch_status_array = array();


// number of normal images , before lazy ones 
$lazyindex = 3;


?>
<!-- =================================== -->
<!-- options button -->
<button class="hide-until-load header-button options-button" id="options-btn" onclick="this.blur();">
	<span class="header-button-txt">options</span>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
		<path
			d="M16 7v2h-2.7V7H16zM12 6H9v1H0v2h9v1h3V6zM16 2v2H8.3V2H16zM7 1H4v1H0v2h4v1h3V1zM16 12v2H6.3v-2H16zM5 11H2v1H0v2h2v1h3v-4z" />
	</svg>
</button>

<!-- =================================== -->

<article class="scrolbar horizential">
	<div class="container grid-container" id="the-grid-container">

		<!-- main page title -->
		<div class="title-box" id="the-title-box">
			<h1>Projects</h1>
			<div class="guide-line" id="guide-line"></div>
		</div>

		<!-- project grid -->
		<div class="grid-parent-con">
			<ul class="grid-con" id="grid">
				<?php

				// loop all folders that got by parent (index.ph)
				for ($index = 0; $index < $projectsFolderCount; $index++) {

					if ($sortBYFile)
						$i = $sortArray[$index];
					else
						$i = $index;

					// basics
					$txt_file_array = $allProjectsTxtArray[$i];
					$project_link = $arch_project_link . removeUnwantedCharacterss($theTitleArray[$i]);

					// image 
					$tmbImage = glob($projectsFolderArray[$i] . '/*jpg');
					$imgPath = makePathAbs($tmbImage[0]);

					// texts 
					$grid_title = $txt_file_array[1];
					$arch_year = $txt_file_array[3];
					$arch_type_txt = $txt_file_array[7];
					$arch_area = $txt_file_array[5];
					$arch_status_txt = $txt_file_array[9];

					$arch_type = removeSpace($arch_type_txt);
					$arch_status = removeSpace($arch_status_txt);
					array_push($arch_type_array, $arch_type);
					array_push($arch_status_array, $arch_status);

					// html markup
					?>
					<li data-index="<?php echo $index; ?>"
						class="grid-item <?php e($arch_status) ?> <?php e($arch_type) ?> <?php if ($index > $lazyindex)
								echo 'lazy'; ?>"
						data-area="<?php echo $arch_area; ?>" data-width="<?php calculateImgRatio($tmbImage[0]) ?>">
						<a href="<?php echo $project_link; ?>" class="grid-link smoooth">
							<div class="grid-img">
								<img src="<?php if ($index > $lazyindex)
									echo $loading_img;
								else
									echo $imgPath; ?>"
									data-src="<?php echo $imgPath; ?>" alt="<?php echo $grid_title; ?>" <?php if ($index > $lazyindex)
											  echo 'class="lazy-img"'; ?> />
								<div class="grid-loading" aria-hidden="true">
									<div class="ld" aria-hidden="true">
										<span class="ld-1"></span>
										<span class="ld-2"></span>
										<span class="ld-3"></span>
										<span class="ld-4"></span>
										<span class="ld-5"></span>
										<span class="ld-6"></span>
										<span class="ld-7"></span>
										<span class="ld-8"></span>
										<span class="ld-9"></span>
									</div>
								</div>
							</div>
							<?php if ($index > $lazyindex): ?>
								<noscript>
									<div class="grid-img grid-img-noJs">
										<img src="<?php echo $imgPath; ?>" alt="<?php echo $grid_title; ?>" />
									</div>
								</noscript>
							<?php endif; ?>
							<div class="grid-info">
								<h2 class="grid-title">
									<?php echo $grid_title; ?>
								</h2>
								<dl>
									<dt>type</dt>
									<dd class="grid-info-type">
										<?php echo $arch_type; ?>.
									</dd>
									<dt>year</dt>
									<dd class="grid-info-year">
										<?php echo $arch_year; ?>.
									</dd>
									<dt>status</dt>
									<dd class="grid-info-status">
										<?php echo $arch_status; ?>
									</dd>
								</dl>
							</div>
						</a>
					</li>
					<!-- ========== -->
				<?php } // end loop ?>
			</ul>
		</div>
	</div>
</article>

<!-- =================================== -->

<?php require('grid-options.php') ?>

<!-- =================================== -->

<!-- load isotop script -->
<script>
	function addTheIsotopScriptsToDom() {
		if (!isotopScriptIsloaded) {
			var projectPageScript = document.createElement("script");
			projectPageScript.src = "<?php echo $rootPath ?>js/isotop.js";
			document.body.appendChild(projectPageScript);
		}
	}
	if (smoothLoaded) {
		addTheIsotopScriptsToDom();
	} else {
		document.addEventListener("DOMContentLoaded", addTheIsotopScriptsToDom);
	}
</script>