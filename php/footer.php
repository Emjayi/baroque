</main><!-- #smooth-con -->

<!-- footer -->
<footer>
	<!-- footer nav -->
	<!-- <nav class="footer-nav" id="footer-nav">
		<p style="color:#666">navigation:</p>

		<a href=" <?php echo $rootPath ?>about/" data-nav="about" tabindex="-1" class="smoooth focusable">about</a>

		<a href="<?php echo $rootPath ?>projects/" data-nav="projects" tabindex="-1"
			class="smoooth focusable">projects</a>

		<a href="<?php echo $rootPath ?>awards/" data-nav="awards" tabindex="-1" class="smoooth focusable">awards</a>

		<a href="<?php echo $rootPath ?>contact/" data-nav="contact" tabindex="-1" class="smoooth focusable">contact</a>
	</nav> -->

	<!-- footer credits -->
	<p class="footer-copy">&copy;<span>
			<?php echo date('Y'); ?> ,
		</span>
		Mohammad Khodayi .</p>

	<p class="footer-rights">All rights reserved.</p>

	<p class="footer-designer">
		<span>web </span>design<span> by</span>:
		<a href="http://khatoonadvertising.ir/" title="web design and development by: Khatoon" target="_blank"
			class="footer-icon">
			<?php require($path . 'img/misk/peji.svg'); ?>
			<i>Khatoon Advertising</i>
		</a>
	</p>

	<!-- share button -->
	<button class="footer-share footer-icon" id="footer-share">share
		<span> this page</span>
		<?php require($path . 'img/misk/share-icon.svg'); ?>
	</button>

</footer>

<!-- loading text -->
<div class="loading-text">
	<span class="a-d-1">l</span>
	<span class="a-d-2">o</span>
	<span class="a-d-3">a</span>
	<span class="a-d-4">d</span>
	<span class="a-d-5">i</span>
	<span class="a-d-6">n</span>
	<span class="a-d-7">g</span>
</div>



<!-- share dialog -->
<div class="share" id="share">
	<h2>share this page</h2>
	<ul>
		<li><!-- telegram -->
			<a id="share-telegram" tabindex="-1" href="https://t.me/share" target="_blank" title="share by telegram">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<title>telegram</title>
					<path
						d="M12 24a12 12 0 100-24 12 12 0 000 24zM5.5 11.7L17 7.3c.5-.2 1 .1.8 1l-2 9.2c-.1.7-.5.8-1 .5l-3-2.2-1.5 1.4c-.2.2-.3.3-.6.3l.2-3 5.6-5c.2-.3 0-.4-.4-.2l-6.9 4.3-3-1c-.6-.1-.6-.5.2-.9z" />
				</svg>
				<i>share on</i>
				<b>telegram</b>
			</a>
		</li>
		<li><!-- whatsapp -->
			<a id="share-whatsapp" tabindex="-1" href="https://api.whatsapp.com/send" target="_blank"
				title="share by whatsapp">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<title>whatsapp</title>
					<path
						d="M256 0a256 256 0 100 512 256 256 0 000-512zm5 405c-25 0-51-6-73-19l-81 22 22-80a153 153 0 01241-185 153 153 0 01-109 262zm0 0" />
					<path
						d="M262 125a128 128 0 00-108 195l3 4-13 47 48-12 5 2a128 128 0 00155-199c-25-24-57-38-91-38zm74 182c-3 9-18 17-26 18-6 1-14 1-23-2l-22-8c-39-17-64-55-66-58-2-2-15-20-15-39s10-28 13-32a14 14 0 0110-5h8c2 0 5-1 8 7l12 28c1 2 2 4 0 7l-9 13c-2 2-4 4-2 8s10 16 21 26c15 13 27 17 31 19s6 2 8-1l13-15c2-3 5-3 8-2l26 13 8 4c1 2 1 10-3 19zm0 0" />
				</svg>
				<i>share on</i>
				<b>whatsapp</b>
			</a>
		</li>
		<li><!-- facebook -->
			<a id="share-fb" tabindex="-1" href="https://www.facebook.com/sharer/sharer.php?u=&quote="
				title="Share on Facebook" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<title>facebook</title>
					<path
						d="M512 256a256 256 0 10-256 256h5V313h-55v-64h55v-48c0-54 33-84 82-84l49 2v58h-34c-26 0-31 12-31 31v40h63l-8 65h-55v189a256 256 0 00185-246z" />
				</svg>
				<i>share on</i>
				<b>facebook</b>
			</a>
		</li>
		<li><!-- twitter -->
			<a id="share-tweet" tabindex="-1" href="https://twitter.com/intent/tweet?source=&text=:%20" target="_blank"
				title="Tweet">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<title>tweeter</title>
					<path
						d="M256 0a256 256 0 100 512 256 256 0 000-512zm117 200v7c0 78-59 167-167 167-33 0-64-9-90-26a120 120 0 0087-24c-26-1-48-18-55-41a58 58 0 0026-1c-26-6-47-29-47-58v-1c8 5 17 8 27 8a59 59 0 01-18-79c29 36 72 59 121 62a59 59 0 01100-54c13-2 26-7 37-14-4 14-13 25-26 32 12-1 24-4 34-9-8 12-18 22-29 31zm0 0" />
				</svg>
				<i>share on</i>
				<b>tweeter</b>
			</a>
		</li>
		<li><!-- linkedIn -->
			<a id="share-lkdin" tabindex="-1"
				href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank"
				title="Share on LinkedIn">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<title>linkedin</title>
					<path
						d="M256 0a256 256 0 100 512 256 256 0 000-512zm-74 387h-63V199h63zm-32-213c-21 0-34-15-34-33s14-32 35-32 34 14 35 32c0 18-14 33-36 33zm256 213h-62V287c0-26-9-43-32-43-17 0-27 12-31 23-2 4-3 10-3 15v105h-62V199h62v27c9-13 24-31 57-31 41 0 71 27 71 84zm0 0" />
				</svg>
				<i>share on</i>
				<b>linkedin</b>
			</a>
		</li>
	</ul>
	<!-- close button -->
	<button class="share-cancel" id="share-close">
		<svg xmlns="http://www.w3.org/2000/svg" width="121.3" height="122.9" viewBox="0 0 121 123">
			<path
				d="M91 5c7-7 18-7 25 0s7 19 0 26L86 61l30 31c7 7 7 19 0 26s-18 7-25 0L61 87l-31 31c-7 7-18 7-25 0s-7-19 0-26l31-31L5 31c-7-7-7-19 0-26s19-7 25 0l31 31L91 5z" />
		</svg>
	</button>
</div>

<!-- old-browser -->
<div class="old-browser" id="old-browser">
	<p> You are using on old browser that can't display this website correctly.
		<a href="https://browsehappy.com/" title="download a new browser">So, please upgrade it.
		</a>
	</p>
	<div class="icon-cancel" id="old-browser-close"></div>
</div>

<!-- no javascript massage -->
<noscript class="old-browser no-js">
	<p> This website requires JavaScript. Please enable JavaScript in your browser.</p>
</noscript>

<!-- noise animation on forground  -->
<div class="noise-con">
	<div class="noise"></div>
</div>

<!-- first time loading animation time -->
<script>
	var introLoading = false;
	setTimeout(function () {
		introLoading = true;
	}, 3000);
</script>

<!-- make lazy stylesheet links -->
<?php if (!isset($not_LazyLoad_cssFiles)) { ?>
	<script>
		for (i = 0; i < pagesCssFiles.length; i++) {
			var myCSS = document.createElement("link");
			myCSS.rel = "stylesheet";
			myCSS.href = pagesCssFiles[i];
			document.head.insertBefore(
				myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling
			);
		}
	</script>
<?php } ?>

<!-- scripts -->
<script src="<?php echo $rootPath ?>js/jquery.js"></script>
<script src="<?php echo $rootPath ?>js/vendors.js"></script>
<script src="<?php echo $rootPath ?>js/<?php e($js_scripts_file) ?>.js"></script>

</body>

</html>