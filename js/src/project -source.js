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
;(function ( $, window, document, undefined ) {
	// the semi-colon before function invocation is a safety net against concatenated
	// scripts and/or other plugins which may not be closed properly.
	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var $w			= $(window),
			$d			= $(document),
			pluginName	= "fluidbox",
			defaults	= {
				immediateOpen: false,
				loader: false,
				maxWidth: 0,
				maxHeight: 0,
				resizeThrottle: 500,
				stackIndex: 1000,
				stackIndexDelta: 10,
				viewportFill: 0.95,
			},
			globalData = {},
			keyboardEvents = ['keyup', 'keydown', 'keypress'];

		// Global plugin instance tracker
		var fbInstance = 0;

                // Check the availability of the console object. This ensures compatibility with IE8.
                if(typeof console === "undefined" || console.warn === "undefined" ) {
                    console = {};
                    console.warn = function(){};
                }

		// Check if dependencies are loaded
		// 1. Ben Almen's debounce/throttle plugin
		if (!$.isFunction($.throttle)) {
			console.warn('Fluidbox: The jQuery debounce/throttle plugin is not found/loaded. Even though Fluidbox works without it, the window resize event will fire extremely rapidly in browsers, resulting in significant degradation in performance upon viewport resize.');
		}

		// ------------------------------------------------------------------------ //
		// Dependency: David Walsh (http://davidwalsh.name/css-animation-callback)                                         
		// and                                                                                                 
		// Jonathan Suh (https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/)  //
		// ------------------------------------------------------------------------ //
		var whichTransitionEvent = function() {
			var t,
				el = document.createElement("fakeelement");

			var transitions = {
				"transition"      : "transitionend",
				"OTransition"     : "oTransitionEnd",
				"MozTransition"   : "transitionend",
				"WebkitTransition": "webkitTransitionEnd"
			};

			for (t in transitions){
				if (el.style[t] !== undefined){
					return transitions[t];
				}
			}
		};
		var customTransitionEnd = whichTransitionEvent();

		// The actual plugin constructor
		function Plugin (element, options) {
			// Assign element
			this.element = element;

			// Manipulate HTML5 dataset object
			// -  Format: data-fluidbox-(setting-name). When converted into camel case: fluidboxSettingName
			// - So, we will have to remove 'fluidbox' in the front, and change the first letter to lowercase
			var elementData = {};
			$.each($(this.element).data(), function(k,v) {
				var capitalize = function(s) {
						return s && s[0].toLowerCase() + s.slice(1);
					},
					key = capitalize(k.replace('fluidbox',''));

				// Only push non-empty keys (that are part of the Fluidbox HTML5 data- attributes) into new object
				if(key !== '' || key !== null) {
					// Coerce boolean values
					if (v == 'false') {
						v = false;
					} else if (v == 'true') {
						v = true;
					}
					elementData[key] = v;
				}
			});
			
			// Merge defaults into options, into dataset
			this.settings = $.extend( {}, defaults, options, elementData);

			// Coerce settings
			this.settings.viewportFill = Math.max(Math.min(parseFloat(this.settings.viewportFill), 1), 0);
			if(this.settings.stackIndex < this.settings.stackIndexDelta) {
				settings.stackIndexDelta = settings.stackIndex;
			}

			// Store plugin name
			this._name = pluginName;

			// Initialize
			this.init();
		}

		// Private functions
		var _fun = {
			dom: function() {
				// Wrap and add ghost element
				var $fb_innerWrap = $('<div />', {
					'class': 'fluidbox__wrap',
					css: {
						zIndex: this.settings.stackIndex - this.settings.stackIndexDelta
					}
				});
				$(this.element)
				.addClass('fluidbox--closed')
				.wrapInner($fb_innerWrap)
				.find('img')
					.first()
					.css({ opacity: 1})
					.addClass('fluidbox__thumb')
					.after('<div class="fluidbox__ghost" />');

				// Append loader
				if(this.settings.loader) {
					var $fbLoader = $('<div />', {
						'class': 'fluidbox__loader',
						css: {
							zIndex: 2
						}
					});
					$(this.element).find('.fluidbox__wrap').append($fbLoader);
				}
			},
			prepareFb: function() {
				var fb	= this,
					$fb	= $(this.element);

				// Thumbnail is successfully loaded, fire event
				$fb.trigger('thumbloaddone.fluidbox');

				// Get basic measurements and to resize the ghost element
				_fun.measure.fbElements.call(this);

				// Bind events
				fb.bindEvents();

				// Status: Fluidbox is ready to use
				$fb.addClass('fluidbox--ready');

				// Bind listeners
				fb.bindListeners();

				// Emit custom event
				$fb.trigger('ready.fluidbox');
			},
			measure: {
				viewport: function() {
					globalData.viewport = {
						w: $w.width(),
						h: $w.height()
					};
				},
				fbElements: function() {
					var fb			= this,
						$fb			= $(this.element),
						$fbThumb	= $fb.find('img').first(),
						$fbGhost	= $fb.find('.fluidbox__ghost'),
						$fbWrap		= $fb.find('.fluidbox__wrap');

					// Store image dimensions in instance data
					fb.instanceData.thumb = {
						natW:	$fbThumb[0].naturalWidth,
						natH:	$fbThumb[0].naturalHeight,
						w:		$fbThumb.width(),
						h:		$fbThumb.height()
					};

					// Set ghost dimensions
					$fbGhost
					.css({
						width: $fbThumb.width(),
						height: $fbThumb.height(),
						top: $fbThumb.offset().top - $fbWrap.offset().top + parseInt($fbThumb.css('borderTopWidth')) + parseInt($fbThumb.css('paddingTop')),
						left: $fbThumb.offset().left - $fbWrap.offset().left + parseInt($fbThumb.css('borderLeftWidth')) + parseInt($fbThumb.css('paddingLeft'))
					});
				}
			},
			checkURL: function(url) {
				var exitCode = 0;

				if(/[\s+]/g.test(url)) {
					console.warn('Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation.');
					exitCode = 1;
				} else if(/[\"\'\(\)]/g.test(url)) {
					console.warn('Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation.');
					exitCode = 0;
				}
				return exitCode;
			},
			formatURL: function(url) {
				return url
					.replace(/"/g, '%22')
					.replace(/'/g, '%27')
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29');
			}
		};

		// Public functions
		$.extend(Plugin.prototype, {
			init: function () {
			
				// Define elements
				var fb				= this,
					$fb				= $(this.element),
					$fbThumb		= $fb.find('img').first();

				// Get basic measurements
				_fun.measure.viewport();

				// Only perform initialization when
				// - It is not yet initialized
				// + DOM checks are satisfied:
				// +-- An anchor element is selected
				// +-- Contains one and only one child
				// +-- The only child is an image element OR a picture element
				// +-- The element must not be hidden (itself or its parents)
				if(
					(!fb.instanceData || !fb.instanceData.initialized) &&
					(
						$fb.is('a') &&
						$fb.children().length === 1 &&
						(
							$fb.children().is('img') || (
								$fb.children().is('picture') &&
								$fb.find('img').length === 1
							)
						) &&
						$fb.css('display') !== 'none' &&
						$fb.children().css('display') !== 'none' &&
						$fb.parents().css('display') !== 'none'
					)
				) {

					// Initialize and store original node
					$fb.removeClass('fluidbox--destroyed');
					fb.instanceData = {};
					fb.instanceData.initialized = true;
					fb.instanceData.originalNode = $fb.html();

					// Append instance ID
					fbInstance += 1;
					fb.instanceData.id = fbInstance;
					$fb.addClass('fluidbox__instance-'+fbInstance);

					// Status: Fluidbox has been initialized
					$fb.addClass('fluidbox--initialized');

					// DOM replacement
					_fun.dom.call(fb);

					// Emit custom event
					$fb.trigger('init.fluidbox');

					// Wait for image to load, but only if image is not found in cache
					var img = new Image();
					if($fbThumb.width() > 0 && $fbThumb.height() > 0) {
						// Thumbnail loaded from cache, let's prepare fluidbox
						_fun.prepareFb.call(fb);
					} else {
						img.onload = function() {
							// Thumbnail loaded, let's prepare fluidbox
							_fun.prepareFb.call(fb);
						};
						img.onerror = function() {
							// Trigger custom error event
							$fb.trigger('thumbloadfail.fluidbox');
						};
						img.src = $fbThumb.attr('src');
					}
				}

			},
			open: function() {
				
				// Open Fluidbox
				var fb			= this,
					$fb			= $(this.element),
					$fbThumb	= $fb.find('img').first(),
					$fbGhost	= $fb.find('.fluidbox__ghost'),
					$fbWrap		= $fb.find('.fluidbox__wrap');

				// Update state
				fb.instanceData.state = 1;

				// Forcibly turn off transition end detection,
				// otherwise users will get choppy transition if toggling between states rapidly
				$fbGhost.off(customTransitionEnd);

				// Close all other Fluidbox instances
				$('.fluidbox--opened').fluidbox('close');

				// Append overlay
				var $fbOverlay = $('<div />', {
					'class': 'fluidbox__overlay',
					css: {
						zIndex: -1
					}
				});
				$fbWrap.append($fbOverlay);

				// Add class to indicate larger image being loaded
				$fb
				.removeClass('fluidbox--closed')
				.addClass('fluidbox--loading');

				// Check of URL is properly formatted
				if(_fun.checkURL($fbThumb.attr('src'))) {
					fb.close();
					return false;
				}

				// Set thumbnail image source as background image first, worry later
				$fbGhost.css({
					'background-image': 'url(' + _fun.formatURL($fbThumb.attr('src')) + ')',
					opacity: 1
				});

				// Set dimensions for ghost
				_fun.measure.fbElements.call(fb);

				// Wait for ghost image to preload
				var img;
				if (fb.settings.immediateOpen) {
					// Update classes
					$fb
					.addClass('fluidbox--opened fluidbox--loaded')
					.find('.fluidbox__wrap')
						.css({ zIndex: fb.settings.stackIndex + fb.settings.stackIndexDelta });

					// Emit custom event
					$fb.trigger('openstart.fluidbox');

					// Compute
					fb.compute();

					// Hide thumbnail
					$fbThumb.css({ opacity: 0 });

					// Show overlay
					$('.fluidbox__overlay').css({ opacity: 1 });

					// Emit custom event when ghost image finishes transition
					$fbGhost.one(customTransitionEnd, function() {
						$fb.trigger('openend.fluidbox');
					});

					img = new Image();
					img.onload = function() {
						// Emit custom event
						$fb.trigger('imageloaddone.fluidbox');

						// Perform only if the Fluidbox instance is still open
						if (fb.instanceData.state === 1) {
							// Set new natural dimensions
							fb.instanceData.thumb.natW = img.naturalWidth;
							fb.instanceData.thumb.natH = img.naturalHeight;

							// Remove loading status
							$fb.removeClass('fluidbox--loading');

							// Check of URL is properly formatted
							if(_fun.checkURL(img.src)) {
								fb.close({ error: true });
								return false;
							}

							// Set new image background
							$fbGhost.css({ 'background-image': 'url(' + _fun.formatURL(img.src) + ')' });

							// Compute
							fb.compute();
						}
					};
					img.onerror = function() {
						// Trigger closing
						fb.close({ error: true });

						// Emit custom event
						$fb.trigger('imageloadfail.fluidbox');
						$fb.trigger('delayedloadfail.fluidbox');
					};
					img.src = $fb.attr('href');
					
				} else {
					img = new Image();
					img.onload = function() {

						// Emit custom event
						$fb.trigger('imageloaddone.fluidbox');

						// Update classes
						$fb
						.removeClass('fluidbox--loading')
						.addClass('fluidbox--opened fluidbox--loaded')
						.find('.fluidbox__wrap')
							.css({ zIndex: fb.settings.stackIndex + fb.settings.stackIndexDelta });

						// Emit custom event
						$fb.trigger('openstart.fluidbox');

						// Check of URL is properly formatted
						if(_fun.checkURL(img.src)) {
							fb.close({ error: true });
							return false;
						}

						// Set new image background
						$fbGhost.css({ 'background-image': 'url(' + _fun.formatURL(img.src) + ')' });

						// Set new natural dimensions
						fb.instanceData.thumb.natW = img.naturalWidth;
						fb.instanceData.thumb.natH = img.naturalHeight;

						// Compute
						fb.compute();

						// Hide thumbnail
						$fbThumb.css({ opacity: 0 });

						// Show overlay
						$('.fluidbox__overlay').css({ opacity: 1 });

						// Emit custom event when ghost image finishes transition
						$fbGhost.one(customTransitionEnd, function() {
							$fb.trigger('openend.fluidbox');
						});
					};
					img.onerror = function() {
						// Trigger closing
						fb.close({ error: true });

						// Emit custom event
						$fb.trigger('imageloadfail.fluidbox');
					};
					img.src = $fb.attr('href');
				}
					
			},
			compute: function() {
				var fb			= this,
					$fb			= $(this.element),
					$fbThumb	= $fb.find('img').first(),
					$fbGhost	= $fb.find('.fluidbox__ghost'),
					$fbWrap		= $fb.find('.fluidbox__wrap');

				// Shorthand for dimensions
				var imgNatW = fb.instanceData.thumb.natW,
					imgNatH = fb.instanceData.thumb.natH,
					imgW	= fb.instanceData.thumb.w,
					imgH	= fb.instanceData.thumb.h;

				// Calculate aspect ratios
				var thumbRatio = imgNatW / imgNatH,
					viewportRatio = globalData.viewport.w / globalData.viewport.h;

				// Replace dimensions if maxWidth or maxHeight is declared
				if (fb.settings.maxWidth > 0) {
					imgNatW = fb.settings.maxWidth;
					imgNatH = imgNatW / thumbRatio;
				} else if (fb.settings.maxHeight > 0) {
					imgNatH = fb.settings.maxHeight;
					imgNatW = imgNatH * thumbRatio;
				}

				// Compare image ratio with viewport ratio
				var computedHeight, computedWidth, imgScaleY, imgScaleX, imgMinScale;
				if (viewportRatio > thumbRatio) {
					computedHeight	= (imgNatH < globalData.viewport.h) ? imgNatH : globalData.viewport.h*fb.settings.viewportFill;
					imgScaleY		= computedHeight / imgH;
					imgScaleX		= imgNatW * (imgH * imgScaleY / imgNatH) / imgW;
					imgMinScale		= imgScaleY;
				} else {
					computedWidth	= (imgNatW < globalData.viewport.w) ? imgNatW : globalData.viewport.w*fb.settings.viewportFill;
					imgScaleX		= computedWidth / imgW;
					imgScaleY		= imgNatH * (imgW * imgScaleX / imgNatW) / imgH;
					imgMinScale		= imgScaleX;
				}

				// Display console error if both maxHeight and maxWidth are specific
				if (fb.settings.maxWidth && fb.settings.maxHeight)
					console.warn('Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.');
				
				
				// ---------------------------------------------------
				// ------------------ pejman tayebi ------------------
				// ---------------------------------------------------
				// clrect scale , ensure that it fills the screen 
				var newScale = 1;
				if (viewportRatio > thumbRatio) {
					if (imgNatH < globalData.viewport.h * fb.settings.viewportFill) {
						newScale  = globalData.viewport.h / imgNatH ;
					}
				} else {
					if (imgNatW < globalData.viewport.w * fb.settings.viewportFill ) {
						newScale  = globalData.viewport.w / imgNatW ;
					}
				}
				// ---------------------------------------------------
				// ---------------------------------------------------
				
				// Scale
				var
					offsetY = $w.scrollTop() - $fbThumb.offset().top + 0.5*(imgH*(imgMinScale-1)) + 0.5*($w.height() - imgH*imgMinScale),
					offsetX = 0.5*(imgW*(imgMinScale-1)) + 0.5*($w.width() - imgW*imgMinScale) - $fbThumb.offset().left,
					scale = (parseInt(imgScaleX*100)/100) * newScale + ',' + (parseInt(imgScaleY*100)/100) * newScale;

				
				// Apply styles to ghost and loader (if present)
				$fbGhost
				.css({
					'transform': 'translate(' + parseInt(offsetX*100)/100 + 'px,' + parseInt(offsetY*100)/100 + 'px) scale(' + scale + ')',
					top: $fbThumb.offset().top - $fbWrap.offset().top,
					left: $fbThumb.offset().left - $fbWrap.offset().left
				});
				$fb.find('.fluidbox__loader').css({
					'transform': 'translate(' + parseInt(offsetX*100)/100 + 'px,' + parseInt(offsetY*100)/100 + 'px) scale(' + scale + ')'
				});

				// Emit custom event
				$fb.trigger('computeend.fluidbox');
			},
			recompute: function() {
				// Recompute is simply an alias for the compute method
				this.compute();
			},
			close: function(d) {

				// Close Fluidbox
				var fb			= this,
					$fb			= $(this.element),
					$fbThumb	= $fb.find('img').first(),
					$fbGhost	= $fb.find('.fluidbox__ghost'),
					$fbWrap		= $fb.find('.fluidbox__wrap'),
					$fbOverlay	= $fb.find('.fluidbox__overlay'),
					closeData	= $.extend(null, {
										error: false
									}, d);

				// Do not do anything if Fluidbox is not opened/closed, for performance reasons
				if (fb.instanceData.state === null || typeof fb.instanceData.state === typeof undefined || fb.instanceData.state === 0) return false;

				// Update state
				fb.instanceData.state = 0;

				// Emit custom event
				$fb.trigger('closestart.fluidbox');

				// Change classes
				$fb
				.removeClass(function(i,c) {
					return (c.match (/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []).join(' ');
				})
				.addClass('fluidbox--closed');

				$fbGhost
				.css({
					'transform': 'translate(0,0) scale(1,1)',
					top: $fbThumb.offset().top - $fbWrap.offset().top + parseInt($fbThumb.css('borderTopWidth')) + parseInt($fbThumb.css('paddingTop')),
					left: $fbThumb.offset().left - $fbWrap.offset().left + parseInt($fbThumb.css('borderLeftWidth')) + parseInt($fbThumb.css('paddingLeft'))
				});

				$fb.find('.fluidbox__loader')
				.css({
					'transform': 'none'
				});

				$fbGhost.one(customTransitionEnd, function() {
					$fbGhost.css({ opacity: 0 });
					$fbThumb.css({ opacity: 1 });
					$fbOverlay.remove();
					$fbWrap.css({ zIndex: fb.settings.stackIndex - fb.settings.stackIndexDelta });
					$fb.trigger('closeend.fluidbox');
				});

				// Manually trigger transitionend if an error is detected
				// Errors will not trigger any transition changes to the ghost element
				if(closeData.error) $fbGhost.trigger('transitionend');

				// Fadeout overlay
				$fbOverlay.css({ opacity: 0 });		
			},
			bindEvents: function() {
				var fb = this,
					$fb = $(this.element);

				// Click handler
				$fb.on('click.fluidbox', function(e) {
					e.preventDefault();
					e.stopPropagation();

					// Check state
					// If state does not exist, or if Fluidbox is closed, we open it
					if(!fb.instanceData.state || fb.instanceData.state === 0) {

						// Open Fluidbox
						fb.open();

					// If state exists, we close it
					} else {
						
						// Close Fluidbox
						fb.close();
					}
				});

				// Listen to keydown event on the document
				$d.on('keydown', function(e) {

					// Trigger closing for ESC key
					if (e.keyCode === 27) fb.close();
				});
			},
			bindListeners: function() {
				var fb	= this,
					$fb = $(this.element);

				// Window resize
				// Namespaced using unique instance IDs so that we can unbind resize event specific to a Fluidbox instance
				var resizeFunction = function() {
					// Re-measure viewport dimensions
					_fun.measure.viewport();
					_fun.measure.fbElements.call(fb);

					// Re-compute, but only for the active element
					if($fb.hasClass('fluidbox--opened')) fb.compute();
				};
				if ($.isFunction($.throttle)) {
					$w.on('resize.fluidbox'+fb.instanceData.id, $.throttle(fb.settings.resizeThrottle, resizeFunction));
				} else {
					$w.on('resize.fluidbox'+fb.instanceData.id, resizeFunction);
				}

				// Reposition
				$fb.on('reposition.fluidbox', function() {
					fb.reposition();
				});

				// Recompute
				$fb.on('recompute.fluidbox, compute.fluidbox', function() {
					fb.compute();
				});

				// Destroy
				$fb.on('destroy.fluidbox', function() {
					fb.destroy();
				});

				// Close
				$fb.on('close.fluidbox', function() {
					fb.close();
				});
			},
			unbind: function() {
				$(this.element).off('click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox');
				$w.off('resize.fluidbox'+this.instanceData.id);
			},
			reposition: function() {
				_fun.measure.fbElements.call(this);
			},
			destroy: function() {
				// Cache original node
				var originalNode = this.instanceData.originalNode;

				// Unbind event hanlders
				this.unbind();

				// Destroy plugin data entirely
				$.data(this.element, 'plugin_' + pluginName, null);

				// DOM reversal
				$(this.element)
				.removeClass(function(i,c) {
					return (c.match (/(^|\s)fluidbox[--|__]\S+/g) || []).join(' ');
				})
				.empty()
				.html(originalNode)
				.addClass('fluidbox--destroyed')
				.trigger('destroyed.fluidbox');
			},
			getMetadata: function() {
				// Return instance data
				return this.instanceData;
			}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[pluginName] = function (options) {

			var args = arguments;

			// Check the options parameter
			// If it is undefined or is an object (plugin configuration),
			// we create a new instance (conditionally, see inside) of the plugin
			if (options === undefined || typeof options === 'object') {

				return this.each(function() {
					// Only if the plugin_fluidbox data is not present,
					// to prevent multiple instances being created
					if (!$.data(this, "plugin_" + pluginName)) {

						$.data(this, "plugin_" + pluginName, new Plugin(this, options));
					}
				});

			// If it is defined, but it is a string, does not start with an underscore and does not call init(),
			// we allow users to make calls to public methods
			} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
				var returnVal;

				this.each(function() {
					var instance = $.data(this, 'plugin_' + pluginName);
					if (instance instanceof Plugin && typeof instance[options] === 'function') {
						returnVal = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
					} else {
						console.warn('Fluidbox: The method "' + options + '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.');
					}
				});
				return returnVal !== undefined ? returnVal : this;
			}

			// Return to allow chaining
			return this;
		};



})(jQuery, window, document);
/*


video player


*/
(function ($) {
	$.fn.videoPlayer = function (options) {
		var settings = {
			videoClass: 'video'
		};
		if (options) {
			$.extend(settings, options);
		}
		return this.each(function () {
			// $(this)[0].addEventListener('loadedmetadata', function() {

			var
				$this = $(this),
				$settings = settings,
				$that = $this.parent('.' + $settings.videoClass),
				$spc = $(this)[0], // Specific video
				$duration = $spc.duration, // Video Duration
				currentTime,
				$mclicking = false,
				$vclicking = false,
				$vidhover = false,
				$volhover = false,
				$playing = false,
				$drop = false,
				$begin = false,
				$draggingProgess = false,
				$storevol, x = 0,
				y = 0,
				vtime = 0,
				updProgWidth = 0;

			var $videoFooter = $('#videofooter');
			var progWidth = $videoFooter/*.find('.progress ')*/.width();

			var bufferLength = function () {
				var buffered = $spc.buffered;
				$videoFooter.find('[class^=buffered]').remove();
				if (buffered.length > 0) {
					var i = buffered.length;
					while (i--) {
						$maxBuffer = buffered.end(i);
						$minBuffer = buffered.start(i);
						var bufferOffset = ($minBuffer / $duration) * 100;
						var bufferWidth = (($maxBuffer - $minBuffer) / $duration) * 100;
						$('<div class="buffered"></div>').css({
							"left": bufferOffset + '%',
							'width': bufferWidth + '%'
						}).appendTo($videoFooter.find('.progress'));
					}
				}
			}
			bufferLength();

			var timeUpdate = function ($ignore) {
				var time =
					Math.round(progWidth * $duration);
				// The 'real' time of the video
				var curTime = $spc.currentTime;
				var
					seconds = 0,
					minutes = Math.floor(curTime / 60),
					tminutes = Math.floor($duration / 60),
					tseconds = Math.round(($duration) - (tminutes * 60));
				if (curTime) {
					seconds = Math.round(curTime) - (60 * minutes);
					if (seconds > 59) {
						seconds = Math.round(curTime) - (60 * minutes);
						if (seconds == 60) {
							minutes = Math.round(curTime / 60);
							seconds = 0;
						}
					}
				}
				updProgWidth = (curTime / $duration) * progWidth
				if (seconds < 10) {
					seconds = '0' + seconds;
				}
				if (tseconds < 10) {
					tseconds = '0' + tseconds;
				}
				if ($ignore != true) {
					$videoFooter.find('.progress-bar').css({
						'width': updProgWidth + 'px'
					});
					$videoFooter.find('.progress-button').css({
						'left': (updProgWidth - $videoFooter.find('.progress-button').width()) + 'px'
					});
				}
				$videoFooter.find('.ctime').html(minutes + ':' + seconds)
				$videoFooter.find('.ttime').html(tminutes + ':' + tseconds);
				// If playing update buffer value
				if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
					bufferLength();
				}
			}

			timeUpdate();
			$spc.addEventListener('timeupdate', timeUpdate);

			var videoNotplayed = true;

			function playTheVideo() {
				if (videoNotplayed) {
					$that.addClass('video-is-played');
				}
				videoNotplayed = false;
				$('.video-poster').fadeOut('slow');
				if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
					$playing = false;
				} else {
					$playing = true;
				}
				if ($playing == false) {
					$spc.pause();
					$that.find('.play-pause').addClass('play').removeClass('pause');
					bufferLength();
				} else {
					$begin = true;
					$spc.play();
					$that.find('.play-pause').addClass('pause').removeClass('play');
				}
			}

			$that.find('.play-pause').bind('click', function () {
				playTheVideo();
			});

			$videoFooter.find('.progress').bind('mousedown', function (e) {
				$mclicking = true;
				if ($playing == true) {
					$spc.pause();
				}
				x = e.pageX - $videoFooter.find('.progress').offset().left;
				currentTime = (x / progWidth) * $duration;
				$spc.currentTime = currentTime;
			});

			$('#slider-con').bind('mousemove', function (e) {
/*PJT*/			if ( projectGallaryMode && showingVideoSlider) {
					if ($begin == true) {
						$that.hover(function () {
							$that.find('.player').addClass('player-hover');
						}, function () {
							$that.find('.player').removeClass('player-hover');
						});
					}
					if ($mclicking == true) {
						$draggingProgress = true;
						var progMove = 0;
						var buttonWidth = $videoFooter.find('.progress-button').width();
						x = e.pageX - $videoFooter.find('.progress').offset().left;
						if ($playing == true) {
							if (currentTime < $duration) {
								$that.find('.play-pause').addClass('pause').removeClass('play');
							}
						}
						if (x < 0) {
							progMove = 0;
							$spc.currentTime = 0;
						} else if (x > progWidth) {
							$spc.currentTime = $duration;
							progMove = progWidth;
						} else {
							progMove = x;
							currentTime = (x / progWidth) * $duration;
							$spc.currentTime = currentTime;
						}

						$videoFooter.find('.progress-bar').css({
							'width': progMove + 'px'
						});
						$videoFooter.find('.progress-button').css({
							'left': (progMove - buttonWidth) + 'px'
						});
					}
/*PJT*/			}
			})

			$spc.addEventListener('ended', function () {
				$playing = false;
				// If the user is not dragging
				if ($draggingProgress == false) {
					$that.find('.play-pause').addClass('play').removeClass('pause');
				}
			});

			$('#slider-con').bind('mouseup', function (e) {
/*PJT*/			if ( projectGallaryMode && showingVideoSlider) {
					$mclicking = false;
					$vclicking = false;
					$draggingProgress = false;
					if ($playing == true) {
						$spc.play();
					}
					bufferLength();
/*PJT*/ 		}
			});

			
			if (!$spc.requestFullscreen && !$spc.mozRequestFullScreen && !$spc.webkitRequestFullScreen) {
				$('#fullscreen').hide();
			}

			$('#fullscreen').click(function () {
				var $body = $('body');
				$body.addClass('zoomTimeout');
				setTimeout(function(){
					$body.addClass('zoom');
				},50);

				setTimeout(function(){
					if ($spc.requestFullscreen) {
						$spc.requestFullscreen();
					} else if ($spc.mozRequestFullScreen) {
						$spc.mozRequestFullScreen();
					} else if ($spc.webkitRequestFullScreen) {
						$spc.webkitRequestFullScreen();
					};
					if ($playing == true) {
						$('.play-pause').addClass('pause').removeClass('play');
					};
				},500);
				setTimeout(function(){
					$body.removeClass('zoom');
					$body.addClass('zoomout');
					setTimeout(function(){
						$body.removeClass('zoomout');
					},550);
					setTimeout(function(){
						$body.removeClass('zoomTimeout');
					},1000);
				},1000)
			});

			$(window).resize(function () {
				bufferLength();
				timeUpdate();
			});

			//      });
		});
	}
})(jQuery);
/*




*/
projectPageScriptIsLoaded = true;