!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{U1Ny:function(t,n,o){"use strict";o.r(n),o.d(n,"SalesModule",function(){return ee});var i,c=o("ofXK"),r=o("tyNb"),d=o("0wwu"),b=o("0IaG"),l=o("fXoL"),u=o("3Pt+"),s=o("bTqV"),m=((i=function(){function t(a,n){e(this,t),this.dialogRef=a,this.data=n,this.product={quantity:"",rate:"",description:"",id:""}}return a(t,[{key:"ngOnInit",value:function(){this.data&&this.data.product?(this.product=this.data.product,this.index=this.data.index,this.title="Update Quantity or Rate",this.mode="Update"):(this.title="Add product",this.mode="Add")}},{key:"onSubmit",value:function(){this.dialogRef.close({product:this.product,index:this.index,isEdit:!1})}}]),t}()).\u0275fac=function(e){return new(e||i)(l.Nb(b.f),l.Nb(b.a))},i.\u0275cmp=l.Hb({type:i,selectors:[["app-edit"]],decls:25,vars:6,consts:[[3,"ngSubmit"],["f","ngForm"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"form-group"],["placeholder","Quantity","name","quantity","required","",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Rate","name","rate","required","",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Description","name","rate","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer"],["type","button","mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["type","submit","color","primary","mat-raised-button","",1,"mr-2",3,"disabled"]],template:function(e,t){if(1&e&&(l.Tb(0,"form",0,1),l.dc("ngSubmit",function(){return t.onSubmit()}),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Tb(4,"div",4),l.Lc(5),l.Sb(),l.Sb(),l.Tb(6,"div",5),l.Tb(7,"div",6),l.Tb(8,"label"),l.Lc(9,"Quantity:"),l.Sb(),l.Tb(10,"input",7),l.dc("ngModelChange",function(e){return t.product.quantity=e}),l.Sb(),l.Sb(),l.Tb(11,"div",6),l.Tb(12,"label"),l.Lc(13,"Rate:"),l.Sb(),l.Tb(14,"input",8),l.dc("ngModelChange",function(e){return t.product.rate=e}),l.Sb(),l.Sb(),l.Tb(15,"div",6),l.Tb(16,"label"),l.Lc(17,"Description:"),l.Sb(),l.Tb(18,"input",9),l.dc("ngModelChange",function(e){return t.product.description=e}),l.Sb(),l.Sb(),l.Sb(),l.Tb(19,"div",10),l.Tb(20,"button",11),l.Lc(21," Cancel"),l.Sb(),l.Lc(22,"\xa0 "),l.Tb(23,"button",12),l.Lc(24),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&e){var a=l.xc(1);l.Ab(5),l.Mc(t.title),l.Ab(5),l.oc("ngModel",t.product.quantity),l.Ab(4),l.oc("ngModel",t.product.rate),l.Ab(4),l.oc("ngModel",t.product.description),l.Ab(5),l.oc("disabled",a.invalid),l.Ab(1),l.Nc(" ",t.mode," ")}},directives:[u.y,u.o,u.p,u.c,u.u,u.n,u.q,s.b,b.d],styles:[".card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),i),p=o("+0xr"),f=o("S3Px"),g=o("OlR4"),h=o("Xa2L"),S=o("kmnG"),T=o("d3UM"),y=o("qFsG"),v=o("M9IT"),M=o("FKr1"),C=o("NFeN");function L(e,t){if(1&e&&(l.Tb(0,"mat-option",52),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.oc("value",a.id),l.Ab(1),l.Nc(" ",a.name," ")}}function A(e,t){if(1&e&&(l.Tb(0,"mat-option",52),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.oc("value",a.name),l.Ab(1),l.Nc(" ",a.name," ")}}function _(e,t){if(1&e&&(l.Tb(0,"mat-option",52),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.oc("value",a.name),l.Ab(1),l.Nc(" ",a.name," ")}}function w(e,t){if(1&e&&(l.Tb(0,"mat-option",52),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.oc("value",a.id),l.Ab(1),l.Nc(" ",a.name," ")}}function q(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Name "),l.Sb())}function k(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.name," ")}}function P(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Brand "),l.Sb())}function J(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.brand?a.brand.name:""," ")}}function N(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Quantity "),l.Sb())}function R(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.quantity," ")}}function I(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Rate "),l.Sb())}function D(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.rate," ")}}function O(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Discount "),l.Sb())}function x(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.discount," ")}}function F(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Description "),l.Sb())}function Q(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Lc(1),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.Nc(" ",a.description," ")}}function $(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Image "),l.Sb())}function B(e,t){if(1&e&&(l.Tb(0,"mat-cell"),l.Ob(1,"img",53),l.Sb()),2&e){var a=t.$implicit;l.Ab(1),l.oc("src",a.image_url,l.Cc)}}function H(e,t){1&e&&(l.Tb(0,"mat-header-cell"),l.Lc(1," Actions "),l.Sb())}function j(e,t){if(1&e){var a=l.Ub();l.Tb(0,"mat-cell"),l.Tb(1,"a",54),l.dc("click",function(){l.Bc(a);var e=t.$implicit,n=t.index;return l.hc().editSaleItemsProduct(e,n)}),l.Tb(2,"mat-icon"),l.Lc(3,"create"),l.Sb(),l.Sb(),l.Lc(4,"\xa0 "),l.Tb(5,"a",55),l.dc("click",function(){l.Bc(a);var e=t.index;return l.hc().removeFromSaleItems(e)}),l.Tb(6,"mat-icon"),l.Lc(7,"delete"),l.Sb(),l.Sb(),l.Sb()}}function z(e,t){1&e&&l.Ob(0,"mat-header-row")}function U(e,t){1&e&&l.Ob(0,"mat-row")}function G(e,t){1&e&&(l.Tb(0,"div",56),l.Lc(1," No records found "),l.Sb())}function E(e,t){1&e&&(l.Tb(0,"div",56),l.Lc(1," Please wait.... "),l.Sb())}function K(e,t){1&e&&l.Ob(0,"mat-spinner",9),2&e&&l.oc("diameter",20)}var X,V,W=((X=function(){function t(a,n,o,i){e(this,t),this.productsService=a,this.commonService=n,this.cdr=o,this.dialog=i,this.company_heads=[{id:1,name:"Capri Traders"},{id:2,name:"Capri Traders2"},{id:3,name:"Capri Traders3"}],this.products=[],this.pay_modes=[{name:"credit"},{name:"cash"}],this.pay_statuses=[{name:"pending"},{name:"done"}],this.sale={company_head:"",bill_no:"",po_no:"",grn:"",party_name:"",pay_mode:"",remarks:"",pay_status:""},this.selectedProduct={id:"",quantity:"",rate:""},this.dataSource=new p.k([]),this.sale_items=[],this.pageSize=10,this.displayedColumns=["name","brand","quantity","rate","discount","description","image","actions"],this.loaded=!1}return a(t,[{key:"ngOnInit",value:function(){var e=this;this.productsService.getCreateProductParams().subscribe(function(t){e.productData=t}),this.productsService.getAllProducts().subscribe(this.handleResponse.bind(this))}},{key:"handleResponse",value:function(e){this.products=e.products,this.loaded=!0,this.cdr.detectChanges()}},{key:"onSubmit",value:function(){console.log("here",this.sale)}},{key:"addProduct",value:function(){this.dialog.open(d.a,{data:{paramsData:this.productData},disableClose:!0}).afterClosed().subscribe(function(e){})}},{key:"AddProductToSaleItems",value:function(){var e=this;if(this.selectedProduct.id){var t=this.products.find(function(t){return t.id==e.selectedProduct.id});t.rate=this.selectedProduct.rate,t.quantity=this.selectedProduct.quantity,this.sale_items.push(JSON.parse(JSON.stringify(t))),this.dataSource.data=this.sale_items,this.cdr.detectChanges(),this.loaded=!0}}},{key:"removeFromSaleItems",value:function(e){this.sale_items.splice(e,1),this.dataSource.data=this.sale_items}},{key:"editSaleItemsProduct",value:function(e,t){var a=this;this.dialog.open(m,{data:{product:e,index:t},width:"440px",disableClose:!0}).afterClosed().subscribe(function(e){e&&(a.sale_items[e.index].quantity=e.product.quantity,a.sale_items[e.index].rate=e.product.rate,a.dataSource.data=a.sale_items,a.cdr.detectChanges())})}}]),t}()).\u0275fac=function(e){return new(e||X)(l.Nb(f.a),l.Nb(g.a),l.Nb(l.h),l.Nb(b.c))},X.\u0275cmp=l.Hb({type:X,selectors:[["app-sales"]],decls:126,vars:26,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"btn","btn-primary",3,"click"],[1,"form",3,"ngSubmit"],["f","ngForm"],[1,"card-body"],[1,"card-body-progress"],[3,"diameter"],[1,"form-group","row"],[1,"col-lg-6","kt-margin-bottom-20-mobile"],[1,"mat-form-field-fluid"],["placeholder","Company Head","name","company_head","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-2","kt-margin-bottom-20-mobile"],["type","number","matInput","","placeholder","Bill/Ref#","name","bill_no",3,"ngModel","ngModelChange"],["type","number","matInput","","placeholder","PO#","name","po_no",3,"ngModel","ngModelChange"],["type","number","matInput","","placeholder","GRN","name","grn",3,"ngModel","ngModelChange"],[1,"col-lg-4","kt-margin-bottom-20-mobile"],["matInput","","type","text","placeholder","Party Name","name","sale.party_name",3,"ngModel","ngModelChange"],["placeholder","Pay Mode","name","pay_mode","required","",3,"ngModel","ngModelChange"],["placeholder","Pay Status","name","pay_status","required","",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Remarks","name","remarks",3,"ngModel","ngModelChange"],[1,"col-lg-3","kt-margin-bottom-20-mobile"],["placeholder","Enter Item","name","product","required","",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Quantity","name","quantity","required","",3,"ngModel","ngModelChange"],["matInput","","type","number","placeholder","Rate","name","rate","required","",3,"ngModel","ngModelChange"],[1,"separator","separator-dashed","my-6"],[1,"mat-table-wrapper"],[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","brand"],["matColumnDef","quantity"],["matColumnDef","rate"],["matColumnDef","discount"],["matColumnDef","description"],["matColumnDef","image"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","mat-table-message",4,"ngIf"],[1,"mat-table-bottom"],[3,"diameter",4,"ngIf"],[3,"pageSize","showFirstLastButtons","length"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"mr-2"],["type","button","mat-raised-button","","color","primary",3,"disabled"],[3,"value"],[1,"img-fluid","w-75",3,"src"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn","type","button",3,"click"],[1,"mat-table-message"]],template:function(e,t){if(1&e&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"div",2),l.Tb(3,"h3"),l.Lc(4,"Sales"),l.Sb(),l.Sb(),l.Tb(5,"div",3),l.Tb(6,"button",4),l.dc("click",function(){return t.addProduct()}),l.Lc(7," Add Product "),l.Sb(),l.Sb(),l.Sb(),l.Tb(8,"div"),l.Tb(9,"form",5,6),l.dc("ngSubmit",function(){return t.onSubmit()}),l.Tb(11,"div",7),l.Tb(12,"div",8),l.Ob(13,"mat-spinner",9),l.Sb(),l.Tb(14,"div",10),l.Tb(15,"div",11),l.Tb(16,"mat-form-field",12),l.Tb(17,"mat-select",13),l.dc("ngModelChange",function(e){return t.sale.company_head=e}),l.Jc(18,L,2,2,"mat-option",14),l.Sb(),l.Tb(19,"mat-error"),l.Lc(20," Company Head is "),l.Tb(21,"strong"),l.Lc(22,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(23,"div",15),l.Tb(24,"mat-form-field",12),l.Tb(25,"input",16),l.dc("ngModelChange",function(e){return t.sale.bill_no=e}),l.Sb(),l.Sb(),l.Sb(),l.Tb(26,"div",15),l.Tb(27,"mat-form-field",12),l.Tb(28,"input",17),l.dc("ngModelChange",function(e){return t.sale.po_no=e}),l.Sb(),l.Sb(),l.Sb(),l.Tb(29,"div",15),l.Tb(30,"mat-form-field",12),l.Tb(31,"input",18),l.dc("ngModelChange",function(e){return t.sale.grn=e}),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(32,"div",10),l.Tb(33,"div",19),l.Tb(34,"mat-form-field",12),l.Tb(35,"input",20),l.dc("ngModelChange",function(e){return t.sale.party_name=e}),l.Sb(),l.Tb(36,"mat-error"),l.Lc(37," Party Name is "),l.Tb(38,"strong"),l.Lc(39,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(40,"div",15),l.Tb(41,"mat-form-field",12),l.Tb(42,"mat-select",21),l.dc("ngModelChange",function(e){return t.sale.pay_mode=e}),l.Jc(43,A,2,2,"mat-option",14),l.Sb(),l.Tb(44,"mat-error"),l.Tb(45,"strong"),l.Lc(46,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(47,"div",15),l.Tb(48,"mat-form-field",12),l.Tb(49,"mat-select",22),l.dc("ngModelChange",function(e){return t.sale.pay_status=e}),l.Jc(50,_,2,2,"mat-option",14),l.Sb(),l.Tb(51,"mat-error"),l.Tb(52,"strong"),l.Lc(53,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(54,"div",19),l.Tb(55,"mat-form-field",12),l.Tb(56,"input",23),l.dc("ngModelChange",function(e){return t.sale.remarks=e}),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(57,"div",10),l.Tb(58,"div",24),l.Tb(59,"mat-form-field",12),l.Tb(60,"mat-select",25),l.dc("ngModelChange",function(e){return t.selectedProduct.id=e}),l.Jc(61,w,2,2,"mat-option",14),l.Sb(),l.Tb(62,"mat-error"),l.Lc(63," Item is "),l.Tb(64,"strong"),l.Lc(65,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(66,"div",15),l.Tb(67,"mat-form-field",12),l.Tb(68,"input",26),l.dc("ngModelChange",function(e){return t.selectedProduct.quantity=e}),l.Sb(),l.Tb(69,"mat-error"),l.Lc(70," Quantity is "),l.Tb(71,"strong"),l.Lc(72,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(73,"div",15),l.Tb(74,"mat-form-field",12),l.Tb(75,"input",27),l.dc("ngModelChange",function(e){return t.selectedProduct.rate=e}),l.Sb(),l.Tb(76,"mat-error"),l.Lc(77," Rate is "),l.Tb(78,"strong"),l.Lc(79,"required"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(80,"div",15),l.Tb(81,"a",4),l.dc("click",function(){return t.AddProductToSaleItems()}),l.Lc(82," Add "),l.Sb(),l.Sb(),l.Sb(),l.Ob(83,"div",28),l.Sb(),l.Tb(84,"div",7),l.Tb(85,"div",29),l.Tb(86,"mat-table",30,31),l.Rb(88,32),l.Jc(89,q,2,0,"mat-header-cell",33),l.Jc(90,k,2,1,"mat-cell",34),l.Qb(),l.Rb(91,35),l.Jc(92,P,2,0,"mat-header-cell",33),l.Jc(93,J,2,1,"mat-cell",34),l.Qb(),l.Rb(94,36),l.Jc(95,N,2,0,"mat-header-cell",33),l.Jc(96,R,2,1,"mat-cell",34),l.Qb(),l.Rb(97,37),l.Jc(98,I,2,0,"mat-header-cell",33),l.Jc(99,D,2,1,"mat-cell",34),l.Qb(),l.Rb(100,38),l.Jc(101,O,2,0,"mat-header-cell",33),l.Jc(102,x,2,1,"mat-cell",34),l.Qb(),l.Rb(103,39),l.Jc(104,F,2,0,"mat-header-cell",33),l.Jc(105,Q,2,1,"mat-cell",34),l.Qb(),l.Rb(106,40),l.Jc(107,$,2,0,"mat-header-cell",33),l.Jc(108,B,2,1,"mat-cell",34),l.Qb(),l.Rb(109,41),l.Jc(110,H,2,0,"mat-header-cell",33),l.Jc(111,j,8,0,"mat-cell",34),l.Qb(),l.Jc(112,z,1,0,"mat-header-row",42),l.Jc(113,U,1,0,"mat-row",43),l.Sb(),l.Jc(114,G,2,0,"div",44),l.Jc(115,E,2,0,"div",44),l.Sb(),l.Tb(116,"div",45),l.Jc(117,K,1,1,"mat-spinner",46),l.Ob(118,"mat-paginator",47),l.Sb(),l.Sb(),l.Tb(119,"div",48),l.Tb(120,"div",49),l.Ob(121,"div",50),l.Tb(122,"div"),l.Lc(123," \xa0 "),l.Tb(124,"button",51),l.Lc(125," Save "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&e){var a=l.xc(10);l.Ab(13),l.oc("diameter",20),l.Ab(4),l.oc("ngModel",t.sale.company_head),l.Ab(1),l.oc("ngForOf",t.company_heads),l.Ab(7),l.oc("ngModel",t.sale.bill_no),l.Ab(3),l.oc("ngModel",t.sale.po_no),l.Ab(3),l.oc("ngModel",t.sale.grn),l.Ab(4),l.oc("ngModel",t.sale.party_name),l.Ab(7),l.oc("ngModel",t.sale.pay_mode),l.Ab(1),l.oc("ngForOf",t.pay_modes),l.Ab(6),l.oc("ngModel",t.sale.pay_status),l.Ab(1),l.oc("ngForOf",t.pay_statuses),l.Ab(6),l.oc("ngModel",t.sale.remarks),l.Ab(4),l.oc("ngModel",t.selectedProduct.id),l.Ab(1),l.oc("ngForOf",t.products),l.Ab(7),l.oc("ngModel",t.selectedProduct.quantity),l.Ab(7),l.oc("ngModel",t.selectedProduct.rate),l.Ab(11),l.oc("dataSource",t.dataSource),l.Ab(26),l.oc("matHeaderRowDef",t.displayedColumns),l.Ab(1),l.oc("matRowDefColumns",t.displayedColumns),l.Ab(1),l.oc("ngIf",t.loaded&&0==t.dataSource.data.length),l.Ab(1),l.oc("ngIf",!t.loaded&&!t.dataSource.data.length),l.Ab(2),l.oc("ngIf",!t.loaded),l.Ab(1),l.oc("pageSize",t.pageSize)("showFirstLastButtons",!0)("length",t.totalProducts),l.Ab(6),l.oc("disabled",a.invalid||a.pristine)}},directives:[u.y,u.o,u.p,h.b,S.c,T.a,u.u,u.n,u.q,c.m,S.b,u.s,y.a,u.c,p.j,p.c,p.e,p.b,p.g,p.i,c.n,v.a,s.b,M.f,p.d,p.a,s.a,C.a,p.f,p.h],styles:[""]}),X),Z=o("93Pz"),Y=o("ZOsW"),ee=((V=function t(){e(this,t)}).\u0275mod=l.Lb({type:V}),V.\u0275inj=l.Kb({factory:function(e){return new(e||V)},providers:[{provide:b.b,useValue:{hasBackdrop:!0,panelClass:"mat-dialog-container-wrapper",height:"auto",width:"900px"}}],imports:[[c.c,s.c,p.l,v.b,h.a,C.b,Z.a,b.e,u.j,u.t,s.c,T.b,y.b,Y.a,r.k.forChild([{path:"",component:W,children:[{path:"",pathMatch:"full"}]}])]]}),V)}}])}();