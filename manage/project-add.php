<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'مدیریت مطالب سایت';
require('functions/head.php');

// form Handler php file 
$formHandler = 'project-upload.php';

// change color if there is any error 
$className = '';
if( isset($_GET["upload"]) ) {
	if (strlen( $_GET["upload"] ) > 1 ) $className = 'header-error';
	if ($_GET["upload"] == 'ok') $className = 'header-ok';
} 

?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>افزودن پروژه</h2>
</a>
<!-- ===== upload form ===== -->
<div class="form-con ">

	<h3 id="main-title" class="<?php echo $className ?>">ارسال پروژه جدید</h3>
	
		<!-- file upload respond -->
	<?php
	if( isset($_GET["upload"]) ) {
		if ($_GET["upload"] == 'fileexists') { ?>
		<div class="respond respond-error">فایل یک بار اپلود شده و نباید دوباره دقیقا همان فایل اپلود شود</div>
		
	<?php } else if ($_GET["upload"] == 'filesize') { ?>
		<div class="respond respond-error">خطا در اپلود فایل ، حجم فایل شما بیش از 50 مگابایت است</div>
		
	<?php } else if ($_GET["upload"] == 'errorUploading') { ?>
		<div class="respond respond-error">خطا در اپلود فایل ، متاسفانه در فرایند آپلود فایل مشکلی وجود داشته</div>
		
	<?php } else if ($_GET["upload"] == 'zipExtractError') { ?>
		<div class="respond respond-error">خطا در باز کردن فایل زیپ شده ، بررسی کنید که فایل زیپ شده سالم باشد</div>
		
	<?php } else if ($_GET["upload"] == 'zipStructure') { ?>
		<div class="respond respond-error">در داخل فایل زیپ، صرفا باید یک فولدر (که سایر فایل ها داخل آن هستند) وجود داشته باشد </div>
		
	<?php } else if ($_GET["upload"] == 'folderNameInvalid') { ?>
		<div class="respond respond-error">در نام گذاری فولدری که زیپ کرده اید ، نباید از حروف غیر مجاز استفاده کنید</div>
		
	<?php } else if ($_GET["upload"] == 'folderNameExists') { ?>
		<div class="respond respond-error">خطا در نام فولدر، در حال حاضر دقیقا پروژه ای با همین نام در سایت وجود دارد</div>
		
	<?php } else if ($_GET["upload"] == 'serverError') { ?>
		<div class="respond respond-error">متاسفانه  هیچ فایلی توسط سرور دریافت نشد. در فراید ارسال فایل خطایی وجود دارد </div>
		
	<?php } else if ($_GET["upload"] == 'ok') { ?>
		<div class="respond">فایل با موفقیت آپلود شد و پروژه به سایت اضافه گردید </div>
		
	<?php }} ?>

	<form
	enctype="multipart/form-data"
	action="<?php echo $formHandler ?>"
	method="post"
	name="upload_form">

		<!-- folder to upload the project -->
		<input
			type="hidden"
			name="section"
			id="project"
			value="project"
		/>

		<!-- upload file -->
		<div class="label">فایل زیپ پروژه را اپلود کنید
			<span>حجم فایل حداکثر 50 مگابایت</span>
		</div>
		<div class="input-file-container">
			<input
				class="input-file"
				id="upload_file"
				type="file"
				accept=".zip"
				name="upload_file"
				required="required"
			/>
			<label
				tabindex="0"
				for="upload_file"
				class="input-file-trigger"
			>فایل را انتخاب کنید ....</label>
			<p class="file-return"></p>
		</div>
		
		<!-- progress -->
		<div class="hidden" id="progressBarCon">
			<div class="progressBar">
				<span id="progressBar" class="progressBarInside"></span>
			</div>
			<h4 class="ltr" id="status"></h4>
			<p  class="ltr" id="loaded_n_total"></p>
			<br>
		</div>
		
		<!-- status massage (handled by js) -->
		<div id="statusMsg" class="hidden respond respond-error"></div>

		<!-- submit-->
		<input
			id="fileSubmit"
			type="submit"
			value="ارسال فولدر زیپ شده پروژه"
			class="submit"
		/>


	</form>
</div>

<!-- ===== footer ===== -->
<footer>
	<!-- pejman tayebi -->
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>

</footer>


<!-- ===== script ===== -->
<script>

	// hide respond after 20 sec
	var respond1 = document.getElementsByClassName('respond');
	var mainTitle = document.getElementById('main-title');
	setTimeout(function() {
		for (k = 0; k < respond1.length; k++) {
			respond1[k].classList.add("hide-anim");
		}
		mainTitle.classList.remove('header-error');
		mainTitle.classList.remove('header-ok');
	}, 20000);

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
			this_return.innerHTML = this.value;
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
	function errorHandler(event) {
		console.log( event.target.responseText);
		$("statusMsg").classList.remove('hidden');
		$("status").classList.add('hidden');
		$("statusMsg").innerHTML = "فرایند اپلود دچار خطا شده است";
	}
	function abortHandler(event) {
		console.log( event.target.responseText);
		$("statusMsg").classList.remove('hidden');
		$("status").classList.add('hidden');
		$("statusMsg").innerHTML = "فرایند اپلود متوقف شده است";
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

	function uploadFile(e) {
		e.preventDefault();
		
		// check if there is no file selected, show an error 
		if ( $("upload_file").files.length === 0 ) {
			$("statusMsg").classList.remove('hidden');
			$("statusMsg").innerHTML = "لطفا ابتدا یک فایل انتخاب کنید";
			return false;
		}
		
		$('progressBarCon').classList.remove('hidden');
		$('fileSubmit').classList.add('hidden');

		var upload_file = $("upload_file").files[0];
		var projectNameValue = $('project').value;

		// alert(file.name+" | "+file.size+" | "+file.type);
		var formdata = new FormData();
		formdata.append("ajax", 'true');
		formdata.append("section", 'project');
		formdata.append("project", projectNameValue);
		formdata.append("upload_file", upload_file);

		var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", completeHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST", "<?php echo $formHandler; ?>"); 
		ajax.send(formdata);

	}

	$('fileSubmit').addEventListener('click',uploadFile);
	
</script>

</body>

</html>