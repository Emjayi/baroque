<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'تازه سازی اطلاعات برای گوگل';
require('functions/head.php');

?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>تازه سازی اطلاعات سایت</h2>
</a>


<!-- ===== delete form ===== -->
<div class="form-con">
	<h3>
		باز تعریف دوباره اطلاعات سایت برای گوگل
	</h3>
	
	<?php if($_GET) { if ($_GET["status"] == 'ok') { ?>
	<div class="respond respond-ok">سایت برای گوگل بازتعریف شد</div>
	<?php } } else { ?>

	<p class="label-btn">
		در صورتی که پروژه ای را به سایت اضافه و یا حذف کرده
		<br>
		و یا هرگونه تغییر دیگری انجام داده اید ، از این گزینه استفاده کنید
	</p>
	
	<?php } ?>
	
	<form enctype="multipart/form-data" action="sitemap-generator.php" method="post" name="image_upload_form">
		<input type="hidden" />
		<input type="submit" value="تازه سازی" class="submit" />
	</form>


</div>


<!-- ===== footer ===== -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>

<!-- ===== script ===== -->
<script>
	// hide respond after 30 sec
	var respond1 = document.getElementsByClassName('respond');
	setTimeout(function() {
		for (k = 0; k < respond1.length; k++) {
			respond1[k].classList.add("hide-anim");
		}
	}, 30000);

</script>

</body>

</html>
