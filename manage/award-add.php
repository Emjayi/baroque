<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'مدیریت بخش جایزه ها';
require('functions/head.php');


$deleterPhpFile = 'awards-delete.php';
$formHandlerPhp = 'awards-upload.php';


?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>افزودن جایزه</h2>
</a>

<!-- ===== upload form ===== -->
<div class="form-con">
	<h3>ارسال جایزه جدید</h3>
	
	<form enctype="multipart/form-data"
		  action="<?php echo $formHandlerPhp ?>"
		  method="post" name="news_form">

		
		<!-- title -->
		<label for="title" class="label">
			عنوان جایزه
		</label>
		<input
			type="text" name="title"
			id="title" maxlength="275"
			class="input ltr no-m-btn"
			placeholder="Biennial Iranian Architecture Award"
			required="required"
		/>

		
		<!-- subTitle -->
		<label for="subTitle" class="label">
			عنوان فرعی
		</label>
		<input
			type="text" maxlength="275"
			name="subTitle" id="subTitle"
			placeholder="First place"
			value="" class="input ltr"
			required="required"
		/>


		<label for="year" class="label">
			سال
		</label>
		<input
			type="number" name="year" id="year"
			class="input ltr"
			max="<?php echo date("Y") ?>"
			value="<?php echo date("Y") ?>"
			required="required"
		/>


		<!-- file checkbox -->
		<div class="label">پیوست تصویر
			<span>در صورت غیر فعال بودن از تصویر پیشفرض استفاده میشود</span>
		</div>
		<label
			class="switch"
			for="imgSend"
			onclick="togle1('imgSend','imgSend-con')">
			<input
				type="checkbox"
				class="checkinput"
				id="imgSend"
				name="HasImage"
			/>
			<span class="switch-slider round"></span>
		</label>

		<div class="togle" id="imgSend-con">
		
			<!-- upload image file -->
			<div class="label">یک تصویر مربعی (با طول و عرض برابر) ارسال کنید
				<span>به فرمت png و با حجم حداکثر 10 کیلوبایت</span>
			</div>
			
			<div class="input-file-container">
				<input
					class="input-file"
					id="my-file-2"
					type="file"
					accept="image/*"
					name="upload_file"
				>
				<label
					tabindex="0"
					for="my-file-2"
					class="input-file-trigger"
				> فایل را انتخاب کنید ....</label>
				<p class="file-return"></p>
			</div>
			
		</div>

		<!-- submit-->
		<input
			type="submit"
			name="submitt"
			value="ارسال جایزه"
			class="submit"
		/>

		<!-- news respond -->
		<?php if(isset( $_GET["status"])){ if ($_GET["status"] == 'formPostError') { ?>
			<div class="respond respond-error">
				متاسفانه، دریافت شده قابل استفاده نیست
			</div>
		<?php } else if ($_GET["status"] == 'lenghtError') { ?>
			<div class="respond respond-error">
				اطلاعاتی که وارد کرده اید ، بیش از حد کوتاه هست
			</div>
		<?php } else if ($_GET["status"] == 'defaultImgOK') { ?>
			<div class="respond respond-error">
				جایزه به وبسایت اضافه شد (و با تصویر پیش فرض نمایش داده میشود)
			</div>
		<?php } else if ($_GET["status"] == 'fileexists') { ?>
			<div class="respond respond-error">
				در حال حاضر یک فایل آپلود شده وجود دارد
			</div>
		<?php } else if ($_GET["status"] == 'filesize') { ?>
			<div class="respond respond-error">
				خطا در اپلود فایل ، حجم فایل شما خیلی زیاد است
			</div>
		<?php } else if ($_GET["status"] == 'imgfileerror') { ?>
			<div class="respond respond-error">
				فایل تصویر ارسالی، مشکلدار بوده و قابل استفاده نیست. لطفا  فایل دیگری را ارسال کنید
			</div>
		<?php } else if ($_GET["status"] == 'imgformat') { ?>
			<div class="respond respond-error">
				لطفا فایل تصویر را فقط در فرمت درخواست شده (png) ارسال کنید 
			</div>
		<?php } else if ($_GET["status"] == 'error') { ?>
			<div class="respond respond-error">
				خطا در اپلود فایل ، متاسفانه در فرایند آپلود فایل مشکلی وجود داشته
			</div>
		<?php } else if ($_GET["status"] == 'ok') { ?>
			<div class="respond">
				فایل با موفقیت آپلود شد و جایزه با موفقیت به وبسایت اضافه شد
			</div>
		<?php }} ?>

	</form>
</div>

<!-- ===== footer ===== -->
<footer>
	<p>
		در صورت بروز اشتباه ، <br>
		میتوانید آخرین جایزه ارسال شده را از
			<a href="<?php echo $deleterPhpFile ?>">اینجا </a>
		حذف نمایید
	</p>
	<!-- pejman tayebi -->
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>

</footer>


<!-- ===== script ===== -->
<script>

	// togle read more by an checkbox
	function togle1(btnId, targetId) {
		togleee = document.getElementById(btnId).checked;
		target1 = document.getElementById(targetId);
		console.log(togleee);
		if (togleee) {
			target1.classList.add('show');
		} else {
			target1.classList.remove('show');
		}
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
			this_return.innerHTML = this.value;
		});
	}
</script>

</body>
</html>