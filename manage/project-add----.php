<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'مدیریت مطالب سایت';
require('functions/head.php');

$className = '';
if($_GET) {
	if (sizeof( $_GET["upload"] ) > 1 ) $className = 'header-error';
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
	<?php if($_GET) {  if ($_GET["upload"] == 'fileexists') { ?>
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


	<form enctype="multipart/form-data" action="project-upload.php" method="post" name="news_form">

		<input type="hidden" name="section" value="project" >

		<!-- upload file -->
		<div class="label">فایل زیپ پروژه را اپلود کنید
			<span>حجم فایل حداکثر 50 مگابایت</span>
		</div>
		<div class="input-file-container">
			<input class="input-file" id="my-file-2" type="file" accept=".zip" name="upload_file">
			<label tabindex="0" for="my-file-2" class="input-file-trigger">فایل را انتخاب کنید ....</label>
			<p class="file-return"></p>
		</div>

		<!-- submit-->
		<input type="submit" value="ارسال فولدر زیپ شده پروژه" class="submit" />


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

	
</script>

</body>

</html>