<?php 

// force login
require_once('authenticate.php');

// load admin head
$page_title = 'مدیریت سایت دفتر معماری';
$notBackLinkHead = false;

require('functions/head.php');

?>
<h2>مدیریت مطالب سایت<a class="logout" href="login.php?logout=1"> خروج</a></h2>

<ul class="manage-links">
	<li>
		<a href="project-add.php">اضافه کردن پروژه</a>
	</li>
	<li>
		<a href="project-delete.php">حذف کردن پروژه</a>
	</li>
	<li>
		<a href="project-sort.php">ترتیب چیدمان پروژه ها</a>
	</li>
	<li>
		<a href="video-add.php">اضافه کردن ویدیو به پروژه</a>
	</li>
	<li>
		<a href="project-tmb.php">به روز رسانی تصاویر بند انگشتی</a>
	</li>
	<hr> <!-- ==== --> 
	<li>
		<a href="award-add.php">اضافه کردن جایزه</a>
	</li>
	<li>
		<a href="awards-delete.php">حذف کردن جایزه ها</a>
	</li>
	<hr> <!-- ==== --> 
	<li>
		<a href="client-add.php">اضافه کردن اعضا تیم</a>
	</li>
	<li>
		<a href="client-delete.php">حذف کردن اعضا تیم</a>
	</li>
	<li>
		<a href="client-sort.php">ترتیب چیدمان اعضا تیم</a>
	</li>
	<hr> <!-- ==== --> 
	<li>
		<a href="sitemap.php">تازه سازی اطلاعات برای گوگل</a>
	</li>
	<li>
		<a href="change-pass.php">تغییر نام کاربری و پسورد</a>
	</li>
	<hr> <!-- ==== --> 
	<li>
		<a href="../">مشاهده سایت</a>
	</li>
</ul>
<!-- ===== footer ===== -->
<footer>
	طراحی و توسعه وبسیات :
	<a href="http://pejmantayebi.com">پژمان طیبی</a>
</footer>



</body>

</html>
