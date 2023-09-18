<?php

// usename and password
require_once('authenticate.php');

$awardsFolder  	 = 'DATA/awards/';
$formHaldlerFile = 'awards-remove.php';

// load admin head
$page_title = 'حذف کردن جایزه ها';
require('functions/head.php');

?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>مدیریت بخش جایزه ها</h2>
</a>


<!-- ===== delete form ===== -->
<div class="form-con">

	<h3>حذف آخرین جایزه</h3>
	
	<button onclick="showSubmit(this)" class="submit" id="delete-button">
		اگر از این بابت مطمئن هستید، <br> اینجا را کلیک کنید
	</button>
	
	<form
		enctype="multipart/form-data"
		action="<?php echo $formHaldlerFile ?>"
		method="post" name="delete_form"
		class="hidden"
		id="delete-form">
		<input
			type="submit"
			name="deleteItem"
			value="آخرین جایزه حذف شود"
			class="submit delete-btn "
		/>
	</form>
	
	
<?php if($_GET) { if ($_GET["status"] == 'deleted') { ?>
	<div class="respond respond-error ">آخرین جایزه حذف شد</div>
<?php } else if ($_GET["status"] == 'deletedall') { ?>
	<div class="respond respond-error ">همه جایزه ها حذف شده اند</div>
<?php } } ?>
	
</div>


<div class="form-con">
	<h3>ویرایش اطلاعات جایزه ها</h3>
	<br>
	<!-- ftp address -->
	<p>برای مدیریت دقیقتر و ویرایش فایل ها،<br> این آدرس را در اکسپلورر ویندوز وارد کنید:</p>
	<br>
	<textarea
		autocomplete="off"
		class="ltr footer-link"
		id="copy-text"
		onclick="copyText()"
		style="max-width:14em;margin:auto"
	
		><?php
		echo htmlspecialchars($ftp_address.$awardsFolder);
	?></textarea>
	<br>
</div>


<!-- ===== footer ===== -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>


<!-- ===== script ===== -->
<script>
	
	var deleteButton = document.getElementById("delete-button");
	var $submit = document.getElementById("delete-form");

	// show hidden delete form by click on a button
	function showSubmit(item) {
		$submit.classList.remove("hidden");
		item.classList.add("hidden");
	}

	// hide respond after 15 sec
	var respond1 = document.getElementsByClassName('respond');
	if (respond1.length > 0 ) {
		deleteButton.classList.add("hidden");
		setTimeout(function() {
			
			// show deleteButton 
			deleteButton.classList.remove("hidden");

			// remove respond from url 
			var newUrl = window.location.href;
			newUrl = newUrl.split('?');
			newUrl = newUrl[0]
			history.pushState({}, null, newUrl);
			
			// hide respond massage
			setTimeout(function(){
				for (k = 0; k < respond1.length; k++) {
					respond1[k].classList.add("hide-anim");
				}
			},500)
			
		}, 15000);
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

</script>

</body>

</html>