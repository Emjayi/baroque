<?php 

$file_name = 'functions/user-pass.txt';

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'تغییر نام کاربری و پسورد';
require('functions/head.php');


$respond = false;
if ( isset($_POST['smb'] )) {
	
	$name = $_POST['name'];
	$pass1 = $_POST['pass1'];
	$pass2 = $_POST['pass2'];
	
	if ( strlen($name) > 4 && strlen($pass1) > 4 && strlen($pass2) > 4  ) {
		if ( $pass1 == $pass2 ) {
			
			$userPass = salt(
				$name,
				$pass1
			);
			
			$myfile = fopen( $file_name , "w");
			fwrite($myfile, $userPass);
			fclose($myfile);
			
			
			$respond = 'ok';
		} else {
			$respond = 'error';
		}
	} else {
		$respond = 'short';
	}

	
} ?>

<!-- ===== title ===== -->
<a href="index.php">
	<h2>تغییر نام کاربری و پسورد</h2>
</a>


<!-- ===== delete form ===== -->
<div class="form-con">

	<h3>نام کاربری و پسورد جدید</h3>

	<?php if ( $respond == 'error') { ?>
		<div class="respond respond-error">پسورد های وارد شده ، با همدیگر یکسان نیستند</div>
	<?php } else if ( $respond == 'short') { ?>
		<div class="respond respond-error">نام کاربری و یا پسورد وارد شده بیش از حد کوتاه است</div>
	<?php } else if ( $respond == 'ok') { ?>
		<div class="respond">نام کاربری و پسورد ، با موفقیت به روز رسانی شد</div>
	<?php } ?>

	<form action="<?php echo $_SERVER['PHP_SELF'] ; ?>" method="post" >
	
		<!-- new user name -->
		<label class="label" for="name">نام کاربری جدید 
			<span>نیازی نیست که با نام کاربری فعلی یکسان باشد</span>
		</label>
		<input type="text" name="name" id="name" maxlength="254" class="input ltr" required="required" />

		<!-- new pass -->
		<label class="label" for="pass1">پسورد جدید
			<span>بهتر است که حروف بزرگ، کوچک و اعداد همگی استفاده شوند</span>
		</label>
		<input type="password" name="pass1" id="pass1" maxlength="254" class="input ltr" required="required" />

		<!-- new pass agane -->
		<label class="label" for="pass2">تکرار پسورد جدید
			<span>باید دقیقا با فرم قبلی یکسان باشد تا تایید صورت گیرد</span>
		</label>
		<input type="password" name="pass2" id="pass2" maxlength="254" class="input ltr" required="required" />

		<!-- submit btn -->
		<input type="submit" name="smb" value="ثبت نام کاربری و پسورد جدید" class="submit">
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