<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'حذف کردن اعضای تیم';
require('functions/head.php');



$clients_dir = "../DATA/team/";



?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>مدیریت اعضای تیم ، درباره ما</h2>
</a>


<!-- ===== delete form ===== -->
<div class="form-con">
	<h3>حذف اعضای تیم</h3>

	<form
		enctype="multipart/form-data"
		action="removeFolder.php?target=client"
		method="post"
		name="image_upload_form"
		id="delete-form"
	>

		<div class="label">یکی از اعضای تیم را انتخاب کنید :</div><br>

		<div class="radio-list-con">
		
			<?php

			// get name of the folder (remove everything before last '/' character)
			function folderNameFromPath($pathh) {
				$pathhIndex = strripos($pathh,'/');
				return substr($pathh, $pathhIndex + 1 );
			}
			// search for project folders 
			$clientFolders = glob( $clients_dir.'*', GLOB_ONLYDIR );
			foreach ( $clientFolders as $clientName ) {
				$clientTextFile = glob( $clientName.'/*.txt' );
				$clientText = file( $clientTextFile[0]);
			?>
				<label class="radio-container radio-container-list ltr">
					<?php echo $clientText[1] ?>
					<input type="radio" name="deleteItem" value="<?php echo $clientName ?>"
						   onchange="change(this)">
					<span class="checkmark"></span>
				</label>
			<?php } ?> 

		</div>
		
		<br>
		<div onclick="showSubmit(this)" class="button submit" id="showSubmitBtn">
			اگر از این بابت مطمئن هستید، <br> اینجا را کلیک کنید
		</div>

		<input
			type="submit"
			value="هیچکدام از آیتم ها انتخاب نشده اند"
			id="submit"
			class="submit delete-btn submit-desabled hidden"
		/>
		
	</form>
	
	<?php if($_GET) { if ($_GET["status"] == 'ok') { ?>
	<div class="respond ">آیتم انتخابی حذف شد</div>
	
	<?php } else if ($_GET["status"] == 'noFolderExists') { ?>
	<div class="respond respond-error ">آیتم انتخاب شده در سایت وجود نداشته و پیش تر از وبسایت شده بود </div>
	
	<?php } else if ($_GET["status"] == 'error') { ?>
	<div class="respond respond-error ">در فرایند حذف شدن آیتم انتخابی،  مشکلی وجود دارد</div>
	
	<?php } else if ($_GET["status"] == 'sendError') { ?>
	<div class="respond respond-error ">در روند برقراری ارتباط با سرور، مشکلی وجود دارد</div>
	
	<?php } } ?>
</div>

<div class="form-con">
	<h3>ویرایش آیتم های موجود</h3>
	<br>
	<?php  $ftp_link = $ftp_address.'DATA/team/'; ?>
	<!-- ftp address -->
	<p>برای مدیریت دقیقتر و ویرایش فایل ها،<br> این آدرس را در اکسپلورر ویندوز وارد کنید:</p>
	<br>
	<textarea autocomplete="off" class="ltr footer-link" id="copy-text" onclick="copyText()"><?php echo $ftp_link; ?></textarea>
	<br>
</div>

<!-- ===== footer ===== -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>

<!-- ===== script ===== -->
<script>
	// show hidden delete form by click on a button
	function showSubmit(item) {
		var $submit = document.getElementById("submit");
		var showSubmitBtn = document.getElementById("showSubmitBtn");
		$submit.classList.remove("hidden");
		showSubmitBtn.classList.add("hidden");
	}

	// copy to clipboard
	function copyText() {
		var copyText = document.getElementById("copy-text");
		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/
		/* Copy the text inside the text field */
		document.execCommand("copy");
		alert("ادرس کپی شد، اکنون پنجره مای کامپیوتر ویندوز تان را باز کنید و آن را پیست کنید ");
	}

	// radio btn hangler 
	function change(radio) {
		var btn = document.getElementById('submit');
		btn.value = 'آیتم انتخاب شده حذف شود';
		btn.classList.remove('submit-desabled');
	}
</script>

</body>

</html>
