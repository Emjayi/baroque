<?php 

$file_name = 'functions/user-pass.txt';

// load admin head
$page_title = 'ایجاد نام کاربری و پسورد';
require('functions/head.php');

$formHandler = 'create-pass-functions.php';
	

?>
<!-- ===== title ===== -->
<h2>هنوز هیچگونه نام کاربری و پسورد در وبسایت وجود ندارد</h2>


<!-- ===== delete form ===== -->
<div class="form-con">

	<h3>ایجاد نام کاربری و پسورد</h3>

	<?php if(isset($_GET["status"])) { if( $_GET["status"] == 'error') { ?>
		<div class="respond respond-error">پسورد های وارد شده ، با همدیگر یکسان نیستند</div>
	<?php } else if ( $_GET["status"] == 'short') { ?>
		<div class="respond respond-error">نام کاربری و یا پسورد وارد شده بیش از حد کوتاه است</div>
	<?php } } ?>

	<form action="<?php echo $formHandler ?>" method="post" >
		<!-- user -->
		<label class="label" for="name">نام کاربری  
			<span>از حروف انگلیسی استفاده کنید</span>
		</label>
		<input type="text" name="name" id="name" maxlength="254" class="input ltr" required="required" />

		<!-- pass -->
		<label class="label" for="pass1">پسورد 
			<span>بهتر است که حروف بزرگ، کوچک و اعداد همگی استفاده شوند</span>
		</label>
		<input type="password" name="pass1" id="pass1" maxlength="254" class="input ltr" required="required" />

		<!-- pass -->
		<label class="label" for="pass2">تکرار پسورد 
			<span>باید دقیقا با فرم قبلی یکسان باشد تا تایید صورت گیرد</span>
		</label>
		<input type="password" name="pass2" id="pass2" maxlength="254" class="input ltr" required="required" />

		<!-- submit btn -->
		<input type="submit" name="smb" value="ثبت نام کاربری و پسورد" class="submit">
	</form>			

</div>

<!-- ===== footer ===== -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>

<!-- ===== script ===== -->
<script>
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