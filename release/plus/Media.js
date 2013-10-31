/*!
 * sinaadToolkit.Media
 * @author acelan<xiaobin8[at]staff.sina.com.cn> zhouyi<zhouyi3[at]staff.sina.com.cn>
 * @version 1.0.0
 * 
 *                          $$!   ;$;
 *                    !$  $$$$  !$$$   ;;
 *                 $ *$$;$$$$$$$$$$;*$$$
 *                $$$$$$$$$$$$$$$$$$$$$
 *               $$$$$$;         o$$$$$o
 *              *$$$   *#####;     $$$$$
 *              $$$   &#$*!###     $$$$!
 *              $$$;  $#!!###$   ;$$$$
 *                $$$o  ;**   !$$$$!
 *          !$&&&&$!  o$$$$$$o;   ;$&###&!     ;o$&&##&$;
 *       ###########$ o####*  #############!  o############
 *     ;#####;        #####  $####    *####;          ####*
 *      ###########  o####   ####;    ####$  $######;o####
 *          ;*#####o ####$  ####&    !#### o####     ####
 *    ####$**&####$ ;####  o####     ####o &####$o$#####
 *   ;o########$    *###   ####!    &####   ;######&!
 *                 ###;
 *                  ##o
 *                 ;#!
 *                 ;
 */
!function(a,b){"use strict";function c(a){this.delay=a.delay?parseInt(a.delay,10):0,a.mainWidth=a.mainWidth||h[0],a.mainHeight=a.mainHeight||h[1],a.sideWidth=i[0],a.sideHeight=i[1],a.src=b.array.ensureArray(a.src),a.type=b.array.ensureArray(a.type),a.link=b.array.ensureArray(a.link),this.config=a,this.deferred=new b.Deferred;var c=this.left=new b.Box({width:a.sideWidth,height:a.sideHeight+f[1],position:"left "+a.top||0,autoShow:1,minViewportWidth:a.mainWidth+2*a.sideWidth}),j=this.right=new b.Box({width:a.sideWidth,height:a.sideHeight+f[1],position:"right "+a.top||0,autoShow:1,minViewportWidth:a.mainWidth+2*a.sideWidth}),k=this.main=new b.Box({width:a.mainWidth,height:a.mainHeight,position:"center "+a.top||0}),l=this.mainContent=document.createElement("div");l.style.cssText="width:"+a.mainWidth+"px;height:"+a.mainHeight+"px;overflow:hidden;margin:0px auto;position:relative;";var m=this.mainCloseBtn=document.createElement("div");m.style.cssText="width:"+g[0]+"px;height:"+g[1]+"px;position:absolute;top:"+a.mainHeight+"px;right:0px;background:url("+e+") no-repeat;pointer:cursor;";var n=this.leftContent=document.createElement("div");n.style.cssText="width:"+a.sideWidth+"px;height:"+a.sideHeight+"px;position:absolute;left:0px;top:0px;",n.innerHTML=b.ad.createHTML(a.type[1],a.src[1],a.sideWidth,a.sideHeight,a.link[1]||a.link[0],a.monitor);var o=this.leftCloseBtn=document.createElement("div");o.style.cssText="width:"+f[0]+"px;height:"+f[1]+"px;position:absolute;left:0px;top:"+a.sideHeight+"px;background:url("+d+") no-repeat right center #ebebeb;cursor:pointer";var p=this.rightContent=document.createElement("div");p.style.cssText="width:"+a.sideWidth+"px;height:"+a.sideHeight+"px;position:absolute;left:0px;top:0px;",p.innerHTML=b.ad.createHTML(a.type[2]||a.type[1],a.src[2]||a.src[1],a.sideWidth,a.sideHeight,a.link[2]||a.link[1]||a.link[0],a.monitor);var q=this.rightCloseBtn=document.createElement("div");q.style.cssText="width:"+f[0]+"px;height:"+f[1]+"px;position:absolute;left:0px;top:"+a.sideHeight+"px;background:url("+d+") no-repeat left center #ebebeb;cursor:pointer",k.getMain().appendChild(l),k.getMain().appendChild(m),c.getMain().appendChild(n),c.getMain().appendChild(o),j.getMain().appendChild(p),j.getMain().appendChild(q),b.event.on(m,"click",this.getCloseMainHandler()),b.event.on(o,"click",this.getCloseSideHandler()),b.event.on(q,"click",this.getCloseSideHandler()),b.event.on(p,"mouseover",this.getHoverSideHandler()),b.event.on(n,"mouseover",this.getHoverSideHandler())}var d="http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg",e="http://d2.sina.com.cn/d1images/lmt/cls_66x22.gif",f=[120,18],g=[66,22],h=[1e3,90],i=[120,270];c.prototype={timer:null,aniTimer:null,isshow:0,show:function(){var a=this;this.tmpWidth=0,this.isshow=1,clearTimeout(this.timer),this.mainContent.style.width="0px",this.mainContent.innerHTML=b.ad.createHTML(this.config.type[0],this.config.src[0],this.config.mainWidth,this.config.mainHeight,this.config.link[0],this.config.monitor),this.main.show(),this.aniTimer=setInterval(function(){a.tmpWidth<a.config.mainWidth?(a.tmpWidth+=(a.config.mainWidth-a.tmpWidth)/4,a.mainContent.style.width=a.tmpWidth+"px"):(a.mainContent.style.width=a.config.mainWidth+"px",clearInterval(a.aniTimer),a.deferred.resolve())},50),a.timer=setTimeout(function(){a.hide()},8e3)},hide:function(){this.main.hide(),this.mainContent.innerHTML="",this.isshow=0,this.aniTimer&&clearInterval(this.aniTimer),this.timer&&clearTimeout(this.timer)},getCloseMainHandler:function(){var a=this;return function(){a.hide(),a.mainIsClose=!0}},getHoverSideHandler:function(){var a=this;return function(){a.mainIsClose||a.show()}},getCloseSideHandler:function(){var a=this;return function(){a.hide(),a.left.hide(),a.right.hide()}}},b.CoupletMedia=b.CoupletMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a){if(b.storage.get("FloatMedia"+a.pdps))return b.debug("sinaadToolkit.FloatMedia:\u5bf9\u8054\u5e7f\u544a\u5df2\u7ecf\u5173\u95ed\u8fc7\uff0c"+b.storage.get("FloatMedia"+a.pdps)),void 0;this.delay=a.delay?parseInt(a.delay,10):0,a.sideWidth=a.sideWidth||f[0],a.sideHeight=a.sideHeight||f[1],a.src=b.array.ensureArray(a.src),a.type=b.array.ensureArray(a.type),a.link=b.array.ensureArray(a.link),this.config=a,this.deferred=new b.Deferred;var c=this.left=new b.Box({width:a.sideWidth,height:a.sideHeight,position:"left "+a.top||0,autoShow:1,minViewportWidth:(a.contentWidth||1e3)+2*a.sideWidth}),g=this.right=new b.Box({width:a.sideWidth,height:a.sideHeight,position:"right "+a.top||0,autoShow:1,minViewportWidth:(a.contentWidth||1e3)+2*a.sideWidth}),h=this.leftContent=document.createElement("div");h.style.cssText="width:"+a.sideWidth+"px;height:"+a.sideHeight+"px;position:absolute;left:0px;top:0px;",h.innerHTML=b.ad.createHTML(a.type[0],a.src[0],a.sideWidth,a.sideHeight,a.link[0],a.monitor);var i=this.leftCloseBtn=document.createElement("div");i.style.cssText="width:"+e[0]+"px;height:"+e[1]+"px;position:absolute;right:0px;top:0px;background:url("+d+") no-repeat right center #ebebeb;cursor:pointer";var j=this.rightContent=document.createElement("div");j.style.cssText="width:"+a.sideWidth+"px;height:"+a.sideHeight+"px;position:absolute;left:0px;top:0px;",j.innerHTML=b.ad.createHTML(a.type[1]||a.type[0],a.src[1]||a.src[0],a.sideWidth,a.sideHeight,a.link[1]||a.link[0],a.monitor);var k=this.rightCloseBtn=document.createElement("div");k.style.cssText="width:"+e[0]+"px;height:"+e[1]+"px;position:absolute;left:0px;top:0px;background:url("+d+") no-repeat left center #ebebeb;cursor:pointer",c.getMain().appendChild(h),c.getMain().appendChild(i),g.getMain().appendChild(j),g.getMain().appendChild(k),b.event.on(i,"click",this.getCloseSideHandler()),b.event.on(k,"click",this.getCloseSideHandler())}var d="http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg",e=[40,18],f=[120,300];c.prototype={getCloseSideHandler:function(){var a=this;return function(){b.storage.set("FloatMedia"+a.config.pdps,"1",864e5),a.left.hide(),a.right.hide()}}},b.FloatMedia=b.FloatMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a){var c=this;this.deferred=new b.Deferred;var k=this.width=a.main.width,l=this.height=a.main.height;this.delay=a.delay?parseInt(a.delay,10):0,this.config=a;var m=this.main=new b.Box({width:k,height:l,position:"right "+(a.main.top||"top"),follow:1}),n=this.mini=new b.Box({width:h[0],height:h[1]+j[1]+i[1],position:"right "+(a.mini.top||"bottom"),follow:1}),o=this.mainCloseBtn=document.createElement("div");o.style.cssText=["width:"+g[0]+"px","height:"+g[1]+"px","position:absolute","right:0px","top:-"+g[1]+"px","z-index:9999","background:url("+f+") no-repeat","margin:0","padding:0","cursor:pointer"].join(";");var p=this.miniCloseBtn=document.createElement("div");p.style.cssText="margin:0px;padding:0px;display:block;cursor:pointer;width:"+j[0]+"px;height:"+j[1]+"px;position:absolute;left:0px;top:"+(h[1]+i[1])+"px;background:url("+e+") no-repeat center;";var q=this.miniReplayBtn=document.createElement("div");q.style.cssText="width:"+i[0]+"px;height:"+i[1]+"px;position:absolute;left:0px;top:"+h[1]+"px;background:url("+d+") no-repeat center;margin:0px;padding:0px;display:block;cursor:pointer;",b.event.on(p,"click",this.getCloseMiniHandler()),b.event.on(q,"click",this.getReplayHandler()),b.event.on(o,"click",this.getCloseMainHandler());var r=this.mainContent=document.createElement("div"),s=this.miniContent=document.createElement("div");m.getMain().appendChild(r),m.getMain().appendChild(o),n.getMain().appendChild(s),n.getMain().appendChild(q),n.getMain().appendChild(p),this.delay?setTimeout(function(){c.show()},1e3*this.delay):this.show()}var d="http://d5.sina.com.cn/d1images/lmt/play.gif",e="http://d1.sina.com.cn/d1images/lmt/close1.jpg",f="http://simg.sinajs.cn/blog7style/images/common/ad/closenew.jpg",g=[40,18],h=[25,150],i=[25,24],j=[25,45];c.prototype={timer:null,show:function(){var a=this,c=this.config;clearTimeout(this.timer),this.miniContent.innerHTML="",this.mainContent.innerHTML=b.ad.createHTML(c.main.type,c.main.src,c.main.width,c.main.height,c.main.link,c.monitor),this.main.show(),this.mini.hide(),this.deferred.resolve(),this.timer=setTimeout(function(){a.hide()},1e3*c.duration||8e3)},hide:function(){var a=this.config;clearTimeout(this.timer),this.mainContent.innerHTML="",this.mini.show(),this.main.hide(),this.miniContent.innerHTML=b.ad.createHTML(a.mini.type,a.mini.src,25,150,a.mini.link,a.monitor)},getCloseMiniHandler:function(){var a=this;return function(){clearTimeout(a.timer),a.mini.hide(),a.miniContent.innerHTML=""}},getReplayHandler:function(){var a=this;return function(){a.show()}},getCloseMainHandler:function(){var a=this;return function(){a.hide()}}},b.FollowMedia=b.FollowMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a){var c=document.getElementById("FullScreenWrap");if(c){var g=this;this.deferred=new b.Deferred,this.width=a.width,this.height=a.height+(a.hasClose?40:0),this.src=a.src,this.link=a.link,this.type=a.type,this.monitor=a.monitor,this.transitionStep=a.hasClose?90:98,this.replaySrc=a.replaySrc||f,this.replaySrcType=a.replaySrcType||"flash",this.duration=a.duration||(a.hasClose?5e3:8e3),this.delay=a.delay?parseInt(a.delay,10):0;var h=this.container=document.createElement("div");h.style.cssText="width:"+this.width+"px;margin:0px auto;position:relative;",c.appendChild(h);var i=this.main=document.createElement("div");i.style.cssText="display:none;";var j=this.mainContent=document.createElement("div");if(j.style.cssText="position:relative;overflow:hidden;width:"+this.width+"px;height:0px;margin:0;padding:0;",i.appendChild(j),h.appendChild(i),a.hasClose){var k=this.mainCloseBtn=document.createElement("div");k.style.cssText="cursor:pointer;position:absolute;width:77px;height:31px;right:0px;top:"+this.height+"px;background:url("+d+") no-repeat;margin:0;padding:0;";var l=this.mini=document.createElement("div");l.style.cssText="width:25px;height:117px;position:absolute;left:"+this.width+"px;top:0px;margin:0;padding:0;overflow:hidden;";var m=this.miniContent=document.createElement("div");m.style.cssText="position:absolute;left:0px;top:0px;width:25px;height:100px;overflow:hidden;margin:0;padding:0";var n=this.replayBtn=document.createElement("div");n.style.cssText="cursor:pointer;position:absolute;left:0px;top:0px;width:25px;height:100px;overflow:hidden;margin:0;padding:0;background:#fff;opacity:0;*filter:alpha(opacity=0);";var o=this.miniCloseBtn=document.createElement("div");o.style.cssText="cursor:pointer;width:25px;height:17px;position:absolute;right:0px;top:100px;background:url("+e+") no-repeat right;margin:0;padding:0;",m.innerHTML=b.ad.createHTML(this.replaySrcType,this.replaySrc,25,100),i.appendChild(k),l.appendChild(m),l.appendChild(n),l.appendChild(o),h.appendChild(l),b.event.on(this.mainCloseBtn,"click",this.getCloseMainHandler()),b.event.on(this.miniCloseBtn,"click",this.getCloseMiniHandler()),b.event.on(this.replayBtn,"click",this.getReplayHandler())}this.delay?setTimeout(function(){g.show()},1e3*this.delay):this.show()}}var d="http://d1.sina.com.cn/d1images/fullscreen/cls_77x31.gif",e="http://d3.sina.com.cn/d1images/fullscreen/close.gif",f="http://d1.sina.com.cn/shh/tianyi/fs/rplBtn_25x100.swf",g=0;c.prototype={timer:null,aniTimer:null,show:function(){var a=this;clearTimeout(this.timer),this.mainContent.innerHTML=b.ad.createHTML(this.type,this.src,this.width,this.height,this.link,this.monitor),this.main.style.display="block",this.mini&&(this.mini.style.display="none"),this.expand(this.height,this.transitionStep,function(){a.deferred.resolve(),a.timer=setTimeout(function(){a.hide()},a.duration)})},hide:function(){var a=this;clearTimeout(this.timer),this.fold(this.transitionStep,function(){a.main.style.display="none",a.mini&&(a.mini.style.display="block")})},expand:function(a,b,c){var d=this;a>g?(g+=b,this.mainContent.style.height=Math.min(a,g)+"px",this.aniTimer=setTimeout(function(){d.expand(a,b,c)},100)):(clearTimeout(this.aniTimer),c())},fold:function(a,b){var c=this;g>0?(g-=a,this.mainContent.style.height=g+"px",this.aniTimer=setTimeout(function(){c.fold(a,b)},100)):(clearTimeout(this.aniTimer),b())},getReplayHandler:function(){var a=this;return function(){a.show()}},getCloseMainHandler:function(){var a=this;return function(){a.hide()}},getCloseMiniHandler:function(){var a=this;return function(){clearTimeout(this.timer),a.mini.style.display="none"}}},b.FullscreenMedia=b.FullscreenMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a){var c=this;this.deferred=new b.Deferred;var h=this.width=a.main.width,i=this.height=a.main.height;this.delay=a.delay?parseInt(a.delay,10):0,this.config=a;var j=this.main=new b.Box({width:h,height:i,position:"center "+(a.main.top||"center"),follow:1}),k=this.mini=new b.Box({width:25,height:219,position:"right bottom",follow:1}),l=this.mainCloseBtn=document.createElement("div");l.style.cssText=["width:"+(h>375?77:66)+"px","height:"+(h>375?31:22)+"px","position:absolute","right:0px","bottom:"+(h>375?-31:-22)+"px","z-index:99999","background:url("+(h>375?d:e)+") no-repeat","margin:0","padding:0","cursor:pointer"].join(";");var m=this.miniCloseBtn=document.createElement("div");m.style.cssText="margin:0px;padding:0px;display:block;cursor:pointer;width:25px;height:45px;position:absolute;left:0px;top:174px;background:url("+g+") no-repeat center;";var n=this.miniReplayBtn=document.createElement("div");n.style.cssText="width:25px;height:24px;position:absolute;left:0px;top:150px;background:url("+f+") no-repeat center;margin:0px;padding:0px;display:block;cursor:pointer;",b.event.on(m,"click",this.getCloseMiniHandler()),b.event.on(n,"click",this.getReplayHandler()),b.event.on(l,"click",this.getCloseMainHandler());var o=this.mainContent=document.createElement("div"),p=this.miniContent=document.createElement("div");j.getMain().appendChild(o),j.getMain().appendChild(l),k.getMain().appendChild(p),k.getMain().appendChild(n),k.getMain().appendChild(m),this.delay?setTimeout(function(){c.show()},1e3*this.delay):this.show()}var d="http://d4.sina.com.cn/d1images/lmt/cls_77x31.gif",e="http://d2.sina.com.cn/d1images/lmt/cls_66x22.gif",f="http://d5.sina.com.cn/d1images/lmt/play.gif",g="http://d1.sina.com.cn/d1images/lmt/close1.jpg";c.prototype={timer:null,show:function(){var a=this,c=this.config;clearTimeout(this.timer),this.miniContent.innerHTML="",this.mainContent.innerHTML=b.ad.createHTML(c.main.type,c.main.src,c.main.width,c.main.height,c.main.link||c.link,c.monitor,"",{wmode:"transparent"}),this.main.show(),this.mini.hide(),this.deferred.resolve(),this.timer=setTimeout(function(){a.hide()},c.duration||(this.width>260?8e3:5e3))},hide:function(){var a=this.config;clearTimeout(this.timer),this.mainContent.innerHTML="",this.mini.show(),this.main.hide(),this.miniContent.innerHTML=b.ad.createHTML(a.mini.type,a.mini.src,25,150,a.mini.link||a.link,a.monitor)},getCloseMiniHandler:function(){var a=this;return function(){clearTimeout(a.timer),a.mini.hide(),a.miniContent.innerHTML=""}},getReplayHandler:function(){var a=this;return function(){a.show()}},getCloseMainHandler:function(){var a=this;return function(){a.hide()}}},b.StreamMedia=b.StreamMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a,c){if(c.src=b.array.ensureArray(c.src),c.type=b.array.ensureArray(c.type),c.link=b.array.ensureArray(c.link),this.config=c,a.style.display="block",a.innerHTML=b.ad.createHTML(c.type[0],c.src[0],0,0,c.link[0]||"",c.monitor)||"",c.src[1]){var d=this.closeBtn=document.createElement("span");d.innerHTML="\xd7",d.style.cssText+=";position:absolute;right:6px;top:6px;line-height:10px;cursor:pointer;color:#8a8678;";var e=this.tipContent=document.createElement("div");this.tip=new b.Tip(a,{width:c.width,height:c.height,top:c.top||0,zIndex:c.zIndex}),this.tip.element.appendChild(e),this.tip.element.appendChild(d),e.innerHTML=b.ad.createHTML(c.type[1],c.src[1],c.width,c.height,c.link[1]||c.link[0]||"",c.monitor),c.autoShow&&this.tip.show(),b.event.on(d,"click",this.getHideHandler())}}b.Tip=function(c,d){this.relateElement=c,this.top=d.top||0,this.element=document.createElement("div"),this.element.style.cssText+=";border:1px solid #ccc;z-index:"+(d.zIndex||9999)+";display:none;position:absolute;width:"+d.width+"px;height:"+d.height+"px;overflow:hidden;",this.setPosition(),document.body.insertBefore(this.element,document.body.firstChild),b.event.on(a,"resize",this.getResizeHandler())},b.Tip.prototype={show:function(){this.element.style.display="block"},hide:function(){this.element.style.display="none"},setPosition:function(){var a=b.dom.getPosition(this.relateElement),c=this.top||this.relateElement.offsetHeight||0;this.element.style.left=a.left+"px",this.element.style.top=a.top+c+"px"},getResizeHandler:function(){var a=this;return function(){a.setPosition()}}},c.prototype={getHideHandler:function(){var a=this;return function(){a.tip.hide()}}},b.TipsMedia=b.TipsMedia||c}(window,window.sinaadToolkit),function(a,b){"use strict";function c(a){var c=this;this.delay=a.delay?parseInt(a.delay,10):0,this.config=a,this.deferred=new b.Deferred;var f=this.main=new b.Box({width:a.width,height:a.height,position:"right bottom",follow:1}),g=this.mainWrap=document.createElement("div");g.style.cssText="position:absolute;left:0px;bottom:0px;width:"+a.width+"px;height:0px;overflow:hidden;";var h=this.mainContent=document.createElement("div");h.style.cssText="position:absolute;width:"+a.width+"px;height:"+a.height+"px;left:0px;top:0px;";var i=this.closeBtn=document.createElement("div");i.style.cssText="cursor:pointer;z-index:999;position:absolute;width:42px;height:19px;right:7px;top:1px;",g.appendChild(i),g.appendChild(h),f.getMain().appendChild(g),b.event.on(i,"click",this.getCloseHandler()),b.event.on(i,"mouseover",function(){this.style.backgroundImage="url("+e+")"}),b.event.on(i,"mouseout",function(){this.style.backgroundImage="url("+d+")"}),this.delay?setTimeout(function(){c.show()},1e3*this.delay):this.show()}var d="http://d1.sina.com.cn/shh/ws/2012/09/29/1/close1.gif",e="http://d1.sina.com.cn/shh/ws/2012/09/29/1/close2.gif";c.prototype={aniTimer:null,show:function(){var a=this;this.mainWrap.style.height="0px",this.main.show(),this.mainContent.innerHTML=b.ad.createHTML(this.config.type,this.config.src,this.config.width,this.config.height,this.config.link,this.config.monitor),this.tmpHeight=0,this.aniTimer=setInterval(function(){a.tmpHeight<a.config.height?(a.tmpHeight+=10,a.mainWrap.style.height=a.tmpHeight+"px"):(a.mainWrap.style.height=a.config.height+"px",clearInterval(a.aniTimer),a.deferred.resolve())},20)},hide:function(){this.mainContent.innerHTML="",this.aniTimer&&clearInterval(this.aniTimer),this.main.hide()},getCloseHandler:function(){var a=this;return function(){a.hide()}}},b.VideoWindowMedia=b.VideoWindowMedia||c}(window,window.sinaadToolkit);
/*
//@ sourceMappingURL=Media.js.map
*/