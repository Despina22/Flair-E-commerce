"use strict";(self.webpackChunkFlair=self.webpackChunkFlair||[]).push([[944],{944:(S,d,r)=>{r.r(d),r.d(d,{ShopModule:()=>A});var a=r(6895),p=r(4006),_=r(7392),l=r(820),M=r(4466),P=r(1135),C=r(5698),t=r(8274),u=r(9762),O=r(8409),m=r(6065);function h(e,i){1&e&&(t.TgZ(0,"div",5)(1,"h2",6),t._uU(2," OH NO! YOU HAVE NO STYLES IN YOUR WISHLIST YET. TIME TO FIX THAT\u2026 "),t.qZA(),t.TgZ(3,"button",7),t._uU(4,"Start shopping"),t.qZA()())}function b(e,i){if(1&e&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function f(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",10),t._UZ(2,"img",11),t.TgZ(3,"mat-icon",12),t.NdJ("click",function(){const g=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.removeItem(g))}),t._uU(4,"close"),t.qZA(),t.TgZ(5,"h3",13),t._uU(6),t.qZA(),t.TgZ(7,"p",14),t._uU(8),t.ALo(9,"currency"),t.qZA(),t._UZ(10,"app-star-rating",15),t.TgZ(11,"div")(12,"select",16),t.NdJ("change",function(c){t.CHM(n);const g=t.oxw(2);return t.KtG(g.selectSize(c))}),t.TgZ(13,"option",17),t._uU(14,"Select a Size"),t.qZA(),t.YNc(15,b,2,2,"option",18),t.qZA()(),t.TgZ(16,"button",19),t.NdJ("click",function(){const g=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.addItem(g))}),t._uU(17,"Add"),t.qZA()(),t.BQk()}if(2&e){const n=i.$implicit;t.xp6(2),t.Q6J("src",n.imageUrl,t.LSH)("alt",n.name),t.xp6(4),t.Oqu(n.name),t.xp6(2),t.Oqu(t.xi3(9,6,n.price,"GBP")),t.xp6(2),t.Q6J("rating",n.stars),t.xp6(5),t.Q6J("ngForOf",n.size)}}function x(e,i){if(1&e&&(t.TgZ(0,"div",5)(1,"h2",6),t._uU(2,"ALL YOUR MOST-LOVED STYLES, IN ONE PLACE."),t.qZA(),t.TgZ(3,"div",8),t.YNc(4,f,18,9,"ng-container",9),t.qZA()()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.productDetail)}}function v(e,i){1&e&&(t.TgZ(0,"div",5)(1,"h2",6),t._uU(2,"YOU DON\u2019T HAVE ANYTHING IN YOUR BAG YET"),t.qZA(),t.TgZ(3,"button",7),t._uU(4,"Start shopping"),t.qZA()())}function T(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",18)(1,"div",19),t._UZ(2,"img",20),t.qZA(),t.TgZ(3,"div",21)(4,"h3",22),t._uU(5),t.qZA(),t.TgZ(6,"p",1),t._uU(7,"In stock"),t.qZA(),t.TgZ(8,"p",23),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"div",24)(12,"select",25),t.NdJ("ngModelChange",function(c){const s=t.CHM(n).$implicit;return t.KtG(s.selectedQuantity=c)})("ngModelChange",function(){t.CHM(n);const c=t.oxw(2);return t.KtG(c.onQuantityChange())}),t.TgZ(13,"option",26),t._uU(14,"1"),t.qZA(),t.TgZ(15,"option",27),t._uU(16,"2"),t.qZA(),t.TgZ(17,"option",28),t._uU(18,"3"),t.qZA(),t.TgZ(19,"option",29),t._uU(20,"4"),t.qZA(),t.TgZ(21,"option",30),t._uU(22,"5"),t.qZA()(),t.TgZ(23,"p",1),t._uU(24),t.qZA(),t.TgZ(25,"p",31),t.NdJ("click",function(){const g=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.removeItem(g))}),t._uU(26,"Remove"),t.qZA()()()}if(2&e){const n=i.$implicit;t.xp6(2),t.Q6J("src",n.product.imageUrl,t.LSH)("alt",n.product.name),t.xp6(3),t.Oqu(n.product.name),t.xp6(4),t.hij(" ",t.xi3(10,6,n.product.price*n.selectedQuantity,"GBP")," "),t.xp6(3),t.Q6J("ngModel",n.selectedQuantity),t.xp6(12),t.hij("Selected size: ",n.selectedSize,"")}}function I(e,i){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9)(2,"h1",10),t._uU(3,"YOUR BASKET"),t.qZA(),t.TgZ(4,"div",11),t.YNc(5,T,27,9,"div",12),t.TgZ(6,"p",13),t._uU(7,"Continue shopping"),t.qZA()()(),t.TgZ(8,"div",9)(9,"h1",10),t._uU(10,"Summary"),t.qZA(),t.TgZ(11,"div",14)(12,"p",15),t._uU(13,"Total"),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.ALo(16,"currency"),t.qZA()(),t.TgZ(17,"div",16)(18,"button",17),t._uU(19,"Checkout Securely"),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.bagItems),t.xp6(10),t.hij(" ",t.xi3(16,2,n.totalPrice,"GBP"),"")}}const Z=[{path:"wishlist",component:(()=>{class e{constructor(n,o){this.wishlistService=n,this.bagService=o,this.isWishlistEmpty$=new P.X(!0)}ngOnInit(){this.getWishlistItems()}checkIsWishlistEmpty(){(!this.productDetail||0===this.productDetail.length)&&this.isWishlistEmpty$.next(!0)}getWishlistItems(){this.wishlistService.getWishlist().pipe((0,C.q)(1)).subscribe(n=>{n?.length?(this.isWishlistEmpty$.next(!1),this.productDetail=n):this.checkIsWishlistEmpty()})}selectSize(n){console.log(n),n.target&&(this.selectedSize=n.target.value)}addItem(n){if(this.selectedSize){const o={product:n,selectedSize:this.selectedSize},c=this.bagService.getBagItems();c.push(o),this.bagService.updateBagItems(c)}}removeItem(n){this.wishlistService.removeFromWishlist(n).pipe((0,C.q)(1)).subscribe(()=>{this.productDetail=this.productDetail?.filter(o=>o!==n),this.checkIsWishlistEmpty()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.M),t.Y36(O.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wishlist"]],decls:10,vars:6,consts:[[1,"row"],[1,"paragraph"],[1,"wrapper"],[1,"header"],["class","container",4,"ngIf"],[1,"container"],[1,"header-2"],["routerLink","/",1,"btn"],[1,"wishlistItems"],[4,"ngFor","ngForOf"],[1,"card"],[1,"img",3,"src","alt"],[1,"icon",3,"click"],[1,"title"],[1,"price"],[3,"rating"],[1,"select-field",3,"change"],["value","size","hidden",""],[3,"value",4,"ngFor","ngForOf"],[1,"add-btn",3,"click"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"See Our Latest Arrivals"),t.qZA()(),t.TgZ(3,"div",2)(4,"h1",3),t._uU(5,"MY WISHLIST"),t.qZA(),t.YNc(6,h,5,0,"div",4),t.ALo(7,"async"),t.YNc(8,x,5,1,"div",4),t.ALo(9,"async"),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,2,o.isWishlistEmpty$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(9,4,o.isWishlistEmpty$)))},dependencies:[a.sg,a.O5,l.rH,p.YN,p.Kr,m.T,_.Hw,a.Ov,a.H9],styles:['.row[_ngcontent-%COMP%]{background-color:#212f39;padding:5px}.row[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;margin:0}.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{position:relative;overflow:hidden;color:#333;background-color:transparent;font-size:22px;font-weight:200;text-transform:uppercase;letter-spacing:10px;cursor:default;margin:20px 50px}.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;bottom:3px;border-top:1px solid #cbc7bf}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-bottom:40px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-2[_ngcontent-%COMP%]{font-size:14px;font-weight:200;letter-spacing:6px;margin-bottom:30px;text-align:center}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:16px;padding:10px 40px;background-color:#223532;border:1px solid #223532;color:#fff;text-transform:uppercase;letter-spacing:4px;font-weight:500;transition:all .4s;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#223532}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]{width:80vw;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;margin:10px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:250px;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:3%;right:5%;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:12px;font-weight:300;letter-spacing:.8px;margin-bottom:10px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:14px;letter-spacing:.8px;font-weight:300}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]{width:250px;padding:8px;margin:10px 0 20px;color:#757575}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wishlistItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]{width:250px;font-size:16px;padding:10px 40px;background-color:#223532;border:1px solid #223532;color:#fff;text-transform:uppercase;letter-spacing:4px;font-weight:500;cursor:pointer}']}),e})()},{path:"bag",component:(()=>{class e{constructor(n){this.bagService=n,this.isBagEmpty=!1,this.deliveryPrice=20}ngOnInit(){this.loadStoredItems(),this.calculateTotalPrice(),this.updateBagVisibility()}loadStoredItems(){const n=JSON.parse(localStorage.getItem("bagItems")||"[]");this.bagItems=n.map(o=>({...o,selectedQuantity:1}))}updatePriceAndTotal(){this.bagService.updateBagItems(this.bagItems),localStorage.setItem("bagItems",JSON.stringify(this.bagItems)),this.calculateTotalPrice(),this.updateBagVisibility()}calculateTotalPrice(){this.totalPrice=this.bagItems.reduce((n,o)=>n+o.product.price*o.selectedQuantity,0)}findBagItemIndex(n){return this.bagItems.findIndex(o=>o.product===n.product&&o.selectedSize===n.selectedSize)}updateBagVisibility(){this.isBagEmpty=0===this.bagItems.length}removeItem(n){const o=this.findBagItemIndex(n);-1!==o&&(this.bagItems.splice(o,1),this.updatePriceAndTotal())}onQuantityChange(){this.updatePriceAndTotal()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-to-bag"]],decls:6,vars:2,consts:[[1,"row"],[1,"paragraph"],[1,"wrapper"],["class","container",4,"ngIf"],["class","basket-wrapper",4,"ngIf"],[1,"container"],[1,"header-2"],["routerLink","/",1,"btn"],[1,"basket-wrapper"],[1,"bag-container"],[1,"header"],[1,"bagItems"],["class","bag",4,"ngFor","ngForOf"],["routerLink","/",1,"continue"],[1,"total-wrapper"],[1,"total"],[1,"btn-container"],[1,"btn"],[1,"bag"],[1,"image"],[1,"img",3,"src","alt"],[1,"product-info"],[1,"header-info"],[1,"price"],[1,"product-quantity"],["name","quantity",1,"input-field",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"remove-btn",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"See Our Latest Arrivals"),t.qZA()(),t.TgZ(3,"div",2),t.YNc(4,v,5,0,"div",3),t.YNc(5,I,20,5,"div",4),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngIf",o.isBagEmpty),t.xp6(1),t.Q6J("ngIf",!o.isBagEmpty))},dependencies:[a.sg,a.O5,l.rH,p.YN,p.Kr,p.EJ,p.JJ,p.On,a.H9],styles:['.row[_ngcontent-%COMP%]{background-color:#212f39;padding:5px}.row[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{font-size:14px;color:#fff;text-align:center;margin:0}.wrapper[_ngcontent-%COMP%]{width:95vw;margin:auto}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin:20px 0 40px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-2[_ngcontent-%COMP%]{font-size:14px;font-weight:200;letter-spacing:6px;margin-bottom:30px;text-align:center}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:16px;padding:10px 40px;background-color:#223532;border:1px solid #223532;color:#fff;text-transform:uppercase;letter-spacing:4px;font-weight:500;transition:all .4s;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#223532}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]{width:50%}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{position:relative;overflow:hidden;color:#333;background-color:transparent;font-size:22px;font-weight:200;text-transform:uppercase;letter-spacing:10px;cursor:default;margin:20px 50px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;bottom:3px;border-top:1px solid #cbc7bf}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 40px;border-bottom:1px solid #757575;margin-bottom:20px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:90px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:85px;height:120px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{width:300px;padding:0 20px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#757575;letter-spacing:1px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:end;width:220px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{width:150px;color:#757575;padding:8px 10px;margin-bottom:10px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{color:#757575;letter-spacing:1px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]{font-size:12px;font-weight:400;text-decoration:underline;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]{color:#757575;letter-spacing:1px;text-decoration:underline;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .total-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 60px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .total-wrapper[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-size:18px;text-transform:uppercase}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:40px 0}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:16px;padding:10px 40px;background-color:#223532;border:1px solid #223532;color:#fff;text-transform:uppercase;letter-spacing:4px;font-weight:500;transition:all .4s;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#223532}@media only screen and (max-width: 825px){.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]{width:80%}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:18px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]{padding:0 20px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]{width:180px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .bagItems[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{width:120px}.wrapper[_ngcontent-%COMP%]   .basket-wrapper[_ngcontent-%COMP%]   .bag-container[_ngcontent-%COMP%]   .total-wrapper[_ngcontent-%COMP%]{padding:0 40px}}']}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,y,p.u5,l.Bz,M.m,_.Ps]}),e})()}}]);