/*! Hammer.JS - v2.0.8 - 2016-04-23

* http://hammerjs.github.io/
*
* Copyright (c) 2016 Jorik Tangelder;
* Licensed under the MIT license


*/
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
/*

these script is required by zoom (fluidbox) script : 

jQuery throttle / debounce - v1.1 - 3/7/2010
http://benalman.com/projects/jquery-throttle-debounce-plugin/


*/
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/*


zoom 

https://raw.githubusercontent.com/terrymun/Fluidbox/master/dist/js/jquery.fluidbox.min.js



*/
!function(e,t,i,n){"use strict";var s=e(t),o=e(i),a="fluidbox",r={immediateOpen:!1,loader:!1,maxWidth:0,maxHeight:0,resizeThrottle:500,stackIndex:1e3,stackIndexDelta:10,viewportFill:.95},d={},l=0;"undefined"!=typeof console&&"undefined"!==console.warn||(console={},console.warn=function(){}),e.isFunction(e.throttle)||console.warn("Fluidbox: The jQuery debounce/throttle plugin is not found/loaded. Even though Fluidbox works without it, the window resize event will fire extremely rapidly in browsers, resulting in significant degradation in performance upon viewport resize.");var c=function(){var e,t=i.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}();function f(t,i){this.element=t;var n={};e.each(e(this.element).data(),function(e,t){var i,s=(i=e.replace("fluidbox",""))&&i[0].toLowerCase()+i.slice(1);""===s&&null===s||("false"==t?t=!1:"true"==t&&(t=!0),n[s]=t)}),this.settings=e.extend({},r,i,n),this.settings.viewportFill=Math.max(Math.min(parseFloat(this.settings.viewportFill),1),0),this.settings.stackIndex<this.settings.stackIndexDelta&&(settings.stackIndexDelta=settings.stackIndex),this._name=a,this.init()}var u={dom:function(){var t=e("<div />",{class:"fluidbox__wrap",css:{zIndex:this.settings.stackIndex-this.settings.stackIndexDelta}});if(e(this.element).addClass("fluidbox--closed").wrapInner(t).find("img").first().css({opacity:1}).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'),this.settings.loader){var i=e("<div />",{class:"fluidbox__loader",css:{zIndex:2}});e(this.element).find(".fluidbox__wrap").append(i)}},prepareFb:function(){var t=e(this.element);t.trigger("thumbloaddone.fluidbox"),u.measure.fbElements.call(this),this.bindEvents(),t.addClass("fluidbox--ready"),this.bindListeners(),t.trigger("ready.fluidbox")},measure:{viewport:function(){d.viewport={w:s.width(),h:s.height()}},fbElements:function(){var t=e(this.element),i=t.find("img").first(),n=t.find(".fluidbox__ghost"),s=t.find(".fluidbox__wrap");this.instanceData.thumb={natW:i[0].naturalWidth,natH:i[0].naturalHeight,w:i.width(),h:i.height()},n.css({width:i.width(),height:i.height(),top:i.offset().top-s.offset().top+parseInt(i.css("borderTopWidth"))+parseInt(i.css("paddingTop")),left:i.offset().left-s.offset().left+parseInt(i.css("borderLeftWidth"))+parseInt(i.css("paddingLeft"))})}},checkURL:function(e){var t=0;return/[\s+]/g.test(e)?(console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."),t=1):/[\"\'\(\)]/g.test(e)&&(console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."),t=0),t},formatURL:function(e){return e.replace(/"/g,"%22").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")}};e.extend(f.prototype,{init:function(){var t=this,i=e(this.element),n=i.find("img").first();if(u.measure.viewport(),(!t.instanceData||!t.instanceData.initialized)&&i.is("a")&&1===i.children().length&&(i.children().is("img")||i.children().is("picture")&&1===i.find("img").length)&&"none"!==i.css("display")&&"none"!==i.children().css("display")&&"none"!==i.parents().css("display")){i.removeClass("fluidbox--destroyed"),t.instanceData={},t.instanceData.initialized=!0,t.instanceData.originalNode=i.html(),l+=1,t.instanceData.id=l,i.addClass("fluidbox__instance-"+l),i.addClass("fluidbox--initialized"),u.dom.call(t),i.trigger("init.fluidbox");var s=new Image;n.width()>0&&n.height()>0?u.prepareFb.call(t):(s.onload=function(){u.prepareFb.call(t)},s.onerror=function(){i.trigger("thumbloadfail.fluidbox")},s.src=n.attr("src"))}},open:function(){var t=this,i=e(this.element),n=i.find("img").first(),s=i.find(".fluidbox__ghost"),o=i.find(".fluidbox__wrap");t.instanceData.state=1,s.off(c),e(".fluidbox--opened").fluidbox("close");var a,r=e("<div />",{class:"fluidbox__overlay",css:{zIndex:-1}});if(o.append(r),i.removeClass("fluidbox--closed").addClass("fluidbox--loading"),u.checkURL(n.attr("src")))return t.close(),!1;s.css({"background-image":"url("+u.formatURL(n.attr("src"))+")",opacity:1}),u.measure.fbElements.call(t),t.settings.immediateOpen?(i.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex:t.settings.stackIndex+t.settings.stackIndexDelta}),i.trigger("openstart.fluidbox"),t.compute(),n.css({opacity:0}),e(".fluidbox__overlay").css({opacity:1}),s.one(c,function(){i.trigger("openend.fluidbox")}),(a=new Image).onload=function(){if(i.trigger("imageloaddone.fluidbox"),1===t.instanceData.state){if(t.instanceData.thumb.natW=a.naturalWidth,t.instanceData.thumb.natH=a.naturalHeight,i.removeClass("fluidbox--loading"),u.checkURL(a.src))return t.close({error:!0}),!1;s.css({"background-image":"url("+u.formatURL(a.src)+")"}),t.compute()}},a.onerror=function(){t.close({error:!0}),i.trigger("imageloadfail.fluidbox"),i.trigger("delayedloadfail.fluidbox")},a.src=i.attr("href")):((a=new Image).onload=function(){if(i.trigger("imageloaddone.fluidbox"),i.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex:t.settings.stackIndex+t.settings.stackIndexDelta}),i.trigger("openstart.fluidbox"),u.checkURL(a.src))return t.close({error:!0}),!1;s.css({"background-image":"url("+u.formatURL(a.src)+")"}),t.instanceData.thumb.natW=a.naturalWidth,t.instanceData.thumb.natH=a.naturalHeight,t.compute(),n.css({opacity:0}),e(".fluidbox__overlay").css({opacity:1}),s.one(c,function(){i.trigger("openend.fluidbox")})},a.onerror=function(){t.close({error:!0}),i.trigger("imageloadfail.fluidbox")},a.src=i.attr("href"))},compute:function(){var t,i,n,o=this,a=e(this.element),r=a.find("img").first(),l=a.find(".fluidbox__ghost"),c=a.find(".fluidbox__wrap"),f=o.instanceData.thumb.natW,u=o.instanceData.thumb.natH,p=o.instanceData.thumb.w,h=o.instanceData.thumb.h,g=f/u,b=d.viewport.w/d.viewport.h;o.settings.maxWidth>0?u=(f=o.settings.maxWidth)/g:o.settings.maxHeight>0&&(f=(u=o.settings.maxHeight)*g),b>g?(i=f*(h*(t=(u<d.viewport.h?u:d.viewport.h*o.settings.viewportFill)/h)/u)/p,n=t):(t=u*(p*(i=(f<d.viewport.w?f:d.viewport.w*o.settings.viewportFill)/p)/f)/h,n=i),o.settings.maxWidth&&o.settings.maxHeight&&console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");var x=1;b>g?u<d.viewport.h*o.settings.viewportFill&&(x=d.viewport.h/u):f<d.viewport.w*o.settings.viewportFill&&(x=d.viewport.w/f);var m=s.scrollTop()-r.offset().top+h*(n-1)*.5+.5*(s.height()-h*n),v=p*(n-1)*.5+.5*(s.width()-p*n)-r.offset().left,w=parseInt(100*i)/100*x+","+parseInt(100*t)/100*x;l.css({transform:"translate("+parseInt(100*v)/100+"px,"+parseInt(100*m)/100+"px) scale("+w+")",top:r.offset().top-c.offset().top,left:r.offset().left-c.offset().left}),a.find(".fluidbox__loader").css({transform:"translate("+parseInt(100*v)/100+"px,"+parseInt(100*m)/100+"px) scale("+w+")"}),a.trigger("computeend.fluidbox")},recompute:function(){this.compute()},close:function(t){var i=this,n=e(this.element),s=n.find("img").first(),o=n.find(".fluidbox__ghost"),a=n.find(".fluidbox__wrap"),r=n.find(".fluidbox__overlay"),d=e.extend(null,{error:!1},t);if(null===i.instanceData.state||void 0===i.instanceData.state||0===i.instanceData.state)return!1;i.instanceData.state=0,n.trigger("closestart.fluidbox"),n.removeClass(function(e,t){return(t.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g)||[]).join(" ")}).addClass("fluidbox--closed"),o.css({transform:"translate(0,0) scale(1,1)",top:s.offset().top-a.offset().top+parseInt(s.css("borderTopWidth"))+parseInt(s.css("paddingTop")),left:s.offset().left-a.offset().left+parseInt(s.css("borderLeftWidth"))+parseInt(s.css("paddingLeft"))}),n.find(".fluidbox__loader").css({transform:"none"}),o.one(c,function(){o.css({opacity:0}),s.css({opacity:1}),r.remove(),a.css({zIndex:i.settings.stackIndex-i.settings.stackIndexDelta}),n.trigger("closeend.fluidbox")}),d.error&&o.trigger("transitionend"),r.css({opacity:0})},bindEvents:function(){var t=this;e(this.element).on("click.fluidbox",function(e){e.preventDefault(),e.stopPropagation(),t.instanceData.state&&0!==t.instanceData.state?t.close():t.open()}),o.on("keydown",function(e){27===e.keyCode&&t.close()})},bindListeners:function(){var t=this,i=e(this.element),n=function(){u.measure.viewport(),u.measure.fbElements.call(t),i.hasClass("fluidbox--opened")&&t.compute()};e.isFunction(e.throttle)?s.on("resize.fluidbox"+t.instanceData.id,e.throttle(t.settings.resizeThrottle,n)):s.on("resize.fluidbox"+t.instanceData.id,n),i.on("reposition.fluidbox",function(){t.reposition()}),i.on("recompute.fluidbox, compute.fluidbox",function(){t.compute()}),i.on("destroy.fluidbox",function(){t.destroy()}),i.on("close.fluidbox",function(){t.close()})},unbind:function(){e(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"),s.off("resize.fluidbox"+this.instanceData.id)},reposition:function(){u.measure.fbElements.call(this)},destroy:function(){var t=this.instanceData.originalNode;this.unbind(),e.data(this.element,"plugin_"+a,null),e(this.element).removeClass(function(e,t){return(t.match(/(^|\s)fluidbox[--|__]\S+/g)||[]).join(" ")}).empty().html(t).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")},getMetadata:function(){return this.instanceData}}),e.fn[a]=function(t){var i,n=arguments;return void 0===t||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+a)||e.data(this,"plugin_"+a,new f(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var s=e.data(this,"plugin_"+a);s instanceof f&&"function"==typeof s[t]?i=s[t].apply(s,Array.prototype.slice.call(n,1)):console.warn('Fluidbox: The method "'+t+'" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')}),void 0!==i?i:this):this}}(jQuery,window,document);
/*


video player


*/
!function(e){e.fn.videoPlayer=function(s){var r={videoClass:"video"};return s&&e.extend(r,s),this.each(function(){var s,n=e(this),o=r,t=n.parent("."+o.videoClass),a=e(this)[0],i=a.duration,d=!1,u=!1,l=!1,f=0,p=0,c=e("#videofooter"),m=c.width(),v=function(){var s=a.buffered;if(c.find("[class^=buffered]").remove(),s.length>0)for(var r=s.length;r--;){$maxBuffer=s.end(r),$minBuffer=s.start(r);var n=$minBuffer/i*100,o=($maxBuffer-$minBuffer)/i*100;e('<div class="buffered"></div>').css({left:n+"%",width:o+"%"}).appendTo(c.find(".progress"))}};v();var g=function(e){Math.round(m*i);var s=a.currentTime,r=0,n=Math.floor(s/60),o=Math.floor(i/60),t=Math.round(i-60*o);s&&(r=Math.round(s)-60*n)>59&&60==(r=Math.round(s)-60*n)&&(n=Math.round(s/60),r=0),p=s/i*m,r<10&&(r="0"+r),t<10&&(t="0"+t),1!=e&&(c.find(".progress-bar").css({width:p+"px"}),c.find(".progress-button").css({left:p-c.find(".progress-button").width()+"px"})),c.find(".ctime").html(n+":"+r),c.find(".ttime").html(o+":"+t),a.currentTime>0&&0==a.paused&&0==a.ended&&v()};g(),a.addEventListener("timeupdate",g);var h=!0;t.find(".play-pause").bind("click",function(){h&&t.addClass("video-is-played"),h=!1,e(".video-poster").fadeOut("slow"),0==(u=!(a.currentTime>0&&0==a.paused&&0==a.ended))?(a.pause(),t.find(".play-pause").addClass("play").removeClass("pause"),v()):(l=!0,a.play(),t.find(".play-pause").addClass("pause").removeClass("play"))}),c.find(".progress").bind("mousedown",function(e){d=!0,1==u&&a.pause(),f=e.pageX-c.find(".progress").offset().left,s=f/m*i,a.currentTime=s}),e("#slider-con").bind("mousemove",function(e){if(projectGallaryMode&&showingVideoSlider&&(1==l&&t.hover(function(){t.find(".player").addClass("player-hover")},function(){t.find(".player").removeClass("player-hover")}),1==d)){$draggingProgress=!0;var r=0,n=c.find(".progress-button").width();f=e.pageX-c.find(".progress").offset().left,1==u&&s<i&&t.find(".play-pause").addClass("pause").removeClass("play"),f<0?(r=0,a.currentTime=0):f>m?(a.currentTime=i,r=m):(r=f,s=f/m*i,a.currentTime=s),c.find(".progress-bar").css({width:r+"px"}),c.find(".progress-button").css({left:r-n+"px"})}}),a.addEventListener("ended",function(){u=!1,0==$draggingProgress&&t.find(".play-pause").addClass("play").removeClass("pause")}),e("#slider-con").bind("mouseup",function(e){projectGallaryMode&&showingVideoSlider&&(d=!1,!1,$draggingProgress=!1,1==u&&a.play(),v())}),a.requestFullscreen||a.mozRequestFullScreen||a.webkitRequestFullScreen||e("#fullscreen").hide(),e("#fullscreen").click(function(){var s=e("body");s.addClass("zoomTimeout"),setTimeout(function(){s.addClass("zoom")},50),setTimeout(function(){a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullScreen&&a.webkitRequestFullScreen(),1==u&&e(".play-pause").addClass("pause").removeClass("play")},500),setTimeout(function(){s.removeClass("zoom"),s.addClass("zoomout"),setTimeout(function(){s.removeClass("zoomout")},550),setTimeout(function(){s.removeClass("zoomTimeout")},1e3)},1e3)}),e(window).resize(function(){v(),g()})})}}(jQuery);
/*



*/
projectPageScriptIsLoaded = true;