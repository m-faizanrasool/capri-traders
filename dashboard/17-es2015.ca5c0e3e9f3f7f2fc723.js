(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ZOSX:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("tk/3"),i=n("AytR"),r=n("fXoL");let c=(()=>{class t{constructor(t){this.httpClient=t}getItems(t){const e=new a.e({fromObject:t}).toString();return console.log(e),this.httpClient.get(i.a.apiUrl+"filtered-items?"+e)}getAllItems(){return this.httpClient.get(i.a.apiUrl+"all-items")}getCreateItemParams(){return this.httpClient.get(i.a.apiUrl+"items/create")}addItem(t){return this.httpClient.post(i.a.apiUrl+"items",t)}updateItem(t){return this.httpClient.patch(i.a.apiUrl+"items/"+t.id,t)}toggle_visibility(t){return this.httpClient.post(i.a.apiUrl+"items/toggle-visibility",{id:t})}deleteItem(t){return this.httpClient.delete(i.a.apiUrl+"items/"+t)}}return t.\u0275fac=function(e){return new(e||t)(r.ac(a.c))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},cvkL:function(t,e,n){"use strict";n.r(e),n.d(e,"PaymentsModule",function(){return H});var a=n("ofXK"),i=n("fXoL"),r=n("tyNb");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-payments"]],decls:1,vars:0,template:function(t,e){1&t&&i.Ob(0,"router-outlet")},directives:[r.l],styles:[""]}),t})();var o=n("ZOSX"),b=n("j8vG"),d=n("vjb8"),l=n("AytR"),s=n("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t}getAll(){return this.httpClient.get(l.a.apiUrl+"sales")}get(t){return this.httpClient.get(`${l.a.apiUrl}sales/${t}`)}add(t){return this.httpClient.post(l.a.apiUrl+"payments",t)}update(t){return this.httpClient.patch(l.a.apiUrl+"payments/"+t.id,t)}delete(t){return this.httpClient.delete(l.a.apiUrl+"payments/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.ac(s.c))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("q8Zq"),u=n("0IaG"),h=n("3Pt+"),g=n("Xa2L"),f=n("kmnG"),y=n("d3UM"),S=n("qFsG"),T=n("FKr1"),v=n("NFeN"),C=n("bTqV");function _(t,e){if(1&t&&(i.Tb(0,"mat-option",41),i.Kc(1),i.Sb()),2&t){const t=e.$implicit;i.nc("value",t.id),i.Ab(1),i.Mc(" ",t.name," ")}}function A(t,e){if(1&t&&(i.Tb(0,"mat-option",41),i.Kc(1),i.Sb()),2&t){const t=e.$implicit;i.nc("value",t.name),i.Ab(1),i.Mc(" ",t.name," ")}}function M(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div"),i.Tb(1,"div",37),i.Tb(2,"div"),i.Tb(3,"div"),i.Tb(4,"strong"),i.Kc(5,"Company Head:"),i.Sb(),i.Kc(6),i.Sb(),i.Tb(7,"div"),i.Tb(8,"strong"),i.Kc(9,"Party:"),i.Sb(),i.Kc(10),i.Sb(),i.Tb(11,"div"),i.Tb(12,"strong"),i.Kc(13,"Total:"),i.Sb(),i.Kc(14),i.Sb(),i.Sb(),i.Tb(15,"div"),i.Tb(16,"span",44),i.dc("click",function(){i.Ac(t);const n=e.$implicit;return i.hc(2).addBill(n)}),i.Kc(17," Add "),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit;i.Ab(6),i.Mc(" ",t.company_head.name," "),i.Ab(4),i.Mc(" ",t.party.name,""),i.Ab(4),i.Mc(" ",t.total,"")}}function I(t,e){if(1&t&&(i.Tb(0,"div"),i.Tb(1,"h4"),i.Kc(2,"Searched Bills"),i.Sb(),i.Tb(3,"div",42),i.Ic(4,M,18,3,"div",43),i.Sb(),i.Sb()),2&t){const t=i.hc();i.Ab(4),i.nc("ngForOf",t.found_bills)}}function K(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div"),i.Tb(1,"div",37),i.Tb(2,"div"),i.Tb(3,"div"),i.Tb(4,"strong"),i.Kc(5,"Company Head:"),i.Sb(),i.Kc(6),i.Sb(),i.Tb(7,"div"),i.Tb(8,"strong"),i.Kc(9,"Party:"),i.Sb(),i.Kc(10),i.Sb(),i.Tb(11,"div"),i.Tb(12,"strong"),i.Kc(13,"Total:"),i.Sb(),i.Kc(14),i.Sb(),i.Sb(),i.Tb(15,"div"),i.Tb(16,"span",46),i.dc("click",function(){i.Ac(t);const n=e.index;return i.hc(2).removeBill(n)}),i.Tb(17,"mat-icon"),i.Kc(18,"delete"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit;i.Ab(6),i.Mc(" ",t.company_head.name," "),i.Ab(4),i.Mc(" ",t.party.name,""),i.Ab(4),i.Mc(" ",t.total,"")}}function k(t,e){if(1&t&&(i.Tb(0,"div",45),i.Tb(1,"h4"),i.Kc(2,"Attached Bills"),i.Sb(),i.Tb(3,"div",42),i.Ic(4,K,19,3,"div",43),i.Sb(),i.Sb()),2&t){const t=i.hc();i.Ab(4),i.nc("ngForOf",t.attached_bills)}}function U(t,e){if(1&t&&(i.Tb(0,"mat-option",41),i.Kc(1),i.Sb()),2&t){const t=e.$implicit;i.nc("value",t.id),i.Ab(1),i.Mc(" ",t.name," ")}}function q(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",9),i.Tb(1,"div",47),i.Tb(2,"mat-form-field",13),i.Tb(3,"input",48),i.dc("ngModelChange",function(e){return i.Ac(t),i.hc().payment.cheque_no=e}),i.Sb(),i.Tb(4,"mat-error"),i.Kc(5," Cheque no is "),i.Tb(6,"strong"),i.Kc(7,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(8,"div",47),i.Tb(9,"mat-form-field",13),i.Tb(10,"input",49),i.dc("ngModelChange",function(e){return i.Ac(t),i.hc().payment.cheque_date=e}),i.Sb(),i.Tb(11,"mat-error"),i.Kc(12," Cheque Date is "),i.Tb(13,"strong"),i.Kc(14,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.hc();i.Ab(3),i.nc("ngModel",t.payment.cheque_no),i.Ab(7),i.nc("ngModel",t.payment.cheque_date)}}function w(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",50),i.dc("click",function(){i.Ac(t);const e=i.hc(),n=i.wc(8);return e.onSubmit(n,"RECEIVED")}),i.Kc(1),i.Sb()}if(2&t){const t=i.hc(),e=i.wc(8);i.nc("disabled",e.invalid||e.pristine),i.Ab(1),i.Mc(" ","EDIT"===t.mode?"Update":"Save"," as Received ")}}function x(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",51),i.dc("click",function(){i.Ac(t);const e=i.hc(),n=i.wc(8);return e.onSubmit(n,"SENT")}),i.Kc(1),i.Sb()}if(2&t){const t=i.hc(),e=i.wc(8);i.nc("disabled",e.invalid||e.pristine),i.Ab(1),i.Mc(" ","EDIT"===t.mode?"Update":"Save"," as Sent ")}}let D=(()=>{class t{constructor(t,e,n,a,i,r,c){this.itemsService=t,this.companyHeadsService=e,this.partiesService=n,this.paymentService=a,this.saleService=i,this.dialog=r,this.cdr=c,this.company_heads=[],this.parties=[],this.mode="ADD",this.pay_types=[{name:"CASH"},{name:"CHEQUE"}],this.found_bills=[],this.attached_bills=[],this.payment={company_head_id:1,party_id:1,action:"",type:"",date:"",remarms:"",sale_ids:[],narration:"",cheque_no:"",cheque_date:"",amount:"",tax:""}}ngOnInit(){this.itemsService.getCreateItemParams().subscribe(t=>{this.itemData=t}),this.companyHeadsService.getAllCompanyHeads().subscribe(t=>{this.company_heads=t.company_heads}),this.partiesService.getAllParties().subscribe(t=>{this.parties=t.parties})}calc_tax(t){this.payment.amount&&(this.payment.tax=this.payment.amount*t/100)}find_bill(t){this.saleService.search({bill_no:t,company_head_id:this.payment.company_head_id,party_id:this.payment.party_id,pay_status:"PENDING"}).subscribe(t=>{this.found_bills=t,console.log(this.found_bills),this.cdr.detectChanges()})}addBill(t){this.attached_bills.find(e=>e.id==t.id)||this.attached_bills.push(t)}removeBill(t){this.attached_bills.splice(t,1)}onSubmit(t,e){t.invalid||(this.payment.action=e,console.log(this.payment),this.payment.sale_ids=this.attached_bills.map(t=>t.id),"ADD"===this.mode?this.paymentService.add(this.payment).subscribe(t=>{console.log(t)}):this.paymentService.update(this.payment).subscribe(t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(o.a),i.Nb(b.a),i.Nb(d.a),i.Nb(p),i.Nb(m.a),i.Nb(u.c),i.Nb(i.h))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-add-or-edit"]],decls:88,vars:18,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-toolbar"],[1,"form"],["paymentForm","ngForm"],[1,"card-body"],[1,"card-body-progress"],[3,"diameter"],[1,"row"],[1,"col-lg-7"],[1,"form-group","row"],[1,"col-lg-12","kt-margin-bottom-20-mobile"],[1,"mat-form-field-fluid"],["placeholder","Company Head","name","company_head_id","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-6","kt-margin-bottom-20-mobile"],["placeholder","Type","name","type","required","",3,"ngModel","ngModelChange"],["type","date","matInput","","placeholder","Date","name","date","required","",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Remarks","name","narration",3,"ngModel","ngModelChange"],[1,"col"],[1,"col-10","kt-margin-bottom-20-mobile"],["matInput","","type","number","placeholder","Bill #","name","bill_no",3,"disabled","keyup"],["find_bill_no",""],[4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"col-lg-4","kt-margin-bottom-20-mobile"],["placeholder","Party","name","party_id","required","",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Narration","name","remarks",3,"ngModel","ngModelChange"],["class","row",4,"ngIf"],["type","number","matInput","","placeholder","Amount","name","amount","required","",3,"ngModel","ngModelChange"],[1,"col-lg-3","kt-margin-bottom-20-mobile"],["type","number","matInput","","placeholder","Tax","name","tax",3,"ngModel","ngModelChange"],["type","number","min","0","max","100","matInput","","placeholder","Tax Percent","name","tax_percent",3,"input"],["tax_percent_input",""],[1,"separator","separator-dashed","my-6"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"mr-2"],["type","submit","mat-raised-button","","color","primary","class","mr-3",3,"disabled","click",4,"ngIf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],[3,"value"],[1,"overflow-auto","max-height-100"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"mt-5"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"col-lg-2","kt-margin-bottom-20-mobile"],["type","number","matInput","","placeholder","Cheque no","name","cheque_no","required","",3,"ngModel","ngModelChange"],["type","date","matInput","","placeholder","Cheque Date","name","date","required","",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary",1,"mr-3",3,"disabled","click"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"h3"),i.Kc(4,"Payments"),i.Sb(),i.Sb(),i.Ob(5,"div",3),i.Sb(),i.Tb(6,"div"),i.Tb(7,"form",4,5),i.Tb(9,"div",6),i.Tb(10,"div",7),i.Ob(11,"mat-spinner",8),i.Sb(),i.Tb(12,"div",9),i.Tb(13,"div",10),i.Tb(14,"div",11),i.Tb(15,"div",12),i.Tb(16,"mat-form-field",13),i.Tb(17,"mat-select",14),i.dc("ngModelChange",function(t){return e.payment.company_head_id=t}),i.Ic(18,_,2,2,"mat-option",15),i.Sb(),i.Tb(19,"mat-error"),i.Kc(20," Company Head is "),i.Tb(21,"strong"),i.Kc(22,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(23,"div",11),i.Tb(24,"div",16),i.Tb(25,"mat-form-field",13),i.Tb(26,"mat-select",17),i.dc("ngModelChange",function(t){return e.payment.type=t}),i.Ic(27,A,2,2,"mat-option",15),i.Sb(),i.Tb(28,"mat-error"),i.Tb(29,"strong"),i.Kc(30,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(31,"div",16),i.Tb(32,"mat-form-field",13),i.Tb(33,"input",18),i.dc("ngModelChange",function(t){return e.payment.date=t}),i.Sb(),i.Tb(34,"mat-error"),i.Kc(35," Date is "),i.Tb(36,"strong"),i.Kc(37,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(38,"div",11),i.Tb(39,"div",12),i.Tb(40,"mat-form-field",13),i.Tb(41,"textarea",19),i.dc("ngModelChange",function(t){return e.payment.narration=t}),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(42,"div",20),i.Tb(43,"h4"),i.Kc(44,"Find Bill"),i.Sb(),i.Tb(45,"div",11),i.Tb(46,"div",21),i.Tb(47,"mat-form-field",13),i.Tb(48,"input",22,23),i.dc("keyup",function(){i.Ac(t);const n=i.wc(49);return e.find_bill(n.value)}),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ic(50,I,5,1,"div",24),i.Ic(51,k,5,1,"div",25),i.Ob(52,"div"),i.Sb(),i.Sb(),i.Tb(53,"div",11),i.Tb(54,"div",26),i.Tb(55,"mat-form-field",13),i.Tb(56,"mat-select",27),i.dc("ngModelChange",function(t){return e.payment.party_id=t}),i.Ic(57,U,2,2,"mat-option",15),i.Sb(),i.Tb(58,"mat-error"),i.Kc(59," Party is "),i.Tb(60,"strong"),i.Kc(61,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(62,"div",26),i.Tb(63,"mat-form-field",13),i.Tb(64,"input",28),i.dc("ngModelChange",function(t){return e.payment.remarks=t}),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ic(65,q,15,2,"div",29),i.Tb(66,"div",9),i.Tb(67,"div",26),i.Tb(68,"mat-form-field",13),i.Tb(69,"input",30),i.dc("ngModelChange",function(t){return e.payment.amount=t}),i.Sb(),i.Tb(70,"mat-error"),i.Kc(71," Amount is "),i.Tb(72,"strong"),i.Kc(73,"required"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(74,"div",31),i.Tb(75,"mat-form-field",13),i.Tb(76,"input",32),i.dc("ngModelChange",function(t){return e.payment.tax=t}),i.Sb(),i.Sb(),i.Sb(),i.Tb(77,"div",31),i.Tb(78,"mat-form-field",13),i.Tb(79,"input",33,34),i.dc("input",function(){i.Ac(t);const n=i.wc(80);return e.calc_tax(n.value)}),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(81,"div",35),i.Sb(),i.Sb(),i.Tb(82,"div",36),i.Tb(83,"div",37),i.Tb(84,"div",38),i.Ic(85,w,2,2,"button",39),i.Sb(),i.Tb(86,"div"),i.Ic(87,x,2,2,"button",40),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()}2&t&&(i.Ab(11),i.nc("diameter",20),i.Ab(6),i.nc("ngModel",e.payment.company_head_id),i.Ab(1),i.nc("ngForOf",e.company_heads),i.Ab(8),i.nc("ngModel",e.payment.type),i.Ab(1),i.nc("ngForOf",e.pay_types),i.Ab(6),i.nc("ngModel",e.payment.date),i.Ab(8),i.nc("ngModel",e.payment.narration),i.Ab(7),i.nc("disabled",!e.payment.party_id||!e.payment.company_head_id),i.Ab(2),i.nc("ngIf",e.found_bills.length),i.Ab(1),i.nc("ngIf",e.attached_bills.length),i.Ab(5),i.nc("ngModel",e.payment.party_id),i.Ab(1),i.nc("ngForOf",e.parties),i.Ab(7),i.nc("ngModel",e.payment.remarks),i.Ab(1),i.nc("ngIf","CHEQUE"===e.payment.type),i.Ab(4),i.nc("ngModel",e.payment.amount),i.Ab(7),i.nc("ngModel",e.payment.tax),i.Ab(9),i.nc("ngIf","ADD"===e.mode||"EDIT"===e.mode&&"RECEIVED"==e.payment.action),i.Ab(2),i.nc("ngIf","RECEIVED"!==e.payment.action))},directives:[h.y,h.o,h.p,g.b,f.c,y.a,h.u,h.n,h.q,a.m,f.b,S.a,h.c,a.n,h.s,T.g,v.a,C.b],styles:[".max-height-100[_ngcontent-%COMP%]{max-height:100px}"]}),t})();var E=n("+0xr"),O=n("M9IT"),P=n("Dh3D");let H=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(e){return new(e||t)},imports:[[a.c,h.j,C.c,E.l,O.b,g.a,v.b,u.e,h.t,C.c,y.b,S.b,P.c,r.k.forChild([{path:"",component:c,children:[{path:"",redirectTo:"add-or-edit",pathMatch:"full"},{path:"add-or-edit",component:D}]}])]]}),t})()},j8vG:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("AytR"),i=n("fXoL"),r=n("tk/3");let c=(()=>{class t{constructor(t){this.httpClient=t}getAllCompanyHeads(){return this.httpClient.get(a.a.apiUrl+"company-heads")}addCompanyHead(t){return this.httpClient.post(a.a.apiUrl+"company-heads",t)}updateCompanyHead(t){return this.httpClient.patch(a.a.apiUrl+"company-heads/"+t.id,t)}deleteCompanyHead(t){return this.httpClient.delete(a.a.apiUrl+"company-heads/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.ac(r.c))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vjb8:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("AytR"),i=n("fXoL"),r=n("tk/3");let c=(()=>{class t{constructor(t){this.httpClient=t}getAllParties(){return this.httpClient.get(a.a.apiUrl+"parties")}addParty(t){return this.httpClient.post(a.a.apiUrl+"parties",t)}updateParty(t){return this.httpClient.patch(a.a.apiUrl+"parties/"+t.id,t)}deleteParty(t){return this.httpClient.delete(a.a.apiUrl+"parties/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.ac(r.c))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);