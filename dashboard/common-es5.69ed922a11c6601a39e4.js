!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0wwu":function(t,i,r){"use strict";r.d(i,"a",function(){return w});var o=r("0IaG"),a=r("nYR2"),c=r("fXoL"),d=r("3Pt+"),u=r("S3Px"),b=r("OlR4"),s=r("ofXK"),l=r("Xa2L"),p=r("kmnG"),g=r("d3UM"),m=r("qFsG"),f=r("bTqV"),h=r("FKr1"),v=r("rIor");function S(e,t){if(1&e&&(c.Tb(0,"mat-option",32),c.Lc(1),c.Sb()),2&e){var n=t.$implicit;c.oc("value",n.id),c.Ab(1),c.Nc(" ",n.name," ")}}function T(e,t){if(1&e&&(c.Tb(0,"mat-option",32),c.Lc(1),c.Sb()),2&e){var n=t.$implicit;c.oc("value",n.id),c.Ab(1),c.Nc(" ",n.name," ")}}function y(e,t){1&e&&(c.Tb(0,"h3"),c.Lc(1,"Selected Image:"),c.Sb())}function C(e,t){if(1&e){var n=c.Ub();c.Tb(0,"div",35),c.Jc(1,y,2,0,"h3",37),c.Tb(2,"image-cropper",38),c.dc("imageCropped",function(e){return c.Bc(n),c.hc(2).imageCropped(e)}),c.Sb(),c.Sb()}if(2&e){var i=c.hc(2);c.Ab(1),c.oc("ngIf",i.imageChangedEvent),c.Ab(1),c.oc("imageChangedEvent",i.imageChangedEvent)("maintainAspectRatio",!0)("aspectRatio",2)("cropperMinWidth",200)("imageQuality",60)("resizeToWidth",600)}}function M(e,t){if(1&e&&(c.Tb(0,"div",39),c.Ob(1,"img",40),c.Sb()),2&e){var n=c.hc(2);c.Ab(1),c.oc("src",n.product.image,c.Cc)}}function L(e,t){if(1&e&&(c.Tb(0,"div",39),c.Ob(1,"img",40),c.Sb()),2&e){var n=c.hc(2);c.Ab(1),c.oc("src",n.product.image_url,c.Cc)}}function k(e,t){if(1&e&&(c.Tb(0,"div",33),c.Jc(1,C,3,7,"div",34),c.Tb(2,"div",35),c.Tb(3,"h3"),c.Lc(4),c.Sb(),c.Jc(5,M,2,1,"div",36),c.Jc(6,L,2,1,"div",36),c.Sb(),c.Sb()),2&e){var n=c.hc();c.Ab(1),c.oc("ngIf",n.imageChangedEvent),c.Ab(3),c.Mc(n.imageChangedEvent?"Cropped Image:":"Product"),c.Ab(1),c.oc("ngIf",n.product.image),c.Ab(1),c.oc("ngIf",n.product.image_url&&!n.product.image)}}var A=function(e){return{"card-body-progress card-body-progress-overlay":e}},w=function(){var t=function(){function t(n,i,r,o,a){e(this,t),this.dialogRef=n,this.data=i,this.fb=r,this.productsService=o,this.commonService=a,this.product={brand_id:"",name:"",description:"",purchase_price:"",sale_price:"",unit_id:"",unit_quantity:"",discount:"",order:""},this.viewLoading=!0,this.imageChangedEvent="",this.croppedImage=""}return n(t,[{key:"ngOnInit",value:function(){this.brands=this.data.paramsData.brands,this.units=this.data.paramsData.units,this.data.product&&(this.product=Object.assign({},this.data.product),this.mode="edit"),this.viewLoading=!1}},{key:"getTitle",value:function(){return this.product.id?"Edit Product '".concat(this.product.name,"'"):"New Product"}},{key:"fileChangeEvent",value:function(e){this.imageChangedEvent=e,this.product.image=""}},{key:"imageCropped",value:function(e){this.product.image=e.base64,this.product.image_url=e.base64}},{key:"imageChanged",value:function(){this.product.image=""}},{key:"onSubmit",value:function(){var e=this;this.disabled=!0,"edit"===this.mode?this.productsService.updateProduct(this.product).pipe(Object(a.a)(function(){return e.disabled=!1})).subscribe(function(t){var n=t.message;e.commonService.openSnackBar(n),e.dialogRef.close(n)},function(t){var n=t.error;e.commonService.openSnackBar(n.message,4e3)}):this.productsService.addProduct(this.product).pipe(Object(a.a)(function(){return e.disabled=!1})).subscribe(function(t){var n=t.message;e.commonService.openSnackBar(n),e.dialogRef.close(n)},function(t){var n=t.error;e.commonService.openSnackBar(n.message,4e3)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Nb(o.f),c.Nb(o.a),c.Nb(d.e),c.Nb(u.a),c.Nb(b.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-add-product-dialog"]],decls:85,vars:18,consts:[[1,"card","card-custom",3,"ngClass"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"form",3,"ngSubmit"],["f","ngForm"],[1,"card-body"],[1,"card-body-progress"],[3,"diameter"],[1,"form-group","row"],[1,"col-lg-4","kt-margin-bottom-20-mobile"],[1,"mat-form-field-fluid"],["placeholder","Select Brand","name","brand","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","matInput","","placeholder","Name","name","name","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Descrpition","rows","4","name","description",3,"ngModel","ngModelChange"],["description",""],["align","end"],[1,"separator","separator-dashed","my-6"],["matPrefix",""],["matInput","","type","number","placeholder","Purchase Price","name","purchase_price",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Sale Price","name","sale_price",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Discount","name","discount",3,"ngModel","ngModelChange"],["placeholder","Select Unit","name","unit","required","",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Unit Quantity","name","unit_quantity","required","",3,"ngModel","ngModelChange"],["type","file","name","image",3,"change"],["class","row images",4,"ngIf"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"mr-2"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","button","mat-raised-button","","color","primary",3,"disabled","click"],[3,"value"],[1,"row","images"],["class","col-lg-6 kt-margin-bottom-20-mobile",4,"ngIf"],[1,"col-lg-6","kt-margin-bottom-20-mobile"],["class","imagePreview",4,"ngIf"],[4,"ngIf"],["format","jpeg",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","cropperMinWidth","imageQuality","resizeToWidth","imageCropped"],[1,"imagePreview"],[1,"img-fluid",3,"src"]],template:function(e,t){if(1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"h3",3),c.Lc(4),c.Sb(),c.Sb(),c.Sb(),c.Tb(5,"form",4,5),c.dc("ngSubmit",function(){return t.onSubmit()}),c.Tb(7,"div",6),c.Tb(8,"div",7),c.Ob(9,"mat-spinner",8),c.Sb(),c.Tb(10,"div",9),c.Tb(11,"div",10),c.Tb(12,"mat-form-field",11),c.Tb(13,"mat-select",12),c.dc("ngModelChange",function(e){return t.product.brand_id=e}),c.Jc(14,S,2,2,"mat-option",13),c.Sb(),c.Tb(15,"mat-error"),c.Lc(16,"Brand is "),c.Tb(17,"strong"),c.Lc(18,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(19,"div",10),c.Tb(20,"mat-form-field",11),c.Tb(21,"input",14),c.dc("ngModelChange",function(e){return t.product.name=e}),c.Sb(),c.Tb(22,"mat-error"),c.Lc(23," Name is "),c.Tb(24,"strong"),c.Lc(25,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(26,"div",10),c.Tb(27,"mat-form-field",11),c.Tb(28,"textarea",15,16),c.dc("ngModelChange",function(e){return t.product.description=e}),c.Sb(),c.Tb(30,"mat-hint",17),c.Lc(31),c.Sb(),c.Tb(32,"mat-error"),c.Lc(33," Description is "),c.Tb(34,"strong"),c.Lc(35,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(36,"div",18),c.Tb(37,"div",9),c.Tb(38,"div",10),c.Tb(39,"mat-form-field",11),c.Tb(40,"span",19),c.Lc(41,"Rs: \xa0"),c.Sb(),c.Tb(42,"input",20),c.dc("ngModelChange",function(e){return t.product.purchase_price=e}),c.Sb(),c.Sb(),c.Sb(),c.Tb(43,"div",10),c.Tb(44,"mat-form-field",11),c.Tb(45,"span",19),c.Lc(46,"Rs: \xa0"),c.Sb(),c.Tb(47,"input",21),c.dc("ngModelChange",function(e){return t.product.sale_price=e}),c.Sb(),c.Sb(),c.Sb(),c.Tb(48,"div",10),c.Tb(49,"mat-form-field",11),c.Tb(50,"span",19),c.Lc(51,"Rs: \xa0"),c.Sb(),c.Tb(52,"input",22),c.dc("ngModelChange",function(e){return t.product.discount=e}),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(53,"div",18),c.Tb(54,"div",9),c.Tb(55,"div",10),c.Tb(56,"mat-form-field",11),c.Tb(57,"mat-select",23),c.dc("ngModelChange",function(e){return t.product.unit_id=e}),c.Jc(58,T,2,2,"mat-option",13),c.Sb(),c.Tb(59,"mat-error"),c.Lc(60," Unit is "),c.Tb(61,"strong"),c.Lc(62,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(63,"div",10),c.Tb(64,"mat-form-field",11),c.Tb(65,"input",24),c.dc("ngModelChange",function(e){return t.product.unit_quantity=e}),c.Sb(),c.Tb(66,"mat-error"),c.Lc(67," Unit Quantity is "),c.Tb(68,"strong"),c.Lc(69,"required"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(70,"div",18),c.Tb(71,"div",9),c.Tb(72,"div",10),c.Tb(73,"input",25),c.dc("change",function(e){return t.fileChangeEvent(e)}),c.Sb(),c.Sb(),c.Sb(),c.Ob(74,"div",18),c.Jc(75,k,7,4,"div",26),c.Sb(),c.Tb(76,"div",27),c.Tb(77,"div",28),c.Ob(78,"div",29),c.Tb(79,"div"),c.Tb(80,"button",30),c.Lc(81," Cancel"),c.Sb(),c.Lc(82,"\xa0 "),c.Tb(83,"button",31),c.dc("click",function(){return t.onSubmit()}),c.Lc(84," Save "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){var n=c.xc(6),i=c.xc(29);c.oc("ngClass",c.sc(16,A,t.viewLoading)),c.Ab(4),c.Mc(t.getTitle()),c.Ab(5),c.oc("diameter",20),c.Ab(4),c.oc("ngModel",t.product.brand_id),c.Ab(1),c.oc("ngForOf",t.brands),c.Ab(7),c.oc("ngModel",t.product.name),c.Ab(7),c.oc("ngModel",t.product.description),c.Ab(3),c.Nc(" ",i.value.length," / 400 "),c.Ab(11),c.oc("ngModel",t.product.purchase_price),c.Ab(5),c.oc("ngModel",t.product.sale_price),c.Ab(5),c.oc("ngModel",t.product.discount),c.Ab(5),c.oc("ngModel",t.product.unit_id),c.Ab(1),c.oc("ngForOf",t.units),c.Ab(7),c.oc("ngModel",t.product.unit_quantity),c.Ab(10),c.oc("ngIf",t.product.image||t.product.image_url||t.imageChangedEvent),c.Ab(8),c.oc("disabled",t.viewLoading||n.invalid||n.pristine&&!t.product.image||t.disabled)}},directives:[s.l,d.y,d.o,d.p,l.b,p.c,g.a,d.u,d.n,d.q,s.m,p.b,m.a,d.c,p.f,p.h,d.s,s.n,f.b,o.d,h.f,v.a],styles:[".images[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}"]}),t}()},S3Px:function(t,i,r){"use strict";r.d(i,"a",function(){return d});var o=r("tk/3"),a=r("AytR"),c=r("fXoL"),d=function(){var t=function(){function t(n){e(this,t),this.httpClient=n}return n(t,[{key:"getProducts",value:function(e){var t=new o.e({fromObject:e}).toString();return this.httpClient.get(a.a.apiUrl+"filtered-products?"+t)}},{key:"getAllProducts",value:function(){return this.httpClient.get(a.a.apiUrl+"all-products")}},{key:"getCreateProductParams",value:function(){return this.httpClient.get(a.a.apiUrl+"products/create")}},{key:"addProduct",value:function(e){return this.httpClient.post(a.a.apiUrl+"products",e)}},{key:"updateProduct",value:function(e){return this.httpClient.patch(a.a.apiUrl+"products/"+e.id,e)}},{key:"toggle_visibility",value:function(e){return this.httpClient.post(a.a.apiUrl+"products/toggle-visibility",{id:e})}},{key:"deleteProduct",value:function(e){return this.httpClient.delete(a.a.apiUrl+"products/"+e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(o.c))},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},tM0M:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var r=i("ofXK"),o=i("sYmb"),a=i("fXoL"),c=function(){var t=function t(){e(this,t)};return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[r.c,o.b],r.c,o.b]}),t}()},zyfY:function(t,i,r){"use strict";r.d(i,"a",function(){return d});var o=r("0IaG"),a=r("fXoL"),c=r("bTqV"),d=function(){var t=function(){function t(n,i){e(this,t),this.dialogRef=n,this.data=i}return n(t,[{key:"ngOnInit",value:function(){this.title=this.data.title,this.message=this.data.message}},{key:"yes",value:function(){this.dialogRef.close({confirm:!0})}},{key:"no",value:function(){this.dialogRef.close({confirm:!1})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Nb(o.f),a.Nb(o.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-confirmation-dialog"]],decls:13,vars:2,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"card-content"],[1,"card-footer"],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["color","primary","mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Lc(3),a.Sb(),a.Sb(),a.Tb(4,"div",3),a.Tb(5,"div",4),a.Lc(6),a.Sb(),a.Sb(),a.Tb(7,"div",5),a.Tb(8,"button",6),a.Lc(9,"No"),a.Sb(),a.Lc(10,"\xa0 "),a.Tb(11,"button",7),a.dc("click",function(){return t.yes()}),a.Lc(12,"Yes"),a.Sb(),a.Sb(),a.Sb()),2&e&&(a.Ab(3),a.Mc(t.title),a.Ab(3),a.Mc(t.message))},directives:[c.b,o.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),t}()}}])}();