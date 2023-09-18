<?php 

// force login
require_once('authenticate.php');


// folders 
$projects_dir = "../DATA/projects/";

// form Handler php script
$formHandler = 'tmb-generator.php';
$phpSelf 	 = 'project-tmb.php';

// load admin head
$page_title = 'به روز رسانی تصاویر بند انگشتی پروژه ها';
require('functions/head.php');


// massages 
function massage() {
	if( isset($_GET["status"]) ) { if ($_GET["status"] == 'ok') { ?>
	<div class="respond respond-ok ">
	     تصاویر بند انگشتی پروژه انتخابی ، با موفقیت به روز رسانی شد
	</div>
<?php } else if ($_GET["status"] == 'noFolderExists') { ?>
	<div class="respond respond-error ">
		پروژه انتخاب شده در سایت وجود نداره
	</div>
<?php } else if ($_GET["status"] == 'sendError') { ?>
	<div class="respond respond-error ">
		در روند برقراری ارتباط با سرور، مشکلی وجود دارد
	</div>
<?php } else if ($_GET["status"] == 'createTmbError') { ?>
	<div class="respond respond-error ">
		در روند تولید تصاویر بند انگشتی ، مشکلی وجود دارد
	</div>
<?php } }				
} 


// get name of the folder (remove everything before last '/' character)
function folderNameFromPath($pathh) {
	$pathhIndex = strripos($pathh,'/');
	return substr($pathh, $pathhIndex + 1 );
}
// search for project folders 
$projectFolders = glob( $projects_dir.'*', GLOB_ONLYDIR );


// check if there is ang project selected
if ( isset( $_GET['project'] ) ) {
	
	// check folder exists 
	$target_folder = urldecode($_GET['project']);
	if ( !file_exists($target_folder) ) {
		header("Location: $phpSelf?status=noFolderExists"); 
	} else {
	// grab the project name 
	$projectName = file ( $target_folder.'/info.txt');
	
			
	// ----------------------------------------
	// ----------------------------------------
	// ------------- upload form --------------
	// ----------------------------------------
	// ----------------------------------------
?>
<!-- ===== title ===== -->
<a href="<?php echo $phpSelf ?>">
	<h2>مدیریت تصاویر بند انگشتی پروژه ها </h2>
</a>

<!-- ===== upload form ===== -->
<div class="form-con">
	<h3>به روز رسانی تصاویر بند انگشتی پروژه</h3>

	<!-- display the name of project -->
	<h4 class="label">پروژه انتخاب شده (نام فارسی)</h4>
	<p><b><?php echo $projectName[1] ?></b></p>


	<form
	enctype="multipart/form-data"
	action="<?php echo $formHandler ?>"
	method="post"
	id="upload_form" 
	name="upload_form" >

		<input
			type="hidden"
			name="projectName"
			id="projectName"
			value="<?php echo urlencode($target_folder); ?>"
		/>

		<!-- submit-->
		<input
			type="submit"
			name="submitt"
			value="به روز رسانی تصاویر بند انگشتی"
			class="submit"
		/>

		<!-- respond massage -->
		<?php  massage() ?>


	</form>
</div>

<?php
			
	// ----------------------------------------
	// ----------------------------------------
	// ----------- select list form -----------
	// ----------------------------------------
	// ----------------------------------------
} } else { ?>

<!-- ===== title ===== -->
<a href="index.php">
	<h2>مدیریت تصاویر بند انگشتی پروژه های سایت</h2>
</a>

<!-- ===== select project form ===== -->
<div class="form-con">
	<h3>به روز رسانی تصاویر بند انگشتی پروژه ها</h3>

	<!-- massage -->
	<?php  massage() ?>

	<form
		  enctype="multipart/form-data"
		  action="<?php echo $phpSelf ?>"
		  method="get"
		  name="project_select_form">


		<div class="label">پروژه مورد نظر را انتخاب کنید :</div><br>
		
		<div class="radio-list-con">
			<?php

			$icon =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path d="M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z" id="theIcon"></path></svg>';
			$iconCopy =
				'<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#theIcon"/></svg>';

			$iconCount = 0 ;
	
			// search for project folders 
			foreach ( $projectFolders as $projectName ) {
			
			?>
			<label class="radio-container radio-container-list ltr"
				<?php if( !file_exists($projectName.'/tmb'))
					echo 'title="این پروژه تصویر بند انگشتی ندارد"';
				?> >
				<?php echo folderNameFromPath($projectName) ?>
				<input
					type="radio"
					name="project"
					value="<?php echo $projectName ?>"
					onchange="change(this)"
				/>
				<span class="checkmark"></span>
				<?php if( !file_exists($projectName.'/tmb') ){
					$iconCount++ ; 
					if ( $iconCount > 1 )
						echo $iconCopy;
					else echo $icon;
				}?>
			</label>
			<?php } ?>

		</div>
		<br>
		
		<!-- submit -->
		<input
			type="submit"
			value="هیچ پروژه ای انتخاب نشده است"
			id="submit"
			class="submit submit-desabled"
		/>
		
	</form>
</div>


<?php } // endif 

	// ----------------------------------------
	// ----------------------------------------
	// ----------------------------------------
	// ----------------------------------------

?>
<!-- footer -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>

<!-- script -->
<script>
	
	// submit btn hangler 
	function change(radio) {
		var btn = document.getElementById('submit');
		btn.value = 'تصاویر بند انگشتی پروژه انتخابی، به روز رسانی شود';
		btn.classList.remove('submit-desabled');
	}

	// hide respond after 5 sec
	var respond1 = document.getElementsByClassName('respond');
	setTimeout(function() {
		for (k = 0; k < respond1.length; k++) {
			respond1[k].classList.add("hide-anim");
		}
	}, 5000);

</script>

</body>
</html>
