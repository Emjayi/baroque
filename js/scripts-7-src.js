var projectRandomParallexRatio, ProjectsGridParallexRatio, doAfterResize, isTablet, isDesktop, isHorizental, isVertical, smoothState, isMobile = !1,
    isTouch = !1,
    winH = $(window).height(),
    winW = $(window).width(),
    resizing = !1,
    emUnit = 16,
    usingFF = !1,
    iSiPAD = !1,
    parallexHorizontalZarib = 1.5,
    parallexZaribAboutPic = 1.5,
    magicScrlSpeed = 80,
    magicScrlSmooth = 12;

function testFrameRate(e) {
    var t = 0,
        o = !0;
    setTimeout(function () {
        o = !1
    }, 100 * e), ! function e() {
        t++, o && requestAnimationFrame(e)
    }(), setTimeout(function () {
        console.log("testFrameRate : " + t), t /= 6 * e, magicScrlSpeed /= t, (magicScrlSmooth *= t) > 35 && (magicScrlSmooth = 35), magicScrlSmooth < 10 && (magicScrlSmooth = 10), magicScrlSpeed < 65 && (magicScrlSpeed = 65), magicScrlSpeed > 95 && (magicScrlSpeed = 95)
    }, 110 * e)
}

function deviceSize() {
    winH = $(window).height(), isMobile = (winW = $(window).width()) <= 900, isTablet = winW < 992 && winW > 900, isDesktop = winW >= 992, winW >= winH ? (isHorizental = !0, isVertical = !1) : (isHorizental = !1, isVertical = !0), parallexHorizontalZarib = winW < 601 ? 2.5 : 1.5, parallexZaribAboutPic = winW < 901 ? 2.5 : 1.5, emUnit = winW >= 2600 ? 32 : 16
}
setTimeout(function () {
    testFrameRate(5)
}, 500), deviceSize();
var isdeviceMediaChanged = !1,
    isMobile0 = isMobile,
    isTablet0 = isTablet,
    isDesktop0 = isDesktop,
    lastisMediaChanged = !1;

function isMediaChanged() {
    return (isMobile0 != isMobile || isTablet0 != isTablet || isDesktop0 != isDesktop) && (isMobile0 = isMobile, isTablet0 = isTablet, isDesktop0 = isDesktop, !0)
}

function mobileOsDetect() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    /android/i.test(e) ? ($("html").addClass("android mob"), isTouch = !0) : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? ($("html").addClass("ios mob"), isTouch = !0) : /windows phone/i.test(e) ? ($("html").addClass("winphone mob"), isTouch = !0) : /Googlebot-Mobile/i.test(e) && ($("html").addClass("mob"), isTouch = !0), isTouch || $("html").addClass("desktop")
}

function iOS() {
    return !!usingIE || -1 != navigator.platform.indexOf("iPad") || -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || !!navigator.userAgent.includes("Mac") && "ontouchend" in document
}

function browserDetector() {
    -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? $("html").addClass("Opera") : -1 != navigator.userAgent.indexOf("Chrome") ? $("html").addClass("Chrome") : -1 != navigator.userAgent.indexOf("Safari") ? $("html").addClass("Safari") : -1 != navigator.userAgent.indexOf("Firefox") && ($("html").addClass("Firefox"), usingFF = !0)
}
mobileOsDetect(), iSiPAD = iOS(), browserDetector();
var usingIE = !1;

function ieDestector() {
    var e = window.navigator.userAgent;
    e.indexOf("MSIE ") > 0 && ($("html").addClass("ie ie10"), usingIE = !0), e.indexOf("Trident/") > 0 && ($("html").addClass("ie ie11"), usingIE = !0), e.indexOf("Edge/") > 0 && $("html").addClass("ie-edge")
}

function swipedetect(e, t, o) {
    var n, a, r, s, l, c, d, u = e,
        h = t || function (e) {};
    u.addEventListener("touchstart", function (e) {
        var t = e.changedTouches[0];
        n = "none", dist = 0, a = t.pageX, r = t.pageY, d = new Date().getTime(), o && e.preventDefault()
    }, !1), u.addEventListener("touchmove", function (e) {
        o && e.preventDefault()
    }, !1), u.addEventListener("touchend", function (e) {
        var t = e.changedTouches[0];
        s = t.pageX - a, l = t.pageY - r, (c = new Date().getTime() - d) <= 300 && (Math.abs(s) >= 150 && 100 >= Math.abs(l) ? n = s < 0 ? "left" : "right" : Math.abs(l) >= 150 && 100 >= Math.abs(s) && (n = l < 0 ? "up" : "down")), h(n), o && e.preventDefault()
    }, !1)
}
ieDestector();
var bodyClasses = ["home", "about", "awards", "contact", "works", "project", ];

function checkbodyHasAPageClass() {
    var e = !1,
        t = bodyClasses.length;
    for (i = 0; i < t; i++) $("body").hasClass(bodyClasses[i]) && (e = !0);
    return e
}
var Scrollbars = [];

function enableScrolWheelForIE(e) {
    e.addEventListener("wheel", function n() {
        t += event.deltaY, (o = t / 3) < 0 && (t = 0), $(e).scrollLeft(o)
    });
    var t = 0,
        o = 0
}
var functionAfterIntroLoading = function () {};

function changeLogo(e) {
    $("#header").removeClass("pos1 pos2 pos3 pos4 pos5").addClass("pos" + e)
}
var menuToShow = !1;

function menuToShowChangeLogo() {
    switch (pageClass) {
        case "home":
            menuToShow = !1;
            break;
        case "about":
        case "errorr":
            menuToShow = 1;
            break;
        case "awards":
            menuToShow = 3;
            break;
        case "contact":
            menuToShow = 4;
            break;
        case "works":
        case "project":
            menuToShow = 2
    }
}

function checkIsotopScriptLoaded() {
    if ("works" == pageClass) {
        if (isotopScriptIsloaded) return !0;
        setTimeout(checkIsotopScriptLoaded, 200)
    } else {
        if ("project" != pageClass || projectPageScriptIsLoaded) return !0;
        setTimeout(checkIsotopScriptLoaded, 200)
    }
}

function getMainContainerSize() {
    var e = document.querySelector("#smooth-con"),
        t = document.querySelector("#smooth-con article"),
        o = {};
    o.x = e.clientWidth, o.y = e.clientHeight;
    var n = t.clientWidth - o.x,
        a = t.clientHeight - o.y;
    o.x += n, o.y += a;
    var r = e.getBoundingClientRect();
    return o.top = r.top, o.left = r.left - n, o.btn = winH - e.clientHeight - o.top, o.right = winW - e.clientWidth - r.left, o.btnEnd = o.top + o.y, o.rightEnd = o.left + o.x, o
}
var navMenuSlided = !1,
    navMenuNumToGo = menuToShow;

function responsiveMenuSlider(e) {
    var t = $("#nav");
    winW >= 610 ? (navMenuSlided && t.slick("unslick"), navMenuSlided = !1) : navMenuSlided ? t.slick("slickGoTo", menuToShow - 1, !1) : (navMenuSlided = !0, menuToShow || (menuToShow = 1), t.slick({
        infinite: !0,
        centerMode: !0,
        variableWidth: !0,
        cssEase: "ease-out",
        slidesToShow: menuToShow,
        touchThreshold: 6
    }), t.on("beforeChange", function (e, t, o, n) {
        n++, menuToShow && changeLogo(n), navMenuNumToGo = n
    }), t.find("button , a").attr("tabindex", "-1").addClass("focusable"))
}
var menuIsActive = !1;

function mainMenu(e) {
    menuIsActive ? (notlogoRotate = !0, $("#logo").addClass("logo-anim-reset").removeAttr("style"), (usingIE || usingFF) && $("#logo span").removeAttr("style"), $("body").addClass("menu-ending"), menuIsActive = !1, $("#header .focusable").attr("tabindex", "-1"), $("#footer-nav .focusable").attr("tabindex", "1"), setTimeout(function () {
        notlogoRotate = !0
    }, 500), setTimeout(function () {
        $("body").removeClass("menu-show"), $("#logo").removeClass("logo-anim-reset").removeAttr("style"), (usingIE || usingFF) && $("#logo span").removeAttr("style"), notlogoRotate = !0
    }, 1e3), setTimeout(function () {
        $("body").removeClass("menu-ending"), notlogoRotate = !0
    }, 3500)) : ($("body").addClass("hide-main menu-startAnim"), $("#logo").removeAttr("style"), (usingIE || usingFF) && $("#logo span").removeAttr("style"), setTimeout(function () {
        $("body").addClass("menu-show"), responsiveMenuSlider()
    }, 250), setTimeout(function () {
        $("#header .focusable").attr("tabindex", "1"), $("#footer-nav .focusable").attr("tabindex", "-1")
    }, 1e3), notlogoRotate = !0, setTimeout(function () {
        menuIsActive = !0, e && (notlogoRotate = !1), $("body").removeClass("hide-main menu-startAnim")
    }, 2e3))
}
var mainContainerSize, randomRrotateLogo, notlogoRotate = !0;

function logoRotation() {
    var e = !1,
        t = document.getElementById("logo");
    if (usingIE || usingFF) var o = $(".logo-1, .logo-2, .logo-3, .logo-4, .logo-5"),
        n = o.length - 1;
    var a = 0,
        r = 0,
        s = 0,
        l = 0,
        c = .005,
        d = 0,
        u = 0,
        h = 0,
        f = 0,
        m = !1,
        g = 0,
        p = !0;

    function _(e, t, o) {
        0 !== e ? (d = e.clientX, u = e.clientY, notlogoRotate || (m = !0), isTouch && (d = e.touches[0].clientX, u = e.touches[0].clientY)) : (d = t, u = o), notlogoRotate && (d = winW / 2, u = winH / 2), d > winW / 2 - 50 && d < winW / 2 + 50 && u > winH / 2 - 50 && u < winH / 2 + 50 ? (u = winH / 2, d = winW / 2, c = .03, p = !0) : (c = .01, p && (c = 0), p = !1);
        var n = Math.max(-200, Math.min(200, winH / 2 - u));
        a = .2 * Math.max(-200, Math.min(200, winW / 2 - d)), r = .2 * n, (Math.abs(d - h) > 50 || Math.abs(u - f) > 50) && (g = 0), h = d, f = u
    }
    randomRrotateLogo = function (t) {
        if (console.log("randomRrotateLogo"), !m) {
            var o, n;
            ! function e() {
                if ((o = winW * Math.random()) <= winW / 5 || o >= 4 * winW / 5) return o;
                e()
            }(), ! function e() {
                if ((n = winH * Math.random()) <= winH / 5 || n >= 4 * winH / 5) return n;
                e()
            }(), _(0, o, n), !t || e || m || setTimeout(randomRrotateLogo, 4e3)
        }
    };
    var v = !0;

    function b() {
        "undefined" != typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission ? DeviceMotionEvent.requestPermission().then(function (e) {
            "granted" == e && window.addEventListener("devicemotion", W)
        }).catch(console.error) : console.log("DeviceMotionEvent is not defined"), v = !1
    }

    function w() {
        "https:" != location.protocol ? location.href = "https:" + window.location.href.substring(window.location.protocol.length) : b()
    }
    var S = 0,
        C = 0,
        x = 0,
        y = 0,
        k = 0;

    function W(t) {
        S = t.alpha, C = t.beta, x = t.gamma, "number" != typeof S && v ? (b(), isTouch && $(document).on("touchmove", _)) : e = !0, _(0, y = Math.abs(S) / 18 * 200, k = Math.abs(C) / 18 * 100)
    }
    setTimeout(function e() {
            window.addEventListener("deviceorientation", W, !0)
        }, 100), setTimeout(function () {
            isTouch || $(document).on("mousemove", _)
        }, 100),
        function e() {
            notlogoRotate ? (s = 0, l = 0, moveeZ = 0, g = 0) : (g < c && (g += 1e-4), s += (a - s) * g, l += (r - l) * g, moveeZ = (Math.abs(s) + Math.abs(l)) * .1),
                function e(a, r, s) {
                    if (r *= -1, menuIsActive && !notlogoRotate && (t.style.transform = "rotateX(" + r + "deg)rotateY(" + a + "deg)rotateZ(" + s + "deg)", usingIE || usingFF))
                        for (i = 0; i < n; i++) a *= (i % 3 + 1) * .6, r *= (i % 3 + 1) * .6, o[i].style.transform = "translateX(" + a + "px)translateY(" + r + "px)"
                }(s, l, moveeZ), requestAnimationFrame(e)
        }(), isTouch && setTimeout(function () {
            0 == s && 0 == l && randomRrotateLogo(!0)
        }, 3e3)
}
var isFullscreen = !1;

function toggleFullscreen() {
    isFullscreen ? (closeFullscreen(), isFullscreen = !1) : (openFullscreen(), isFullscreen = !0), resize()
}

function openFullscreen() {
    var e = document.documentElement;
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(), isFullscreen = !0
}

function closeFullscreen() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(), isFullscreen = !1
}

function pageCommon() {
    if ("string" != typeof pageClass && (location.href = "http://" + SiteDomain + "/error/"), ! function e(t) {
            var o = "";
            for (i = 0; i < bodyClasses.length; i++) bodyClasses[i] != t && (o += bodyClasses[i] + " ");
            o += "errorr", $("body").removeClass(o).addClass(t), $("#nav-" + t).addClass("active").attr("href", "#"), menuToShowChangeLogo()
        }(pageClass), Scrollbars = [], !isTouch) {
        var e = $(".scrolbar"),
            t = e.length;
        if (t > 0)
            for (i = 0; i < t; i++) {
                i;
                var o = new GeminiScrollbar({
                    element: e[i]
                }).create();
                Scrollbars.push(o)
            }
        setTimeout(function () {
            var e = Scrollbars.length;
            for (i = 0; i < e; i++) Scrollbars[i].update()
        }, 500)
    }
    thePageURL = encodeURIComponent(document.URL), thePageTitle = encodeURIComponent(document.title), mainContainerSize = getMainContainerSize(), $("#logo .logo-t")[0].addEventListener("transitionend", function () {
        resize(!0), setTimeout(function () {
            resize(!0)
        }, 200)
    })
}

function homePage() {
    testFrameRate(40), $("#home-enter").on("click", function () {
        $("body").addClass("menu-show"), setTimeout(function () {
            notlogoRotate = !1, menuIsActive = !0
        }, 3e3)
    });
    var e = 0;
    $("#home-svg svg").each(function (t) {
        $(this).attr("id", "home-svg-" + (t + 1)), e++
    });
    var t = [];

    function o(e) {
        var o = new Vivus("home-svg-" + (e + 1), {
            duration: 800,
            type: "oneByOne"
        });
        o.stop().reset(), t.push(o)
    }
    for (i = 0; i < e; i++) o(i);
    var n = -1,
        a = null;
    functionAfterIntroLoading = function () {
        $("#home-svg").show(), setTimeout(function () {
                $("body").addClass("home-text-show")
            }, 3e3),
            function o() {
                function r() {
                    t[n].play(1, function () {
                        (function e(t) {
                            var o = t.querySelectorAll(".hatch"),
                                n = o.length,
                                a = 0;

                            function r() {
                                a < n && (o[a].classList.add("hatch-draw"), a++, setTimeout(r, 400))
                            }
                            setTimeout(r, 100)
                        })(t[n].el), a = n, setTimeout(o, 2e4)
                    })
                }
                n == e - 1 ? n = 0 : n++, null != a ? (t[a].play(-6, function () {
                    setTimeout(r, 1e3)
                }), function e(t) {
                    var o = t.querySelectorAll(".hatch"),
                        n = o.length;
                    for (i = 0; i < n; i++) o[i].classList.remove("hatch-draw")
                }(t[a].el)) : setTimeout(r, 1e3)
            }()
    }, smoothLoaded && setTimeout(function () {
        $("body").addClass("menu-show")
    }, 100)
}
var thePageURL, thePageTitle, isotopWorkPageGripd, updateWorkGridScrolBar = null,
    workPageMagicScroll = !1;

function setGridItemsWidth() {
    var e = 7.5;
    winW <= 900 && (e = 10), winW <= 600 && (e = 15), winW <= 400 && (e = 20);
    var t = winH / 100;
    winH > 700 ? t *= 35 : winH <= 700 && winH > 600 ? t *= 40 : winH <= 600 && (t *= 50, t -= 2.15 * emUnit), winH < 500 && winW >= 500 && (t = 50 * (winH / 100), t -= 1.24 * emUnit), winH < 851 && winH > 449 && winW < 500 && (t = 33.3 * (winH / 100), t -= 1.4 * emUnit), t -= 4 * emUnit, $("#grid .grid-item").each(function () {
        var o = $(this),
            n = t * o.attr("data-width");
        n += e / 100 * winW, o.css("width", n)
    })
}

function setProjectParallexRatio() {
    winW > 1500 ? (projectRandomParallexRatio = 10, ProjectsGridParallexRatio = 1) : winW > 1e3 ? (projectRandomParallexRatio = 9, ProjectsGridParallexRatio = .5) : winW > 750 ? (projectRandomParallexRatio = 8, ProjectsGridParallexRatio = .35) : winH < 751 && winW < 500 ? (projectRandomParallexRatio = 10, ProjectsGridParallexRatio = .5) : (projectRandomParallexRatio = 8, ProjectsGridParallexRatio = .25)
}

function workPage() {
    var e, t = 1200;
    smoothLoaded && (t = 300);
    var o = $(".scrolbar > .gm-scroll-view")[0];
    isTouch && (o = $(".scrolbar")[0]), usingIE ? enableScrolWheelForIE(o) : setTimeout(function () {
        workPageMagicScroll = new MagicScroll({
            target: o,
            speed: magicScrlSpeed,
            smooth: magicScrlSmooth,
            horizential: !0
        })
    }, t);
    var n = 0,
        a = 0;

    function r() {
        if (iSiPAD) {
            var e = $("#the-title-box").innerWidth(),
                t = $("#grid")[0].style.width;
            t = parseFloat(t = t.slice(0, -2)), $("#the-grid-container").css("width", e + t)
        }
    }

    function s() {
        c && ($("#options").addClass("grid-options-hide"), c = !1)
    }
    isTouch || (Scrollbars[0].functionArterScrolCahnge = function (e, t, o, r) {
        n = e, a = o
    }), updateWorkGridScrolBar = function () {
        isTouch || Scrollbars[0].update(), !1 !== workPageMagicScroll && (workPageMagicScroll.max = o.scrollWidth - o.clientWidth), r()
    }, functionAfterIntroLoading = function () {
        updateWorkGridScrolBar(), setTimeout(updateWorkGridScrolBar, 500), setTimeout(updateWorkGridScrolBar, 1e3), setTimeout(updateWorkGridScrolBar, 1500), setTimeout(updateWorkGridScrolBar, 2500)
    }, setGridItemsWidth(), ! function e() {
        if (isotopScriptIsloaded) try {
            isotopWorkPageGripd = $("#grid").isotope({
                itemSelector: ".grid-item",
                getSortData: {
                    abc: ".grid-title",
                    year: ".grid-info-year parseInt",
                    area: "[data-area] parseInt",
                    default: "[data-index] parseInt"
                },
                sortAscending: {
                    abc: !0,
                    year: !1,
                    area: !1,
                    default: !0
                },
                sortBy: "default",
                transitionDuration: 1e3,
                stagger: 30,
                layoutMode: "masonryHorizontal"
            }), setTimeout(function () {
                isotopWorkPageGripd.isotope("layout"), updateWorkGridScrolBar(), setTimeout(updateWorkGridScrolBar, 500)
            }, 150)
        } catch (t) {
            console.error(t), setTimeout(e, 50)
        } else setTimeout(e, 50)
    }();
    var l = $("#options-btn"),
        c = !1;
    setTimeout(function () {
        l.addClass("header-button-enable"), l.on("click", function () {
            c ? s() : ($("#options").removeClass("grid-options-hide"), c = !0)
        })
    }, 3e3), $("#type li,#status li").on("click", function () {
        var e = $(this).attr("data-filter");
        setTimeout(function () {
            isotopWorkPageGripd.isotope({
                filter: e
            })
        }, 500)
    }), $("#sort li").on("click", function () {
        var e = $(this).attr("data-sort");
        setTimeout(function () {
            isotopWorkPageGripd.isotope({
                sortBy: e
            })
        }, 500)
    }), $("#type, #status, #sort").each(function () {
        var e = $(this).find("li");
        e.on("click", function () {
            $this = $(this), e.removeClass("active"), $this.addClass("active"), setTimeout(s, 500), setTimeout(r, 550)
        })
    }), $(".grid-container").on("click", s);
    var d = document.querySelectorAll("#grid .grid-item"),
        u = document.querySelectorAll("#grid .grid-img"),
        h = d.length,
        f = [],
        m = [],
        g = m;
    document.getElementById("options"), setProjectParallexRatio();
    var p = [.42, .38, .34];
    for (i = 0; i < h; i++) {
        var _ = Math.floor(2.5 * Math.random());
        _ = p[_], f.push(_)
    }! function t() {
        if (menuIsActive) {
            setTimeout(t, 1e3);
            return
        }
        for (i = 0, m = []; i < h; i++) {
            var o = d[i].getBoundingClientRect();
            o = o.left, m.push(o)
        }
        for (i = 0, g = m; i < h; i++) {
            var n = m[i];
            e = n - winW / 2, e *= 20 * parallexHorizontalZarib, e *= f[i] / projectRandomParallexRatio, e *= Math.abs(e) / winW * ProjectsGridParallexRatio, n > -.2 * winW && n < 1.2 * winW && (u[i].style.transform = "translate3d(" + -.15 * e + "px,0,0)")
        }
        requestAnimationFrame(t)
    }();
    var v = [];
    for (i = 0; i < h; i++) null == d[i].querySelector(".lazy-img") ? v.push(!1) : v.push(!0);

    function b() {
        var e = 0;

        function t(e, t) {
            $(t).on("load", function () {
                e.classList.remove("lazy")
            })
        }
        for (i = 0; i < h; i++)
            if (v[i] && (e++, g[i] < 1.2 * winW)) {
                var o = d[i].querySelector("img"),
                    n = o.getAttribute("data-src");
                o.setAttribute("src", n), v[i] = !1, t(d[i], o)
            } e > 0 && setTimeout(b, 300)
    }
    setTimeout(b, t);
    var w = !0,
        S = $("#guide-line");
    setInterval(function () {
        isTouch && (n = o.scrollLeft, a = o.scrollWidth - o.clientWidth), n > 5 && w && (S.addClass("inactive"), w = !1)
    }, 1e3)
}

function aboutPageTextSize(e, t, o) {
    var n = $(e),
        a = n.find(t),
        r = Math.min(winH / 4 * 3, n.attr("data-maxHeight"));
    n[0].style = "";
    var s = !1;
    if (o) {
        var l = o;
        s = !0
    } else var l = a[0].clientWidth;
    var c = 0;
    for (i = 0; i < a.length; i++) c += a[i].clientHeight;
    var d = Math.floor(c / r) + 1,
        u = d * l + 10 * d;
    s ? (n[0].style.width = 1.5 * u + "px", n[0].style.columnCount = d + 1) : (n[0].style.width = u + "px", n[0].style.columnCount = d)
}

function aboutPage() {
    setTimeout(function () {
        aboutPageTextSize("#about-text", "p")
    }, 150);
    var e = 1200;
    smoothLoaded && (e = 300);
    var t = $(".scrolbar > .gm-scroll-view")[0];
    isTouch && (t = $(".scrolbar")[0]), usingIE ? enableScrolWheelForIE(t) : setTimeout(function () {
        f = new MagicScroll({
            target: t,
            speed: magicScrlSpeed,
            smooth: magicScrlSmooth,
            horizential: !0
        })
    }, e);
    var o = 0,
        n = 0;

    function a() {
        if (!isTouch) {
            var e = t.scrollWidth - t.clientWidth;
            f.max = e, Scrollbars[0].update()
        }
    }
    isTouch || (Scrollbars[0].functionArterScrolCahnge = function (e, t, a, r) {
        o = e, n = a
    }), setInterval(a, 800), functionAfterIntroLoading = function () {
        setTimeout(function () {
            clearInterval(a)
        }, 1e3), setTimeout(function () {
            aboutPageTextSize("#about-text", "p")
        }, 150), setTimeout(B, e + 100)
    };
    var r = $("#about-text p"),
        s = 0,
        l = !0,
        c = !1,
        d = $("#about-text")[0],
        u = $("#guide-line");

    function h() {
        isTouch && (o = t.scrollLeft), o > 5 && l && (u.addClass("inactive"), l = !1);
        var e = d.getBoundingClientRect();
        (e = e.left) < 4 * winW / 5 && o > 10 && (c = !0, function e() {
            r[s].classList.add("about-text-show"), ++s < r.length && setTimeout(e, 150)
        }()), (l || !c) && setTimeout(h, 200)
    }
    setTimeout(h, 400);
    var f, m, g, p, _, v = document.querySelectorAll(".team-img"),
        b = document.querySelectorAll(".team-img-paralex"),
        w = document.querySelectorAll(".about-pic"),
        S = ".about-img-paralex",
        C = (document.querySelector(".about-main-svg"), document.querySelectorAll(S)),
        x = v.length,
        y = C.length,
        k = [],
        W = [],
        P = [],
        T = 0,
        A = 0,
        z = 0,
        j = 0,
        R = 100;
    usingFF && (R = 10), $(S).each(function () {
        var e = $(this).attr("data-ratio");
        e = parseFloat(e), k.push(e)
    }), $(document).mousemove(function (e) {
        var t = e.clientX,
            o = e.clientY;
        t > winW - 160 && (t = winW - 160), o > winH - 160 && (o = winH - 160), T = 20 * t / 100, A = 20 * o / 100
    }), ! function e() {
        if (menuIsActive) {
            setTimeout(e, 1e3);
            return
        }
        for (i = 0, W = []; i < x; i++) g = (g = (m = v[i]).getBoundingClientRect()).left, W.push(g);
        for (i = 0, PositionOfMainPic = w[0].getBoundingClientRect(), P = W; i < x; i++) _ = ((p = W[i]) - winW / 2) * parallexHorizontalZarib, p > -.2 * winW && p < 1.2 * winW && (b[i].style.transform = "translate3d(" + -.07 * _ + "px,0,0)");
        if (PositionOfMainPic.right > 0)
            for (z += (5 * T - z) / R, j += (5 * A - j) / R, j > 1800 ? j = 1800 : j < -1800 && (j = -1800), isMobile || (PositionOfMainPic.width = 0), i = 0; i < y; i++) _ = PositionOfMainPic.left + .5 * PositionOfMainPic.width - winW / 2, _ *= 2 * parallexZaribAboutPic, isMobile ? _ -= z : _ += z, _ *= 1, _ *= k[i], isMobile ? (_ *= -2, _ += .05 * PositionOfMainPic.left) : (_ *= -1.5, _ -= .05 * PositionOfMainPic.left), C[i].style.transform = "translate3d(" + _ + "px," + -1 * j * k[i] + "px,0)";
        requestAnimationFrame(e)
    }();
    var I = [];
    for (i = 0; i < x; i++) {
        var L = v[i].classList.contains("lazy");
        null != L && L ? I.push(!0) : I.push(!1)
    }
    var M = 0,
        F = [],
        E = [];

    function H(e, t, o) {
        $(t).on("load", function () {
            e.classList.remove("lazy")
        });
        var n = o.getAttribute("data-src");
        o.setAttribute("src", n)
    }

    function B() {
        var e = 0;
        for (i = 0; i < x; i++)
            if (I[i] && (e++, P[i] < 1.4 * winW)) {
                var t = v[i].querySelector(".team-img-main"),
                    o = v[i].querySelector(".team-img-hover"),
                    n = t.getAttribute("data-src");
                t.setAttribute("src", n), I[i] = !1, H(v[i], t, o)
            } for (i = 0; i < M; i++)
            if (F[i]) {
                e++;
                var n = E[i].getAttribute("data-src");
                E[i].setAttribute("xlink:href", n), F[i] = !1
            } e > 0 && setTimeout(B, 300)
    }
    $(".about-main-lazy").each(function () {
        F.push(!0), M++, E.push(this)
    }), smoothLoaded && setTimeout(B, e + 1e3), $("#job-btn").on("click", function () {
        $(this).toggleClass("team-item-active"), $("#job").toggleClass("show-job"), setTimeout(function () {
            var e = t.scrollWidth - t.clientWidth;
            isTouch ? $(t).animate({
                scrollLeft: e
            }, "slow") : (f.pos = e, f.max = e, f.update()), Scrollbars[0].update()
        }, 1e3)
    }), $(".email-link").each(function () {
        var e = $(this),
            t = e.attr("data-mail"),
            o = e.attr("data-mailinfo"),
            n = e.attr("data-subject");
        e.attr("href", "mailto:" + t + "@" + o + n)
    });
    var q, G = document.querySelectorAll(".team-item"),
        D = G.length,
        O = [],
        U = !1,
        Y = 0;
    isTouch && function e() {
        for (i = 0, O = []; i < D; i++)(q = (q = G[i].getBoundingClientRect()).left) > -.2 * winW && q < 1.2 * winW ? O.push(!0) : O.push(!1);
        for (i = 0; i < D; i++) O[i] && !U ? (U = !0, Y == i && G[i].classList.add("team-item-hover"), Y = i) : G[i].classList.remove("team-item-hover");
        U = !1, setTimeout(e, 1250)
    }()
}
var projectImgRatioArray = !1;

function setProjectSliderHeight(e) {
    e || (mainContainerSize = getMainContainerSize());
    var t = $("#slider .project-slide"),
        o = 3.5 * emUnit;
    winW <= 400 && (o = 3 * emUnit);
    var n = mainContainerSize.x - o - 10 * emUnit;
    winW <= 1100 && (n = mainContainerSize.x - o - 7 * emUnit), winW <= 700 && (n = mainContainerSize.x - o);
    var a = n / mainContainerSize.y,
        r = [];
    t.each(function () {
        var e = $(this).attr("data-ratio");
        a >= (e = parseFloat(e)) ? r.push(!1) : r.push(!0)
    });
    var s = 0;
    t.each(function () {
        var t = $(this);
        projectImgRatioArray[s] == r[s] && e || (r[s] ? t.addClass("land").removeClass("port") : t.addClass("port").removeClass("land")), s++, t.css("height", mainContainerSize.y)
    }), projectImgRatioArray = r
}

function setProjectBackBtnScreen() {
    return winW < 501 ? .3 * winW : winW < 701 ? .35 * winW : winW < 901 ? .4 * winW : winW < 1001 ? .35 * winW : winW < 1201 ? .25 * winW : .2 * winW
}
var projectBackBtnScreen = setProjectBackBtnScreen(),
    setProjectPageScrolMaxValu = function () {};

function projectPageTextSize() {
    $("#project-text").length && aboutPageTextSize("#project-text", "p");
    var e = 10 * emUnit;
    winW > 600 && (e *= 1.1), winW > 1e3 && (e *= 1.1), aboutPageTextSize("#project-list", "h3, dd, dt", e)
}

function projectPage() {
    var e, t, o, n = window.location.hash,
        a = 0,
        r = !1,
        s = !1; - 1 != n.indexOf("slide") && (r = !0, a = n.indexOf("-") + 1, a = parseInt(a = n.substring(a, n.length)), a -= 1), smoothLoaded ? setTimeout(projectPageTextSize, 100) : setTimeout(projectPageTextSize, 200);
    var l = $(".scrolbar > .gm-scroll-view")[0];
    isTouch && (l = $(".scrolbar")[0]), usingIE || isTouch ? enableScrolWheelForIE(l) : setTimeout(function () {
        R = new MagicScroll({
            target: l,
            speed: magicScrlSpeed,
            smooth: magicScrlSmooth,
            horizential: !0
        })
    }, 200);
    var c = 0;

    function d() {
        var e = !1,
            t = !1;
        $(l).scroll(function () {
            e = !0, setTimeout(function () {
                e && (e = !1)
            }, 500), e && !t && ($("body").addClass("scroling"), t = !0)
        }), setInterval(function () {
            !e && t && ($("body").removeClass("scroling"), t = !1)
        }, 500)
    }

    function u() {
        var e = $("#tmb"),
            t = e.parent(),
            o = e.find(".slick-current"),
            n = t.scrollTop(),
            a = o.offset().top,
            r = o.outerHeight();
        t.animate({
            scrollTop: n + a - mainContainerSize.top - mainContainerSize.y / 2 + r / 2
        }, 500)
    }
    scrolMax = 5e6, (setProjectPageScrolMaxValu = function () {
        if (isTouch) {
            var e = $("#slider-con").width();
            $(l).on("scroll", function (t) {
                c = l.scrollLeft, scrolMax = l.scrollWidth - e
            })
        } else Scrollbars[0].functionArterScrolCahnge = function (e, t, o, n) {
            c = e, scrolMax = o
        }
    })(), functionAfterIntroLoading = function () {
        if ($("#project-btn, #tmb-btn, #go-back-btn").removeClass("hidden"), $("#go-back-btn").addClass("header-button-enable"), setTimeout(function () {
                $("#project-btn, #tmb-btn").addClass("header-button-show")
            }, 3e3), r) {
            function e() {
                s ? ($("#slider-con, #tmb-con").removeClass("hid"), setTimeout(function () {
                    $("#slider-con, #tmb-con").removeClass("slider-intro")
                }, 50)) : setTimeout(e, 100)
            }
            setTimeout(e, 700)
        }
        setProjectPageScrolMaxValu(), setTimeout(setProjectPageScrolMaxValu, 1e3)
    }, smoothLoaded && setTimeout(function () {
        functionAfterIntroLoading()
    }, 250), projectBackBtnScreen = setProjectBackBtnScreen(), $("#slider").slick({
        slidesToShow: 1,
        arrows: !1,
        infinite: !0,
        speed: 500,
        lazyLoad: "ondemand",
        touchThreshold: 200,
        asNavFor: "#tmb",
        adaptiveHeight: !1,
        dots: !1,
        arrows: !0,
        draggable: !1,
        cssEase: "ease-in-out"
    }), $("#tmb").slick({
        asNavFor: "#slider",
        autoplay: !1,
        arrows: !1,
        dots: !1,
        slidesToShow: 200,
        slidesToScroll: 1,
        draggable: !1,
        infinite: !1,
        vertical: !0,
        verticalSwiping: !0,
        verticalScrolling: !0,
        centerMode: !1,
        centerPadding: "0px",
        swipe: !1,
        touchMove: !1,
        focusOnSelect: !0
    }), $("#slider").find(".project-slide").unwrap(), $("#slider-con, #tmb-con").addClass("hidden"), r || $("#slider-con, #tmb-con").removeClass("hid"), isThereAnyVideo && ($("#project-video-btn").unwrap(), videoProggressBarWidth = ($videoFooter = $("#videofooter")).width());
    var h = !0;
    $("#slider").on("beforeChange", function (e, t, o) {
        h = !1, setTimeout(u, 500), g(), setTimeout(function () {
            h = !0
        }, 1e3)
    });
    var f = !0;
    $("#slider").on("afterChange", function (e, t, o) {
        location.replace("#slide-" + (o + 1)), f = o, isThereAnyVideo && (1 == o ? ($("#slider-con").addClass("video-show"), showingVideoSlider = !0) : showingVideoSlider && ($("#slider-con").removeClass("video-show"), showingVideoSlider = !1))
    }), $("#slider").on("lazyLoaded", function (e, t, o, n) {
        projectPageScriptIsLoaded ? $(o).parent().parent().removeClass("lazy") : $(o).parent().removeClass("lazy")
    });
    var m = !1;

    function g() {
        m && ($("#slider .slick-current .zoomable").data("plugin_fluidbox").close(), m = !1)
    }

    function p() {
        m || ($("#slider .slick-current .zoomable").data("plugin_fluidbox").open(), m = !0)
    }! function e() {
        if (projectPageScriptIsLoaded) {
            var t;
            t = $("body"), $("#slider .zoomable").on("openstart.fluidbox", function () {
                    t.addClass("zoomTimeout"), setTimeout(function () {
                        t.addClass("zoom")
                    }, 50)
                }).on("closestart.fluidbox", function () {
                    t.removeClass("zoom"), t.addClass("zoomout")
                }).on("closeend.fluidbox", function () {
                    setTimeout(function () {
                        t.removeClass("zoomout")
                    }, 550), setTimeout(function () {
                        t.removeClass("zoomTimeout")
                    }, 1e3)
                }).fluidbox({
                    immediateOpen: !0,
                    viewportFill: 1
                }),
                function e() {
                    var t = !1,
                        o = !1;

                    function n() {
                        t = !1, o = !1
                    }
                    var a = document.getElementById("slider-con"),
                        r = new Hammer.Manager(a),
                        s = new Hammer.Pinch;
                    r.add(s), r.on("pinchin", function (e) {
                        o || (g(), t = !1, o = !0, setTimeout(n, 500))
                    }), r.on("pinchout", function (e) {
                        t || (p(), t = !0, o = !1, setTimeout(n, 500))
                    })
                }(), $("#slider .lazy img ").after('<div class="grid-loading" aria-hidden="true"><div class="ld" aria-hidden="true"><span class="ld-1"></span><span class="ld-2"></span><span class="ld-3"></span><span class="ld-4"></span><span class="ld-5"></span><span class="ld-6"></span><span class="ld-7"></span><span class="ld-8"></span><span class="ld-9"></span></div></div>')
        } else setTimeout(e, 200)
    }();
    var _ = !1,
        v = !1;

    function b(e, t, o) {
        t ? ($(e).removeClass("hidden"), $(o).slick("resize"), $(o)[0].slick.setPosition(), isTouch || Scrollbars[1].update(), setTimeout(function () {
            $(e).removeClass("slider-hid").addClass("slider-show"), "#tmb-con" == e && (v = !0)
        }, 1e3)) : ($(e).removeClass("slider-show").addClass("slider-hid"), setTimeout(function () {
            "#tmb-con" == e ? v = !1 : $(e).addClass("hidden")
        }, 1e3))
    }
    var w = !1,
        S = !0;

    function C() {
        W && P(!1), y(), projectGallaryMode || ($("#project-pic").addClass("project-pic-hide"), b("#slider-con", !0, "#slider"), w || (b("#tmb-con", !0, "#tmb"), w = !0), S && (setProjectSliderHeight(!1), S = !1), $("#project-article").addClass("project-article-hid"), projectGallaryMode = !0, setTimeout(function () {
            isThereAnyVideo && !_ && function e() {
                projectPageScriptIsLoaded ? ($("#video").videoPlayer(), _ = !0) : setTimeout(e, 200)
            }()
        }, 1050))
    }

    function x() {
        y(), projectGallaryMode && (b("#slider-con", !1), w && ($("#tmb")[0].slick.setPosition(), b("#tmb-con", !1), w = !1), $("#project-article").removeClass("project-article-hid"), $(l).scrollLeft(0), setTimeout(function () {
            Z(), $("#project-pic").removeClass("project-pic-hide"), G = !0
        }, 1e3), projectGallaryMode = !1, window.location.hash && location.replace("#"))
    }

    function y() {
        projectGallaryMode ? ($("#project-button-list-txt").attr("aria-hidden", "false"), $("#project-button-tmb-txt").attr("aria-hidden", "true"), setTimeout(function () {
            $("#project-btn").removeClass("project-btn-gallary-view")
        }, 500)) : ($("#project-button-list-txt").attr("aria-hidden", "true"), $("#project-button-tmb-txt").attr("aria-hidden", "false"), setTimeout(function () {
            $("#project-btn").addClass("project-btn-gallary-view")
        }, 500))
    }
    r && ($("#slider-con, #tmb-con").addClass("slider-intro"), C(), setTimeout(function () {
        $("#slider").slick("resize"), $("#tmb").slick("resize"), $("#slider")[0].slick.setPosition(), $("#tmb")[0].slick.setPosition(), setProjectSliderHeight(), $("#slider").slick("slickGoTo", a, !1)
    }, 1050), setTimeout(function () {
        H.addClass("inactive"), $("#project-article h1").addClass("no-backGround"), M = !1
    }, 200), setTimeout(function () {
        s = !0
    }, 1500));
    var k = !0,
        W = !1;

    function P(e) {
        (!e || !W) && (e || W) && ($(".header-button").addClass("header-button-transition-no-delay"), e ? ($("#project-btn, #tmb-btn").removeClass("header-button-show"), setTimeout(function () {
            $("#go-back-btn").addClass("header-button-show")
        }, 250), W = !0) : ($("#go-back-btn").removeClass("header-button-show"), setTimeout(function () {
            $("#project-btn, #tmb-btn").addClass("header-button-show")
        }, 250), W = !1), setTimeout(function () {
            $(".header-button").removeClass("header-button-transition-no-delay")
        }, 600))
    }
    var T = !0;
    $("#project-btn").on("click", function () {
        projectGallaryMode ? x() : (!E && (setProjectSliderHeight(), T && ($("#slider").slick("resize"), $("#tmb").slick("resize"), $("#slider")[0].slick.setPosition(), $("#tmb")[0].slick.setPosition())), C(), projectGallaryMode = !0), T && (T = !1)
    });
    var A = !1;

    function z() {
        $("#tmb-con").removeClass("tmb-con-visible"), $("#slider").removeClass("tmb-mob-is-visible"), A = !1
    }

    function j(e, t) {
        this.element = e, this.setTimeoutTime = t, this.animated = !1, this.showTextAnimIndex = 0, this.elementLength = this.element.length, this.showTextAnim = function () {
            this.itemm = this.element[this.showTextAnimIndex], this.itemm.classList.add("about-text-show"), this.showTextAnimIndex++, this.showTextAnimIndex == this.elementLength && (this.animated = !0), this.showTextAnimIndex < this.elementLength && window.setTimeout((function () {
                this.showTextAnim()
            }).bind(this), this.setTimeoutTime)
        }, this.showTextAnim()
    }
    $("#tmb-btn").on("click", function () {
        A ? z() : ($("#tmb-con").addClass("tmb-con-visible"), $("#slider").addClass("tmb-mob-is-visible"), A = !0)
    }), $("#tmb").on("click", function () {
        projectGallaryMode || C(), winW < 701 && z()
    }), $("#project-pic").click(function () {
        projectGallaryMode || C()
    }), $("#slider .zoomable").each(function () {
        $(this).parent().click(function (e) {
            e.preventDefault(), winW < 701 && isTouch ? m ? g() : $("#tmb-con").hasClass("tmb-con-visible") || $("#slider").slick("slickNext") : m ? g() : p()
        })
    }), $("#slider-mob-icons-next").click(function () {
        $("#slider").slick("slickNext")
    }), $("#slider-mob-icons-prev").click(function () {
        $("#slider").slick("slickPrev")
    }), $("#project-info-btn").click(function () {
        projectGallaryMode && x(), z()
    }), $("#project-article, #slider-con").click(function () {
        winW < 701 && z()
    }), isTouch || $("#slider-con")[0].addEventListener("wheel", function e() {
        var t = "slickPrev";
        event.deltaY > 0 && (t = "slickNext"), h && !m && winW > 700 && (0 == f && event.deltaY < 0 ? (x(), h = !1) : $("#slider").slick(t))
    });
    var R, I, L, M = !0,
        F = !1,
        E = !1,
        H = $("#guide-line"),
        B = $("#project-list"),
        q = B.find("h3, dd span, dt"),
        G = !0;
    if (isTehreAnyProjectText) var D = $("#project-text"),
        O = $("#project-text p");
    var U = document.querySelector("#project-pic"),
        Y = document.querySelector("#project-pic img");

    function Z() {
        c > 5 && M && (H.addClass("inactive"), $("#project-article h1").addClass("no-backGround"), M = !1);
        var e = B[0].getBoundingClientRect();
        if ((e = e.left) < 4 * winW / 5 && c > 10 && (E || (E = !0, I = new j(q, 80)), setProjectSliderHeight()), isTehreAnyProjectText) {
            var t = D[0].getBoundingClientRect();
            (t = t.left) < 4 * winW / 5 && c > 10 && !F && (F = !0, L = new j(O, 150))
        }
        winW > 700 ? c > e + (isTehreAnyProjectText ? winW / 3 : -(winW / 2 * 1)) ? w || (b("#tmb-con", !0, "#tmb"), w = !0) : w && !projectGallaryMode && (b("#tmb-con", !1), w = !1) : w || (b("#tmb-con", !0, "#tmb"), w = !0), G = !(U.getBoundingClientRect().right < winW / 6), isMobile || projectGallaryMode || (k && c > 10 && (k = !1), k || (c < projectBackBtnScreen ? P(!0) : P(!1))), projectGallaryMode || setTimeout(Z, 200)
    }
    setTimeout(Z, 400), $(l).on("scroll", function () {
        !projectGallaryMode && c > scrolMax - 10 && !(!1 == I.animated || isTehreAnyProjectText && !1 == L.animated) && (console.log("going to gallery mod by scroling"), C(), projectGallaryMode = !0, w && !v && b("#tmb-con", !0, "#tmb"), setTimeout(function () {
            h = !0
        }, 1500)), isMobile && (projectGallaryMode ? P(!1) : (c < projectBackBtnScreen ? P(!0) : P(!1), console.log(c), console.log(projectBackBtnScreen)))
    });
    var N = U.querySelector(".project-pic-RGB"),
        X = U.querySelector(".r"),
        V = U.querySelector(".g"),
        J = U.querySelector(".b"),
        K = 0,
        Q = 0,
        ee = 0,
        et = 0,
        eo = 0,
        en = 0,
        ei = null,
        ea = 0,
        er = "block" == getComputedStyle(N).display;
    usingIE || function n(a) {
        if (menuIsActive) {
            setTimeout(n, 1e3);
            return
        }
        er && winW > 700 ? (ei && (ea = a - ei), eo += (c - eo) * ea / 300, K = -2 * (en = c - eo) / 5, Q = 3 * en / 5, ee = 2 * en / 5, (et = 1 * en / 5) < 1 && et > -1 && (et = 0), ee < 1 && ee > -1 && (ee = 0), Q < 1 && Q > -1 && (Q = 0), K < 1 && K > -1 && (K = 0), G && (N.style.transform = "translate3d(" + K + "px,0,0)", J.style.transform = "translate3d(" + Q + "px,0,0)", X.style.transform = "translate3d(" + ee + "px,0,0)", V.style.transform = "translate3d(" + et + "px,0,0)")) : winW > 700 ? (t = ((e = (e = U.getBoundingClientRect()).left) - winW / 2) * parallexHorizontalZarib, e > -.2 * winW && e < 1.2 * winW && (Y.style.transform = "translate3d(" + -.15 * t + "px,0,0)")) : (t = (e = (e = U.getBoundingClientRect()).left) / winW * 100 - 50, t *= .75, o = -((e - winW / 2) * parallexHorizontalZarib * .25), e > -.6000000000000001 * winW && e < .7 * winW && (Y.style.transform = "translate3d(" + t + "%,0,0)translateX(" + o + "px)")), ei = a, requestAnimationFrame(n)
    }()
}

function equalizeContactItems() {
    var e = $(".contact-item"),
        t = 0;
    e.removeAttr("style"), e.each(function () {
        var e = $(this).height();
        e > t && (t = e)
    }), e.each(function () {
        $(this).css("height", t)
    })
}

function iosMapCon(e) {
    var t = window.innerWidth;
    t *= 1.1;
    var o = mainContainerSize.y;
    $("#map-container").css("width", t + "px").css("height", o + "px"), e || $("mapFrame").css("height", o + "px").css("width", t + "px");
    var n = document.getElementById("contact-container"),
        a = n.querySelectorAll(".title-box, .contact-section"),
        r = t;
    for (i = 0; i < a.length; i++) r += a[i].offsetWidth;
    $(n).css("width", r + "px"), $(n).css("height", o + "px"), e && $("#contact-con").css("display", "block")
}

function contactPage() {
    var e, t = $(".scrolbar > .gm-scroll-view")[0];
    isTouch && (t = $(".scrolbar")[0]), usingIE || isTouch ? enableScrolWheelForIE(t) : setTimeout(function () {
        e = new MagicScroll({
            target: t,
            speed: magicScrlSpeed,
            smooth: magicScrlSmooth,
            horizential: !0
        })
    }, 200);
    var o = 0,
        n = 0;

    function a() {
        if (!isTouch) {
            var o = t.scrollWidth - t.clientWidth;
            e.max = o, Scrollbars[0].update()
        }
    }
    isTouch || (Scrollbars[0].functionArterScrolCahnge = function (e, t, a, r) {
        o = e, n = a
    }), smoothLoaded || setInterval(a, 800), functionAfterIntroLoading = function () {
        setTimeout(function () {
            clearInterval(a)
        }, 1e3)
    }, equalizeContactItems(), $("#email-link").each(function () {
        var e = $(this),
            t = e.attr("data-mail"),
            o = e.attr("data-mailinfo");
        e.attr("href", "mailto:" + t + "@" + o)
    });
    var r = !1,
        s = $("#map-container"),
        l = 500,
        c = !1;
    isTouch && (l = 2500), window.setTimeout(function () {
        s.append(mapFrameSrc), r = $("#mapFrame"), iSiPAD && iosMapCon(!1), setTimeout(function () {
            c = !0
        }, 100)
    }, l);
    var d = $("#go-back"),
        u = !1;

    function h() {
        if (c) {
            if (isTouch) {
                var o = t.scrollWidth - t.clientWidth;
                $(t).animate({
                    scrollLeft: o
                }, "slow")
            } else e.pos = t.scrollWidth - t.clientWidth, e.update()
        } else setTimeout(h, 100)
    }
    $("title-box"), setTimeout(function () {
        d.addClass("header-button-enable"), d.on("click", function () {
            u && (d.removeClass("header-button-show"), s.addClass("no-pointer-events"), isTouch ? ($(t).animate({
                scrollLeft: 0
            }, 1e3), setTimeout(function () {
                $(t).scrollLeft(0), u = !1
            }, 1010)) : (e.pos = 0, e.update()), u = !1)
        })
    }, 3e3), $("#show-map-btn").on("click", h);
    var f = !0,
        m = $("#guide-line");
    setInterval(function () {
        isTouch && (o = t.scrollLeft, n = t.scrollWidth - t.clientWidth), o > 5 && f && (m.addClass("inactive"), f = !1), n - o < winW / 10 ? !u && c && (d.addClass("header-button-show"), s.removeClass("no-pointer-events"), u = !0, h()) : u && (d.removeClass("header-button-show"), s.addClass("no-pointer-events"), u = !1)
    }, 1e3);
    var g = document.querySelectorAll("#contact-con .contact-section"),
        p = document.querySelectorAll("#contact-con .contact-title"),
        _ = document.querySelectorAll("#contact-con .contact-text-section"),
        v = g.length;
    ! function e() {
        if (menuIsActive) {
            setTimeout(e, 1e3);
            return
        }
        var t = [];
        for (i = 0; i < v; i++) {
            var o = g[i].getBoundingClientRect();
            o = o.left, t.push(o)
        }
        for (i = 0; i < v; i++) {
            var n = t[i],
                a = (n - winW / 2) * 1.5;
            if (a *= .75, 1 == i && (a *= 1.2), n > -20 && n < 1.05 * winW) {
                var r = .4 * a,
                    s = .3 * a;
                a >= s && (r = .32 * a), r = Math.floor(r), s = Math.floor(s), p[i].style.transform = "translate3d(" + r + "px,0,0)", _[i].style.transform = "translate3d(" + s + "px,0,0)"
            }
        }
        setTimeout(e, 100)
    }(), iSiPAD && iosMapCon(!0)
}

function awardsPage() {
    var e, t = $(".scrolbar > .gm-scroll-view")[0];

    function o() {
        if (!isTouch) {
            var o = t.scrollWidth - t.clientWidth;
            e.max = o, Scrollbars[0].update()
        }
    }
    isTouch && (t = $(".scrolbar")[0]), usingIE ? enableScrolWheelForIE(t) : setTimeout(function () {
        e = new MagicScroll({
            target: t,
            speed: magicScrlSpeed,
            smooth: magicScrlSmooth,
            horizential: !0
        })
    }, 200), smoothLoaded || setInterval(o, 800);
    var n = document.querySelectorAll(".award-sec"),
        a = document.querySelectorAll(".award-text"),
        r = document.querySelectorAll(".award-img"),
        s = n.length;

    function l() {
        $("#scrolHider").addClass("show")
    }! function e() {
        if (menuIsActive) {
            setTimeout(e, 1e3);
            return
        }
        var t = [];
        for (i = 0; i < s; i++) {
            var o = n[i].getBoundingClientRect();
            o = o.left, t.push(o)
        }
        for (i = 0; i < s; i++) {
            var l = t[i],
                c = (l - winW / 2) * parallexHorizontalZarib;
            l > -10 && l < winW && (a[i].style.transform = "translate3d(" + .07 * c + "px,0,0)", r[i].style.transform = "translate3d(" + .05 * c + "px,0,0)")
        }
        requestAnimationFrame(e)
    }();
    var c = $(".award-line, .award-sec"),
        d = 0;

    function u() {
        d >= c.length || (c[d].classList.add("award-show"), d++, setTimeout(u, 500))
    }
    functionAfterIntroLoading = function () {
        setTimeout(u, 1500), setTimeout(function () {
            clearInterval(o)
        }, 1e3), setTimeout(l, 1e3)
    }, smoothLoaded && (setTimeout(u, 2e3), setTimeout(l, 2e3))
}

function errorrPage() {
    var e = new Vivus($("#error-svg")[0], {
        duration: 800,
        type: "oneByOne"
    });
    e.stop().reset(), ! function t() {
        $("body").hasClass("smooth-load") || $("body").hasClass("intro-loading") ? setTimeout(t, 300) : (notlogoRotate = !1, menuIsActive = !0, $("body").addClass("menu-show"), setTimeout(function () {
            e.play(1.25)
        }, 2e3))
    }()
}

function resizeEnded() {
    resizing = !1, $("body").removeClass("resizing"), "contact" == pageClass ? (equalizeContactItems(), iSiPAD && iosMapCon(!1)) : "works" == pageClass && (setGridItemsWidth(), setTimeout(function () {
        isotopScriptIsloaded && isotopWorkPageGripd.isotope("layout")
    }, 200), setTimeout(updateWorkGridScrolBar, 500)), "project" == pageClass && (setProjectPageScrolMaxValu(), setProjectSliderHeight(!0))
}

function resize(e) {
    deviceSize(), isdeviceMediaChanged = isMediaChanged(), generateCssVarinbles(), clearTimeout(doAfterResize), doAfterResize = setTimeout(resizeEnded, 200), !0 === e || resizing || $("body").addClass("resizing"), resizing = !0, responsiveMenuSlider(), mainContainerSize = getMainContainerSize(), "about" == pageClass && aboutPageTextSize("#about-text", "p"), "works" == pageClass && setProjectParallexRatio(), "project" == pageClass && (isTouch || (Scrollbars[0].update(), Scrollbars[1].update()), projectBackBtnScreen = setProjectBackBtnScreen())
}

function pagesFunctions() {
    "home" == pageClass ? homePage() : "works" == pageClass ? workPage() : "project" == pageClass ? projectPage() : "contact" == pageClass ? contactPage() : "awards" == pageClass ? awardsPage() : "about" == pageClass ? aboutPage() : "errorr" == pageClass && errorrPage()
}

function functionsAfterSmoothLoad() {
    checkIsotopScriptLoaded() ? (pageCommon(), notlogoRotate = !0, pagesFunctions(), $("body").removeClass("loading"), setTimeout(function () {
        checkbodyHasAPageClass() && mainMenu(!1), $("body").removeClass("smooth-load")
    }, 125), setTimeout(function () {
        menuIsActive = !1, $("body").removeClass("smooth-started")
    }, 2e3)) : setTimeout(functionsAfterSmoothLoad, 200)
}

function setupSmoothState() {
    "use strict";
    smoothState = $("#smooth-con").smoothState({
        prefetch: !1,
        scroll: !1,
        anchors: ".smoooth",
        blacklist: "no-smooth",
        onStart: {
            duration: 3e3,
            render: function (e) {
                smoothLoaded = !0, notlogoRotate = !0, menuIsActive || mainMenu(!1), $("body").addClass("smooth-load smooth-started"), (usingIE || usingFF) && $("#logo span").removeAttr("style"), setTimeout(function () {
                    $("body").addClass("loading")
                }, 1e3), $("#logo").addClass("logo-anim-reset").removeAttr("style")
            }
        },
        onReady: {
            duration: 0,
            render: function (e, t) {
                e.html(t), functionsAfterSmoothLoad()
            }
        }
    }).data("smoothState")
}
$(window).resize(resize), window.addEventListener("orientationchange", resize), $(document).ready(function () {
    function e() {
        checkIsotopScriptLoaded() && ($("body").removeClass("intro-loading"), functionAfterIntroLoading())
    }
    usingIE && ($("#old-browser").show(), $("#old-browser div").click(function () {
        $("#old-browser").slideUp()
    })), responsiveMenuSlider(), pageCommon(), pagesFunctions(), setupSmoothState();
    var t = document.querySelector(".noise");

    function o() {
        return "block" == getComputedStyle(t).display
    }

    function n() {
        if ("complete" !== document.readyState) return setTimeout(n, 100), !1;
        introLoading && o() ? e() : setTimeout(n, 100)
    }
    var a = !1;
    window.addEventListener("load", function () {
        setTimeout(function () {
            a = !0, introLoading && o() ? e() : n()
        }, 10)
    }), setTimeout(function () {
        !a && o() && n()
    }, 1e3), bypassEntranceAnimation && e(), logoRotation();
    var r = !1;
    $("#footer-share").click(function () {
        r || ($("#share").css("z-index", "10000").addClass("active"), $("#share a").attr("tabindex", "1"), r = !0)
    }), $("#share-close").click(function () {
        r && ($("#share").removeClass("active"), $("#share a").attr("tabindex", "-1"), r = !1, setTimeout(function () {
            $("#share").css("z-index", "-1")
        }, 1e3))
    });
    var s = !1;
    $("#menu-btn").on("click", function () {
        mainMenu(!0), s = !0, setTimeout(function () {
            s = !1
        }, 1e3)
    }), $("#menu-closer").on("click", function () {
        menuIsActive && !s && mainMenu(!0)
    }), $("#menu-go").on("click", function () {
        var e = $(document.querySelectorAll("#nav a")[navMenuNumToGo - 1]).attr("href");
        menuIsActive && (navMenuNumToGo != menuToShow ? smoothState.load(e) : s || mainMenu(!0))
    }), swipedetect($("#menu-go")[0], function (e) {
        "right" == e && navMenuSlided && $("#nav").slick("slickPrev"), "left" == e && navMenuSlided && $("#nav").slick("slickNext"), navMenuSlided && randomRrotateLogo()
    }, !1), $("#nav a").each(function (e) {
        $(this).mouseenter(function () {
            winW >= 610 && changeLogo(e + 1)
        })
    }), $("nav a, #project-go-back").each(function () {
        var e = $(this),
            t = e.attr("data-nav"),
            o = e.attr("href");
        e.on("click", function (e) {
            e.preventDefault(), "works" == pageClass && "projects" == t ? mainMenu(!0) : pageClass != t ? smoothState.load(o) : menuIsActive && mainMenu(!0)
        })
    }), $("#share-fb").on("click", function () {
        return window.open("https://www.facebook.com/sharer/sharer.php?u=" + thePageURL + "&quote=" + thePageURL), !1
    }), $("#share-tweet").on("click", function () {
        return window.open("https://twitter.com/intent/tweet?text=" + thePageTitle + ":%20" + thePageURL), !1
    }), $("#share-lkdin").on("click", function () {
        return window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + thePageURL + "&title=" + thePageTitle), !1
    }), $("#share-mail").on("click", function () {
        return window.open("mailto:?subject=" + thePageTitle + "&body=" + thePageURL), !1
    }), $("#share-whatsapp").on("click", function () {
        return window.open("https://api.whatsapp.com/send?text=" + thePageTitle + "%20" + thePageURL), !1
    }), $("#share-telegram").on("click", function () {
        return window.open("https://t.me/share/url?url=" + thePageURL + "&text=" + thePageTitle), !1
    }), $("body").dblclick(function (e) {
        var t = e.clientX,
            o = e.clientY;
        (t < mainContainerSize.top || t > mainContainerSize.rightEnd || o > mainContainerSize.btnEnd || o < mainContainerSize.left) && toggleFullscreen()
    })
});
