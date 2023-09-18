<?php

$passFile = 'functions/user-pass.txt';

require('functions/salt.php');

// check if thereis no password file , force user to generate new one 
if ( !file_exists($passFile) ) {
	header('Location: create-pass.php');
	die(); 
}

// set the values 
$username = null;
$password = null;

// logging out 
if($_GET) {
	if ($_GET["logout"] == 1) {
		session_start();
		$_SESSION["authenticated"] = 'false';
	}
} 

// read password file
$passFileArray = file($passFile, FILE_IGNORE_NEW_LINES);
$the_password = $passFileArray[0];

// get ualues
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	if(!empty($_POST["username"]) && !empty($_POST["password"])) {
		
		$password = salt(
			$_POST["username"],
			$_POST["password"]
		);

		if($password == $the_password) {
			session_start();
			$_SESSION["authenticated"] = 'true';
			header('Location: index.php');
		}
		else {
      // error : username and/or password is wrong
			header('Location: login.php?logout=2');
		}
	} else {
    // error : usename and/or password id blank
		header('Location: login.php?logout=3');
	}
} else {
  
// load admin head
$page_title = 'لطفا وارد شوید';
require('functions/head.php');

?>
<!-- ===== title ===== -->
<h2>مدیریت مطالب سایت</h2>

<!-- ===== password form ===== -->
<div class="form-con">
	<h3>برای ورود ، پسورد را وارد کنید</h3>
	
	<!-- form -->
	<form id="login" method="post" action="../manage/login.php">
		<!-- user -->
		<label for="username" class="label">نام کاربری</label>
		<input id="username" name="username" class="input ltr" type="text" required>
		<!-- password -->
		<label for="password" class="label">رمز ورود</label>
		<input id="password" name="password" class="input ltr" type="password" required>
		<!-- submit -->
		<input type="submit" value="ورود" class="submit">
	</form>
	
	<!-- respnd -->
<?php if($_GET) { if ($_GET["logout"] == 2) { ?>
	<div class="respond respond-error ">نام کاربری و یا پسورد اشتباه است</div>
<?php } else if ($_GET["logout"] == 3) { ?>
	<div class="respond respond-error ">نام کاربری و یا پسورد نباید خالی بماند</div>
<?php } } ?>

</div>

<!-- ===== footer ===== -->
<footer>
	طراحی و توسعه وبسیات :
	<a href="http://pejmantayebi.com">پژمان طیبی</a>
</footer>

</body>
</html>
<?php } ?>