"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(h,l,e)=>{e.r(l),e.d(l,{HomePageModule:()=>P});var m=e(6814),a=e(3582),u=e(95),g=e(4875),n=e(5879),d=e(8082);const p=[{path:"",component:(()=>{var t;class i{constructor(o,c){this.router=o,this.animationCtrl=c}ngAfterViewInit(){this.playAnimation(".img"),this.playAnimation(".texto")}cargarLogin(){this.router.navigateByUrl("/login"),this.playAnimation(".img"),this.playAnimation(".texto")}cargarRegistro(){this.router.navigateByUrl("/registro"),this.playAnimation(".img"),this.playAnimation(".texto")}playAnimation(o){const c=document.querySelector(o);c&&this.animationCtrl.create().addElement(c).duration(1e3).fromTo("opacity",0,1).fromTo("transform","translateX(-100%)","translateX(0)").play()}}return(t=i).\u0275fac=function(o){return new(o||t)(n.Y36(g.F0),n.Y36(d.vB))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:15,vars:2,consts:[[3,"translucent"],[2,"background-color","#1f1f1f","color","white"],[1,"card-papa",3,"fullscreen"],[1,"card-hijo"],[1,"ion-container"],["src","https://i.postimg.cc/RZC8fDnD/auto-dorado.png","alt","Auto",1,"img"],[1,"texto"],[1,"botones"],[3,"click"]],template:function(o,c){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),n._uU(3,"TellevoApp"),n.qZA()()(),n.TgZ(4,"ion-content",2)(5,"ion-card",3)(6,"div",4),n._UZ(7,"ion-img",5),n.TgZ(8,"div",6),n._uU(9,"TeLlevoApp"),n.qZA()(),n.TgZ(10,"div",7)(11,"ion-button",8),n.NdJ("click",function(){return c.cargarLogin()}),n._uU(12,"Ingresar"),n.qZA(),n.TgZ(13,"ion-button",8),n.NdJ("click",function(){return c.cargarRegistro()}),n._uU(14,"Registrarse"),n.qZA()()()()),2&o&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("fullscreen",!0))},dependencies:[a.YG,a.PM,a.W2,a.Gu,a.Xz,a.wd,a.sr],styles:[".ion-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-toolbar[_ngcontent-%COMP%]{--background: #1f1f1f}ion-content[_ngcontent-%COMP%]{--background: #01162c;--overflow: hidden;background:#01162c}.card-papa[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:relative}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]{--background: #01162c;max-width:500px;min-width:300px;margin:20px auto auto;padding:10px;border-radius:10px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .ion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:10px}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .ion-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:200px;height:auto;margin-bottom:10px}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .ion-container[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{font-size:24px;color:#fff}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin-bottom:10px;--background: #FBBB34;--color: white;font-weight:700}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{--background: #FBBB34;--color: white}"]}),i})()}];let f=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(p),g.Bz]}),i})(),P=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,u.u5,a.Pc,f]}),i})()}}]);