// sortable v1.1.1
// git://github.com/rubaxa/Sortable.git
!function(a){"use strict";("function"==typeof define&&define.amd)?define(["jquery"],a):a(jQuery);}(function(a){"use strict";function b(a,b){this.el=a,this.options=b=b||{};var c={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1};for(var e in c)!(e in b)&&(b[e]=c[e]);var f=b.group;f&&"object"==typeof f||(f=b.group={name:f}),["pull","put"].forEach(function(a){a in f||(f[a]=!0)}),N.forEach(function(c){b[c]=d(this,b[c]||O),g(a,c.substr(2).toLowerCase(),b[c])},this),b.groups=" "+f.name+(f.put.join?" "+f.put.join(" "):"")+" ",a[G]=b;for(var h in this)"_"===h.charAt(0)&&(this[h]=d(this,this[h]));g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"dragover",this),g(a,"dragenter",this),R.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function c(a){t&&t.state!==a&&(j(t,"display",a?"none":""),!a&&t.state&&u.insertBefore(t,r),t.state=a)}function d(a,b){var c=Q.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(Q.call(arguments)))}}function e(a,b,c){if(a){c=c||I,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName.toUpperCase()==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function f(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function g(a,b,c){a.addEventListener(b,c,!1)}function h(a,b,c){a.removeEventListener(b,c,!1)}function i(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function j(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return I.defaultView&&I.defaultView.getComputedStyle?c=I.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function k(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function l(a){a.draggable=!1}function m(){L=!1}function n(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function o(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function p(a){for(var b=0;a&&(a=a.previousElementSibling);)"TEMPLATE"!==a.nodeName.toUpperCase()&&b++;return b}function q(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F={},G="Sortable"+(new Date).getTime(),H=window,I=H.document,J=H.parseInt,K=!!("draggable"in I.createElement("div")),L=!1,M=function(a,b,c,d,e,f){var g=I.createEvent("Event");g.initEvent(b,!0,!0),g.item=c||a,g.from=d||a,g.clone=t,g.oldIndex=e,g.newIndex=f,a.dispatchEvent(g)},N="onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "),O=function(){},P=Math.abs,Q=[].slice,R=[],S=q(function(a,b,c){if(c&&b.scroll){var d,e,f,g,h=b.scrollSensitivity,i=b.scrollSpeed,j=a.clientX,k=a.clientY,l=window.innerWidth,m=window.innerHeight;if(x!==c&&(w=b.scroll,x=c,w===!0)){w=c;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(d=w,e=w.getBoundingClientRect(),f=(P(e.right-j)<=h)-(P(e.left-j)<=h),g=(P(e.bottom-k)<=h)-(P(e.top-k)<=h)),f||g||(f=(h>=l-j)-(h>=j),g=(h>=m-k)-(h>=k),(f||g)&&(d=H)),(F.vx!==f||F.vy!==g||F.el!==d)&&(F.el=d,F.vx=f,F.vy=g,clearInterval(F.pid),d&&(F.pid=setInterval(function(){d===H?H.scrollTo(H.scrollX+f*i,H.scrollY+g*i):(g&&(d.scrollTop+=g*i),f&&(d.scrollLeft+=f*i))},24)))}},30);b.prototype={constructor:b,_dragStarted:function(){u&&r&&(i(r,this.options.ghostClass,!0),b.active=this,M(u,"start",r,u,A))},_onTapStart:function(a){var b=a.type,c=a.touches&&a.touches[0],d=(c||a).target,f=d,h=this.options,i=this.el,j=h.filter;if(!("mousedown"===b&&0!==a.button||h.disabled)&&(d=e(d,h.draggable,i))){if(A=p(d),"function"==typeof j){if(j.call(this,a,d,this))return M(f,"filter",d,i,A),void a.preventDefault()}else if(j&&(j=j.split(",").some(function(a){return a=e(f,a.trim(),i),a?(M(a,"filter",d,i,A),!0):void 0})))return void a.preventDefault();if((!h.handle||e(f,h.handle,i))&&d&&!r&&d.parentNode===i){D=a,u=this.el,r=d,v=r.nextSibling,C=this.options.group,r.draggable=!0,h.ignore.split(",").forEach(function(a){k(d,a.trim(),l)}),c&&(D={target:d,clientX:c.clientX,clientY:c.clientY},this._onDragStart(D,"touch"),a.preventDefault()),g(I,"mouseup",this._onDrop),g(I,"touchend",this._onDrop),g(I,"touchcancel",this._onDrop),g(r,"dragend",this),g(u,"dragstart",this._onDragStart),K||this._onDragStart(D,!0);try{I.selection?I.selection.empty():window.getSelection().removeAllRanges()}catch(m){}}}},_emulateDragOver:function(){if(E){j(s,"display","none");var a=I.elementFromPoint(E.clientX,E.clientY),b=a,c=" "+this.options.group.name,d=R.length;if(b)do{if(b[G]&&b[G].groups.indexOf(c)>-1){for(;d--;)R[d]({clientX:E.clientX,clientY:E.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);j(s,"display","")}},_onTouchMove:function(a){if(D){var b=a.touches?a.touches[0]:a,c=b.clientX-D.clientX,d=b.clientY-D.clientY,e=a.touches?"translate3d("+c+"px,"+d+"px,0)":"translate("+c+"px,"+d+"px)";E=b,j(s,"webkitTransform",e),j(s,"mozTransform",e),j(s,"msTransform",e),j(s,"transform",e),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),"clone"==C.pull&&(t=r.cloneNode(!0),j(t,"display","none"),u.insertBefore(t,r)),b){var e,f=r.getBoundingClientRect(),h=j(r);s=r.cloneNode(!0),j(s,"top",f.top-J(h.marginTop,10)),j(s,"left",f.left-J(h.marginLeft,10)),j(s,"width",f.width),j(s,"height",f.height),j(s,"opacity","0.8"),j(s,"position","fixed"),j(s,"zIndex","100000"),u.appendChild(s),e=s.getBoundingClientRect(),j(s,"width",2*f.width-e.width),j(s,"height",2*f.height-e.height),"touch"===b?(g(I,"touchmove",this._onTouchMove),g(I,"touchend",this._onDrop),g(I,"touchcancel",this._onDrop)):(g(I,"mousemove",this._onTouchMove),g(I,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else c&&(c.effectAllowed="move",d.setData&&d.setData.call(this,c,r)),g(I,"drop",this);setTimeout(this._dragStarted,0)},_onDragOver:function(a){var b,d,f,g=this.el,h=this.options,i=h.group,k=i.put,l=C===i,o=h.sort;if(r&&(void 0!==a.preventDefault&&(a.preventDefault(),!h.dragoverBubble&&a.stopPropagation()),C&&!h.disabled&&(l?o||(f=!u.contains(r)):C.pull&&k&&(C.name===i.name||k.indexOf&&~k.indexOf(C.name)))&&(void 0===a.rootEl||a.rootEl===this.el))){if(S(a,h,this.el),L)return;if(b=e(a.target,h.draggable,g),d=r.getBoundingClientRect(),f)return c(!0),void(t||v?u.insertBefore(r,t||v):o||u.appendChild(r));if(0===g.children.length||g.children[0]===s||g===a.target&&(b=n(g,a))){if(b){if(b.animated)return;q=b.getBoundingClientRect()}c(l),g.appendChild(r),this._animate(d,r),b&&this._animate(q,b)}else if(b&&!b.animated&&b!==r&&void 0!==b.parentNode[G]){y!==b&&(y=b,z=j(b));var p,q=b.getBoundingClientRect(),w=q.right-q.left,x=q.bottom-q.top,A=/left|right|inline/.test(z.cssFloat+z.display),B=b.offsetWidth>r.offsetWidth,D=b.offsetHeight>r.offsetHeight,E=(A?(a.clientX-q.left)/w:(a.clientY-q.top)/x)>.5,F=b.nextElementSibling;L=!0,setTimeout(m,30),c(l),p=A?b.previousElementSibling===r&&!B||E&&B:F!==r&&!D||E&&D,p&&!F?g.appendChild(r):b.parentNode.insertBefore(r,p?F:b),this._animate(d,r),this._animate(q,b)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();j(b,"transition","none"),j(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,j(b,"transition","all "+c+"ms"),j(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){j(b,"transition",""),j(b,"transform",""),b.animated=!1},c)}},_offUpEvents:function(){h(I,"mouseup",this._onDrop),h(I,"touchmove",this._onTouchMove),h(I,"touchend",this._onDrop),h(I,"touchcancel",this._onDrop)},_onDrop:function(a){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(F.pid),h(I,"drop",this),h(I,"mousemove",this._onTouchMove),h(c,"dragstart",this._onDragStart),this._offUpEvents(),a&&(a.preventDefault(),!d.dropBubble&&a.stopPropagation(),s&&s.parentNode.removeChild(s),r&&(h(r,"dragend",this),l(r),i(r,this.options.ghostClass,!1),u!==r.parentNode?(B=p(r),M(r.parentNode,"sort",r,u,A,B),M(u,"sort",r,u,A,B),M(r,"add",r,u,A,B),M(u,"remove",r,u,A,B)):(t&&t.parentNode.removeChild(t),r.nextSibling!==v&&(B=p(r),M(u,"update",r,u,A,B),M(u,"sort",r,u,A,B))),b.active&&M(u,"end",r,u,A,B)),u=r=s=v=t=w=x=D=E=y=z=C=b.active=null,this.save())},handleEvent:function(a){var b=a.type;"dragover"===b||"dragenter"===b?(this._onDragOver(a),f(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,d=0,f=c.length;f>d;d++)a=c[d],e(a,this.options.draggable,this.el)&&b.push(a.getAttribute("data-id")||o(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,d){var f=c.children[d];e(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return e(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el,b=this.options;N.forEach(function(c){h(a,c.substr(2).toLowerCase(),b[c])}),h(a,"mousedown",this._onTapStart),h(a,"touchstart",this._onTapStart),h(a,"dragover",this),h(a,"dragenter",this),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),R.splice(R.indexOf(this._onDragOver),1),this._onDrop(),this.el=null}},b.utils={on:g,off:h,css:j,find:k,bind:d,is:function(a,b){return!!e(a,b,a)},throttle:q,closest:e,toggleClass:i,dispatchEvent:M,index:p},b.version="1.1.1",b.create=function(a,c){return new b(a,c)},a.fn.sortable=function(c){var d;return this.each(function(){var e=a(this),f=e.data("sortable");if(f||!(c instanceof Object)&&c||(f=new b(this,c),e.data("sortable",f)),f){if("widget"===c)return f;"destroy"===c?(f.destroy(),e.removeData("sortable")):c in f&&(d=f[f].apply(f,[].slice.call(arguments,1)))}}),void 0===d?this:d}});

// sortable
	$('.sortable-list').sortable({
		draggable: '.sortable-item',
		ghostClass: 'sortable-ghost',
		handle: '.sortable-handle'
	});