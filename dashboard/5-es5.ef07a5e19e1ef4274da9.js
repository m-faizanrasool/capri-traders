!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ILGT:function(t,e,i){"use strict";function r(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function a(t,e){return function(i,r){e(i,r,t)}}function o(t,e,i,r){return new(i||(i=Promise))(function(a,o){function n(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,s)}c((r=r.apply(t,e||[])).next())})}i.d(e,"b",function(){return r}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return o})},OlR4:function(e,r,a){"use strict";a.d(r,"a",function(){return s});var o=a("fXoL"),n=a("dNgK"),s=function(){var e=function(){function e(i){t(this,e),this.snackBar=i}return i(e,[{key:"openSnackBar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"right",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top";this.snackBar.open(t,"",{duration:e,horizontalPosition:i,verticalPosition:r})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.ac(n.a))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},rIor:function(e,r,a){"use strict";a.d(r,"a",function(){return y}),a.d(r,"b",function(){return M});var o=a("fXoL"),n=a("ILGT"),s=a("ofXK"),c=a("jhN1"),h=["wrapper"],p=["sourceImage"];function g(t,e){if(1&t){var i=o.Ub();o.Tb(0,"img",4,5),o.dc("load",function(){return o.Ac(i),o.hc().imageLoadedInView()}),o.Sb()}if(2&t){var r=o.hc();o.Fc("visibility",r.imageVisible?"visible":"hidden")("transform",r.safeTransformStyle),o.nc("src",r.safeImgDataUrl,o.Bc)}}function d(t,e){if(1&t){var i=o.Ub();o.Rb(0),o.Tb(1,"span",9),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"topleft")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"topleft")}),o.Ob(2,"span",10),o.Sb(),o.Tb(3,"span",11),o.Ob(4,"span",10),o.Sb(),o.Tb(5,"span",12),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"topright")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"topright")}),o.Ob(6,"span",10),o.Sb(),o.Tb(7,"span",13),o.Ob(8,"span",10),o.Sb(),o.Tb(9,"span",14),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottomright")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottomright")}),o.Ob(10,"span",10),o.Sb(),o.Tb(11,"span",15),o.Ob(12,"span",10),o.Sb(),o.Tb(13,"span",16),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottomleft")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottomleft")}),o.Ob(14,"span",10),o.Sb(),o.Tb(15,"span",17),o.Ob(16,"span",10),o.Sb(),o.Tb(17,"span",18),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"top")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"top")}),o.Sb(),o.Tb(18,"span",19),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"right")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"right")}),o.Sb(),o.Tb(19,"span",20),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottom")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"bottom")}),o.Sb(),o.Tb(20,"span",21),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"left")})("touchstart",function(t){o.Ac(i);var e=o.hc(2);return e.startMove(t,e.moveTypes.Resize,"left")}),o.Sb(),o.Qb()}}function u(t,e){if(1&t){var i=o.Ub();o.Tb(0,"div",6),o.dc("keydown",function(t){return o.Ac(i),o.hc().keyboardAccess(t)}),o.Tb(1,"div",7),o.dc("mousedown",function(t){o.Ac(i);var e=o.hc();return e.startMove(t,e.moveTypes.Move)})("touchstart",function(t){o.Ac(i);var e=o.hc();return e.startMove(t,e.moveTypes.Move)}),o.Sb(),o.Ic(2,d,21,0,"ng-container",8),o.Sb()}if(2&t){var r=o.hc();o.Fc("top",r.cropper.y1,"px")("left",r.cropper.x1,"px")("width",r.cropper.x2-r.cropper.x1,"px")("height",r.cropper.y2-r.cropper.y1,"px")("margin-left","center"===r.alignImage?r.marginLeft:null)("visibility",r.imageVisible?"visible":"hidden"),o.Fb("rounded",r.roundCropper),o.Ab(2),o.nc("ngIf",!r.hideResizeSquares)}}var l={Move:"move",Resize:"resize",Pinch:"pinch"},m=function(){var e=function(){function e(){t(this,e)}return i(e,[{key:"crop",value:function(t,e,i,r){var a=this.getImagePosition(t,e,i,r),o=a.x2-a.x1,n=a.y2-a.y1,s=document.createElement("canvas");s.width=o,s.height=n;var c=s.getContext("2d");if(c){null!=r.backgroundColor&&(c.fillStyle=r.backgroundColor,c.fillRect(0,0,o,n));var h=(r.transform.scale||1)*(r.transform.flipH?-1:1),p=(r.transform.scale||1)*(r.transform.flipV?-1:1),g=e.transformed;c.setTransform(h,0,0,p,g.size.width/2,g.size.height/2),c.translate(-a.x1/h,-a.y1/p),c.rotate((r.transform.rotate||0)*Math.PI/180),c.drawImage(g.image,-g.size.width/2,-g.size.height/2);var d={width:o,height:n,imagePosition:a,cropperPosition:Object.assign({},i)};r.containWithinAspectRatio&&(d.offsetImagePosition=this.getOffsetImagePosition(t,e,i,r));var u=this.getResizeRatio(o,n,r);return 1!==u&&(d.width=Math.round(o*u),d.height=r.maintainAspectRatio?Math.round(d.width/r.aspectRatio):Math.round(n*u),function(t,e,i){var r=t.width,a=t.height,o=r/(e=Math.round(e)),n=a/(i=Math.round(i)),s=Math.ceil(o/2),c=Math.ceil(n/2),h=t.getContext("2d");if(h){for(var p=h.getImageData(0,0,r,a),g=h.createImageData(e,i),d=p.data,u=g.data,l=0;l<i;l++)for(var m=0;m<e;m++){var f=4*(m+l*e),v=l*n,x=0,y=0,M=0,A=0,b=0,S=0,w=0,C=Math.floor(m*o),z=Math.floor(l*n),R=Math.ceil((m+1)*o),I=Math.ceil((l+1)*n);R=Math.min(R,r),I=Math.min(I,a);for(var P=z;P<I;P++)for(var k=Math.abs(v-P)/c,O=m*o,E=k*k,W=C;W<R;W++){var _=Math.abs(O-W)/s,H=Math.sqrt(E+_*_);if(!(H>=1)){var T=4*(W+P*r);w+=(x=2*H*H*H-3*H*H+1)*d[T+3],M+=x,d[T+3]<255&&(x=x*d[T+3]/250),A+=x*d[T],b+=x*d[T+1],S+=x*d[T+2],y+=x}}u[f]=A/y,u[f+1]=b/y,u[f+2]=S/y,u[f+3]=w/M}t.width=e,t.height=i,h.putImageData(g,0,0)}}(s,d.width,d.height)),d.base64=s.toDataURL("image/"+r.format,this.getQuality(r)),d}}},{key:"getImagePosition",value:function(t,e,i,r){var a=e.transformed.size.width/t.nativeElement.offsetWidth,o={x1:Math.round(i.x1*a),y1:Math.round(i.y1*a),x2:Math.round(i.x2*a),y2:Math.round(i.y2*a)};return r.containWithinAspectRatio||(o.x1=Math.max(o.x1,0),o.y1=Math.max(o.y1,0),o.x2=Math.min(o.x2,e.transformed.size.width),o.y2=Math.min(o.y2,e.transformed.size.height)),o}},{key:"getOffsetImagePosition",value:function(t,e,i,r){var a,o,n=e.transformed.size.width/t.nativeElement.offsetWidth;(r.canvasRotation+e.exifTransform.rotate)%2?(a=(e.transformed.size.width-e.original.size.height)/2,o=(e.transformed.size.height-e.original.size.width)/2):(a=(e.transformed.size.width-e.original.size.width)/2,o=(e.transformed.size.height-e.original.size.height)/2);var s={x1:Math.round(i.x1*n)-a,y1:Math.round(i.y1*n)-o,x2:Math.round(i.x2*n)-a,y2:Math.round(i.y2*n)-o};return r.containWithinAspectRatio||(s.x1=Math.max(s.x1,0),s.y1=Math.max(s.y1,0),s.x2=Math.min(s.x2,e.transformed.size.width),s.y2=Math.min(s.y2,e.transformed.size.height)),s}},{key:"getResizeRatio",value:function(t,e,i){var r=i.resizeToWidth/t,a=i.resizeToHeight/e,o=new Array;i.resizeToWidth>0&&o.push(r),i.resizeToHeight>0&&o.push(a);var n=0===o.length?1:Math.min.apply(Math,o);return n>1&&!i.onlyScaleDown?n:Math.min(n,1)}},{key:"getQuality",value:function(t){return Math.min(1,Math.max(0,t.imageQuality/100))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(o.Jb)({factory:function(){return new e},token:e,providedIn:"root"}),e}(),f=function(){function e(){t(this,e),this.format="png",this.maintainAspectRatio=!0,this.transform={},this.aspectRatio=1,this.resizeToWidth=0,this.resizeToHeight=0,this.cropperMinWidth=0,this.cropperMinHeight=0,this.cropperMaxHeight=0,this.cropperMaxWidth=0,this.cropperStaticWidth=0,this.cropperStaticHeight=0,this.canvasRotation=0,this.initialStepSize=3,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.autoCrop=!0,this.backgroundColor=void 0,this.containWithinAspectRatio=!1,this.hideResizeSquares=!1,this.alignImage="center",this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.cropperScaledMaxWidth=20,this.cropperScaledMaxHeight=20,this.stepSize=this.initialStepSize}return i(e,[{key:"setOptions",value:function(t){var e=this;Object.keys(t).filter(function(t){return t in e}).forEach(function(i){return e[i]=t[i]})}},{key:"setOptionsFromChanges",value:function(t){var e=this;Object.keys(t).filter(function(t){return t in e}).forEach(function(i){return e[i]=t[i].currentValue})}}]),e}(),v=function(){var e=function(){function e(){t(this,e),this.autoRotateSupported=new Promise(function(t){var e=new Image;e.onload=function(){t(1===e.width&&2===e.height)},e.src="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=="})}return i(e,[{key:"loadImageFile",value:function(t,e){var i=this;return new Promise(function(r,a){var o=new FileReader;o.onload=function(o){i.loadImage(o.target.result,t.type,e).then(r).catch(a)},o.readAsDataURL(t)})}},{key:"loadImage",value:function(t,e,i){return this.isValidImageType(e)?this.loadBase64Image(t,i):Promise.reject(new Error("Invalid image type"))}},{key:"isValidImageType",value:function(t){return/image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(t)}},{key:"loadImageFromURL",value:function(t,e){var i=this;return new Promise(function(r,a){var o=new Image;o.onerror=function(){return a},o.onload=function(){var t=document.createElement("canvas"),a=t.getContext("2d");t.width=o.width,t.height=o.height,a.drawImage(o,0,0),i.loadBase64Image(t.toDataURL(),e).then(r)},o.crossOrigin="anonymous",o.src=t})}},{key:"loadBase64Image",value:function(t,e){var i=this;return new Promise(function(e,i){var r=new Image;r.onload=function(){return e({originalImage:r,originalBase64:t})},r.onerror=i,r.src=t}).then(function(t){return i.transformImageBase64(t,e)})}},{key:"transformImageBase64",value:function(t,e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var r,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.autoRotateSupported;case 2:return r=i.sent,i.next=5,function(t){switch("string"==typeof t&&(t=function(t){var e=new DataView(function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),i=e.length,r=new Uint8Array(i),a=0;a<i;a++)r[a]=e.charCodeAt(a);return r.buffer}(t));if(65496!=e.getUint16(0,!1))return-2;for(var i=e.byteLength,r=2;r<i;){if(e.getUint16(r+2,!1)<=8)return-1;var a=e.getUint16(r,!1);if(r+=2,65505==a){if(1165519206!=e.getUint32(r+=2,!1))return-1;var o=18761==e.getUint16(r+=6,!1);r+=e.getUint32(r+4,o);var n=e.getUint16(r,o);r+=2;for(var s=0;s<n;s++)if(274==e.getUint16(r+12*s,o))return e.getUint16(r+12*s+8,o)}else{if(65280!=(65280&a))break;r+=e.getUint16(r,!1)}}return-1}(t)),t){case 2:return{rotate:0,flip:!0};case 3:return{rotate:2,flip:!1};case 4:return{rotate:2,flip:!0};case 5:return{rotate:1,flip:!0};case 6:return{rotate:1,flip:!1};case 7:return{rotate:3,flip:!0};case 8:return{rotate:3,flip:!1};default:return{rotate:0,flip:!1}}}(r?-1:t.originalBase64);case 5:return a=i.sent,i.abrupt("return",t.originalImage&&t.originalImage.complete?this.transformLoadedImage({original:{base64:t.originalBase64,image:t.originalImage,size:{width:t.originalImage.naturalWidth,height:t.originalImage.naturalHeight}},exifTransform:a},e):Promise.reject(new Error("No image loaded")));case 7:case"end":return i.stop()}},i,this)}))}},{key:"transformLoadedImage",value:function(t,e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var r,a,o,n,s,c,h;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(r=e.canvasRotation+t.exifTransform.rotate,a={width:t.original.image.naturalWidth,height:t.original.image.naturalHeight},0!==r||t.exifTransform.flip||e.containWithinAspectRatio){i.next=3;break}return i.abrupt("return",{original:{base64:t.original.base64,image:t.original.image,size:Object.assign({},a)},transformed:{base64:t.original.base64,image:t.original.image,size:Object.assign({},a)},exifTransform:t.exifTransform});case 3:return o=this.getTransformedSize(a,t.exifTransform,e),(n=document.createElement("canvas")).width=o.width,n.height=o.height,(s=n.getContext("2d")).setTransform(t.exifTransform.flip?-1:1,0,0,1,n.width/2,n.height/2),s.rotate(Math.PI*(r/2)),s.drawImage(t.original.image,-a.width/2,-a.height/2),c=n.toDataURL(),i.next=10,this.loadImageFromBase64(c);case 10:return h=i.sent,i.abrupt("return",{original:{base64:t.original.base64,image:t.original.image,size:Object.assign({},a)},transformed:{base64:c,image:h,size:{width:h.width,height:h.height}},exifTransform:t.exifTransform});case 12:case"end":return i.stop()}},i,this)}))}},{key:"loadImageFromBase64",value:function(t){return new Promise(function(e,i){var r=new Image;r.onload=function(){return e(r)},r.onerror=i,r.src=t})}},{key:"getTransformedSize",value:function(t,e,i){var r=i.canvasRotation+e.rotate;if(i.containWithinAspectRatio){if(r%2){var a=t.height/i.aspectRatio;return{width:Math.max(t.height,t.width*i.aspectRatio),height:Math.max(t.width,a)}}var o=t.width/i.aspectRatio;return{width:Math.max(t.width,t.height*i.aspectRatio),height:Math.max(t.height,o)}}return r%2?{height:t.width,width:t.height}:{width:t.width,height:t.height}}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(o.Jb)({factory:function(){return new e},token:e,providedIn:"root"}),e}(),x=function(){var e=function(){function e(){t(this,e)}return i(e,[{key:"resetCropperPosition",value:function(t,e,i){var r=t.nativeElement;if(i.cropperStaticHeight&&i.cropperStaticWidth)e.x1=0,e.x2=r.offsetWidth>i.cropperStaticWidth?i.cropperStaticWidth:r.offsetWidth,e.y1=0,e.y2=r.offsetHeight>i.cropperStaticHeight?i.cropperStaticHeight:r.offsetHeight;else{var a=Math.min(i.cropperScaledMaxWidth,r.offsetWidth),o=Math.min(i.cropperScaledMaxHeight,r.offsetHeight);if(i.maintainAspectRatio)if(a/i.aspectRatio<o){e.x1=0,e.x2=a;var n=a/i.aspectRatio;e.y1=(r.offsetHeight-n)/2,e.y2=e.y1+n}else{e.y1=0,e.y2=o;var s=o*i.aspectRatio;e.x1=(r.offsetWidth-s)/2,e.x2=e.x1+s}else e.x1=0,e.x2=a,e.y1=0,e.y2=o}}},{key:"move",value:function(t,e,i){var r=this.getClientX(t)-e.clientX,a=this.getClientY(t)-e.clientY;i.x1=e.x1+r,i.y1=e.y1+a,i.x2=e.x2+r,i.y2=e.y2+a}},{key:"resize",value:function(t,e,i,r,a){var o=this.getClientX(t)-e.clientX,n=this.getClientY(t)-e.clientY;switch(e.position){case"left":i.x1=Math.min(Math.max(e.x1+o,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth);break;case"topleft":i.x1=Math.min(Math.max(e.x1+o,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth),i.y1=Math.min(Math.max(e.y1+n,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"top":i.y1=Math.min(Math.max(e.y1+n,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"topright":i.x2=Math.max(Math.min(e.x2+o,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth),i.y1=Math.min(Math.max(e.y1+n,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"right":i.x2=Math.max(Math.min(e.x2+o,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth);break;case"bottomright":i.x2=Math.max(Math.min(e.x2+o,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth),i.y2=Math.max(Math.min(e.y2+n,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"bottom":i.y2=Math.max(Math.min(e.y2+n,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"bottomleft":i.x1=Math.min(Math.max(e.x1+o,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth),i.y2=Math.max(Math.min(e.y2+n,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"center":var s=t.scale,c=Math.min(Math.max(a.cropperScaledMinWidth,Math.abs(e.x2-e.x1)*s),a.cropperScaledMaxWidth),h=Math.min(Math.max(a.cropperScaledMinHeight,Math.abs(e.y2-e.y1)*s),a.cropperScaledMaxHeight);i.x1=e.clientX-c/2,i.x2=e.clientX+c/2,i.y1=e.clientY-h/2,i.y2=e.clientY+h/2,i.x1<0?(i.x2-=i.x1,i.x1=0):i.x2>r.width&&(i.x1-=i.x2-r.width,i.x2=r.width),i.y1<0?(i.y2-=i.y1,i.y1=0):i.y2>r.height&&(i.y1-=i.y2-r.height,i.y2=r.height)}a.maintainAspectRatio&&this.checkAspectRatio(e.position,i,r,a)}},{key:"checkAspectRatio",value:function(t,e,i,r){var a=0,o=0;switch(t){case"top":e.x2=e.x1+(e.y2-e.y1)*r.aspectRatio,a=Math.max(e.x2-i.width,0),o=Math.max(0-e.y1,0),(a>0||o>0)&&(e.x2-=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y1+=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"bottom":e.x2=e.x1+(e.y2-e.y1)*r.aspectRatio,a=Math.max(e.x2-i.width,0),o=Math.max(e.y2-i.height,0),(a>0||o>0)&&(e.x2-=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y2-=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"topleft":e.y1=e.y2-(e.x2-e.x1)/r.aspectRatio,a=Math.max(0-e.x1,0),o=Math.max(0-e.y1,0),(a>0||o>0)&&(e.x1+=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y1+=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"topright":e.y1=e.y2-(e.x2-e.x1)/r.aspectRatio,a=Math.max(e.x2-i.width,0),o=Math.max(0-e.y1,0),(a>0||o>0)&&(e.x2-=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y1+=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"right":case"bottomright":e.y2=e.y1+(e.x2-e.x1)/r.aspectRatio,a=Math.max(e.x2-i.width,0),o=Math.max(e.y2-i.height,0),(a>0||o>0)&&(e.x2-=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y2-=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"left":case"bottomleft":e.y2=e.y1+(e.x2-e.x1)/r.aspectRatio,a=Math.max(0-e.x1,0),o=Math.max(e.y2-i.height,0),(a>0||o>0)&&(e.x1+=o*r.aspectRatio>a?o*r.aspectRatio:a,e.y2-=o*r.aspectRatio>a?o:a/r.aspectRatio);break;case"center":e.x2=e.x1+(e.y2-e.y1)*r.aspectRatio,e.y2=e.y1+(e.x2-e.x1)/r.aspectRatio;var n=Math.max(0-e.x1,0),s=Math.max(e.x2-i.width,0),c=Math.max(e.y2-i.height,0),h=Math.max(0-e.y1,0);(n>0||s>0||c>0||h>0)&&(e.x1+=c*r.aspectRatio>n?c*r.aspectRatio:n,e.x2-=h*r.aspectRatio>s?h*r.aspectRatio:s,e.y1+=h*r.aspectRatio>s?h:s/r.aspectRatio,e.y2-=c*r.aspectRatio>n?c:n/r.aspectRatio)}}},{key:"getClientX",value:function(t){return(t.touches&&t.touches[0]?t.touches[0].clientX:t.clientX)||0}},{key:"getClientY",value:function(t){return(t.touches&&t.touches[0]?t.touches[0].clientY:t.clientY)||0}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(o.Jb)({factory:function(){return new e},token:e,providedIn:"root"}),e}(),y=function(){var e=function(){function e(i,r,a,n,s){t(this,e),this.cropService=i,this.cropperPositionService=r,this.loadImageService=a,this.sanitizer=n,this.cd=s,this.Hammer="undefined"!=typeof window?window.Hammer:null,this.settings=new f,this.setImageMaxSizeRetries=0,this.marginLeft="0px",this.moveTypes=l,this.imageVisible=!1,this.format=this.settings.format,this.transform={},this.maintainAspectRatio=this.settings.maintainAspectRatio,this.aspectRatio=this.settings.aspectRatio,this.resizeToWidth=this.settings.resizeToWidth,this.resizeToHeight=this.settings.resizeToHeight,this.cropperMinWidth=this.settings.cropperMinWidth,this.cropperMinHeight=this.settings.cropperMinHeight,this.cropperMaxHeight=this.settings.cropperMaxHeight,this.cropperMaxWidth=this.settings.cropperMaxWidth,this.cropperStaticWidth=this.settings.cropperStaticWidth,this.cropperStaticHeight=this.settings.cropperStaticHeight,this.canvasRotation=this.settings.canvasRotation,this.initialStepSize=this.settings.initialStepSize,this.roundCropper=this.settings.roundCropper,this.onlyScaleDown=this.settings.onlyScaleDown,this.imageQuality=this.settings.imageQuality,this.autoCrop=this.settings.autoCrop,this.backgroundColor=this.settings.backgroundColor,this.containWithinAspectRatio=this.settings.containWithinAspectRatio,this.hideResizeSquares=this.settings.hideResizeSquares,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.alignImage=this.settings.alignImage,this.disabled=!1,this.imageCropped=new o.o,this.startCropImage=new o.o,this.imageLoaded=new o.o,this.cropperReady=new o.o,this.loadImageFailed=new o.o,this.reset()}return i(e,[{key:"ngOnChanges",value:function(t){var e=this;this.onChangesUpdateSettings(t),this.onChangesInputImage(t),this.loadedImage&&this.loadedImage.original.image.complete&&(t.containWithinAspectRatio||t.canvasRotation)&&this.loadImageService.transformLoadedImage(this.loadedImage,this.settings).then(function(t){return e.setLoadedImage(t)}).catch(function(t){return e.loadImageError(t)}),t.cropper&&(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.checkCropperPosition(!1),this.doAutoCrop(),this.cd.markForCheck()),t.aspectRatio&&this.imageVisible&&this.resetCropperPosition(),t.transform&&(this.transform=this.transform||{},this.setCssTransform(),this.doAutoCrop())}},{key:"onChangesUpdateSettings",value:function(t){this.settings.setOptionsFromChanges(t),this.settings.cropperStaticHeight&&this.settings.cropperStaticWidth&&this.settings.setOptions({hideResizeSquares:!0,cropperMinWidth:this.settings.cropperStaticWidth,cropperMinHeight:this.settings.cropperStaticHeight,cropperMaxHeight:this.settings.cropperStaticHeight,cropperMaxWidth:this.settings.cropperStaticWidth,maintainAspectRatio:!1})}},{key:"onChangesInputImage",value:function(t){(t.imageChangedEvent||t.imageURL||t.imageBase64||t.imageFile)&&this.reset(),t.imageChangedEvent&&this.isValidImageChangedEvent()&&this.loadImageFile(this.imageChangedEvent.target.files[0]),t.imageURL&&this.imageURL&&this.loadImageFromURL(this.imageURL),t.imageBase64&&this.imageBase64&&this.loadBase64Image(this.imageBase64),t.imageFile&&this.imageFile&&this.loadImageFile(this.imageFile)}},{key:"isValidImageChangedEvent",value:function(){return this.imageChangedEvent&&this.imageChangedEvent.target&&this.imageChangedEvent.target.files&&this.imageChangedEvent.target.files.length>0}},{key:"setCssTransform",value:function(){this.safeTransformStyle=this.sanitizer.bypassSecurityTrustStyle("scaleX("+(this.transform.scale||1)*(this.transform.flipH?-1:1)+")scaleY("+(this.transform.scale||1)*(this.transform.flipV?-1:1)+")rotate("+(this.transform.rotate||0)+"deg)")}},{key:"ngOnInit",value:function(){this.settings.stepSize=this.initialStepSize,this.activatePinchGesture()}},{key:"reset",value:function(){this.imageVisible=!1,this.loadedImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4}},{key:"loadImageFile",value:function(t){var e=this;this.loadImageService.loadImageFile(t,this.settings).then(function(t){return e.setLoadedImage(t)}).catch(function(t){return e.loadImageError(t)})}},{key:"loadBase64Image",value:function(t){var e=this;this.loadImageService.loadBase64Image(t,this.settings).then(function(t){return e.setLoadedImage(t)}).catch(function(t){return e.loadImageError(t)})}},{key:"loadImageFromURL",value:function(t){var e=this;this.loadImageService.loadImageFromURL(t,this.settings).then(function(t){return e.setLoadedImage(t)}).catch(function(t){return e.loadImageError(t)})}},{key:"setLoadedImage",value:function(t){this.loadedImage=t,this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t.transformed.base64),this.cd.markForCheck()}},{key:"loadImageError",value:function(t){console.error(t),this.loadImageFailed.emit()}},{key:"imageLoadedInView",value:function(){var t=this;null!=this.loadedImage&&(this.imageLoaded.emit(this.loadedImage),this.setImageMaxSizeRetries=0,setTimeout(function(){return t.checkImageMaxSizeRecursively()}))}},{key:"checkImageMaxSizeRecursively",value:function(){var t=this;this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImageLoaded()?(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.resetCropperPosition(),this.cropperReady.emit(Object.assign({},this.maxSize)),this.cd.markForCheck()):(this.setImageMaxSizeRetries++,setTimeout(function(){return t.checkImageMaxSizeRecursively()},50))}},{key:"sourceImageLoaded",value:function(){return this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0}},{key:"onResize",value:function(){this.loadedImage&&(this.resizeCropperPosition(),this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize())}},{key:"activatePinchGesture",value:function(){if(this.Hammer){var t=new this.Hammer(this.wrapper.nativeElement);t.get("pinch").set({enable:!0}),t.on("pinchmove",this.onPinch.bind(this)),t.on("pinchend",this.pinchStop.bind(this)),t.on("pinchstart",this.startPinch.bind(this))}else Object(o.W)()&&console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work")}},{key:"resizeCropperPosition",value:function(){var t=this.sourceImage.nativeElement;this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)}},{key:"resetCropperPosition",value:function(){this.cropperPositionService.resetCropperPosition(this.sourceImage,this.cropper,this.settings),this.doAutoCrop(),this.imageVisible=!0}},{key:"keyboardAccess",value:function(t){this.changeKeyboardStepSize(t),this.keyboardMoveCropper(t)}},{key:"changeKeyboardStepSize",value:function(t){t.key>="1"&&t.key<="9"&&(this.settings.stepSize=+t.key)}},{key:"keyboardMoveCropper",value:function(t){if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){var e=t.shiftKey?l.Resize:l.Move,i=t.altKey?function(t){switch(t){case"ArrowUp":return"bottom";case"ArrowRight":return"left";case"ArrowDown":return"top";case"ArrowLeft":default:return"right"}}(t.key):function(t){switch(t){case"ArrowUp":return"top";case"ArrowRight":return"right";case"ArrowDown":return"bottom";case"ArrowLeft":default:return"left"}}(t.key),r=function(t,e){switch(t){case"ArrowUp":return{clientX:0,clientY:-1*e};case"ArrowRight":return{clientX:e,clientY:0};case"ArrowDown":return{clientX:0,clientY:e};case"ArrowLeft":default:return{clientX:-1*e,clientY:0}}}(t.key,this.settings.stepSize);t.preventDefault(),t.stopPropagation(),this.startMove({clientX:0,clientY:0},e,i),this.moveImg(r),this.moveStop()}}},{key:"startMove",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.moveStart&&this.moveStart.active&&this.moveStart.type===l.Pinch||(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:e,position:i,clientX:this.cropperPositionService.getClientX(t),clientY:this.cropperPositionService.getClientY(t)},this.cropper))}},{key:"startPinch",value:function(t){this.safeImgDataUrl&&(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:l.Pinch,position:"center",clientX:this.cropper.x1+(this.cropper.x2-this.cropper.x1)/2,clientY:this.cropper.y1+(this.cropper.y2-this.cropper.y1)/2},this.cropper))}},{key:"moveImg",value:function(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===l.Move?(this.cropperPositionService.move(t,this.moveStart,this.cropper),this.checkCropperPosition(!0)):this.moveStart.type===l.Resize&&(this.cropperStaticWidth||this.cropperStaticHeight||this.cropperPositionService.resize(t,this.moveStart,this.cropper,this.maxSize,this.settings),this.checkCropperPosition(!1)),this.cd.detectChanges())}},{key:"onPinch",value:function(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===l.Pinch&&(this.cropperPositionService.resize(t,this.moveStart,this.cropper,this.maxSize,this.settings),this.checkCropperPosition(!1)),this.cd.detectChanges())}},{key:"setMaxSize",value:function(){if(this.sourceImage){var t=this.sourceImage.nativeElement;this.maxSize.width=t.offsetWidth,this.maxSize.height=t.offsetHeight,this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}}},{key:"setCropperScaledMinSize",value:function(){this.loadedImage.transformed.image?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.settings.cropperScaledMinWidth=20,this.settings.cropperScaledMinHeight=20)}},{key:"setCropperScaledMinWidth",value:function(){this.settings.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.loadedImage.transformed.image.width*this.maxSize.width):20}},{key:"setCropperScaledMinHeight",value:function(){this.settings.cropperScaledMinHeight=this.maintainAspectRatio?Math.max(20,this.settings.cropperScaledMinWidth/this.aspectRatio):this.cropperMinHeight>0?Math.max(20,this.cropperMinHeight/this.loadedImage.transformed.image.height*this.maxSize.height):20}},{key:"setCropperScaledMaxSize",value:function(){if(this.loadedImage.transformed.image){var t=this.loadedImage.transformed.size.width/this.maxSize.width;this.settings.cropperScaledMaxWidth=this.cropperMaxWidth>20?this.cropperMaxWidth/t:this.maxSize.width,this.settings.cropperScaledMaxHeight=this.cropperMaxHeight>20?this.cropperMaxHeight/t:this.maxSize.height,this.maintainAspectRatio&&(this.settings.cropperScaledMaxWidth>this.settings.cropperScaledMaxHeight*this.aspectRatio?this.settings.cropperScaledMaxWidth=this.settings.cropperScaledMaxHeight*this.aspectRatio:this.settings.cropperScaledMaxWidth<this.settings.cropperScaledMaxHeight*this.aspectRatio&&(this.settings.cropperScaledMaxHeight=this.settings.cropperScaledMaxWidth/this.aspectRatio))}else this.settings.cropperScaledMaxWidth=this.maxSize.width,this.settings.cropperScaledMaxHeight=this.maxSize.height}},{key:"checkCropperPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)}},{key:"moveStop",value:function(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}},{key:"pinchStop",value:function(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}},{key:"doAutoCrop",value:function(){this.autoCrop&&this.crop()}},{key:"crop",value:function(){if(this.sourceImage&&this.sourceImage.nativeElement&&null!=this.loadedImage.transformed.image){this.startCropImage.emit();var t=this.cropService.crop(this.sourceImage,this.loadedImage,this.cropper,this.settings);return null!=t&&this.imageCropped.emit(t),t}return null}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(m),o.Nb(x),o.Nb(v),o.Nb(c.b),o.Nb(o.h))},e.\u0275cmp=o.Hb({type:e,selectors:[["image-cropper"]],viewQuery:function(t,e){var i;(1&t&&(o.Ec(h,!0),o.Oc(p,!0)),2&t)&&(o.vc(i=o.ec())&&(e.wrapper=i.first),o.vc(i=o.ec())&&(e.sourceImage=i.first))},hostVars:4,hostBindings:function(t,e){1&t&&o.dc("resize",function(){return e.onResize()},!1,o.zc)("mousemove",function(t){return e.moveImg(t)},!1,o.yc)("touchmove",function(t){return e.moveImg(t)},!1,o.yc)("mouseup",function(){return e.moveStop()},!1,o.yc)("touchend",function(){return e.moveStop()},!1,o.yc),2&t&&(o.Fc("text-align",e.alignImage),o.Fb("disabled",e.disabled))},inputs:{format:"format",transform:"transform",maintainAspectRatio:"maintainAspectRatio",aspectRatio:"aspectRatio",resizeToWidth:"resizeToWidth",resizeToHeight:"resizeToHeight",cropperMinWidth:"cropperMinWidth",cropperMinHeight:"cropperMinHeight",cropperMaxHeight:"cropperMaxHeight",cropperMaxWidth:"cropperMaxWidth",cropperStaticWidth:"cropperStaticWidth",cropperStaticHeight:"cropperStaticHeight",canvasRotation:"canvasRotation",initialStepSize:"initialStepSize",roundCropper:"roundCropper",onlyScaleDown:"onlyScaleDown",imageQuality:"imageQuality",autoCrop:"autoCrop",backgroundColor:"backgroundColor",containWithinAspectRatio:"containWithinAspectRatio",hideResizeSquares:"hideResizeSquares",cropper:"cropper",alignImage:"alignImage",disabled:"disabled",imageChangedEvent:"imageChangedEvent",imageURL:"imageURL",imageBase64:"imageBase64",imageFile:"imageFile"},outputs:{imageCropped:"imageCropped",startCropImage:"startCropImage",imageLoaded:"imageLoaded",cropperReady:"cropperReady",loadImageFailed:"loadImageFailed"},features:[o.yb],decls:5,vars:10,consts:[["wrapper",""],["class","source-image",3,"src","visibility","transform","load",4,"ngIf"],[1,"overlay"],["class","cropper","tabindex","0",3,"rounded","top","left","width","height","margin-left","visibility","keydown",4,"ngIf"],[1,"source-image",3,"src","load"],["sourceImage",""],["tabindex","0",1,"cropper",3,"keydown"],[1,"move",3,"mousedown","touchstart"],[4,"ngIf"],[1,"resize","topleft",3,"mousedown","touchstart"],[1,"square"],[1,"resize","top"],[1,"resize","topright",3,"mousedown","touchstart"],[1,"resize","right"],[1,"resize","bottomright",3,"mousedown","touchstart"],[1,"resize","bottom"],[1,"resize","bottomleft",3,"mousedown","touchstart"],[1,"resize","left"],[1,"resize-bar","top",3,"mousedown","touchstart"],[1,"resize-bar","right",3,"mousedown","touchstart"],[1,"resize-bar","bottom",3,"mousedown","touchstart"],[1,"resize-bar","left",3,"mousedown","touchstart"]],template:function(t,e){1&t&&(o.Tb(0,"div",null,0),o.Ic(2,g,2,5,"img",1),o.Ob(3,"div",2),o.Ic(4,u,3,15,"div",3),o.Sb()),2&t&&(o.Fc("background",e.imageVisible&&e.backgroundColor),o.Ab(2),o.nc("ngIf",e.safeImgDataUrl),o.Ab(1),o.Fc("width",e.maxSize.width,"px")("height",e.maxSize.height,"px")("margin-left","center"===e.alignImage?e.marginLeft:null),o.Ab(1),o.nc("ngIf",e.imageVisible))},directives:[s.n],styles:['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}'],changeDetection:0}),e}(),M=function(){var e=function e(){t(this,e)};return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[s.c]]}),e}()}}])}();