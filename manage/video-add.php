<?php 

// force login
require_once('authenticate.php');

// folders 
$projects_dir = "../DATA/projects/";

// form Handler php script
$formHandler = 'video-uploader.php';
$phpSelf 	 = 'video-add.php';

// load admin head
$page_title = 'اضافه کردن ویدیو به پروژه ها';
require('functions/head.php');

// if the uploaded video size is more than this, show error (by JS)
$maxSizeMB  = 50;

// massages 
function massage() {
	if( isset($_GET["status"]) ) { if ($_GET["status"] == 'ok') { ?>
	<div class="respond ">
		به پروژه انتخابی ، ویدیو اضافه شد
	</div>
<?php } else if ($_GET["status"] == 'noFolderExists') { ?>
	<div class="respond respond-error ">
		پروژه انتخاب شده در سایت وجود نداره
	</div>
<?php } else if ($_GET["status"] == 'videoError') { ?>
	<div class="respond respond-error ">
		در فرایند ارسال ویدیو مشکلی وجود دارد
	</div>
<?php } else if ($_GET["status"] == 'imgError') { ?>
	<div class="respond respond-error ">
		در تصویر ارسالی مشکلی وجود دارد 
	</div>
<?php } else if ($_GET["status"] == 'sendError') { ?>
	<div class="respond respond-error ">
		در روند برقراری ارتباط با سرور، مشکلی وجود دارد
	</div>
<?php } else if ($_GET["status"] == 'selectFile') { ?>
	<div class="respond respond-error ">
		لطفا یک پروژه انتخاب کرده و فایل ویدیویی را ارسال نمایید
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
	<h2>اپلود ویدیو</h2>
</a>

<!-- ===== upload form ===== -->
<div class="form-con">
	<h3>اضافه کردن ویدیو به پروژه</h3>

	<!-- display the name of project -->
	<h4 class="label">پروژه انتخاب شده</h4>
	<p><?php echo $projectName[1] ?></p>


	<form
	enctype="multipart/form-data"
	action="<?php echo $formHandlerPhp ?>"
	method="post"
	id="upload_form" 
	name="upload_form" >

		<input
			type="hidden"
			name="projectName"
			id="projectName"
			value="<?php echo urlencode($target_folder); ?>"
		/>

		<!-- video file -->
		<div class="label">اپلود فایل ویدیو
			<span>به فرمت <b class="ltr" style="font-size:0.8em">mp4</b> و با کمترین حجم ممکن</span>
		</div>
		<div class="input-file-container">
			<input
				class="input-file"
				id="fileVideo"
				type="file"
				accept="video/mp4"
				name="fileVideo"
				required="required"
			/>
			<label
				tabindex="0"
				for="my-file-1"
				class="input-file-trigger"
			> فایل ویدیو را انتخاب کنید ....</label>

			<p class="file-return"></p>
		</div>

		<!-- pic file -->
		<div class="label">انتخاب تصویر برای ویدیو (الزامی)
			<span>تصویر <b>فریمی از ویدیو</b> با حجمی حدود 100 کلیوبایت </span>
		</div>
		<div class="input-file-container">
			<input
				class="input-file"
				id="fileImg"
				type="file"
				accept="image/*"
				name="fileImg"
				required="required"
			/>
			<label
				tabindex="0"
				for="my-file-1"
				class="input-file-trigger"
			>یک تصویر را انتخاب کنید ....</label>

			<p class="file-return"></p>
		</div>

		<br>

		<!-- progress -->
		<div class="hidden" id="progressBarCon">
			<div class="progressBar">
				<span id="progressBar" class="progressBarInside"></span>
			</div>
			<h4 class="ltr" id="status"></h4>
			<p  class="ltr" id="loaded_n_total"></p>
			<br>
		</div>

		<!-- submit-->
		<input
			id="Videosubmit"
			type="submit"
			name="submitt"
			value="ارسال ویدیو"
			class="submit"
		/>

		<div id="statusMsg" class="hidden respond respond-error"></div>

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
	<h2>مدیریت پروژه های سایت</h2>
</a>

<!-- ===== select project form ===== -->
<div class="form-con">
	<h3>اضافه کردن ویدیو به پروژه ها</h3>

	<!-- massage -->
	<?php  massage() ?>
	
	<form
	enctype="multipart/form-data"
	action="<?php echo $phpSelf ?>"
	method="get"
	name="project_select_form" >

		<div class="label">پروژه مورد نظر را انتخاب کنید :</div><br>

		<div class="radio-list-con">
			<?php

			$videoIcon =
				'<svg id="videoIcon" viewBox="-53 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M263.8 0H60C27 0 0 27 0 60v392c0 33 27 60 60 60h285.9c33 0 60-27 60-60V142.9zm11 67.9l63 63.2h-43c-11 0-20-9-20-20zm71 404.1H60c-11 0-20-9-20-20V60c0-11 9-20 20-20h174.9v71.1c0 33.1 26.9 60 60 60h71V452c0 11-9 20-20 20zM135 404.8l158-97.4L135 209zM175 281l42 26.2-42 26zm0 0"/></svg>';
			$videoIconCopy =
				'<svg viewBox="-53 0 512 512" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#videoIcon"/></svg>';

			$videoIconCount	 = 0 ;
	
			// search for project folders 
			foreach ( $projectFolders as $projectName ) {
			
			?>
			<label class="radio-container radio-container-list ltr"
				<?php if(file_exists($projectName.'/video'))
					echo 'title="در حال حاضر، این پروژه ویدیو دارد"';
				?> >
				<?php echo folderNameFromPath($projectName) ?>
				<input
					type="radio"
					name="project"
					value="<?php echo $projectName ?>"
					onchange="change(this)"
				/>
				<span class="checkmark"></span>
				<?php if( file_exists($projectName.'/video') ){
					$videoIconCount++ ; 
					if ( $videoIconCount > 1 )
						echo $videoIconCopy;
					else echo $videoIcon;
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

	// radio btn hangler 
	function change(radio) {
		var btn = document.getElementById('submit');
		btn.value = 'به پروژه انتخابی ، ویدیو اضافه شود';
		btn.classList.remove('submit-desabled');
	}

	// hide respond after 5 sec
	var respond1 = document.getElementsByClassName('respond');
	setTimeout(function() {
		for (k = 0; k < respond1.length; k++) {
			respond1[k].classList.add("hide-anim");
		}
	}, 5000);

	// image input 
	document.querySelector("html").classList.add('js');
	var inputFileItems = document.querySelectorAll(".input-file-container");
	for (i = 0; i < inputFileItems.length; i++) {
		var fileInput = inputFileItems[i].children[0],
			button = inputFileItems[i].children[1],
			the_return = inputFileItems[i].children[2];

		button.addEventListener("keydown", function(event) {
			if (event.keyCode == 13 || event.keyCode == 32) {
				this.previousElementSibling.focus();
			}
		});
		button.addEventListener("click", function(event) {
			this.previousElementSibling.focus();
			return false;
		});
		fileInput.addEventListener("change", function(event) {
			var this_return = this.nextElementSibling.nextElementSibling;
			var theNAmeOfFile = this.value;
			var indexofSlash = theNAmeOfFile.lastIndexOf('/');
			if ( indexofSlash == -1 )
				indexofSlash = theNAmeOfFile.lastIndexOf('\\');
			indexofSlash++;
			theNAmeOfFile = theNAmeOfFile.substr(indexofSlash, theNAmeOfFile.length);
			this_return.innerHTML = theNAmeOfFile;
		});
	}


	// file upload AJAX progressbar 
	function $(el) {
		return document.getElementById(el);
	}
	function completeHandler(event) {
		console.log( event.target.responseText);
		try {
			window.location.href = event.target.responseText;
		} catch {
			$("statusMsg").classList.remove('hidden');
			$("statusMsg").innerHTML =
				"در دریافت و پردازش فایل ها از طرف سرور، مشکلی وجود دارد";
		}
		// clear progress bar after successful upload
		$("progressBar").style.width = 0; 
	}
	var massageIsVisible = false;
	function showErrorMsg(msg) {
		console.log(msg);
		$("status").classList.add('hidden');
		$("statusMsg").classList.remove('hidden');
		setTimeout(function(){
			$("statusMsg").classList.remove('hide-anim');
		},100)
		$("statusMsg").innerHTML = msg;
		massageIsVisible = true;
		setTimeout(function(){
			$("statusMsg").classList.add('hide-anim');
		},6000)
	}
	function errorHandler(event) {
		showErrorMsg("فرایند اپلود دچار خطا شده است");
	}
	function abortHandler(event) {
		showErrorMsg( "فرایند اپلود متوقف شده است");
	}
	function progressHandler(event) {
		$("loaded_n_total").innerHTML =
			"Uploaded " + event.loaded + " bytes of " + event.total;
		var percent =
			(event.loaded / event.total) * 100;
		$("progressBar").style.width =
			((Math.round(percent)) + '%');
		$("status").innerHTML =
			Math.round(percent) + "% uploaded... please wait";
	}

	function uploadFile(event) {
		event.preventDefault();
		var fileImg = $("fileImg").files[0];
		var fileVideo = $("fileVideo").files[0];
		var projectNameValue = $('projectName').value;
		//check if there is any file 
		if ( fileVideo == undefined || fileVideo == null ) {
			showErrorMsg('لطفا ابتدا یک فایل ویدیو انتخاب و وارد کنید');
			return false;
		}
		// check if the size of video is ok 
		if ( fileVideo.size > <?php echo $maxSizeMB ?>000000 ) {
			showErrorMsg('حجم فایل ویدیو باید حداکثر ' + <?php echo $maxSizeMB ?> +' مگابایت باشد');
			return false;
		}
		// hide any massage (if there is one)
		if (massageIsVisible) {
			$("statusMsg").classList.add('hidden');
			$("status").classList.add('hidden');
		}
		$('progressBarCon').classList.remove('hidden');
		$('Videosubmit').classList.add('hidden');
		var formdata = new FormData();
		formdata.append("ajax", 'true');
		formdata.append("projectName", projectNameValue);
		formdata.append("fileImg", fileImg);
		formdata.append("fileVideo", fileVideo);
		var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST", "<?php echo $formHandler; ?>"); 
		ajax.send(formdata);
	}

	var VideosubmitElm = $('Videosubmit');
	if ( VideosubmitElm != null ) 
		VideosubmitElm.addEventListener('click',uploadFile);
</script>

</body>
</html>
