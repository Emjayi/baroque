// ---------------------------------------------------
// ------------------  detections --------------------
// ---------------------------------------------------

var isMobile = false,
	isTouch = false,
	isTablet,
	isDesktop,
	winH = $(window).height(),
	winW = $(window).width(),
	isHorizental,
	isVertical,
	smoothState,
	resizing = false,
	emUnit = 16,
	usingFF = false,
	iSiPAD = false;

var parallexHorizontalZarib = 1.5,
	parallexZaribAboutPic = 1.5;

var magicScrlSpeed = 80,
	magicScrlSmooth = 12;

//  ---------- these varibles are defined in the head : 
/*	SiteDomain
	siteIsLoaded
	page
	isotopScriptIsloaded
	projectPageScriptIsLoaded
	smoothLoaded
	bypassEntranceAnimation
*/

//  ---------- test Animation Frame Rate and set the MagicScrool value
function testFrameRate(testTimeDelay) {
	var index = 0 ;
	var timee = true;
	setTimeout(function(){
		timee = false;
	},(100 * testTimeDelay));
	function testRequestAnimationFrame() {
		index++;
		if ( timee ) {
			requestAnimationFrame(testRequestAnimationFrame)
		}
	}
	testRequestAnimationFrame();
	setTimeout(function(){
		console.log('testFrameRate : ' + index);
		index = index / (6 * testTimeDelay); 
		magicScrlSpeed /= index;
		magicScrlSmooth *= index;
		if ( magicScrlSmooth > 50 ) magicScrlSmooth = 50;
		if ( magicScrlSmooth < 10 ) magicScrlSmooth = 10;
		if (magicScrlSpeed < 65 ) magicScrlSpeed = 65;
		if (magicScrlSpeed > 95 ) magicScrlSpeed = 95;
	},(110 * testTimeDelay));
}
setTimeout(function(){testFrameRate(5)},500);


// ---------- device size detection 
function deviceSize() {
	winH = $(window).height();
	winW = $(window).width();
	
	isMobile  = winW <= 900; 
	isTablet  = winW < 992 && winW > 900;
	isDesktop = winW >= 992;

	if (winW >= winH) {
		isHorizental = true;
		isVertical = false;
	} else {
		isHorizental = false;
		isVertical = true;
	}
	if ( winW < 601 ) parallexHorizontalZarib = 2.5;
	else parallexHorizontalZarib = 1.5;
	if ( winW < 901 ) parallexZaribAboutPic = 2.5;
	else parallexZaribAboutPic = 1.5;
	if ( winW >= 2600 ) emUnit = 32;
	else emUnit = 16;
}
deviceSize();

var isdeviceMediaChanged = false,
	isMobile0 = isMobile,
	isTablet0 = isTablet,
	isDesktop0 = isDesktop,
	lastisMediaChanged = false;

function isMediaChanged() {
	if (isMobile0 != isMobile || isTablet0 != isTablet || isDesktop0 != isDesktop) {
		isMobile0 = isMobile;
		isTablet0 = isTablet;
		isDesktop0 = isDesktop;
		return true;
	} else {
		return false;
	}
}

// ----------  mobile os detection
function mobileOsDetect() {
	var userAgenttt =
		navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgenttt)) {
		$('html').addClass('android mob');
		isTouch = true;
	} else if (/iPad|iPhone|iPod/.test(userAgenttt) && !window.MSStream) {
		$('html').addClass('ios mob');
		isTouch = true;
	} else if (/windows phone/i.test(userAgenttt)) {
		$('html').addClass('winphone mob');
		isTouch = true;
	} else if ( /Googlebot-Mobile/i.test(userAgenttt) ) {
		$('html').addClass('mob');
		isTouch = true;
	}
	if (!isTouch) {
		$('html').addClass('desktop');
	}
}
mobileOsDetect()

// ----------  ipad detection
function iOS() {
	if (
		usingIE ||
		navigator.platform.indexOf("iPad") != -1 ||
		navigator.platform.indexOf('iPhone') != -1 ||
		navigator.platform.indexOf('iPod') != -1 )
	return  true;
	return // iPad on iOS 13 detection
		(navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
iSiPAD = iOS();

// ----------  browser detection 
function browserDetector() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
		$('html').addClass('Opera');
	} else if (navigator.userAgent.indexOf("Chrome") != -1) {
		$('html').addClass('Chrome');
	} else if (navigator.userAgent.indexOf("Safari") != -1) {
		$('html').addClass('Safari');
	} else if (navigator.userAgent.indexOf("Firefox") != -1) {
		$('html').addClass('Firefox');
		usingFF = true;
	}
}
browserDetector();

var usingIE = false;

function ieDestector() {
	var ua = window.navigator.userAgent;
	var testIEmsie = ua.indexOf('MSIE ');
	//  IE 10 or older 
	if (testIEmsie > 0) {
		$('html').addClass('ie ie10');
		usingIE = true;
	}
	//  IE 11 
	var testIEtrident = ua.indexOf('Trident/');
	if (testIEtrident > 0) {
		$('html').addClass('ie ie11');
		usingIE = true;
	}
	//  Edge (IE 12+) 
	var testIEedge = ua.indexOf('Edge/');
	if (testIEedge > 0) {
		$('html').addClass('ie-edge');
	}
}
ieDestector();


// ---------------------------------------------------
// ------------- touch swipe detection ---------------
// ---------------------------------------------------
function swipedetect(el, callback, preventDfault) {
	var touchsurface = el,
		swipedir,
		startX,
		startY,
		distX,
		distY,
		//required min distance traveled to be considered swipe
		threshold = 150, 
		// maximum distance allowed at the same time in perpendicular direction
		restraint = 100,
		// maximum time allowed to travel that distance
		allowedTime = 300, 
		elapsedTime,
		startTime,
		handleswipe = callback || function (swipedir) {};

	touchsurface.addEventListener('touchstart', function (e) {
		var touchobj = e.changedTouches[0];
		swipedir = 'none';
		dist = 0;
		startX = touchobj.pageX;
		startY = touchobj.pageY;
		// record time when finger first makes contact with surface
		startTime = new Date().getTime();
		if ( preventDfault ) 
			e.preventDefault();
	}, false)

	touchsurface.addEventListener('touchmove', function (e) {
		// prevent scrolling when inside DIV
		if ( preventDfault ) 
			e.preventDefault()
	}, false)

	touchsurface.addEventListener('touchend', function (e) {
		var touchobj = e.changedTouches[0]
		// get horizontal dist traveled by finger while in contact with surface
		distX = touchobj.pageX - startX ;
		// get vertical dist traveled by finger while in contact with surface
		distY = touchobj.pageY - startY;
		// get time elapsed
		elapsedTime = new Date().getTime() - startTime ;
		// first condition for awipe met
		if (elapsedTime <= allowedTime) { 
			// 2nd condition for horizontal swipe met
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { 
				// if dist traveled is negative, it indicates left swipe
				swipedir = (distX < 0) ? 'left' : 'right' ;
			// 2nd condition for vertical swipe met
			} else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
				// if dist traveled is negative, it indicates up swipe
				swipedir = (distY < 0) ? 'up' : 'down' ;
			}
		}
		handleswipe(swipedir)
		if ( preventDfault )
			e.preventDefault()
	}, false)
}

// ---------------------------------------------------
// ------ common page functions and parameter --------
// ---------------------------------------------------
var bodyClasses = [
	'home',
	'about',
	'awards',
	'contact',
	'works',
	'project',
];

function checkbodyHasAPageClass() {
	var teturnTrue = false;
	var bodyClassesLen = bodyClasses.length;
	for ( i = 0 ; i < bodyClassesLen ; i++ ) {
		if ( $('body').hasClass(bodyClasses[i]))  teturnTrue = true;
	}
	return teturnTrue;
}

// ---------- page scrolbars
var Scrollbars = [];
function enableScrolWheelForIE(scrolElement) {
	scrolElement.addEventListener("wheel", wheelFunction);
	var delta = 0, move = 0;;
	function wheelFunction() {
		delta += event.deltaY;
		move = delta / 3;
		if ( move < 0 ) delta = 0 ;
		$(scrolElement).scrollLeft(move);
	}
}

// ---------- an empty function that changes by pages 
var	functionAfterIntroLoading = function() {};

// ---------- mousehover change Logo function
function changeLogo(index) {
	$('#header')
		.removeClass('pos1 pos2 pos3 pos4 pos5')
		.addClass('pos' + index);
}
var menuToShow = false;

// ---------- set numblers of menus, when the menu is in slider mode 
function menuToShowChangeLogo() {
	switch(pageClass) {
		case 'home': menuToShow = false; break;
		case 'about': menuToShow = 1; break;
		case 'awards': menuToShow = 3; break;
		case 'contact': menuToShow = 4; break;
		case 'works': menuToShow = 2; break;
		case 'project': menuToShow = 2;  break;
		case 'errorr': menuToShow = 1; 
	}
}

// ---------- if it's project page , first load the isotop script 
function checkIsotopScriptLoaded() {
	if (pageClass == 'works') {
		if (isotopScriptIsloaded) return true;
		else setTimeout(checkIsotopScriptLoaded,200);
	} else if (pageClass == 'project') {
		if (projectPageScriptIsLoaded) return true;
		else setTimeout(checkIsotopScriptLoaded,200);
	} else return true; 
}

// ---------- get main container and size and idstance from screen 
var mainContainerSize;
function getMainContainerSize() {
	var mainContainer = document.querySelector('#smooth-con');
	var mainContainerArticle = document.querySelector('#smooth-con article');
	var containerSize = {};
	containerSize.x = mainContainer.clientWidth;
	containerSize.y = mainContainer.clientHeight;
	var dx = mainContainerArticle.clientWidth - containerSize.x;
	var dy = mainContainerArticle.clientHeight - containerSize.y;
	containerSize.x += dx;
	containerSize.y += dy;
	var rect = mainContainer.getBoundingClientRect();
	containerSize.top = rect.top;
	containerSize.left = rect.left - dx;
	containerSize.btn = winH - mainContainer.clientHeight - containerSize.top;
	containerSize.right = winW - mainContainer.clientWidth - rect.left;
	containerSize.btnEnd = containerSize.top + containerSize.y;
	containerSize.rightEnd = containerSize.left +  containerSize.x;
	return containerSize;
}


// ---------------------------------------------------
// ---- show the nav menu as slider resposively ------
// ---------------------------------------------------
var navMenuSlided = false,
	navMenuNumToGo = menuToShow;
function responsiveMenuSlider(menu) {
	var navMenu = $('#nav');
	// ----------  normal desktop menu 
	if (winW >= 610) {
		
		if (navMenuSlided)
			navMenu.slick('unslick');
		navMenuSlided = false;
	// ----------  mobile slider menu
	} else {
		if (!navMenuSlided) {
			// generate the slider
			navMenuSlided = true;
			if (!menuToShow) menuToShow = 1;
			navMenu.slick({
				infinite: true,
				centerMode: true,
				variableWidth: true,
				cssEase: 'ease-out',
				slidesToShow: menuToShow,
				touchThreshold: 6
			});
			// change logo squaires animations On before slide change
			navMenu.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				nextSlide++;
				if (menuToShow) {
					changeLogo(nextSlide);
				}
				navMenuNumToGo = nextSlide;
			});
			//make menu buttons not TABable  when menu is not open
			navMenu
				.find('button , a')
				.attr('tabindex', '-1')
				.addClass('focusable');
		} else {
			navMenu.slick('slickGoTo', menuToShow - 1, false);
		}
	}
}


// ---------------------------------------------------
// ------------ main Menu functions ----------------
// ---------------------------------------------------
var menuIsActive = false;
function mainMenu(animateLogo) {
	
	// ---------- opening menu
	if (!menuIsActive) {
		$('body').addClass('hide-main menu-startAnim');
		$('#logo').removeAttr('style');
		if ( usingIE || usingFF) $('#logo span').removeAttr('style');
		setTimeout(function(){
			$('body').addClass('menu-show');
			responsiveMenuSlider();
		},250)
		setTimeout(function(){
			$('#header .focusable').attr('tabindex',"1");
			$('#footer-nav .focusable').attr('tabindex',"-1");
		},1000);
		notlogoRotate = true;
		setTimeout(function(){
			menuIsActive = true;
			if ( animateLogo ) notlogoRotate = false;
			$('body').removeClass('hide-main menu-startAnim');
		},2000);
	}
	
	// ---------- closing menu
	else {
		notlogoRotate = true;
		$('#logo')
			.addClass('logo-anim-reset')
			.removeAttr('style');
		if ( usingIE || usingFF) $('#logo span').removeAttr('style');
		$('body').addClass('menu-ending');
		menuIsActive = false;
		$('#header .focusable').attr('tabindex',"-1");
		$('#footer-nav .focusable').attr('tabindex',"1");
		setTimeout(function(){
			notlogoRotate = true;
		},500)
		setTimeout(function(){
			$('body').removeClass('menu-show');
			$('#logo')
				.removeClass('logo-anim-reset')
				.removeAttr('style');
			if ( usingIE || usingFF) $('#logo span').removeAttr('style');
			notlogoRotate = true;
		},1000);
		setTimeout(function(){
			$('body').removeClass('menu-ending');
			notlogoRotate = true;
		},3500)
	}
}


// ---------------------------------------------------
// ------------ 3D rotate Logo function --------------
// ---------------------------------------------------
var notlogoRotate = true,
	randomRrotateLogo;
function logoRotation() {
	
	var orinetationSuported = false;
	// ---------- Logo 3D rotate animation function
	var logo = document.getElementById('logo');
	if ( usingIE || usingFF ) {
		var logoSquaire = $('.logo-1, .logo-2, .logo-3, .logo-4, .logo-5');
		var logoSquaireLen = logoSquaire.length - 1;
	}
	function rotateLogo(a, b, c) {
		b *= -1;
		if ( menuIsActive && !notlogoRotate ) {
			logo.style.transform =
				"rotateX(" + b + "deg)rotateY(" + a + "deg)rotateZ(" + c + "deg)";
			if ( usingIE || usingFF ) {
				for (i = 0 ; i < logoSquaireLen; i++ ) {
					a *= ((( i % 3 ) + 1) * 0.6);
					b *= ((( i % 3 ) + 1) * 0.6);
					logoSquaire[i].style.transform =
						"translateX(" + a + "px)translateY(" + b + "px)";
				}
			}
		}
	}

	var LogoSize = 50;
	// if ( isTouch ) ogoSize = 100;
	var lFollowX = 0,
		lFollowY = 0,
		moveeX   = 0,
		moveeY   = 0,
		friction = 0.005,
		angleXY  = 0,
		mX 		 = 0,
		mY		 = 0,
		mXold    = 0,
		mYold    = 0;
	var notRandomRrotateLogo = false;
	var friction1 = 0,
		logoIssentered = true;
	
	// ---------- mouse/touch movement function
	function mouseMove(e,xx,yy) {
		//console.log('x: ' + xx + ' y: ' + yy);
		if ( e !== 0) {
			mX = e.clientX;
			mY = e.clientY;
			if ( !notlogoRotate ) notRandomRrotateLogo = true;
			if (isTouch ) {
				mX = e.touches[0].clientX;
				mY = e.touches[0].clientY;
			}
		} else {
			mX = xx;
			mY = yy;
		}
		if (notlogoRotate) {
			mX = winW / 2;
			mY = winH / 2;
		}
		if (mX > (winW / 2 - LogoSize) && mX < (winW / 2 + LogoSize) &&
			mY > (winH / 2 - LogoSize) && mY < (winH / 2 + LogoSize)) {
			mY = winH  / 2;
			mX = winW  / 2;
			friction = 0.03;
			logoIssentered = true;
		} else {
			friction = 0.01;
			if ( logoIssentered) friction = 0;
			logoIssentered = false;
		}
		var lMouseX = Math.max(-200, Math.min(200, winW / 2 - mX));
		var lMouseY = Math.max(-200, Math.min(200, winH / 2 - mY));
		lFollowX = lMouseX * 0.2;
		lFollowY = lMouseY * 0.2;
		//console.log( Math.abs(mX - mXold ));
		if (Math.abs(mX - mXold) > 50 ||  Math.abs(mY - mYold) > 50 ) {
			friction1 = 0;
			//console.log('reset friction1');
		}
		mXold = mX;
		mYold = mY;
	}

	// ---------- animate logo by mouse mouse movement function 
	function moveByMouse() {
		if ( notlogoRotate ) {
			moveeX = 0;
			moveeY = 0; 
			moveeZ = 0;
			friction1 = 0 ;
		} else {
			if ( friction1 < friction ) friction1 += 0.0001;
			//console.log(friction1);
			moveeX += (lFollowX - moveeX) * friction1;
			moveeY += (lFollowY - moveeY) * friction1;
			moveeZ = (Math.abs(moveeX) + Math.abs(moveeY)) * 0.1;
		}
		rotateLogo(moveeX, moveeY, moveeZ);
		requestAnimationFrame(moveByMouse);
	}
	
	
	// ---------- generate random mouse pointer on touch devices
	 randomRrotateLogo = function(autotrigger) {
		console.log('randomRrotateLogo');
		if ( !notRandomRrotateLogo) {
			var randomX, randomY, randomXisOK = false,
				randomYisOK = false;
			/*check the generated randorm X number is in the range*/
			function xRandom() {
				randomX = winW * Math.random();
				if (randomX <= (winW / 5) || randomX >= (winW * 4 / 5)) {
					return randomX;
					randomXisOK = true;
				} else xRandom();
			}
			xRandom();
			/*check the generated randorm Y number is in the range*/
			function yRandom() {
				randomY = winH * Math.random();
				if (randomY <= (winH / 5) || randomY >= (winH * 4 / 5)) {
					return randomY;
					randomYisOK = true;
				} else yRandom();
			}
			yRandom();
			mouseMove(0,randomX,randomY);
			if ( autotrigger && !orinetationSuported && !notRandomRrotateLogo) {
				setTimeout(randomRrotateLogo,4000);
			}
		}
	}
    // ---------------------------------------------------
	
	var checkOrientationEventWorks = true;
	
	// ---------- get permission for DeviceMotionEvent
	function permissionMotion() {
		if (typeof (DeviceMotionEvent) !== "undefined" &&
			typeof (DeviceMotionEvent.requestPermission) === "function") {
			// (optional) Do something before API request prompt.
			DeviceMotionEvent.requestPermission()
				.then(function(response){
					// (optional) Do something after API prompt dismissed.
					if (response == "granted") {
						window.addEventListener("devicemotion", handleOrientation)
					}
				})
				.catch(console.error)
		} else {
			console.log("DeviceMotionEvent is not defined");
		}
		checkOrientationEventWorks = false;
	}
	
	// ---------- check connection is https and correct the URI
	function httpsCheck() {
		if (location.protocol != "https:") {
			location.href =
				"https:" + window.location.href.substring(window.location.protocol.length);
		} else {
			permissionMotion();
		}
	}
	
	// ---------- phone sensor movement function
	var alpha = 0,
		beta = 0,
		gamma = 0,
		alpha1 = 0,
		beta1 = 0,
		gamma1 = 0;
	var factorMove = 60,
		factorRotate = 10;
	
	function handleOrientation(event) {
		alpha = event.alpha;
		beta = event.beta;
		gamma = event.gamma;
		// if mobile is not working
		if ( typeof alpha != 'number' && checkOrientationEventWorks ) {
			// httpsCheck();
			permissionMotion();
			if (isTouch) {
				$(document).on('touchmove', mouseMove);
			}
		} else orinetationSuported = true;
		/*
		if (notlogoRotate) {alpha = 0;beta = 0;gamma = 0;}
		alpha1 = Math.abs(alpha) / 180 * factorMove;
		beta1 = Math.abs(beta) / 180 * factorMove;
		gamma1 = Math.abs(gamma) / 180 * factorRotate;
		rotateLogo(alpha1, beta1, gamma1);
		*/
		alpha1 = Math.abs(alpha) / 18 * 200;
		beta1 = Math.abs(beta) / 18 * 100;
		mouseMove(0,alpha1,beta1);
	}

	// ---------- animate logo by phone sensor movement
	function enableOrientation() {
		window.addEventListener(
			"deviceorientation", handleOrientation, true
		)
	}
	setTimeout(enableOrientation, 100);

	// ---------- enable mouse/touch events after page has been loaded
	setTimeout(function () {
		if (!isTouch) $(document).on('mousemove', mouseMove);
	}, 100)
	
	
	// ---------- enable animate logo by mouse mouse movement
	moveByMouse();

	// ---------- check if there is no movement , generate random one 
	if ( isTouch ) {
		setTimeout(function(){
			if ( moveeX == 0 && moveeY == 0 ){
				randomRrotateLogo(true);
			}
		},3000);
	}
}


// ---------------------------------------------------
// ------------------- fullscreen --------------------
// ---------------------------------------------------
var isFullscreen = false;
function toggleFullscreen() {
	
	if (isFullscreen) {
		closeFullscreen();
		isFullscreen = false
	} else {
		openFullscreen();
		isFullscreen = true;
	}
	resize();
	
}
function openFullscreen() {
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		// Firefox 
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		// Chrome, Safari and Opera 
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		// IE/Edge 
		elem.msRequestFullscreen();
	}
	isFullscreen = true;
	//  $('body').addClass('ful-screen');
	
}
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		// Firefox 
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		// Chrome, Safari and Opera 
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		// IE/Edge 
		document.msExitFullscreen();
	}
	isFullscreen = false;
	//  $('body').removeClass('ful-screen');
	
}


// ---------------------------------------------------
// ------------- page Common funcitons ---------------
// ---------------------------------------------------
var thePageURL , thePageTitle;
function pageCommon() {
	// ---------- if there is a error , show 404 page
	if (typeof (pageClass) != "string") {
		//alert('no pageClass!');
		location.href = 'http://' + SiteDomain + '/error/';
	}
	
	// -------------- set body class baesd on page varible
	function bodyClass(className) {
		var changeClass = '';
		for (i = 0; i < bodyClasses.length; i++) {
			if (bodyClasses[i] != className) {
				changeClass += bodyClasses[i] + ' ';
			}
		}
		changeClass += 'errorr';
		$('body')
			.removeClass(changeClass)
			.addClass(className);
		var menuName = '#nav-' + className;
		$(menuName).addClass('active').attr('href','#');
		menuToShowChangeLogo();
	}
	bodyClass(pageClass);
	
	// ---------- generate styleed scrolbars
	Scrollbars = [];
	if ( !isTouch) {
		var scrolbaritemSelector = $('.scrolbar');
		var scrolbaritems = scrolbaritemSelector.length;
		if (scrolbaritems > 0) {
			for (i = 0; i < scrolbaritems; i++) {
				var isprimeryScrolbar = i == 0 ? true : false;
				var Scrollbaritem =
					new GeminiScrollbar({
						element: scrolbaritemSelector[i],
						/*forceGemini: true,*/
					})
					.create();
				Scrollbars.push(Scrollbaritem);
			}
		}

		// ---------- update scrolbars 
		setTimeout(function(){
			var ScrollbarsLen = Scrollbars.length;
			for ( i = 0 ; i < ScrollbarsLen ; i++) {
				Scrollbars[i].update();
			}
		},500)
	}
	
	// ---------- update the parameters that contains page URL and Title 
	thePageURL = encodeURIComponent(document.URL);
	thePageTitle = encodeURIComponent(document.title);
	
	// ---------- get main container and offset from top and left 
	mainContainerSize = getMainContainerSize();
}


// ---------------------------------------------------
// ---------------------------------------------------
// -------------- home page functions ----------------
// ---------------------------------------------------
// ---------------------------------------------------
function homePage() {
	
	// test Animation Frame Rate in 4 secounds 
	testFrameRate(40);
	
	// ---------- click to enter
	$('#home-enter').on('click', function () {
		$('body').addClass('menu-show');
		setTimeout(function () {
			notlogoRotate = false;
			// set menuIsActive for smooth state anim
			menuIsActive = true;
		}, 3000)
	});

	// ---------- set id for each svg
	var svgitemsLen = 0;
	$('#home-svg svg').each(function (index) {
		var idName = 'home-svg-' + (index + 1);
		$(this).attr('id', idName);
		svgitemsLen++;
	});

	// ---------- set animation for each svg
	var svgAnimArray = [];

	function animEachSvg(i) {
		var idName = 'home-svg-' + (i + 1);
		var svgAnim = new Vivus(idName, {
			duration: 800,
			type: 'oneByOne'
		});
		svgAnim.stop().reset();
		svgAnimArray.push(svgAnim);
	}
	for (i = 0; i < svgitemsLen; i++) {
		animEachSvg(i)
	}

	// ---------- hatch ( fill color ) function
	function unhatch(element) {
		var elm = element.querySelectorAll('.hatch');
		var elmLen = elm.length;
		for ( i = 0 ; i < elmLen; i++ ) {
			elm[i].classList.remove('hatch-draw');
		}
	}
	function hatch(element) {
		var elm = element.querySelectorAll('.hatch');
		var elmLen = elm.length;
		var i = 0;
		function hatchDraw() {
			if ( i < elmLen ) {
				elm[i].classList.add('hatch-draw');
				i++;
				setTimeout(hatchDraw,400);
			}
		}
		setTimeout(hatchDraw,100);
	}
	
	// ---------- play animation for each svg
	var svgAnimDelay = 20000;
	var svgAnimInex = -1;
	var svgAnimInexPrevius = null;

	function svgAnimPlay() {
		function playSVG() {
			svgAnimArray[svgAnimInex].play(1, function(){
				hatch(svgAnimArray[svgAnimInex].el);
				svgAnimInexPrevius = svgAnimInex;
				setTimeout(svgAnimPlay, svgAnimDelay);
			});
		} 
		if (svgAnimInex == svgitemsLen - 1)
			svgAnimInex = 0;
		else
			svgAnimInex++;
		if (svgAnimInexPrevius != null) {
			svgAnimArray[svgAnimInexPrevius].play(-6,function() {
				setTimeout(playSVG, 1000);
			} );
			unhatch(svgAnimArray[svgAnimInexPrevius].el);

		} else 
			setTimeout(playSVG, 1000);
	}

	// ---------- start svg animations After initinal Loding Intro
	functionAfterIntroLoading = function () {
		$('#home-svg').show();
		setTimeout(function(){
			$('body').addClass('home-text-show');
		},3000);
		svgAnimPlay();
	}

	// ---------- check home page start state 
	if (smoothLoaded) {
		setTimeout(function () {
			$('body').addClass('menu-show');
		}, 100)
	}
	
}


// ---------------------------------------------------
// ---------------------------------------------------
// -------------- works page functions ---------------
// ---------------------------------------------------
// ---------------------------------------------------
var isotopWorkPageGripd,
	updateWorkGridScrolBar = null,
	workPageMagicScroll = false ;

// ---------- calculate and set width of all grid items 
function setGridItemsWidth() {
	
	// ---- padding bottom
	var paddingBottom = 4; // em
	
	// ---- pading Right
	var paddingRight = 7.5; // vw
	if ( winW <= 900) paddingRight = 10;
	if ( winW <= 600) paddingRight = 15;
	if ( winW <= 400) paddingRight = 20;
	
	// ---- height
	var theHeight =
		(winH / 100 ); // 1vh
	if ( winH > 700) {
		theHeight *= 35; // 35vh
	} else if ( winH <= 700 && winH > 600) {
		theHeight *= 40; // 40vh
	} else if ( winH <= 600) {
		theHeight *= 50; 
		theHeight -= (2.15 * emUnit )
	}
	if ( winH < 500 && winW >= 500 ) {
		theHeight = 50 * (winH / 100 ); // 50vh
		theHeight -= (1.24 * emUnit) // 1.24em 
	}
	if ( winH < 851 &&  winH > 449 && winW < 500 ) {
		theHeight = 33.3 * (winH / 100 ); // 33.3vh
		theHeight -= (1.4 * emUnit) // 1.4em 
	}
	
	theHeight -= (paddingBottom * emUnit ); 

	// console.log( 'paddingRight : ' +  paddingRight );
	// console.log( 'theHeight : ' + theHeight);
	
	$('#grid .grid-item').each(function () {
		var $this = $(this);
		var widthRatio = $this.attr('data-width');
		var theWidth = theHeight * widthRatio;
		theWidth += ((paddingRight / 100) * winW ); // 5vw padding right
		$this.css('width', theWidth);
	});
}

// ---------- set Project Parallex Ratio
var projectRandomParallexRatio,
	ProjectsGridParallexRatio;
function setProjectParallexRatio() {
	if ( winW > 1500) {
		projectRandomParallexRatio = 10;
		ProjectsGridParallexRatio = 1;
	} else if ( winW > 1000){
		projectRandomParallexRatio = 9;
		ProjectsGridParallexRatio = 0.5;
	} else if ( winW > 750){
		projectRandomParallexRatio = 8;
		ProjectsGridParallexRatio = 0.35;
	} else if ( winH < 751 && winW < 500 ) {
		projectRandomParallexRatio = 10;
		ProjectsGridParallexRatio = 0.5;
	} else {
		projectRandomParallexRatio = 8;
		ProjectsGridParallexRatio = 0.25;
	}
	// console.log('projectRandomParallexRatio: ' + projectRandomParallexRatio);
	// console.log('ProjectsGridParallexRatio: ' + ProjectsGridParallexRatio);
}

// ---------- get distance of Options panel from right of it
/*var optionsPanelRight = 0;
function optionsPanelRightDistance() {
	var elm = $('#options');
	var elmX = elm[0].getBoundingClientRect();
	elmX = elmX.left;
	optionsPanelRight = elm.width() + elmX;
}*/

// ---------- main works page function  
function workPage() {

	// ---------- smooth horizontal scrol
	var initScrolbarTime = 1200;
	if (smoothLoaded ) initScrolbarTime = 300;
	var scrolbarTarget = $(".scrolbar > .gm-scroll-view")[0];
	if ( isTouch ) scrolbarTarget = $(".scrolbar")[0];
	if ( !usingIE ) {
		setTimeout(function(){
			workPageMagicScroll = new MagicScroll({
				target: scrolbarTarget,
				speed: magicScrlSpeed,
				smooth: magicScrlSmooth,
				horizential: true
			});
		},initScrolbarTime);
	} else enableScrolWheelForIE(scrolbarTarget);
	var scrolX = 0;
	var scrolMax = 0;
	if ( !isTouch) {
		// get scrol position from scrolbar script 
		Scrollbars[0].functionArterScrolCahnge =
		function (x, y, dx, dy) {
			scrolX = x;
			scrolMax = dx;
		};
	}
	
	// ---------- set width for #the-grid-container (fixing ipad bug)
	function setCssValuesForIpadBug() {
		if (iSiPAD) {
			var titleW = $('#the-title-box').innerWidth();
			// get width value from style="" html attribute
			var gridW = $('#grid')[0].style.width;
			// remove "px" and parseFloat
			gridW = gridW.slice(0, -2);
			gridW = parseFloat( gridW );
			$('#the-grid-container').css('width', titleW + gridW );
		}
	}
	
	// ---------- update main Scrol Bar after intro animation 
	updateWorkGridScrolBar = function(){
		if ( !isTouch) Scrollbars[0].update();
		if ( workPageMagicScroll !== false ) {
			workPageMagicScroll.max =
				scrolbarTarget.scrollWidth - scrolbarTarget.clientWidth;
		}
		setCssValuesForIpadBug() 
	}
	
	functionAfterIntroLoading = function() {
		updateWorkGridScrolBar();
		setTimeout(updateWorkGridScrolBar,500)
		setTimeout(updateWorkGridScrolBar,1000)
		setTimeout(updateWorkGridScrolBar,1500)
		setTimeout(updateWorkGridScrolBar,2500)
	}
	
	// ---------- calculate and set css property (width) of all grid items 
	setGridItemsWidth();
	
	// ---------- isotope masonary horizontal 
	function initIsotopScript() {
		if (isotopScriptIsloaded) {
			try {
				isotopWorkPageGripd = $('#grid').isotope({
					itemSelector: '.grid-item',
					getSortData: {
						abc: '.grid-title',
						year: '.grid-info-year parseInt',
						area: '[data-area] parseInt',
						default: '[data-index] parseInt'
					},
					sortAscending: {
						abc: true,
						year: false,
						area: false,
						default: true
					},
					sortBy: 'default',
					transitionDuration: 1000,
					stagger: 30,
					layoutMode: 'masonryHorizontal'
				});
				// after finish, redraw layout, update scrolbar
				setTimeout(function () {
					isotopWorkPageGripd.isotope('layout');
					updateWorkGridScrolBar();
					setTimeout(updateWorkGridScrolBar, 500)
				}, 150)
			} catch (err) {
				// is there is some errors on loading isotop, try again a few moments
				console.error(err);
				setTimeout(initIsotopScript, 50)
			}
		} else {
			// is isotop script is not loaded yet, wait and retary
			setTimeout(initIsotopScript, 50)
		}
	}
	initIsotopScript();
	
	// ---------- options button , options panel togle
	function coloseOptionsPanel() {
		if ( optionsIsVisible ){
			$('#options').addClass('grid-options-hide');
			optionsIsVisible = false;
		}
	}
	var optionsBtn = $('#options-btn');
	var optionsIsVisible = false;
	setTimeout(function(){
		optionsBtn.addClass('header-button-enable');
		optionsBtn.on('click',function(){
			if ( optionsIsVisible ) {
				coloseOptionsPanel()
			} else {
				$('#options').removeClass('grid-options-hide');
				optionsIsVisible = true;
			}
		});
	},3000);
	
	// ---------- filter menue (type and status)
	$('#type li,#status li').on('click', function(){
		var filterValue = $(this).attr('data-filter');
		setTimeout(function () {
			isotopWorkPageGripd.isotope({
				filter: filterValue
			});
		}, 500);
	});
	
	// ---------- sort menu 
	$('#sort li').on('click', function () {
		var sortValue = $(this).attr('data-sort');
		setTimeout(function () {
			isotopWorkPageGripd.isotope({
				sortBy: sortValue,
			});
		}, 500);
	});

	// ---------- 'active' class on buttons
	$('#type, #status, #sort').each(function () {
		var $buttonGroup = $(this).find('li');
		$buttonGroup.on('click', function () {
			$this = $(this);
			$buttonGroup.removeClass('active');
			$this.addClass('active');
			// after pressing buttons, close the panel 
			setTimeout(coloseOptionsPanel,500);
			// after pressing buttons, set Css Values For Ipad Bug
			setTimeout(setCssValuesForIpadBug,550);
		});
	});

	// ---------- when options panel is open, close it by clicking outside of it
	$('.grid-container').on('click',coloseOptionsPanel);
	
	// ---------- grab data from DOM (data-anim) for parallex effect
	var ProjectItem = document.querySelectorAll('#grid .grid-item'),
	    ProjectImg = document.querySelectorAll('#grid .grid-img'),
	    ProjectItemLen = ProjectItem.length,
		ProjectItemParalexRatio = [],
		ProjectItemDistance = [],
		ProjectItemDistanceOld = ProjectItemDistance;
	var optionsPanel = document.getElementById('options');
	
	// ---------- get distance of Options panel from right of it (now, not nedded)
	// optionsPanelRightDistance();
	
	// ---------- set diffrent ratio for mobile/desktop  
	setProjectParallexRatio();

	// ---------- set random amounts to each paralex item 
	var theRandnumArray = [0.42,0.38,0.34];
	for ( i = 0 ; i < ProjectItemLen ; i++ ) {
		var theRandnum = Math.floor(Math.random() * 2.5);
		theRandnum = theRandnumArray[theRandnum];
		ProjectItemParalexRatio.push(theRandnum);
	}
	
	// ---------- scrol parallex effect function 
	var transform;
	function scrolAnimation() {
		if (menuIsActive) {
			setTimeout(scrolAnimation, 1000);
			return;
		}
		// read Dom ( offset of left) project item
		ProjectItemDistance = [];
		for ( i = 0 ; i < ProjectItemLen ; i++ ) {
			var elm = ProjectItem[i];
			var elmX = elm.getBoundingClientRect();
			elmX = elmX.left;
			ProjectItemDistance.push(elmX);
		}
		ProjectItemDistanceOld = ProjectItemDistance;
		// write the dom (transform) for project images
		for ( i = 0 ; i < ProjectItemLen ; i++ ) {
			var outScreenZarib = 0.2;
			var ItemDistance = ProjectItemDistance[i];
			transform =
				(ItemDistance - winW / 2 ) ;
			transform *=
				(parallexHorizontalZarib * 20) ; 
			transform *=
				(ProjectItemParalexRatio[i] / projectRandomParallexRatio);
			transform *=
				(( Math.abs(transform) / winW ) * ProjectsGridParallexRatio);
			if ( ItemDistance > (-1 * outScreenZarib * winW) && ItemDistance < winW * (1 + outScreenZarib) ) {
				ProjectImg[i].style.transform =
					'translate3d(' + (transform  * -0.15 ) + 'px,0,0)';
			}
		}
		// write the dom (transform) for options pannel 
		
		/*transform = ProjectItemDistance[0] - optionsPanelRight ;
		transform -= (winW / 20 );
		if ( transform > 0 ) {
			optionsPanel.style.transform =
				'translate3d(' + (transform  ) + 'px,0,0)';
		}*/
		requestAnimationFrame(scrolAnimation);
	}
	scrolAnimation();

	// ---------- collent lazy-load images state
	var isLazy = [];
	for ( i = 0 ; i < ProjectItemLen ; i++ ) {
		var lazyElement =
			ProjectItem[i].querySelector('.lazy-img');
		if (lazyElement == null )
			isLazy.push(false);
		else
			isLazy.push(true);
	}
	
	// ---------- lazy loading images function 
	function applyLazy(){
		var lazyCount = 0 ;
		function lazyClassRemove(element,lazyIMG) {
			$(lazyIMG).on('load', function() { 
				element.classList.remove('lazy');
			})
		}
		for ( i = 0 ; i < ProjectItemLen ; i++ ) {
			if ( isLazy[i] ) {
				lazyCount++ ;
				var elmX = ProjectItemDistanceOld[i];
				if ( elmX < (winW * 1.2) ) {
					var lazyIMG = ProjectItem[i].querySelector('img');
					var lazyIMGsrc = lazyIMG.getAttribute('data-src');
					lazyIMG.setAttribute('src',lazyIMGsrc);
					isLazy[i] = false;
					lazyClassRemove(ProjectItem[i],lazyIMG);
				}
			}
		}
		if ( lazyCount > 0 ) setTimeout(applyLazy,300);
	}
	
	// ---------- run lazyload  function after finishing loading page 
	setTimeout(applyLazy,initScrolbarTime);

	// ---------- hide guide line by scrol  
	var showGuideLine = true,
		guideLine = $('#guide-line');
	setInterval(function(){
		// get scrol (in desktop, functionArterScrolCahnge does the job)
		if ( isTouch ) {
			scrolX = scrolbarTarget.scrollLeft;
			scrolMax = 
				scrolbarTarget.scrollWidth - 
				scrolbarTarget.clientWidth ;
		}
		
		// when scrol is more than 5 pixels, hide the guide Line 
		if ( scrolX > 5 && showGuideLine) {
			guideLine.addClass('inactive');
			showGuideLine = false;
		}
		
	},1000);
	
}


// ---------------------------------------------------
// ---------------------------------------------------
// -------------- about page functions ---------------
// ---------------------------------------------------
// ---------------------------------------------------

// ---------- set width and columnCount css property of '#about-text'
function aboutPageTextSize(element,target,widthOfTarget) {
	var TextCon = $(element);
	var text = TextCon.find(target);
	// get max width from data- attrib , and calculate the resoult based on winH
	var maxHeightAttr = TextCon.attr('data-maxHeight');
	var maxHeight = Math.min((winH / 4 * 3),maxHeightAttr);
	// clear style ( columnCount and width ) to get raw data ,useful when resizing 
	TextCon[0].style = '';
	
	var projectPage = false; 
	if ( widthOfTarget ) {
		// if the functions has "widthOfTarget" argument, use it
		var w = widthOfTarget;
		projectPage = true;
	} else {
		// get paragraph width and  sum of all parapraph haights 
		var w = text[0].clientWidth;
	}
	var allHeight = 0 
	for ( i = 0 ; i < text.length; i++ ) {
		allHeight += text[i].clientHeight ;
	}
	// claculate columnCount
	var cols = Math.floor(allHeight / maxHeight) + 1;
	// claculate width of paragraphs + column gap (has set in the css)
	var colW = (cols * w) + (cols * 10);
	// set styles
	if ( projectPage ) {
		TextCon[0].style.width = (colW * 1.5) + 'px';
		TextCon[0].style.columnCount  = (cols + 1) ;
	} else {
		TextCon[0].style.width = colW + 'px';
		TextCon[0].style.columnCount  = cols;
	}
}

// ---------- main about page function 
function aboutPage() {
	
	// ---------- set width and columnCount css property of '#about-text'
	setTimeout(function(){
		aboutPageTextSize('#about-text','p')
	}, 150);
	
	// ---------- smooth horizontal scrol
	var initScrolbarTime = 1200;
	if (smoothLoaded ) initScrolbarTime = 300;
	var scrolbarTarget = $(".scrolbar > .gm-scroll-view")[0];
	if ( isTouch ) scrolbarTarget = $(".scrolbar")[0];
	var magicScroll;
	if ( !usingIE ) {
		setTimeout(function(){
			magicScroll = new MagicScroll({
				target: scrolbarTarget,
				speed: magicScrlSpeed,
				smooth: magicScrlSmooth,
				horizential: true
			});
		},initScrolbarTime);
	} else enableScrolWheelForIE(scrolbarTarget);
	var scrolX = 0;
	var scrolMax = 0;
	if ( !isTouch) {
		// get scrol position from scrolbar script 
		Scrollbars[0].functionArterScrolCahnge =
		function (x, y, dx, dy) {
			scrolX = x;
			scrolMax = dx;
		};
	}
	
	// ---------- recalculate scrolbars after load 
	function recalculateScrolBar() {
		if (!isTouch) {
			var scrollLeftPos =
				scrolbarTarget.scrollWidth -
				scrolbarTarget.clientWidth;
			magicScroll.max = scrollLeftPos;
			Scrollbars[0].update();
		}
	}
	setInterval(recalculateScrolBar, 800);
	functionAfterIntroLoading = function() {
		setTimeout(function(){
			clearInterval(recalculateScrolBar);
		},1000);
		setTimeout(function(){
			aboutPageTextSize('#about-text','p')
		}, 150);
		setTimeout(applyLazy,initScrolbarTime + 100 );
	}
	
	// ---------- show text animation 
	var aboutTextParagraph = $('#about-text p'),
		showTextAnimIndex = 0 ;
	function showTextAnim() {
		var itemm =  aboutTextParagraph[showTextAnimIndex];
		itemm.classList.add('about-text-show');
		showTextAnimIndex++;
		if ( showTextAnimIndex < aboutTextParagraph.length) {
			setTimeout(showTextAnim, 150);
		}
	}
	
	// ---------- scrol function
	var showGuideLine = true,
		aboutTextAnimated = false,
	    aboutTextElm = $('#about-text')[0],
	    guideLine = $('#guide-line');
	function toggleClassBasedOnScrol() {
		// get scrolbar from dom ( when there on touch with pure scrolbar )
		if ( isTouch ) scrolX = scrolbarTarget.scrollLeft;
		if ( scrolX > 5 && showGuideLine) {
			guideLine.addClass('inactive');
			// update #about-text offset left 
			showGuideLine = false;
		}
		var aboutTextLeft = aboutTextElm.getBoundingClientRect();
		aboutTextLeft = aboutTextLeft.left;
		if ( aboutTextLeft < ( winW * 4 / 5 ) && scrolX > 10 ) {
			aboutTextAnimated = true;
			showTextAnim();
		}
		if ( showGuideLine || !aboutTextAnimated ) {
			setTimeout(toggleClassBasedOnScrol,200);
		}
	}
	setTimeout(toggleClassBasedOnScrol,400);
	
	// ---------- scrol animation (parallex) function	
	var aboutSec = document.querySelectorAll('.team-img'),
		aboutText = document.querySelectorAll('.team-img-paralex'),
		aboutMainPic = document.querySelectorAll('.about-pic'),
		aboutMainPicItemsClass = '.about-img-paralex',
		aboutMainSvg = document.querySelector('.about-main-svg'),
		aboutMainPicItems = document.querySelectorAll(aboutMainPicItemsClass),
		aboutSecLen = aboutSec.length,
		aboutMainPicItemsLen = aboutMainPicItems.length,
		aboutMainPicItemParalexRatio = [],
		aboutSecDistance = [],
		aboutSecDistanceOld = [],
		ScreenTolerance = 0.2,
		elm,
		elmX,
		aboutSecLeft,
		transform/*,
		PositionOfMainPic*/;
	
	// ---------- parameters for animate main pic (paralex) bu mouse move 
	var limitMousePixel = 160,
    	lFollowX = 0,
        lFollowY = 0,
        moveeX = 0,
        moveeY = 0,
        friction = 5,
		mainPicPAralexMaxMoveX = 60,
		mainPicPAralexMaxMoveY = 1800,
		mainPicPAralexHorizRatio = 1,
		mainPicPAralexMaxtransform = 20, 
		mouseSpeedSlower = 100;
	if ( usingFF ) mouseSpeedSlower = 10;
	
	// ---------- collect data-Ratio for all IMG of main pic (for paralex effect)
	$(aboutMainPicItemsClass).each(function(){
		var ratioOfThisItem = $(this).attr('data-ratio');
		ratioOfThisItem = parseFloat(ratioOfThisItem);
		aboutMainPicItemParalexRatio.push(ratioOfThisItem);
	})
	
	// ---------- mouse event listener animate main pic (paralex)
    $(document).mousemove(function (e) {
        var lMouseX =  e.clientX;
        var lMouseY =  e.clientY;
		if ( lMouseX > winW - limitMousePixel )
			lMouseX = winW - limitMousePixel;
		if ( lMouseY > winH - limitMousePixel )
			lMouseY = winH - limitMousePixel;
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (20 * lMouseY) / 100;
    });
	
	// ---------- main  animations scrolparalex 
	function scrolAnimation() {
		if (menuIsActive) {
			setTimeout(scrolAnimation,1000)
			return;
		}
		// ------ read dom, grab positions 
		aboutSecDistance = [];
		for ( i = 0 ; i < aboutSecLen ; i++ ) {
			elm = aboutSec[i];
			elmX = elm.getBoundingClientRect();
			elmX = elmX.left;
			aboutSecDistance.push(elmX);
		}
		PositionOfMainPic = aboutMainPic[0].getBoundingClientRect();
	
		// ------ apply transform to dom 
		aboutSecDistanceOld = aboutSecDistance;
		for (i = 0; i < aboutSecLen; i++) {
			aboutSecLeft = aboutSecDistance[i];
			transform = (aboutSecLeft - winW / 2) * parallexHorizontalZarib;
			if (aboutSecLeft > (-1 * ScreenTolerance * winW) &&
				aboutSecLeft < (winW * (1 + ScreenTolerance))
			){
				aboutText[i].style.transform =
					'translate3d(' + (transform * -0.07) + 'px,0,0)';
			}
		}
	
		// ------ apply transform to main pic  
		if (PositionOfMainPic.right > 0 ){
			// read mouse data (stored in varible )
			moveeX += (lFollowX*friction - moveeX ) / mouseSpeedSlower ;
			moveeY += (lFollowY*friction - moveeY ) / mouseSpeedSlower ;
			if ( moveeY > mainPicPAralexMaxMoveY ) moveeY = mainPicPAralexMaxMoveY;
			else if ( moveeY < -mainPicPAralexMaxMoveY ) moveeY = -mainPicPAralexMaxMoveY;
			// apply paralex effect
			if ( !isMobile ) PositionOfMainPic.width = 0 ; 
			for ( i = 0 ; i < aboutMainPicItemsLen; i++ ) {
				transform = (PositionOfMainPic.left + (PositionOfMainPic.width * 0.5)  - (winW / 2) );
				transform *= parallexZaribAboutPic * 2 ;
				if ( isMobile ) transform -= moveeX;
				else transform += moveeX;
				transform *= mainPicPAralexHorizRatio;
				transform *= aboutMainPicItemParalexRatio[i];
				if ( isMobile ){
					transform *= -2 ;
					transform += ( PositionOfMainPic.left * 0.05) ;
				} else {
					transform *= -1.5 ;
					transform -= ( PositionOfMainPic.left * 0.05) ;
				}
				aboutMainPicItems[i].style.transform =
					'translate3d(' + transform + 'px,' + ( moveeY * -1 * aboutMainPicItemParalexRatio[i] ) + 'px,0)';
			}
		}

		// ------ run the function as Animation Frame
		requestAnimationFrame(scrolAnimation)
	}
	scrolAnimation();
	
	
	// ---------- collent lazy-load images state
	var isLazy = [];
	for ( i = 0 ; i < aboutSecLen ; i++ ) {
		var lazyElement = aboutSec[i].classList.contains('lazy');
		if (lazyElement == null || !lazyElement ) isLazy.push(false);
		else isLazy.push(true);
	}
	var isHoverImgLazy = [];
	
	// ---------- collent lazy-load images state form Main Pic 
	var mainPicLAzyCount = 0 , isMainPicLazy = [], lazyIMGofMainPic = [];
	$('.about-main-lazy').each(function(){
		isMainPicLazy.push(true);
		mainPicLAzyCount++;
		lazyIMGofMainPic.push(this);
	})
	
	// ---------- function adter lazy image loaded
	function lazyClassRemove(element,lazyIMG,lazyHoverIMG) {
		$(lazyIMG).on('load', function() { 
			element.classList.remove('lazy');
		})
		var hoverLazyIMGsrc = lazyHoverIMG.getAttribute('data-src');
		lazyHoverIMG.setAttribute('src',hoverLazyIMGsrc);
	}
	
	// ---------- lazy loading function  
	function applyLazy(){
		var lazyCount = 0 ;
		for ( i = 0 ; i < aboutSecLen ; i++ ) {
			if ( isLazy[i] ) {
				lazyCount++ ;
				var elementX = aboutSecDistanceOld[i];
				if ( elementX < (winW * 1.4) ) {
					var lazyIMG =
						aboutSec[i].querySelector('.team-img-main');
					var lazyHoverIMG =
						aboutSec[i].querySelector('.team-img-hover');
					var lazyIMGsrc = lazyIMG.getAttribute('data-src');
					lazyIMG.setAttribute('src',lazyIMGsrc);
					isLazy[i] = false;
					lazyClassRemove(aboutSec[i],lazyIMG,lazyHoverIMG);
				}
			}
		}
		for ( i = 0 ; i < mainPicLAzyCount ; i++ ) {
			if ( isMainPicLazy[i] ) {
				lazyCount++ ;
				var lazyIMGsrc = lazyIMGofMainPic[i].getAttribute('data-src');
				lazyIMGofMainPic[i].setAttribute('xlink:href',lazyIMGsrc);
				isMainPicLazy[i] = false;
			}
		}
		if ( lazyCount > 0 ) setTimeout(applyLazy,300);
	}
	
	// ---------- run lazyload  function after finishing loading page 
	if ( smoothLoaded ) 
	// on normal load , it loads on functionAfterIntroLoading
	setTimeout(applyLazy,initScrolbarTime + 1000 );
	

	// ---------- add event listener to job toggle button
	$('#job-btn').on('click', function () {
		$(this).toggleClass('team-item-active');
		$('#job').toggleClass('show-job');
		// update the scrolbar
		setTimeout(function () {
			var scrollLeftPos =
				scrolbarTarget.scrollWidth -
				scrolbarTarget.clientWidth;
			if (!isTouch) {
				magicScroll.pos = scrollLeftPos;
				magicScroll.max = scrollLeftPos
				magicScroll.update();
			} else {
				$(scrolbarTarget)
					.animate({
						scrollLeft: scrollLeftPos
					}, 'slow');
			}
			Scrollbars[0].update();
		}, 1000);
	});
	
	// ---------- generate the email links 
	$('.email-link').each(function(){
		var $this = $(this);
		var mail1 = $this.attr('data-mail');
		var mail2 = $this.attr('data-mailinfo');
		var mail3 = $this.attr('data-subject');
		var finalmail = 'mailto:' + mail1 + '@' + mail2 + mail3;
		$this.attr('href' , finalmail);
	});		
	
	// ---------- set team-pic hover ( smiling pictures ) on mobile devices
	var teamItemElem = document.querySelectorAll('.team-item');
	var teamItemElemLen = teamItemElem.length;
	var teamItemDistanceIndexes = [], teamItemDistanceIndexesOld = [],
		teamItemElemPosX, LastteamItemElemLen = null,
		teamItemHocerClassIsSet = false,
		lastItemThatIsOkToSetClass = 0;
	function setImgHover() {
		teamItemDistanceIndexes = [];
		// read dom
		for ( i = 0 ; i < teamItemElemLen ; i++ ) {
			teamItemElemPosX = teamItemElem[i].getBoundingClientRect();
			teamItemElemPosX = teamItemElemPosX.left;
			if (teamItemElemPosX > (-1 * ScreenTolerance * winW) &&
				teamItemElemPosX < (winW * (1 + ScreenTolerance))
			) teamItemDistanceIndexes.push(true);
			else teamItemDistanceIndexes.push(false);
		}
		// write dom
		for ( i = 0 ; i < teamItemElemLen ; i++ ) {
			if ( teamItemDistanceIndexes[i] && !teamItemHocerClassIsSet ) {
				teamItemHocerClassIsSet = true;
				if ( lastItemThatIsOkToSetClass == i) {
					teamItemElem[i].classList.add('team-item-hover');
				}
				lastItemThatIsOkToSetClass = i;
			} else {
				teamItemElem[i].classList.remove('team-item-hover');
			}
		}
		teamItemHocerClassIsSet = false;
		setTimeout(setImgHover,1250);
	}
	if (isTouch) setImgHover();
	
}

// ---------------------------------------------------
// ---------------------------------------------------
// ------------- project page functions --------------
// ---------------------------------------------------
// ---------------------------------------------------
var projectImgRatioArray = false;
function setProjectSliderHeight(NoNeedForUpdateConSize) {
	
	// update containersize in order to set size of the main slider 
	if (!NoNeedForUpdateConSize) mainContainerSize = getMainContainerSize();

	var slides = $('#slider .project-slide');

	// --- calculate sliderWidthSize
	var headerWidth = 3.5 * emUnit;
	if ( winW <= 400 ) headerWidth = 3 * emUnit;
	var sliderWidthSize = mainContainerSize.x - headerWidth - (10 * emUnit);
	if ( winW <= 1100 ) sliderWidthSize = mainContainerSize.x - headerWidth - (7 * emUnit);
	if ( winW <= 700 ) sliderWidthSize = mainContainerSize.x - headerWidth;
	var canvesRatio = sliderWidthSize / mainContainerSize.y ;
	
	var ratioArray = [];

	// --- read dom and check images for landscape or portrate;
	slides.each(function(){
		var $this = $(this);
		var imgRatio = $this.attr('data-ratio');
		imgRatio = parseFloat(imgRatio);
		if ( canvesRatio >= imgRatio ) {
			ratioArray.push(false);
		} else {
			ratioArray.push(true);
		}
	})

	
	// --- write dom 
	var indexx = 0 
	slides.each(function(){
		var $this = $(this);
		// check if ratio (landscape/portrait) is changed  
		if ( projectImgRatioArray[indexx] != ratioArray[indexx] || !NoNeedForUpdateConSize ) {
			// set Landscape or portrait Css Class
			if ( ratioArray[indexx] ) 
				$this.addClass('land').removeClass('port');
			else
				$this.addClass('port').removeClass('land');
		}
		indexx++; 
		// set Project Slider Height
		$this.css('height',mainContainerSize.y);
	});
	projectImgRatioArray = ratioArray;
}

// ---------- set scroll offset number that the project-go-back link should be visible  
function setProjectBackBtnScreen() {
	if ( winW < 501 )  return (winW * 0.3);
	if ( winW < 701 )  return (winW * 0.35);
	if ( winW < 901 )  return (winW * 0.4);
	if ( winW < 1001 ) return (winW * 0.35);
	if ( winW < 1201 ) return (winW * 0.25);
	else return (winW * 0.2);
}
var projectBackBtnScreen = setProjectBackBtnScreen();

// ---------- will be defined in projectPage() and used in resize()
var setProjectPageScrolMaxValu = function() {}

// ---------- set width and column count of project list element 
function projectPageTextSize() {
	// if the project don't has any text, no need to run the function 
	if ($('#project-text').length) {
		aboutPageTextSize('#project-text', 'p');
	}
	var listTetWidth = 10 * emUnit ; /* 10em */
	if (winW > 600 ) listTetWidth *= 1.1; 
	if (winW > 1000 ) listTetWidth *= 1.1; 
	aboutPageTextSize('#project-list', 'h3, dd, dt', listTetWidth);
}

// ---------- the main project page funciton 
function projectPage() {
	
	// ---------- read url hash , set first slide 
	var hashh = window.location.hash;
	var firstSlide = 0;
	var OpenGalleryModByHash = false;
	var theLoadingClassOfSlidersShouldByRemoved = false ;
	// ---------- generate number of first slide from the hash 
	if ( hashh.indexOf('slide') != -1 ) { 
		OpenGalleryModByHash = true;
		firstSlide = hashh.indexOf('-') + 1;
		firstSlide = hashh.substring( firstSlide , hashh.length );
		firstSlide = parseInt(firstSlide);
		firstSlide -= 1 ;
	}
	
	// ---------- set width and columnCount css property text elements 
	if ( smoothLoaded ) setTimeout(projectPageTextSize, 100);
	else setTimeout(projectPageTextSize, 200);
	
	// ---------- smooth horizontal scrol
	var scrolbarTarget = $(".scrolbar > .gm-scroll-view")[0];
	if ( isTouch ) scrolbarTarget = $(".scrolbar")[0];
	var magicScroll;
	if ( !usingIE && !isTouch ) {
		setTimeout(function(){
			magicScroll = new MagicScroll({
				target: scrolbarTarget,
				speed: magicScrlSpeed,
				smooth: magicScrlSmooth,
				horizential: true
			});
		},200);
	} else enableScrolWheelForIE(scrolbarTarget);
	var scrolX = 0;
	scrolMax = 5000000;
	setProjectPageScrolMaxValu = function() {
		if ( !isTouch) {
			// get scrol position from scrolbar script 
			Scrollbars[0].functionArterScrolCahnge =
			function (x, y, dx, dy) {
				scrolX = x;
				scrolMax = dx;
			};
		} else {
			var sliderConWidth = $('#slider-con').width();
			$(scrolbarTarget).on("scroll", function (event) {
				//scrolX = $(this).scrollLeft();
				scrolX = scrolbarTarget.scrollLeft;
				scrolMax = scrolbarTarget.scrollWidth - sliderConWidth;
			});
		}
	}
	setProjectPageScrolMaxValu();
	
	// ---------- functions after first loading anim: show buttons, show sliders (url hash) 
	functionAfterIntroLoading = function() {
		// ------ show buttons after page loading animation is finished
		$('#project-btn, #tmb-btn, #go-back-btn').removeClass('hidden');
		$('#go-back-btn').addClass('header-button-enable');
		setTimeout(function(){
			$('#project-btn, #tmb-btn').addClass('header-button-show');
		},3000);
		// ------ show sliders if url hash 
		if ( OpenGalleryModByHash ) {
			function removeLoadingClassOfSlides(){
				if ( theLoadingClassOfSlidersShouldByRemoved ) {
				$('#slider-con, #tmb-con').removeClass('hid');
				setTimeout(function(){
					$('#slider-con, #tmb-con').removeClass('slider-intro');
				},50)
				} else setTimeout(removeLoadingClassOfSlides,100);
			}
			setTimeout(removeLoadingClassOfSlides,700);
		}
		setProjectPageScrolMaxValu();
	}
	if ( smoothLoaded ) {
		setTimeout(function(){
			functionAfterIntroLoading();
		},250);
	}
	
	// ---------- set scroll offset number that the project-go-back link should be visible  
	projectBackBtnScreen = setProjectBackBtnScreen();
	
	// ---------- add "scroling" class to body when scroling ( not used)
	function togleScrolingClass() {
		var isScroling = false,
			bodyHasScrolingClass = false;
		$(scrolbarTarget).scroll(function(){
			isScroling = true;
			setTimeout(function(){
				if ( isScroling ) isScroling = false;
			},500);
			if ( isScroling && !bodyHasScrolingClass )  {
				$('body').addClass('scroling');
				bodyHasScrolingClass = true;
			}
		});
		setInterval(function(){
			if ( !isScroling && bodyHasScrolingClass ) {
				$('body').removeClass('scroling');
				bodyHasScrolingClass = false;
			}
		},500)
	}
	
	//  ---------- init main slider 
	$('#slider').slick({
		slidesToShow: 1,
		arrows: false,
		infinite: true,
		speed: 500,
		lazyLoad: 'ondemand',
		touchThreshold: 200,
		/*touchMove: false,*/
		asNavFor: '#tmb',
		adaptiveHeight: false,
		dots: false,
		arrows: true,
		draggable: false,
		cssEase: 'ease-in-out'
	});

	//  ---------- init thumbnail slider 
	$('#tmb').slick({
		asNavFor: '#slider',
		autoplay: false,
		arrows: false,
		dots: false,
		slidesToShow: 200,
		slidesToScroll: 1,
		draggable: false,
		infinite: false,
		vertical: true,
		verticalSwiping: true,
		verticalScrolling: true,
		centerMode: false,
		centerPadding: "0px",
		swipe: false,
		touchMove: false,
		focusOnSelect: true
	});

	//  ---------- set width and height of "project-slide"
	$('#slider').find('.project-slide').unwrap();

	// ---------- hide sliders in order to improve scroling performance
	$('#slider-con, #tmb-con').addClass('hidden')
	if ( !OpenGalleryModByHash ) $('#slider-con, #tmb-con').removeClass('hid');
	
	// ---------- if there is video, unwarp the div generated by slick 
	if ( isThereAnyVideo ) {
		$('#project-video-btn').unwrap();
		$videoFooter = $('#videofooter');
		videoProggressBarWidth = $videoFooter.width();
	}

	// ---------- automatic scrol of thumbnil slider (animateed by jquery)
	function AnimateScolOfTmbSlider() {
		var tmbCon = $('#tmb');
		var tmbParent = tmbCon.parent();
		var sliderItem = tmbCon.find(".slick-current");
		// curent state scrol amount 
		var sliderScrol = tmbParent.scrollTop();
		// distance of target slide from top 
		var sliderItemOffset = sliderItem.offset().top;
		// height of target slide
		var sliderItemHeight = sliderItem.outerHeight();
		tmbParent.animate({
			scrollTop: sliderScrol + sliderItemOffset -
				mainContainerSize.top - // distance of entire slider unit from top 
				(mainContainerSize.y / 2) + // height of the slider unit 
				(sliderItemHeight / 2) // height of target slide
		}, 500);
	}

	// ---------- set slide actions , and scrol of tmb slider 
	var slideTransitionsIsFinished = true; 
	$('#slider').on('beforeChange', function(event, slick, currentSlide) {
		slideTransitionsIsFinished = false;
		setTimeout( AnimateScolOfTmbSlider , 500);
		zoomOut();
		setTimeout( function() {
			slideTransitionsIsFinished = true;
		}, 1000)
	})
	
	// ---------- set hash url of window, show/hide video controlers 
	var sliderCurrentSlide = true ;
	$('#slider').on('afterChange', function(event, slick, currentSlide) {
		
		// ------ set hash url of window to the slide number
		var theHash = '#slide-' + ( currentSlide + 1 );
		/*if ( GalleryModIsChanged == 0 ) window.location.hash = theHash;
		else*/ location.replace(theHash); 
		
		sliderCurrentSlide = currentSlide;
		
		// ------ show or hide video controlers 
		if ( isThereAnyVideo ) {
			if ( currentSlide == 1 ) {
				$('#slider-con').addClass('video-show');
				showingVideoSlider = true;
			}
			else if (showingVideoSlider) {
				$('#slider-con').removeClass('video-show');
				showingVideoSlider = false;
			}
		}
	})
	
	// ---------- slider lazy load handler 
	$('#slider').on('lazyLoaded',function(event, slick, image, imageSource ){
		if ( projectPageScriptIsLoaded ) 
			$(image).parent().parent().removeClass('lazy');
		else 
			$(image).parent().removeClass('lazy');
	})

	// ---------- initalize zoom plugin 
	function projectZoom() {
		var $body = $('body');
		$('#slider .zoomable')
			.on('openstart.fluidbox', function () {
				// --- opening fluidbox
				$body.addClass('zoomTimeout');
				setTimeout(function(){
					$body.addClass('zoom');
				},50);
			})
			.on('closestart.fluidbox', function () {
				// --- closing fluidbox
				$body.removeClass('zoom')
				$body.addClass('zoomout');
			})
			.on('closeend.fluidbox', function () {
				// --- after closing fluidbox
				setTimeout(function(){
					$body.removeClass('zoomout');
				},550);
				setTimeout(function(){
					$body.removeClass('zoomTimeout');
				},1000);
			})
			.fluidbox({
				immediateOpen: true,
				viewportFill: 1
			});
	}

	// ---------- zoom functions
	var isZoomed = false; 
	function zoomOut() {
		if (isZoomed) {
			$('#slider .slick-current .zoomable')
				.data('plugin_fluidbox').close();
			isZoomed = false;
		}
	}
	function zoomIn() {
		if ( !isZoomed ) {
			$('#slider .slick-current .zoomable')
				.data('plugin_fluidbox').open();
			isZoomed = true;
		}
	}
	
	// ---------- initalize touch detector (hammer) plugin - pinch in to zoom feature
	function tochDetector() {
		var zoomInDetected = false;
		var zoomOutDetected = false;
		function resetTocu(){
			zoomInDetected = false;
			zoomOutDetected = false;
		}
		var myElement = document.getElementById('slider-con');
		var mc = new Hammer.Manager(myElement);
		// create a pinch recognizer
		var pinch = new Hammer.Pinch();
		// add to the Manager
		mc.add(pinch);
		mc.on('pinchin', function(ev) {
			if ( !zoomOutDetected ) {
				zoomOut();
				zoomInDetected = false;
				zoomOutDetected = true;
				setTimeout(resetTocu,500);
			}
		});
		mc.on('pinchout', function(ev) {
			if ( !zoomInDetected ) {
				zoomIn();
				zoomInDetected = true;
				zoomOutDetected = false;
				setTimeout(resetTocu,500);
			}
		});
	}

	// ---------- check Scripts Is Loaded, load Zoom Funciton, add lazy loading spinner html , run video functions
	function loadZoomFunciton() {
		if ( projectPageScriptIsLoaded ) {
			
			// init zoom function 
			projectZoom();
			tochDetector();
			
			// add lazy loader spiner 
			var loadingHtml = '<div class="grid-loading" aria-hidden="true"><div class="ld" aria-hidden="true"><span class="ld-1"></span><span class="ld-2"></span><span class="ld-3"></span><span class="ld-4"></span><span class="ld-5"></span><span class="ld-6"></span><span class="ld-7"></span><span class="ld-8"></span><span class="ld-9"></span></div></div>';
			$('#slider .lazy img ').after(loadingHtml);

		}
		else setTimeout( loadZoomFunciton, 200 );
	}
	loadZoomFunciton();
	
	// ---------- function for init the video JQ plugin , it will fired by enterGalley()
	var videoScriptIsLoaded = false;
	function loadVideoPlugin() {
		if (projectPageScriptIsLoaded) {
			var $viddd = $('#video').videoPlayer();
			videoScriptIsLoaded = true; 
		} else setTimeout(loadVideoPlugin, 200);
	}

	// ---------- function for show or hide sliders with animation
	var tmbSliderIsShowing = false;
	function showSlider(elm,showIt,sliderElm) {
		if (showIt) {
			$(elm).removeClass('hidden');
			$(sliderElm).slick('resize');
			$(sliderElm)[0].slick.setPosition();
			if ( !isTouch ) Scrollbars[1].update();
			setTimeout(function(){
				$(elm)
					.removeClass('slider-hid')
					.addClass('slider-show');
				if ( elm == '#tmb-con' ) tmbSliderIsShowing = true;
			},1000);
		} else {
			$(elm)
				.removeClass('slider-show')
				.addClass('slider-hid');
			setTimeout(function(){
				if ( elm == '#tmb-con' ) tmbSliderIsShowing = false;
				else $(elm).addClass('hidden');
			},1000)
		}
	}

	// ---------- project Gallary Mode / project info Mode 
	var tmbSliderIsVisible = false;
	/*var GalleryModIsChanged = 0;*/
	var itIsTheFirstTimeOpeningGallery = true;
	
	function enterToGalleryMod() {
		if (backButtonIsVisible) projectBackBtn(false);
		changeProjectBtn();
		if ( !projectGallaryMode ) {
			$('#project-pic').addClass('project-pic-hide');
			showSlider('#slider-con',true,'#slider');
			if ( !tmbSliderIsVisible ) {
				showSlider('#tmb-con',true,'#tmb');
				tmbSliderIsVisible = true;
			}
			if ( itIsTheFirstTimeOpeningGallery ) {
				setProjectSliderHeight(false);
				itIsTheFirstTimeOpeningGallery = false;
			}
			$('#project-article').addClass('project-article-hid');
			projectGallaryMode = true;
			/*GalleryModIsChanged++;*/
			
			//load video plugin 
			setTimeout(function(){
				if ( isThereAnyVideo && !videoScriptIsLoaded) loadVideoPlugin();
			},1050)
		}
	}
	function enterToInfoMod() {
		changeProjectBtn();
		if ( projectGallaryMode ) {
			showSlider('#slider-con',false);
			if ( tmbSliderIsVisible ) {
				$('#tmb')[0].slick.setPosition();
				showSlider('#tmb-con',false);
				tmbSliderIsVisible = false
			}
			$('#project-article').removeClass('project-article-hid');
			$(scrolbarTarget).scrollLeft(0);
			setTimeout(function () {
				// enable scrol class togller
				toggleClassBasedOnScrol();
				// show the main picture
				$('#project-pic').removeClass('project-pic-hide');
				showRGBEffect = true;
			}, 1000);
			projectGallaryMode = false;
			// remove the hash 
			if ( window.location.hash ) {
				/*if ( GalleryModIsChanged == 1 ) window.location.hash = '';
				else */location.replace("#");
			}
		}
	}

	// ---------- change Project button text and icon 
	function changeProjectBtn() {
		if ( projectGallaryMode ) {
			$('#project-button-list-txt').attr('aria-hidden','false');
			$('#project-button-tmb-txt').attr('aria-hidden','true');
			setTimeout(function(){
				$('#project-btn').removeClass('project-btn-gallary-view');
			},500)
		} else {
			$('#project-button-list-txt').attr('aria-hidden','true');
			$('#project-button-tmb-txt').attr('aria-hidden','false');
			setTimeout(function(){
				$('#project-btn').addClass('project-btn-gallary-view');
			},500)
		}
	}

	// ----------  go to gallery mode by url hash
	if ( OpenGalleryModByHash ) {
		$('#slider-con, #tmb-con').addClass('slider-intro');
		enterToGalleryMod();
		setTimeout(function(){
			$('#slider').slick('resize');
			$('#tmb').slick('resize');
			$('#slider')[0].slick.setPosition();
			$('#tmb')[0].slick.setPosition();
			setProjectSliderHeight();
			$('#slider').slick ('slickGoTo',firstSlide,false);
		},1050);
		setTimeout(function(){
			guideLine.addClass('inactive');
			$('#project-article h1').addClass('no-backGround');
			showGuideLine = false;
		},200);		
		setTimeout(function(){
			theLoadingClassOfSlidersShouldByRemoved = true;
		},1500);
	}
	
	// ----------  functions for showing or hiding go-back button 
	var firstTimeScrolBackBtn = true;
	var backButtonIsVisible = false;
	function projectBackBtn(showIt) {
		if (showIt && backButtonIsVisible ) return ;
		if (!showIt && !backButtonIsVisible ) return ;
		$('.header-button').addClass('header-button-transition-no-delay');
		if (showIt) {
			$('#project-btn, #tmb-btn')
				.removeClass('header-button-show');
			setTimeout(function(){
				$('#go-back-btn').addClass('header-button-show');
			},250);
			backButtonIsVisible = true;
		} else {
			$('#go-back-btn').removeClass('header-button-show');
			setTimeout(function(){
				$('#project-btn, #tmb-btn')
					.addClass('header-button-show');
			},250);
			backButtonIsVisible = false;
		}
		setTimeout(function(){
			$('.header-button')
				.removeClass('header-button-transition-no-delay');
		},600);
	}
	
	
	// --------------------------------------------------
	// ---------- adding click event listeners
	// --------------------------------------------------
	
	// ---------- gallery/info switch button
	var projectBtnIsNotPressed = true;
	$('#project-btn').on('click',function(){
		if (projectGallaryMode) {
			enterToInfoMod();
		} else {
			if (!ProjectListAnimated) {
				setProjectSliderHeight();
				if ( projectBtnIsNotPressed ) {
					$('#slider').slick('resize');
					$('#tmb').slick('resize');
					$('#slider')[0].slick.setPosition();
					$('#tmb')[0].slick.setPosition();
				}
			}
			enterToGalleryMod();
			projectGallaryMode = true;
		}
		if ( projectBtnIsNotPressed ) projectBtnIsNotPressed = false;
	});
	
	// ---------- functions for closing tmb slidr (on mobile) 
	var TmbConIsVisible = false;
	function closeTmbConOnMob() {
		$('#tmb-con').removeClass('tmb-con-visible');
		$('#slider').removeClass('tmb-mob-is-visible');
		TmbConIsVisible = false;
	}
	
	// ---------- thumbnail view togle button
	$('#tmb-btn').on('click',function(){
		if ( TmbConIsVisible) closeTmbConOnMob();
		else {
			$('#tmb-con').addClass('tmb-con-visible');
			$('#slider').addClass('tmb-mob-is-visible');
			TmbConIsVisible = true;
		}
	})
	
	// ---------- click on tmb slider: go gallery mode, hide the tmb slider 
	$('#tmb').on('click', function() {
		// go gallery mode by clicking on tmb slider, if it's not on gallery mode
		if ( !projectGallaryMode ) enterToGalleryMod();
		// in mobile view mode, after clicking on the tmb slider, hide it 
		if ( winW < 701 ) {
			closeTmbConOnMob();
		}
	})
		
	// ---------- go gallery mode by clicking the picture (info mode)
	$('#project-pic').click(function(){
		if (!projectGallaryMode) enterToGalleryMod();
	});
	
	// ---------- clicking on main slides: move to next slide, zoom 
	$('#slider .zoomable').each(function(){
		$(this).parent().click(function (e) {
			e.preventDefault();
			if ( winW < 701 && isTouch ) {
				if ( !isZoomed ) {
					if ( $('#tmb-con').hasClass('tmb-con-visible') ) {}
					else $('#slider').slick('slickNext');
				} else {
					zoomOut(); 
				}
			} else {
				if ( isZoomed )zoomOut(); 
				else zoomIn();
			}
		});
	});

	// ---------- clicking on next and prev icons (only visible on mobile)
	$('#slider-mob-icons-next').click(function(){
		$('#slider').slick('slickNext');
	})
	$('#slider-mob-icons-prev').click(function(){
		$('#slider').slick('slickPrev');
	})
	$('#project-info-btn').click(function(){
		if (projectGallaryMode) {
			enterToInfoMod();
		}
		closeTmbConOnMob();
	});
	
	// ---------- close thumbnail menu (on mobile ) by clicking background elements
	$('#project-article, #slider-con').click(function(){
		if ( winW < 701 ) {
			closeTmbConOnMob();
		}
	});
	
	// ---------- on desktops , go to next/prev slide by scrolwheel
	if ( !isTouch ) {
		$('#slider-con')[0].addEventListener("wheel", wheelFunction);
		function wheelFunction() {
			var nexSlide = 'slickPrev';
			if( event.deltaY > 0 ) nexSlide = 'slickNext' ;
			if ( slideTransitionsIsFinished && !isZoomed && winW > 700 ) {
				if ( sliderCurrentSlide == 0 && event.deltaY < 0) {
					enterToInfoMod();
					slideTransitionsIsFinished = false;
				}
				else $('#slider').slick(nexSlide);
			}
		}
	}
	
	
	// --------------------------------------------------
	// ---------- Scrol Based Class togglling and intro animations 
	// --------------------------------------------------

	// ---------- paragraph and list text intro animation function ( object oriented )
	function textAnimator(element,setTimeoutTime) {
		this.animated = false;
		this.element = element;
		this.showTextAnimIndex = 0;
		this.elementLength = this.element.length;
		this.setTimeoutTime = setTimeoutTime;
		this.showTextAnim = function() {
			this.itemm =  this.element[this.showTextAnimIndex];
			this.itemm.classList.add('about-text-show');
			this.showTextAnimIndex++;
			if ( this.showTextAnimIndex == this.elementLength ) this.animated = true;
			if ( this.showTextAnimIndex < this.elementLength) {
				window.setTimeout(function(){
					this.showTextAnim();
				}.bind(this), this.setTimeoutTime);
			}
		}
		this.showTextAnim();
	}
	
	var showGuideLine = true,
		ProjectTextAnimated = false,
		ProjectListAnimated = false,
		guideLine = $('#guide-line'),
		projectListElm = $('#project-list'),
		projectListElmChilds = projectListElm.find('h3, dd span, dt'),
		showRGBEffect = true,
		ProjectListAnimator,
		ProjectTextAnimator;
	// check if there is any project-text , then define some new varibles
	if ( isTehreAnyProjectText ) {
		var projectTextsElm = $('#project-text');
		var projectTextsElmChilds = $('#project-text p');
	}
	var mainImg = document.querySelector('#project-pic');
	var mainImgImg = document.querySelector('#project-pic img');

	function checkTextAnimationsFinished() {
		if ( ProjectListAnimator.animated == false ) return false;
		if ( isTehreAnyProjectText ) {
			if ( ProjectTextAnimator.animated == false ) return false;
		}

		return true ; 
	}
	function ProjectTmbShowTreshold() {
		if (isTehreAnyProjectText/* generated by php */) return (winW / 3);
		return (winW / 2) * -1;
	}
	
	// ---------- Main function : toggle Class Based On Scrol position 
	function toggleClassBasedOnScrol() {
		
		// ------ get scrolbar from dom ( when there on touch with pure scrolbar )
		if ( scrolX > 5 && showGuideLine) {
			guideLine.addClass('inactive');
			$('#project-article h1').addClass('no-backGround');
			showGuideLine = false;
		}
		// ------ animate Project list 
		var projectListLeft = projectListElm[0].getBoundingClientRect();
		projectListLeft = projectListLeft.left;
		if ( projectListLeft < ( winW * 4 / 5 ) && scrolX > 10 ) {
			if ( !ProjectListAnimated ) {
				ProjectListAnimated = true;
				ProjectListAnimator = 
					new textAnimator(projectListElmChilds,80);
			}
			setProjectSliderHeight();
		}
		// ------ animate Project Text
		if ( isTehreAnyProjectText ) {
			var projectTextLeft = projectTextsElm[0].getBoundingClientRect();
			projectTextLeft = projectTextLeft.left;
			if ( projectTextLeft < ( winW * 4 / 5 ) && scrolX > 10 ) {
				if ( !ProjectTextAnimated ) {
					ProjectTextAnimated = true;
					ProjectTextAnimator =
						new textAnimator(projectTextsElmChilds,150);
				}
			}
		}
		// ------ show hide tmb slider 
		if ( winW > 700 ) {
			if ( scrolX > projectListLeft + ProjectTmbShowTreshold() ) {
				if ( !tmbSliderIsVisible ) {
					showSlider('#tmb-con',true,'#tmb');
					tmbSliderIsVisible =true;
				}
			} else if ( tmbSliderIsVisible && !projectGallaryMode) {
				showSlider('#tmb-con',false);
				tmbSliderIsVisible =false;
			}
		} else {
			if ( !tmbSliderIsVisible ) {
				showSlider('#tmb-con',true,'#tmb');
				tmbSliderIsVisible =true;
			}
		}

		// ------ show or hide RGB effects 
		var mianImgRight = mainImg.getBoundingClientRect().right;
		if ( mianImgRight < ( winW / 6) ) showRGBEffect = false ;
		else showRGBEffect = true ;
		
		// ------ show or hide go-back-btn 
		if ( !isMobile && !projectGallaryMode ) {
			if (firstTimeScrolBackBtn && scrolX > 10)
				firstTimeScrolBackBtn = false;
			if ( !firstTimeScrolBackBtn ) {
				if ( scrolX < projectBackBtnScreen ) projectBackBtn(true);
				else  projectBackBtn(false);
			}
		}
		
		// ------ run this function agane later 
		if (!projectGallaryMode) {
			setTimeout(toggleClassBasedOnScrol,200);
		}
	}
	setTimeout(toggleClassBasedOnScrol,400);
	
	// ---------- go to gallery mod by ending the scroling of info mode
	$(scrolbarTarget).on("scroll",function (){
		// ------ going to gallery mod by scroling : 
		if (!projectGallaryMode &&
			scrolX > (scrolMax - 10 )
		){  if ( checkTextAnimationsFinished() ) {
				console.log('going to gallery mod by scroling');
				enterToGalleryMod();
				projectGallaryMode = true;
				if ( tmbSliderIsVisible && !tmbSliderIsShowing ) {
					showSlider('#tmb-con',true,'#tmb');
				}
				setTimeout(function(){
					slideTransitionsIsFinished = true ;
				},1500)
			}
		}
		// ------ show or hide go-back-btn 
		if ( isMobile) {
			if ( !projectGallaryMode ) {
				if ( scrolX < projectBackBtnScreen ) projectBackBtn(true);
				else  projectBackBtn(false);
				console.log(scrolX);
				console.log(projectBackBtnScreen);
			} else  projectBackBtn(false); 
		} 
	});
	
	// --------------------------------------------------
	// ---------- parameters for scrol effects (parallex & RGBSpilit) 	
	// --------------------------------------------------
	var mainImgRGB =  mainImg.querySelector('.project-pic-RGB'),
		mainImgR   =  mainImg.querySelector('.r'),
		mainImgG   =  mainImg.querySelector('.g'),
		mainImgB   =  mainImg.querySelector('.b'),
		translateRBG   = 0,
	    translateRed   = 0,
	    translateGreen = 0,
	    translateBlue  = 0;
	var ScreenTolerance = 0.2 ;
	var RGBspeed = 300,
		RGBamount = 5,
		RGBsmooth = 0,
		RGBdiff = 0,
		oldTime = null,
		RGBdelta = 0;
	// ---------- check if RGBspilit effect is suported by the browser 
	function checkRGBspilit() {
		var css = getComputedStyle(mainImgRGB);
		if ( css.display == "block") return true;
		return false;
	}
	var checkRGBspilitSuported = checkRGBspilit();

	var picLeft,
		transform,
		transform2;
	
	// ---------- Main function : scrol animation (parallex & RGBSpilit)	
	function scrolAnimation(t) {
		if (menuIsActive) {
			setTimeout(scrolAnimation,1000)
			return;
		}
		// ------ RGB spilit effect 
		if ( checkRGBspilitSuported && winW > 700 ) {
			if (oldTime) RGBdelta = t - oldTime;
			RGBsmooth += ((scrolX - RGBsmooth) * RGBdelta) / RGBspeed;
			RGBdiff 	   = scrolX - RGBsmooth;
			translateRBG   = (RGBdiff * -2) / RGBamount;
			translateRed   = (RGBdiff * 3)  / RGBamount;
			translateGreen = (RGBdiff * 2)  / RGBamount;
			translateBlue  = (RGBdiff * 1)  / RGBamount;
			if ( translateBlue < 1 && translateBlue > -1 ) translateBlue = 0;
			if ( translateGreen < 1 && translateGreen > -1 ) translateGreen = 0;
			if ( translateRed < 1 && translateRed > -1 ) translateRed = 0;
			if ( translateRBG < 1 && translateRBG > -1 ) translateRBG = 0;
			if ( showRGBEffect ){
				mainImgRGB.style.transform =
					'translate3d(' + translateRBG + 'px,0,0)';
				mainImgB.style.transform =
					'translate3d(' + translateRed + 'px,0,0)';
				mainImgR.style.transform =
					'translate3d(' + translateGreen + 'px,0,0)';
				mainImgG.style.transform =
					'translate3d(' + translateBlue + 'px,0,0)';
			}
		// ------ when effect is not suported, use paralex effect 
		} else if (  winW > 700 ) {
			// read dom 
			picLeft = mainImg.getBoundingClientRect();
			picLeft = picLeft.left;
			transform = (picLeft - winW / 2) * parallexHorizontalZarib;
			// write dom 
			if (picLeft > (-1 * ScreenTolerance * winW) &&
				picLeft < (winW * (1 + ScreenTolerance))
			){
				mainImgImg.style.transform =
					'translate3d(' + (transform * -0.15) + 'px,0,0)';
			}
		// ------ use a paralex effect on mobiles  
		} else {
			// read dom 
			picLeft = mainImg.getBoundingClientRect();
			picLeft = picLeft.left;
			transform = ((picLeft / winW ) * 100 )  -50 ; 
			transform *= 0.75;
			transform2 = ((picLeft - winW / 2) * parallexHorizontalZarib) * -0.25;
			// write dom 
			if (picLeft > (-3 * ScreenTolerance * winW) &&
				picLeft < (winW * (0.5 + ScreenTolerance))
			){
				mainImgImg.style.transform =
					'translate3d('+ transform +'%,0,0)translateX('+ transform2 +'px)';
			}
		}
		oldTime = t;
		requestAnimationFrame(scrolAnimation)
	}
	if ( !usingIE )	scrolAnimation();

}


// ---------------------------------------------------
// ---------------------------------------------------
// ------------- contact page functions --------------
// ---------------------------------------------------
// ---------------------------------------------------

// ---------- set height of all '.contact-item' equal to each other
function equalizeContactItems() {
	var contactItems = $('.contact-item');
	var maxHeight = 0;
	contactItems.removeAttr('style');
	contactItems.each(function(){
		var $this = $(this);
		var thisHeight = $this.height();
		if ( thisHeight > maxHeight ) maxHeight = thisHeight;
	})
	contactItems.each(function(){
		$(this).css('height',maxHeight);
	})
}

// ---------- set height and width style attribute to elements (fixing ipad bug)
function iosMapCon(isItFirstTimeLoaded) {
	// ----- set height and width (110vw) to the map element 
	var mapConWidth = window.innerWidth;
	mapConWidth *= 1.1; 
	var mapConHeight = mainContainerSize.y;
	$('#map-container')
		.css('width', mapConWidth + 'px' )
		.css('height', mapConHeight + 'px' );
	if ( !isItFirstTimeLoaded ) {
		$('mapFrame')
			.css('height', mapConHeight + 'px' )
			.css('width', mapConWidth + 'px' );
	}
	// ----- set width to the contact container element 
	var contactContainer = document.getElementById('contact-container');
	var contactContainerItems = 
		contactContainer.querySelectorAll('.title-box, .contact-section');
	var contactContainerW = mapConWidth ;
	for ( i = 0 ; i < contactContainerItems.length ; i++ ) {
		contactContainerW += contactContainerItems[i].offsetWidth;
	}
	$(contactContainer).css('width', contactContainerW + 'px' );
	$(contactContainer).css('height', mapConHeight + 'px' );
	if (isItFirstTimeLoaded){
		$('#contact-con').css('display','block');
	}
}

// ---------- main contact page function 
function contactPage() {

	// ---------- smooth horizontal scrol
	var scrolbarTarget = $(".scrolbar > .gm-scroll-view")[0];
	if ( isTouch ) scrolbarTarget = $(".scrolbar")[0];
	var magicScroll;
	if ( !usingIE && !isTouch ) {
		setTimeout(function(){
			magicScroll = new MagicScroll({
				target: scrolbarTarget,
				speed: magicScrlSpeed,
				smooth: magicScrlSmooth,
				horizential: true
			});
		},200);
	} else enableScrolWheelForIE(scrolbarTarget);
	var scrolX = 0;
	var scrolMax = 0;
	if ( !isTouch) {
		// get scrol position from scrolbar script 
		Scrollbars[0].functionArterScrolCahnge =
		function (x, y, dx, dy) {
			scrolX = x;
			scrolMax = dx;
		};
	}
	
	// ---------- recalculate scrolbars after load 
	function recalculateScrolBar() {
		if ( !isTouch ) {
			var scrollLeftPos =
				scrolbarTarget.scrollWidth -
				scrolbarTarget.clientWidth;
			magicScroll.max = scrollLeftPos;
			Scrollbars[0].update();
		}
	}
	if ( !smoothLoaded )
		setInterval(recalculateScrolBar, 800);
	functionAfterIntroLoading = function() {
		setTimeout(function(){
			clearInterval(recalculateScrolBar);
		},1000)
	}
	
	// ---------- set height of Contact items equal to the maximum
	equalizeContactItems();

	// ---------- generate the email links 
	$('#email-link').each(function(){
		var $this = $(this);
		var mail1 = $this.attr('data-mail');
		var mail2 = $this.attr('data-mailinfo');
		var finalmail = 'mailto:' + mail1 + '@' + mail2;
		$this.attr('href' , finalmail);
	});		
	
	// ---------- lazy load Maps
	var mapFrame = false;
	var mapContainer = $('#map-container');
	var mapLazyTime = 500;
	var isMapLoaded = false;
	if ( isTouch ) mapLazyTime = 2500;
	window.setTimeout(function(){
		mapContainer.append(mapFrameSrc)
		mapFrame = $("#mapFrame");
		if ( iSiPAD ) iosMapCon(false);
		setTimeout(function(){
			isMapLoaded = true;
		},100)
	},mapLazyTime);

	// ---------- go back button 
	var goBackBtn = $('#go-back');
	var scrolIsMaximum = false;
	var noMapScrolPositionElement = $('title-box');
	setTimeout(function () {
		goBackBtn.addClass('header-button-enable');
		goBackBtn.on('click', function () {
			if (scrolIsMaximum) {
				goBackBtn.removeClass('header-button-show');
				mapContainer.addClass('no-pointer-events');
				if (isTouch) {
					$(scrolbarTarget)
						.animate({
							scrollLeft: 0
						}, 1000);
					setTimeout(function(){
						$(scrolbarTarget).scrollLeft(0);
						scrolIsMaximum = false;
					},1010);
				} else {
					magicScroll.pos = 0;
					magicScroll.update();
				}
				scrolIsMaximum = false;
			}
		});
	}, 3000);
	
	// ---------- go to map button
	function ScrolToMap() {
		if ( isMapLoaded ) {
			if ( !isTouch ) {
				magicScroll.pos =
					scrolbarTarget.scrollWidth - 
					scrolbarTarget.clientWidth ;
				magicScroll.update();
			} else {
				var scrollLeftPos = 
					scrolbarTarget.scrollWidth - 
					scrolbarTarget.clientWidth ;
				$(scrolbarTarget)
					.animate({ scrollLeft: scrollLeftPos }, 'slow');
			}
		} else {
			setTimeout(ScrolToMap,100);
		}
	}
	$('#show-map-btn').on('click',ScrolToMap);
	
	// ---------- togle classes by scrol  
	var showGuideLine = true,
		guideLine = $('#guide-line');
	setInterval(function(){
		// get scrol (in desktop, functionArterScrolCahnge does the job)
		if ( isTouch ) {
			scrolX = scrolbarTarget.scrollLeft;
			scrolMax = 
				scrolbarTarget.scrollWidth - 
				scrolbarTarget.clientWidth ;
		}
		
		// when scrol is more than 5 pixels, hide the guide Line 
		if ( scrolX > 5 && showGuideLine) {
			guideLine.addClass('inactive');
			showGuideLine = false;
		}
		
		//  when scrol riched to the end, display go back button 
		if ( scrolMax - scrolX < (winW / 10) ) {
			if ( !scrolIsMaximum && isMapLoaded) {
				goBackBtn.addClass('header-button-show');
				mapContainer.removeClass('no-pointer-events');
				scrolIsMaximum = true;
				ScrolToMap();
			}
		} else if ( scrolIsMaximum ) {
			goBackBtn.removeClass('header-button-show');
			mapContainer.addClass('no-pointer-events');
			scrolIsMaximum = false;
		}
	},1000);
	
	// ---------- scrol animation (parallex) dom element varibles	
	var contactSection =
		document.querySelectorAll('#contact-con .contact-section');
	var contactTitle =
		document.querySelectorAll('#contact-con .contact-title');
	var contactText =
		document.querySelectorAll('#contact-con .contact-text-section');
	var contactSectionLen = contactSection.length;
	var contactSectionDistance = [];
	
	// ---------- scrol animation (parallex) function	
	function scrolAnimation() {
		if (menuIsActive) {
			setTimeout(scrolAnimation,1000)
			return;
		}
		// read the dom
		var contactSectionDistance = [];
		for ( i = 0 ; i < contactSectionLen ; i++ ) {
			var elm = contactSection[i];
			var elmX = elm.getBoundingClientRect();
			elmX = elmX.left;
			contactSectionDistance.push(elmX);
		}
		// write the dom 
		for ( i = 0 ; i < contactSectionLen ; i++ ) {
			var contactSectionLeft =
				contactSectionDistance[i];
			var transform =
				(contactSectionLeft - winW / 2 ) * 1.5 ;
			transform *= 0.75;
			if ( i == 1 ) transform *= 1.2;
			if ( contactSectionLeft > -20 && contactSectionLeft < (winW * 1.05 ) ) {
				var contactTitleTransform = transform  * 0.4 ;
				var contactTextTransform = transform  * 0.3 ;
				if ( transform >= contactTextTransform )
					contactTitleTransform = transform  * 0.32;
				contactTitleTransform = Math.floor(contactTitleTransform);
				contactTextTransform = Math.floor(contactTextTransform);
				contactTitle[i].style.transform =
					'translate3d(' + contactTitleTransform  + 'px,0,0)';
				contactText[i].style.transform =
					'translate3d(' + (contactTextTransform ) + 'px,0,0)';
			}
		}
		setTimeout(scrolAnimation,100)
	}
	scrolAnimation();
	
	// ---------- correct ipad bug ( can't detect #map-container height and width )
	if ( iSiPAD ) iosMapCon(true);
}

// ---------------------------------------------------
// ---------------------------------------------------
// -------------- awards page functions --------------
// ---------------------------------------------------
// ---------------------------------------------------
function awardsPage() {
	
	// ---------- smooth scrol
	var scrolbarTarget = $(".scrolbar > .gm-scroll-view")[0];
	if ( isTouch ) scrolbarTarget = $(".scrolbar")[0];
	var magicScroll
	if ( !usingIE ) {
		setTimeout(function(){
			magicScroll = new MagicScroll({
				target: scrolbarTarget,
				speed: magicScrlSpeed,
				smooth: magicScrlSmooth,
				horizential: true
			});
		},200);
	} else enableScrolWheelForIE(scrolbarTarget);
	
	// ---------- recalculate scrolbars after load 
	function recalculateScrolBar() {
		if (!isTouch) {
			var scrollLeftPos =
				scrolbarTarget.scrollWidth -
				scrolbarTarget.clientWidth;
			magicScroll.max = scrollLeftPos;
			Scrollbars[0].update();
		}
	}
	if ( !smoothLoaded )
		setInterval(recalculateScrolBar, 800);

	
	// ---------- scrol animation (parallex) function	
	var awardSec = document.querySelectorAll('.award-sec');
	var awardText = document.querySelectorAll('.award-text');
	var awardImg = document.querySelectorAll('.award-img');
	var awardSecLen = awardSec.length;

	function scrolAnimation() {
		if (menuIsActive) {
			setTimeout(scrolAnimation,1000)
			return;
		}
		var awardSecDistance = [];
		for ( i = 0 ; i < awardSecLen ; i++ ) {
			var elm = awardSec[i];
			var elmX = elm.getBoundingClientRect();
			elmX = elmX.left;
			awardSecDistance.push(elmX);
		}
		for ( i = 0 ; i < awardSecLen ; i++ ) {
			var awardSecLeft = awardSecDistance[i];
			var transform = (awardSecLeft - winW / 2 ) * parallexHorizontalZarib;
			if ( awardSecLeft > -10 && awardSecLeft < winW ) {
				awardText[i].style.transform =
					'translate3d(' + (transform  * 0.07 ) + 'px,0,0)';
				awardImg[i].style.transform =
					'translate3d(' + (transform  * 0.05 ) + 'px,0,0)';
			}
		}
		requestAnimationFrame(scrolAnimation)
	}
	scrolAnimation();

	// ---------- shwo a gradient on the left side, in order to fadeout scrol area
	function showScrolHider(){
		$('#scrolHider').addClass('show');
	}	
	
	// ---------- intro animation
	var awardItem = $('.award-line, .award-sec');
	var indexx = 0;
	function awardIntroAnimation() {
		if ( indexx >= awardItem.length) return
		awardItem[indexx].classList.add('award-show');
		indexx++;
		setTimeout(awardIntroAnimation,500);
	}
	
	// ---------- run intro animation and other functions 
	functionAfterIntroLoading = function() {
		setTimeout(awardIntroAnimation,1500);
		// stop recalculating scrolbars after load 
		setTimeout(function(){
			clearInterval(recalculateScrolBar);
		},1000);
		setTimeout(showScrolHider,1000)
	}
	if ( smoothLoaded ) {
		setTimeout(awardIntroAnimation,2000);
		setTimeout(showScrolHider,2000)
	}
	
}


// ---------------------------------------------------
// ---------------------------------------------------
// ------------- errorr page functions ---------------
// ---------------------------------------------------
// ---------------------------------------------------
function errorrPage() {

	var svgAnim = new Vivus(
		$('#error-svg')[0], {
			duration: 800,
			type: 'oneByOne'
		}
	);
	svgAnim.stop().reset();
	function errorPageCheckPageLoadingClass() {
		if (
			$('body').hasClass('smooth-load') ||
			$('body').hasClass('intro-loading')){
			setTimeout(errorPageCheckPageLoadingClass,300);
		} else {
			notlogoRotate = false;
			menuIsActive = true;
			$('body').addClass('menu-show');
			setTimeout(function(){
				svgAnim.play(1.25);
			},2000);
		}
	}
	errorPageCheckPageLoadingClass();
	
}


// ---------------------------------------------------
// ---------------- resize function  -----------------
// ---------------------------------------------------
var doAfterResize;
// ---------- fire this function after resizing ended 
function resizeEnded() {
	resizing = false;
	$('body').removeClass('resizing');
	
	//  contact page resize function
	if (pageClass == 'contact') {
		equalizeContactItems();
		if ( iSiPAD ) iosMapCon(false);
	//  work (grid) page resize function
	} else if (pageClass == 'works') {
		setGridItemsWidth();
		setTimeout(function(){
			if ( isotopScriptIsloaded )
				isotopWorkPageGripd.isotope('layout');
		},200);
		setTimeout(updateWorkGridScrolBar , 500);
	}
	if ( pageClass == 'project') {
		setProjectPageScrolMaxValu();
		setProjectSliderHeight(true);
	}
}

function resize() {
	// ---------- recalculate js varibles
	deviceSize();
	isdeviceMediaChanged = isMediaChanged();

	// ---------- recalculate css  varibles
	generateCssVarinbles();
	
	// ---------- detect when resize event ends 
	clearTimeout(doAfterResize);
	doAfterResize = setTimeout(resizeEnded, 200);

	// ---------- temporary add a class to body
	if ( !resizing ) $('body').addClass('resizing');
	resizing = true;
	
	// ---------- show the main nav menu as slider resposively
	responsiveMenuSlider()
	
	// ---------- get main container and offset from top and left 
	mainContainerSize = getMainContainerSize();
	
	// ---------- page specefic resize function
	if (pageClass == 'about') {
		aboutPageTextSize('#about-text','p')
	}
	if (pageClass == 'works') {
		setProjectParallexRatio();
	}
	if ( pageClass == 'project') {
		if (!isTouch) {
			Scrollbars[0].update();
			Scrollbars[1].update();
		}
		projectBackBtnScreen = setProjectBackBtnScreen();
	}
}

$(window).resize(resize);
window.addEventListener("orientationchange", resize);


// ---------------------------------------------------
// -- triger page specific funcitons by page varible--
// ---------------------------------------------------
function pagesFunctions() {
	if		(pageClass == 'home')    homePage(); 
	else if (pageClass == 'works')   workPage(); 
	else if (pageClass == 'project') projectPage(); 
	else if (pageClass == 'contact') contactPage(); 
	else if (pageClass == 'awards')  awardsPage() 
	else if (pageClass == 'about')   aboutPage() 
	else if (pageClass == 'errorr')  errorrPage() 
}


// ---------------------------------------------------
// ----------- smooth state page load ----------------
// ---------------------------------------------------
function functionsAfterSmoothLoad() {
	if (checkIsotopScriptLoaded()) {
		pageCommon();
		notlogoRotate = true;
		pagesFunctions();
		$('body').removeClass('loading');

		setTimeout(function () {
			if (checkbodyHasAPageClass())
				mainMenu(false);
			$('body').removeClass('smooth-load');
		}, 125);
		setTimeout(function () {
			menuIsActive = false;
			$('body').removeClass('smooth-started');
		}, 2000);
	} else {
		setTimeout(functionsAfterSmoothLoad,200);
	}
}
function setupSmoothState() {
	'use strict';
	var options = {
		prefetch: false,
		scroll: false,
		anchors: '.smoooth',
		/*cacheLength: 2,*/
		blacklist: 'no-smooth',
		// -------------------------------------------
		// --------- smooth state starts -------------
		// -------------------------------------------
		onStart: {
			duration: 3000, // Duration of our animation
			render: function ($container) {
				smoothLoaded = true;
				notlogoRotate = true;
				
				// set body classes
				if ( !menuIsActive ) mainMenu(false);
				$('body').addClass('smooth-load smooth-started');
				
				// reset logo-item transform on FF and IE 
				if ( usingIE || usingFF) $('#logo span').removeAttr('style');
				
				setTimeout(function () {
					$('body').addClass('loading');
				}, 1000);
				
				// reset position of logo (that moved by mouse )
				$('#logo')
					.addClass('logo-anim-reset')
					.removeAttr('style');
			}
		},
		// -------------------------------------------
		// ------- smooth state loaded page ----------
		// -------------------------------------------
		onReady: {
			duration: 0,
			render: function ($container, $newContent) {
				$container.html($newContent);
				functionsAfterSmoothLoad();
			}
		}
	};
	smoothState =
		$('#smooth-con')
			.smoothState(options)
			.data('smoothState');
};


// ---------------------------------------------------
// ------------- document ready function -------------
// ---------------------------------------------------
$(document).ready(function () {

	// ---------- old browser massage
	if ( usingIE ) {
		$('#old-browser').show();
		$('#old-browser div').click(function(){
			$('#old-browser').slideUp();
		})
	}

	// ---------- show the main nav menu as slider resposively
	responsiveMenuSlider()

	// ---------- run common and page function
	pageCommon();
	pagesFunctions();
	setupSmoothState();

	// ---------- animations After initinal Loding Intro
	function homeAfterLodingIntro() {
		if ( checkIsotopScriptLoaded() )  {
			$('body').removeClass('intro-loading');
			functionAfterIntroLoading();
		}
	}

	// ---------- check css file is fully loded 
	var textCssLoadElement = document.querySelector('.noise');
	function cssIsLoaded() {
		var css = getComputedStyle(textCssLoadElement);
		if ( css.display == "block") return true;
		return false;
	}

	// ---------- check if logo loging animation is finished
	function checkLoadingAnimEnded() {
		console.log('check Loading Anim Ended');
		if (introLoading && cssIsLoaded()) 
			homeAfterLodingIntro();
		else
			setTimeout(checkLoadingAnimEnded,100);
	}

	// ---------- display loading on first time
	var bilndLoadFunctionIsRunning = false;
	window.addEventListener('load', function () {
		setTimeout(function(){
			bilndLoadFunctionIsRunning = true;
			if ( introLoading && cssIsLoaded() ) {
				homeAfterLodingIntro();
			} else {
				checkLoadingAnimEnded();
			}
		},10)
	});
	 setTimeout(function(){
		if ( !bilndLoadFunctionIsRunning && cssIsLoaded() ) 
			homeAfterLodingIntro();
	},10000);

	// ---------- desabling intro-loading animation for easy development
	if (bypassEntranceAnimation /*varible is specified on head*/ ) {
		homeAfterLodingIntro();
	}

	// ---------- enable logo Rotation 
	logoRotation();

	// ---------- add click event to footer share button
	var shareDialogVisible = false;
	$('#footer-share').click(function(){
		if ( !shareDialogVisible) {
			$("#share")
				.css('z-index','10000')
				.addClass('active')
			$("#share a").attr('tabindex','1');
			shareDialogVisible = true;
		}
	})

	// ---------- add click event to share dialog close X button 
	$('#share-close').click(function(){
		if ( shareDialogVisible) {
			$("#share").removeClass('active');
			$("#share a").attr('tabindex','-1');
			shareDialogVisible = false;
			setTimeout(function(){
				$("#share").css('z-index','-1');
			},1000)
		}
	})

	// ---------- add click event to menu buttons
	var menuBtnPressed = false;
	$('#menu-btn').on('click',function(){
		mainMenu(true);
		menuBtnPressed = true;
		setTimeout(function(){
			menuBtnPressed = false;
		},1000);
	})

	// ---------- clicking header background resoults closing menu
	$('#menu-closer').on('click',function(){
		if (menuIsActive && !menuBtnPressed) mainMenu(true)
	})

	// ---------- clicking on logo when nav is in slider mode
	$('#menu-go').on('click',function(){
		var navItem = document.querySelectorAll('#nav a');
		var address = $(navItem[navMenuNumToGo - 1]).attr('href');
		if (menuIsActive ) {
			if ( navMenuNumToGo != menuToShow) {
				smoothState.load(address);
			} else if (!menuBtnPressed)
				mainMenu(true);
		}
	})

	// ---------- swipe ditection on logo , on mobile deives switches meny slide
	swipedetect($('#menu-go')[0], function (swipedir) {
		if ( swipedir == 'right' && navMenuSlided ) {
			$('#nav').slick('slickPrev');
		}
		if ( swipedir == 'left' && navMenuSlided ) {
			$('#nav').slick('slickNext');
		}
		if ( navMenuSlided ) {
			randomRrotateLogo();
		}
	}, false );

	// ---------- menu mousehover change the logo animation 
	$('#nav a').each(function (index) {
		$(this).mouseenter(function () {
			if ( winW >= 610)
				changeLogo(index + 1);
		})
	})

	// ---------- enable smooth state on nav link 
	$('nav a, #project-go-back').each(function(){
		var $this = $(this);
		var destination = $this.attr('data-nav');
		var address = $this.attr('href');
		$this.on('click',function(e){
			e.preventDefault();
			// i have a mistake in naming classes, so i corect it here
			if ( pageClass == 'works' && destination == 'projects')
				mainMenu(true);
			else if ( pageClass != destination )
				smoothState.load(address);
			else if ( menuIsActive )
				mainMenu(true);
		})
	})

	// ---------- sharing dialog 
	function shareButton() {
		$('#share-fb').on('click', function () {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' +
			thePageURL + '&quote=' +
			thePageURL);
			return false;
		});
		$('#share-tweet').on('click', function () {
			window.open('https://twitter.com/intent/tweet?text=' +
			thePageTitle + ':%20' +
			thePageURL);
			return false;
		});
		$('#share-lkdin').on('click', function () {
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=' +
			thePageURL + '&title=' +
			thePageTitle);
			return false;
		});
		$('#share-mail').on('click', function () {
			window.open('mailto:?subject=' +
			thePageTitle + '&body=' +
			thePageURL);
			return false;
		});
		$('#share-whatsapp').on('click', function () {
			window.open('https://api.whatsapp.com/send?text=' +
			thePageTitle + '%20' +
			thePageURL);
			return false;
		});
		$('#share-telegram').on('click', function () {
			window.open('https://t.me/share/url?url=' +
			thePageURL + '&text=' +
			thePageTitle);
			return false;
		});
	}
	shareButton();

	// ---------- toggle fullscreen by duble clicking body
	$('body').dblclick(function(event){
		var x = event.clientX;
		var y = event.clientY;
		// check mouse is out of main container
		function isMouseInContainer() {
			if (x < mainContainerSize.top ||
				x > mainContainerSize.rightEnd
			) return true;
			if (y > mainContainerSize.btnEnd ||
				y < mainContainerSize.left
			) return true;
			return false;
		}
		if ( isMouseInContainer() ) toggleFullscreen()
	});
});
