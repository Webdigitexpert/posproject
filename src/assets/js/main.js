	
// Light slider
	
	!function(e,i){"use strict";var t={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};e.fn.lightSlider=function(i){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).lightSlider(i)}),this;var n={},l=e.extend(!0,{},t,i),a={},s=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var o=s.children(),r=e(window).width(),d=null,c=null,u=0,f=0,h=!1,g=0,v="",p=0,m=l.vertical===!0?"height":"width",S=l.vertical===!0?"margin-bottom":"margin-right",b=0,C=0,M=0,T=0,x=null,w="ontouchstart"in document.documentElement,P={};return P.chbreakpoint=function(){if(r=e(window).width(),l.responsive.length){var i;if(l.autoWidth===!1&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(d=l.responsive[t].breakpoint,c=l.responsive[t]);if("undefined"!=typeof c&&null!==c)for(var n in c.settings)c.settings.hasOwnProperty(n)&&(("undefined"==typeof a[n]||null===a[n])&&(a[n]=l[n]),l[n]=c.settings[n]);if(!e.isEmptyObject(a)&&r>l.responsive[0].breakpoint)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l.autoWidth===!1&&b>0&&M>0&&i!==l.item&&(p=Math.round(b/((M+l.slideMargin)*l.slideMove)))}},P.calSW=function(){l.autoWidth===!1&&(M=(g-(l.item*l.slideMargin-l.slideMargin))/l.item)},P.calWidth=function(e){var i=e===!0?v.find(".lslide").length:o.length;if(l.autoWidth===!1)f=i*(M+l.slideMargin);else{f=0;for(var t=0;i>t;t++)f+=parseInt(o.eq(t).width())+l.slideMargin}return f},n={doCss:function(){var e=function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0};return l.useCSS&&e()?!0:!1},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?s.goToPrevSlide():39===i.keyCode&&s.goToNextSlide())})},controls:function(){l.controls&&(s.after('<div class="lSAction"><a class="lSPrev">'+l.prevHtml+'</a><a class="lSNext">'+l.nextHtml+"</a></div>"),l.autoWidth?P.calWidth(!1)<g&&v.find(".lSAction").hide():u<=l.item&&v.find(".lSAction").hide(),v.find(".lSAction a").on("click",function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?s.goToPrevSlide():s.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,s),P.chbreakpoint(),s.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper"></div></div>'),v=s.parent(".lSSlideWrapper"),l.rtl===!0&&v.parent().addClass("lSrtl"),l.vertical?(v.parent().addClass("vertical"),g=l.verticalHeight,v.css("height",g+"px")):g=s.outerWidth(),o.addClass("lslide"),l.loop===!0&&"slide"===l.mode&&(P.calSW(),P.clone=function(){if(P.calWidth(!0)>g){for(var i=0,t=0,n=0;n<o.length&&(i+=parseInt(s.find(".lslide").eq(n).width())+l.slideMargin,t++,!(i>=g+l.slideMargin));n++);var a=l.autoWidth===!0?t:l.item;if(a<s.find(".clone.left").length)for(var r=0;r<s.find(".clone.left").length-a;r++)o.eq(r).remove();if(a<s.find(".clone.right").length)for(var d=o.length-1;d>o.length-1-s.find(".clone.right").length;d--)p--,o.eq(d).remove();for(var c=s.find(".clone.right").length;a>c;c++)s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s),p++;for(var u=s.find(".lslide").length-s.find(".clone.left").length;u>s.find(".lslide").length-a;u--)s.find(".lslide").eq(u-1).clone().removeClass("lslide").addClass("clone left").prependTo(s);o=s.children()}else o.hasClass("clone")&&(s.find(".clone").remove(),e.move(s,0))},P.clone()),P.sSW=function(){u=o.length,l.rtl===!0&&l.vertical===!1&&(S="margin-left"),l.autoWidth===!1&&o.css(m,M+"px"),o.css(S,l.slideMargin+"px"),f=P.calWidth(!1),s.css(m,f+"px"),l.loop===!0&&"slide"===l.mode&&h===!1&&(p=s.find(".clone.left").length)},P.calL=function(){o=s.children(),u=o.length},this.doCss()&&v.addClass("usingCss"),P.calL(),"slide"===l.mode?(P.calSW(),P.sSW(),l.loop===!0&&(b=e.slideValue(),this.move(s,b)),l.vertical===!1&&this.setHeight(s,!1)):(this.setHeight(s,!0),s.addClass("lSFade"),this.doCss()||(o.fadeOut(0),o.eq(p).fadeIn(0))),l.loop===!0&&"slide"===l.mode?o.eq(p).addClass("active"):o.first().addClass("active")},pager:function(){var e=this;if(P.createPager=function(){T=(g-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;var i=v.find(".lslide"),t=v.find(".lslide").length,n=0,a="",o=0;for(n=0;t>n;n++){"slide"===l.mode&&(l.autoWidth?o+=(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:o=n*((M+l.slideMargin)*l.slideMove));var r=i.eq(n*l.slideMove).attr("data-thumb");if(a+=l.gallery===!0?'<li style="width:100%;'+m+":"+T+"px;"+S+":"+l.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>':'<li><a href="#">'+(n+1)+"</a></li>","slide"===l.mode&&o>=f-g-l.slideMargin){n+=1;var d=2;l.autoWidth&&(a+='<li><a href="#">'+(n+1)+"</a></li>",d=1),d>n?(a=null,v.parent().addClass("noPager")):v.parent().removeClass("noPager");break}}var c=v.parent();c.find(".lSPager").html(a),l.gallery===!0&&(l.vertical===!0&&c.find(".lSPager").css("width",l.vThumbWidth+"px"),C=n*(l.thumbMargin+T)+.5,c.find(".lSPager").css({property:C+"px","transition-duration":l.speed+"ms"}),l.vertical===!0&&v.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),c.find(".lSPager").css(m,C+"px"));var u=c.find(".lSPager").find("li");u.first().addClass("active"),u.on("click",function(){return l.loop===!0&&"slide"===l.mode?p+=u.index(this)-c.find(".lSPager").find("li.active").index():p=u.index(this),s.mode(!1),l.gallery===!0&&e.slideThumb(),!1})},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),v.after('<ul class="lSPager '+i+'"></ul>');var t=l.vertical?"margin-left":"margin-top";v.parent().find(".lSPager").css(t,l.galleryMargin+"px"),P.createPager()}setTimeout(function(){P.init()},0)},setHeight:function(e,i){var t=null,n=this;t=l.loop?e.children(".lslide ").first():e.children().first();var a=function(){var n=t.outerHeight(),l=0,a=n;i&&(n=0,l=100*a/g),e.css({height:n+"px","padding-bottom":l+"%"})};a(),t.find("img").length?t.find("img")[0].complete?(a(),x||n.auto()):t.find("img").load(function(){setTimeout(function(){a(),x||n.auto()},100)}):x||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&v.addClass("on");var t=0;if(p*l.slideMove<u){e.removeClass("active"),this.doCss()||"fade"!==l.mode||i!==!1||e.fadeOut(l.speed),t=i===!0?p:p*l.slideMove;var n,a;i===!0&&(n=e.length,a=n-1,t+1>=n&&(t=a)),l.loop===!0&&"slide"===l.mode&&(t=i===!0?p-s.find(".clone.left").length:p*l.slideMove,i===!0&&(n=e.length,a=n-1,t+1===n?t=a:t+1>n&&(t=0))),this.doCss()||"fade"!==l.mode||i!==!1||e.eq(t).fadeIn(l.speed),e.eq(t).addClass("active")}else e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||i!==!1||(e.fadeOut(l.speed),e.eq(t).fadeIn(l.speed))},move:function(e,i){l.rtl===!0&&(i=-i),this.doCss()?l.vertical===!0?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):l.vertical===!0?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=v.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(o,!1);var e=v.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;P.calSlide=function(){f>g&&(b=e.slideValue(),e.active(o,!1),b>f-g-l.slideMargin?b=f-g-l.slideMargin:0>b&&(b=0),e.move(s,b),l.loop===!0&&"slide"===l.mode&&(p>=u-s.find(".clone.left").length/l.slideMove&&e.resetSlide(s.find(".clone.left").length),0===p&&e.resetSlide(v.find(".lslide").length)))},P.calSlide()},resetSlide:function(e){var i=this;v.find(".lSAction a").addClass("disabled"),setTimeout(function(){p=e,v.css("transition-duration","0ms"),b=i.slideValue(),i.active(o,!1),n.move(s,b),setTimeout(function(){v.css("transition-duration",l.speed+"ms"),v.find(".lSAction a").removeClass("disabled")},50)},l.speed+100)},slideValue:function(){var e=0;if(l.autoWidth===!1)e=p*((M+l.slideMargin)*l.slideMove);else{e=0;for(var i=0;p>i;i++)e+=parseInt(o.eq(i).width())+l.slideMargin}return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=g/2-T/2;break;case"right":e=g-T}var i=p-s.find(".clone.left").length,t=v.parent().find(".lSPager");"slide"===l.mode&&l.loop===!0&&(i>=t.children().length?i=0:0>i&&(i=t.children().length));var n=i*(T+l.thumbMargin)-e;n+g>C&&(n=C-g-l.thumbMargin),0>n&&(n=0),this.move(t,n)},auto:function(){l.auto&&(clearInterval(x),x=setInterval(function(){s.goToNextSlide()},l.pause))},pauseOnHover:function(){var i=this;l.auto&&l.pauseOnHover&&(v.on("mouseenter",function(){e(this).addClass("ls-hover"),s.pause(),l.auto=!0}),v.on("mouseleave",function(){e(this).removeClass("ls-hover"),v.find(".lightSlider").hasClass("lsGrabbing")||i.auto()}))},touchMove:function(e,i){if(v.css("transition-duration","0ms"),"slide"===l.mode){var t=e-i,n=b-t;if(n>=f-g-l.slideMargin)if(l.freeMove===!1)n=f-g-l.slideMargin;else{var a=f-g-l.slideMargin;n=a+(n-a)/5}else 0>n&&(l.freeMove===!1?n=0:n/=5);this.move(s,n)}},touchEnd:function(e){if(v.css("transition-duration",l.speed+"ms"),"slide"===l.mode){var i=!1,t=!0;b-=e,b>f-g-l.slideMargin?(b=f-g-l.slideMargin,l.autoWidth===!1&&(i=!0)):0>b&&(b=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=0,a=0;a<o.length&&(n+=parseInt(o.eq(a).width())+l.slideMargin,p=a+t,!(n>=b));a++);else{var s=b/((M+l.slideMargin)*l.slideMove);p=parseInt(s)+t,b>=f-g-l.slideMargin&&s%1!==0&&p++}};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),s.mode(t),this.slideThumb()}else e>=l.swipeThreshold?s.goToPrevSlide():e<=-l.swipeThreshold&&s.goToNextSlide()},enableDrag:function(){var i=this;if(!w){var t=0,n=0,a=!1;v.find(".lightSlider").addClass("lsGrab"),v.on("mousedown",function(i){return g>f&&0!==f?!1:void("lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=l.vertical===!0?i.pageY:i.pageX,a=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,v.scrollLeft+=1,v.scrollLeft-=1,v.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),e(window).on("mousemove",function(e){a&&(n=l.vertical===!0?e.pageY:e.pageX,i.touchMove(n,t))}),e(window).on("mouseup",function(s){if(a){v.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),a=!1,n=l.vertical===!0?s.pageY:s.pageX;var o=n-t;Math.abs(o)>=l.swipeThreshold&&e(window).on("click.ls",function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")}),i.touchEnd(o)}})}},enableTouch:function(){var e=this;if(w){var i={},t={};v.on("touchstart",function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(x)}),v.on("touchmove",function(n){if(g>f&&0!==f)return!1;var a=n.originalEvent;t=a.targetTouches[0];var s=Math.abs(t.pageX-i.pageX),o=Math.abs(t.pageY-i.pageY);l.vertical===!0?(3*o>s&&n.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*s>o&&n.preventDefault(),e.touchMove(t.pageX,i.pageX))}),v.on("touchend",function(){if(g>f&&0!==f)return!1;var n;n=l.vertical===!0?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(n)})}},build:function(){var i=this;i.initialStyle(),this.doCss()&&(l.enableTouch===!0&&i.enableTouch(),l.enableDrag===!0&&i.enableDrag()),e(window).on("focus",function(){i.auto()}),e(window).on("blur",function(){clearInterval(x)}),i.pager(),i.pauseOnHover(),i.controls(),i.keyPress()}},n.build(),P.init=function(){P.chbreakpoint(),l.vertical===!0?(g=l.item>1?l.verticalHeight:o.outerHeight(),v.css("height",g+"px")):g=v.outerWidth(),l.loop===!0&&"slide"===l.mode&&P.clone(),P.calL(),"slide"===l.mode&&s.removeClass("lSSlide"),"slide"===l.mode&&(P.calSW(),P.sSW()),setTimeout(function(){"slide"===l.mode&&s.addClass("lSSlide")},1e3),l.pager&&P.createPager(),l.adaptiveHeight===!0&&l.vertical===!1&&s.css("height",o.eq(p).outerHeight(!0)),l.adaptiveHeight===!1&&("slide"===l.mode?l.vertical===!1?n.setHeight(s,!1):n.auto():n.setHeight(s,!0)),l.gallery===!0&&n.slideThumb(),"slide"===l.mode&&n.slide(),l.autoWidth===!1?o.length<=l.item?v.find(".lSAction").hide():v.find(".lSAction").show():P.calWidth(!1)<g&&0!==f?v.find(".lSAction").hide():v.find(".lSAction").show()},s.goToPrevSlide=function(){if(p>0)l.onBeforePrevSlide.call(this,s,p),p--,s.mode(!1),l.gallery===!0&&n.slideThumb();else if(l.loop===!0){if(l.onBeforePrevSlide.call(this,s,p),"fade"===l.mode){var e=u-1;p=parseInt(e/l.slideMove)}s.mode(!1),l.gallery===!0&&n.slideThumb()}else l.slideEndAnimation===!0&&(s.addClass("leftEnd"),setTimeout(function(){s.removeClass("leftEnd")},400))},s.goToNextSlide=function(){var e=!0;if("slide"===l.mode){var i=n.slideValue();e=i<f-g-l.slideMargin}p*l.slideMove<u-l.slideMove&&e?(l.onBeforeNextSlide.call(this,s,p),p++,s.mode(!1),l.gallery===!0&&n.slideThumb()):l.loop===!0?(l.onBeforeNextSlide.call(this,s,p),p=0,s.mode(!1),l.gallery===!0&&n.slideThumb()):l.slideEndAnimation===!0&&(s.addClass("rightEnd"),setTimeout(function(){s.removeClass("rightEnd")},400))},s.mode=function(e){l.adaptiveHeight===!0&&l.vertical===!1&&s.css("height",o.eq(p).outerHeight(!0)),h===!1&&("slide"===l.mode?n.doCss()&&(s.addClass("lSSlide"),""!==l.speed&&v.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&v.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&s.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&s.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,s,p),"slide"===l.mode?n.slide():n.fade(),v.hasClass("ls-hover")||n.auto(),setTimeout(function(){e||l.onAfterSlide.call(this,s,p)},l.speed),h=!0},s.play=function(){s.goToNextSlide(),l.auto=!0,n.auto()},s.pause=function(){l.auto=!1,clearInterval(x)},s.refresh=function(){P.init()},s.getCurrentSlideCount=function(){var e=p;if(l.loop){var i=v.find(".lslide").length,t=s.find(".clone.left").length;e=t-1>=p?i+(p-t):p>=i+t?p-i-t:p-t}return e+1},s.getTotalSlideCount=function(){return v.find(".lslide").length},s.goToSlide=function(e){p=l.loop?e+s.find(".clone.left").length-1:e,s.mode(!1),l.gallery===!0&&n.slideThumb()},s.destroy=function(){s.lightSlider&&(s.goToPrevSlide=function(){},s.goToNextSlide=function(){},s.mode=function(){},s.play=function(){},s.pause=function(){},s.refresh=function(){},s.getCurrentSlideCount=function(){},s.getTotalSlideCount=function(){},s.goToSlide=function(){},s.lightSlider=null,P={init:function(){}},s.parent().parent().find(".lSAction, .lSPager").remove(),s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),s.children().removeAttr("style"),o.removeClass("lslide active"),s.find(".clone").remove(),o=null,x=null,h=!1,p=0)},setTimeout(function(){l.onSliderLoad.call(this,s)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,P.init()},200)}),this}}(jQuery);

	
/*==========================Way point=================================*/

(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);



/* ===================== jQuery Nice Select - v1.0======================== */

!function (e) { e.fn.niceSelect = function (t) { function s(t) { t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>')); var s = t.next(), n = t.find("option"), i = t.find("option:selected"); s.find(".current").html(i.data("display") || i.text()), n.each(function (t) { var n = e(this), i = n.data("display"); s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text())) }) } if ("string" == typeof t) return "update" == t ? this.each(function () { var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open"); n.length && (n.remove(), s(t), i && t.next().trigger("click")) }) : "destroy" == t ? (this.each(function () { var t = e(this), s = e(this).next(".nice-select"); s.length && (s.remove(), t.css("display", "")) }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this; this.hide(), this.each(function () { var t = e(this); t.next().hasClass("nice-select") || s(t) }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) { var s = e(this); e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus() }), e(document).on("click.nice_select", function (t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) { var s = e(this), n = s.closest(".nice-select"); n.find(".selected").removeClass("selected"), s.addClass("selected"); var i = s.data("display") || s.text(); n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change") }), e(document).on("keydown.nice_select", ".nice-select", function (t) { var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected")); if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1; if (40 == t.keyCode) { if (s.hasClass("open")) { var i = n.nextAll(".option:not(.disabled)").first(); i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus")) } else s.trigger("click"); return !1 } if (38 == t.keyCode) { if (s.hasClass("open")) { var l = n.prevAll(".option:not(.disabled)").first(); l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus")) } else s.trigger("click"); return !1 } if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1 }); var n = document.createElement("a").style; return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this } }(jQuery);

/*===================== matchHeight ================================*/

!function (t) { var e = -1, a = -1, o = function (t) { return parseFloat(t) || 0 }, i = function (e) { var a = 1, i = t(e), n = null, r = []; return i.each(function () { var e = t(this), i = e.offset().top - o(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(n - i)) <= a ? r[r.length - 1] = s.add(e) : r.push(e), n = i }), r }, n = function (e) { var a = { byRow: !0, property: "height", target: null, remove: !1 }; return "object" == typeof e ? t.extend(a, e) : ("boolean" == typeof e ? a.byRow = e : "remove" === e && (a.remove = !0), a) }, r = t.fn.matchHeight = function (e) { var a = n(e); if (a.remove) { var o = this; return this.css(a.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(o) }), this } return this.length <= 1 && !a.target ? this : (r._groups.push({ elements: this, options: a }), r._apply(this, a), this) }; r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = i, r._parse = o, r._parseOptions = n, r._apply = function (e, a) { var s = n(a), h = t(e), c = [h], l = t(window).scrollTop(), p = t("html").outerHeight(!0), d = h.parents().filter(":hidden"); return d.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () { var e = t(this), a = e.css("display"); "inline-block" !== a && "inline-flex" !== a && (a = "block"), e.data("style-cache", e.attr("style")), e.css({ display: a, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" }) }), c = i(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(c, function (e, a) { var i = t(a), n = 0; if (s.target) n = s.target.outerHeight(!1); else { if (s.byRow && i.length <= 1) return void i.css(s.property, ""); i.each(function () { var e = t(this), a = e.css("display"); "inline-block" !== a && "inline-flex" !== a && (a = "block"); var o = { display: a }; o[s.property] = "", e.css(o), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), e.css("display", "") }) } i.each(function () { var e = t(this), a = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (a += o(e.css("border-top-width")) + o(e.css("border-bottom-width")), a += o(e.css("padding-top")) + o(e.css("padding-bottom"))), e.css(s.property, n - a + "px")) }) }), d.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this }, r._applyDataApi = function () { var e = {}; t("[data-match-height], [data-mh]").each(function () { var a = t(this), o = a.attr("data-mh") || a.attr("data-match-height"); o in e ? e[o] = e[o].add(a) : e[o] = a }), t.each(e, function () { this.matchHeight(!0) }) }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (o, i) { if (i && "resize" === i.type) { var n = t(window).width(); if (n === e) return; e = n } o ? -1 === a && (a = setTimeout(function () { s(i), a = -1 }, r._throttle)) : s(i) }, t(r._applyDataApi), t(window).bind("load", function (t) { r._update(!1, t) }), t(window).bind("resize orientationchange", function (t) { r._update(!0, t) }) }(jQuery);

// jquery.counterup.js 1.0

(function (e) { "use strict"; e.fn.counterUp = function (t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function () { var t = e(this), r = n, i = function () { var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i); i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f); u && (l = parseFloat(i / n * f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2"); e.unshift(l) } t.data("counterup-nums", e); t.text("0"); var c = function () { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else { delete t.data("counterup-nums"); t.data("counterup-nums", null); t.data("counterup-func", null) } }; t.data("counterup-func", c); setTimeout(t.data("counterup-func"), r.delay) }; t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery);


$(function(){
    
    // $('.sticky-trigger').waypoint(function(direction) {
	//   $('.main-meta').toggleClass('fix-it', direction === 'down');
	// });
	// nice select ****************************************************
    
    $('select:not(.ignore, .chosen-select)').niceSelect();

	function menuSettings(){
			// detect drop down for adding class
			$(".main-menu > ul > li").find("> ul").parent().addClass("dropdown");
        
        
			// create mobile menu
			var menuHtml = $(".main-menu").html();
			$(".mobile-menu").html(menuHtml);
			// top links add to main nav (for mobile)
			var topnavHtml = $(".top-bar").html();
			$(".mobile-menu ul.menu-list > li:last-child()").after(topnavHtml);
			
			// mobile menu toggle
		
		}
		menuSettings();
		
		//Dropdown menu
		
		$(".main-menu > ul > li").hover(function(){
			$(this).find("> a").addClass("hoverClass");
			$(this).find(">ul").stop(true, false).slideToggle(200);     
			}, function(){
			$(this).find("> a").removeClass("hoverClass");
			$(this).find(">ul").stop(true, false).slideToggle(200);   
		});
		
		
		function menuMobile(){
			// drp menu 
			var allAccordion = $('.mobile-menu ul.menu-list > li > ul');
			var allAccordionItem = $('.mobile-menu ul.menu-list > li.dropdown > a');
			$(allAccordionItem).click(function() {
				
				if($(this).hasClass('open'))
				{
					$(this).removeClass('open');
					$(this).next().slideUp(200);
				}
				else
				{
					allAccordion.slideUp(200);
					allAccordionItem.removeClass('open');
					$(this).addClass('open');
					$(this).next().slideDown(200);
					return false;
				}
			});
		}
		menuMobile();
		
		
		$('a.menu-toggle').click(function() {
	   $(this).toggleClass("active");
	   $(this).parent().toggleClass("show");
		});
		$('body').click(function() {
		   $('.mobile-menu').removeClass("show");
		   $('a.menu-toggle').removeClass("active");
		});
		$('.mobile-menu,a.menu-toggle').click(function(event){
		   event.stopPropagation();
		});
		
		/*Review SLIDER*/
		
		

		

		$(".review-wrapper .slider-nav a.prev").click(function(){
			$(".review-wrapper .lSAction>.lSPrev").trigger('click');
		});
		$(".review-wrapper .slider-nav a.next").click(function () {
			$(".review-wrapper .lSAction>.lSNext").trigger('click');
		});
			
	
	// sub banner-bg *************************************************
	 function makeBg(){
		$(".set-as-bg").each(function(){
			var imgurl = $(this).find("> span.make-bg img").attr('src');
			$(this).css( 'background-image', 'url(' + imgurl+ ')');
		});
	 }
	makeBg();
	
	function toutchMargin() {
		var containerWidth = $(".container").width();
		var windowWidth = $(window).width();
		var csWidth = (windowWidth - containerWidth)/2
		$(".toutch-left").css('margin-left', -csWidth);
	}
	toutchMargin();

	

	// Full features toggle
	$(".full-spec").click(function(){
		$(".plan-item .plan-data").toggleClass("full");
		$(this).toggleClass("active");
		matchHt();
	});

	

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
    
    
    //voip-broadband silder
    $(".similar-product-slide").lightSlider({
        pager: false,
        controls: false,
        slideMove: 1,
        auto: false,
        pause: 3000,
        loop: false,
        pauseOnHover: true,
        slideMargin: 30,
       responsive: [
            {
                breakpoint: 992,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]

    });
    
    
    //Business mobile latest&greatest slider
    $(".latest-greatest-slide").lightSlider({
        pager: false,
        controls: true,
        slideMove: 1,
        auto: true,
        pause: 3000,
        loop: true,
        pauseOnHover: true,
        slideMargin: 30,
       responsive: [
            {
                breakpoint: 1200,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
    
    $("a.latest-prev").click(function(){
        $(".latest-greatest-main .lSAction>.lSPrev").trigger('click');
    });
    $("a.latest-next").click(function () {
        $(".latest-greatest-main .lSAction>.lSNext").trigger('click');
    });
    
	
	// Match Height **************************************************
	function matchHt(){
		$(".eq-height").matchHeight({
			property: 'height',
		});
		$(".cm-height").matchHeight({
			property: 'height',
		});
		$(".sm-height").matchHeight({
			property: 'height',
		});
	}
	matchHt();
	

});//Main 
