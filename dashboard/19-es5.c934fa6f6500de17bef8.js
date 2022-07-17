!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{OlR4:function(n,a,r){"use strict";r.d(a,"a",function(){return c});var i=r("fXoL"),o=r("dNgK"),c=function(){var n=function(){function n(t){e(this,n),this.snackBar=t}return t(n,[{key:"openSnackBar",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"right",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top";this.snackBar.open(e,"",{duration:n,horizontalPosition:t,verticalPosition:a})}}]),n}();return n.\u0275fac=function(e){return new(e||n)(i.ac(o.a))},n.\u0275prov=i.Jb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},bLbe:function(n,a,r){"use strict";r.r(a),r.d(a,"BrandsModule",function(){return U});var i,o,c=r("ofXK"),d=r("M9IT"),b=r("+0xr"),s=r("0IaG"),u=r("fXoL"),l=r("3Pt+"),f=r("bTqV"),m=((i=function(){function n(t,a){e(this,n),this.dialogRef=t,this.data=a,this.brand={name:"",id:""}}return t(n,[{key:"ngOnInit",value:function(){this.data&&this.data.brand?(this.brand=this.data.brand,this.title="Update brand",this.mode="Update"):(this.title="Add brand",this.mode="Add")}},{key:"onSubmit",value:function(){this.dialogRef.close({brand:this.brand,isEdit:!1})}}]),n}()).\u0275fac=function(e){return new(e||i)(u.Nb(s.f),u.Nb(s.a))},i.\u0275cmp=u.Hb({type:i,selectors:[["app-add"]],decls:15,vars:4,consts:[[3,"ngSubmit"],["f","ngForm"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"form-group"],["placeholder","Name","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","submit","color","primary","mat-raised-button","",1,"mr-2",3,"disabled"]],template:function(e,n){if(1&e&&(u.Tb(0,"form",0,1),u.dc("ngSubmit",function(){return n.onSubmit()}),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Kc(5),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Tb(7,"div",6),u.Tb(8,"input",7),u.dc("ngModelChange",function(e){return n.brand.name=e}),u.Sb(),u.Sb(),u.Sb(),u.Tb(9,"div",8),u.Tb(10,"button",9),u.Kc(11," Cancel"),u.Sb(),u.Kc(12,"\xa0 "),u.Tb(13,"button",10),u.Kc(14),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&e){var t=u.wc(1);u.Ab(5),u.Lc(n.title),u.Ab(3),u.nc("ngModel",n.brand.name),u.Ab(5),u.nc("disabled",t.invalid),u.Ab(1),u.Mc(" ",n.mode," ")}},directives:[l.y,l.o,l.p,l.c,l.u,l.n,l.q,f.b,s.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),i),p=r("zyfY"),h=r("AytR"),v=r("tk/3"),S=((o=function(){function n(t){e(this,n),this.httpClient=t}return t(n,[{key:"getBrands",value:function(){return this.httpClient.get(h.a.apiUrl+"brands")}},{key:"addBrand",value:function(e){return this.httpClient.post(h.a.apiUrl+"brands",e)}},{key:"updateBrand",value:function(e){return this.httpClient.patch(h.a.apiUrl+"brands/"+e.id,e)}},{key:"deleteBrand",value:function(e){return this.httpClient.delete(h.a.apiUrl+"brands/"+e)}}]),n}()).\u0275fac=function(e){return new(e||o)(u.ac(v.c))},o.\u0275prov=u.Jb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),g=r("OlR4"),y=r("NFeN"),w=r("Xa2L");function k(e,n){1&e&&(u.Tb(0,"mat-header-cell"),u.Kc(1," Name "),u.Sb())}function T(e,n){if(1&e&&(u.Tb(0,"mat-cell"),u.Kc(1),u.Sb()),2&e){var t=n.$implicit;u.Ab(1),u.Mc(" ",t.name," ")}}function B(e,n){1&e&&(u.Tb(0,"mat-header-cell"),u.Kc(1," Actions "),u.Sb())}function C(e,n){if(1&e){var t=u.Ub();u.Tb(0,"mat-cell"),u.Tb(1,"button",19),u.dc("click",function(){u.Ac(t);var e=n.$implicit;return u.hc().editBrand(e)}),u.Tb(2,"mat-icon"),u.Kc(3,"create"),u.Sb(),u.Sb(),u.Kc(4,"\xa0 "),u.Tb(5,"button",20),u.dc("click",function(){u.Ac(t);var e=n.$implicit,a=n.index;return u.hc().deleteBrand(e.id,a)}),u.Tb(6,"mat-icon"),u.Kc(7,"delete"),u.Sb(),u.Sb(),u.Sb()}}function I(e,n){1&e&&u.Ob(0,"mat-header-row")}function A(e,n){1&e&&u.Ob(0,"mat-row")}function K(e,n){1&e&&(u.Tb(0,"div",21),u.Kc(1," No records found "),u.Sb())}function O(e,n){1&e&&(u.Tb(0,"div",21),u.Kc(1,"Please wait...."),u.Sb())}function N(e,n){1&e&&u.Ob(0,"mat-spinner",22),2&e&&u.nc("diameter",20)}var R,D,M=function(){return[5,10,20]},P=((R=function(){function n(t,a,r,i){e(this,n),this.brandsService=t,this.commonService=a,this.cdr=r,this.dialog=i,this.displayedColumns=["name","actions"],this.brands=[],this.loaded=!1}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.brandsService.getBrands().subscribe(function(n){e.brands=n.brands,e.renderBrands(),e.loaded=!0,e.cdr.detectChanges()})}},{key:"addBrand",value:function(){var e=this;this.dialog.open(m,{width:"440px",disableClose:!0}).afterClosed().subscribe(function(n){n&&e.brandsService.addBrand(n.brand).subscribe(function(n){e.brands.push(n.brand),e.commonService.openSnackBar(n.message),e.renderBrands()},function(n){var t=n.error;e.commonService.openSnackBar(t.errors.name[0],4e3)})})}},{key:"renderBrands",value:function(){this.dataSource=new b.k(this.brands),this.dataSource.paginator=this.paginator}},{key:"editBrand",value:function(e){var n=this;this.dialog.open(m,{data:{brand:e},width:"440px",disableClose:!0}).afterClosed().subscribe(function(t){t&&n.brandsService.updateBrand(t.brand).subscribe(function(a){e=t.brand,n.commonService.openSnackBar(a.message),n.cdr.detectChanges()},function(e){var t=e.error;n.commonService.openSnackBar(t.errors.name[0],4e3)})})}},{key:"deleteBrand",value:function(e,n){var t=this;this.dialog.open(p.a,{data:{title:"Delete brand",message:"Are you sure?"},width:"440px",disableClose:!0}).afterClosed().subscribe(function(a){a&&a.confirm&&t.brandsService.deleteBrand(e).subscribe(function(e){t.brands.splice(n,1),t.renderBrands(),t.commonService.openSnackBar(e.message)},function(e){var n=e.error;t.commonService.openSnackBar(n.message,4e3)})})}}]),n}()).\u0275fac=function(e){return new(e||R)(u.Nb(S),u.Nb(g.a),u.Nb(u.h),u.Nb(s.c))},R.\u0275cmp=u.Hb({type:R,selectors:[["app-brands"]],viewQuery:function(e,n){var t;1&e&&u.Ec(d.a,!0),2&e&&u.vc(t=u.ec())&&(n.paginator=t.first)},decls:25,vars:10,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"mat-table-wrapper"],[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","pageSizeOptions","showFirstLastButtons"],["mat-icon-button","","color","primary","matTooltip","Edit user",3,"click"],["mat-icon-button","","color","warn","matTooltip","Delete user","type","button",3,"click"],[1,"mat-table-message"],[3,"diameter"]],template:function(e,n){1&e&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"h3"),u.Kc(4,"Brands"),u.Sb(),u.Sb(),u.Tb(5,"div",3),u.Tb(6,"button",4),u.dc("click",function(){return n.addBrand()}),u.Kc(7,"Add Brands"),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"div",5),u.Tb(9,"div",6),u.Tb(10,"mat-table",7,8),u.Rb(12,9),u.Ic(13,k,2,0,"mat-header-cell",10),u.Ic(14,T,2,1,"mat-cell",11),u.Qb(),u.Rb(15,12),u.Ic(16,B,2,0,"mat-header-cell",10),u.Ic(17,C,8,0,"mat-cell",11),u.Qb(),u.Ic(18,I,1,0,"mat-header-row",13),u.Ic(19,A,1,0,"mat-row",14),u.Sb(),u.Ic(20,K,2,0,"div",15),u.Ic(21,O,2,0,"div",15),u.Sb(),u.Tb(22,"div",16),u.Ic(23,N,1,1,"mat-spinner",17),u.Ob(24,"mat-paginator",18),u.Sb(),u.Sb(),u.Sb()),2&e&&(u.Ab(10),u.nc("dataSource",n.dataSource),u.Ab(8),u.nc("matHeaderRowDef",n.displayedColumns),u.Ab(1),u.nc("matRowDefColumns",n.displayedColumns),u.Ab(1),u.nc("ngIf",n.loaded&&0==n.brands.length),u.Ab(1),u.nc("ngIf",!n.loaded),u.Ab(2),u.nc("ngIf",!n.loaded),u.Ab(1),u.nc("pageSize",10)("pageSizeOptions",u.qc(9,M))("showFirstLastButtons",!0))},directives:[b.j,b.c,b.e,b.b,b.g,b.i,c.n,d.a,b.d,b.a,f.b,y.a,b.f,b.h,w.b],styles:[".mat-table-wrapper[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{min-width:800px;width:100%}"]}),R),L=r("tyNb"),x=r("kmnG"),z=r("93Pz"),U=((D=function n(){e(this,n)}).\u0275mod=u.Lb({type:D}),D.\u0275inj=u.Kb({factory:function(e){return new(e||D)},imports:[[c.c,z.a,f.c,b.l,d.b,y.b,w.a,l.j,x.e,s.e,L.k.forChild([{path:"",component:P}])]]}),D)}}])}();