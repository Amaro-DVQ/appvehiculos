"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5808],{5808:(v,s,e)=>{e.r(s),e.d(s,{PerfilPageModule:()=>A});var f=e(6814),g=e(95),a=e(3582),d=e(4875),l=e(5861),o=e(5879),P=e(2397),m=e(7698);function p(n,i){if(1&n&&(o.TgZ(0,"ion-card")(1,"ion-card-content")(2,"ion-card-title"),o._uU(3,"Nombre"),o.qZA(),o.TgZ(4,"ion-card-subtitle"),o._uU(5),o.qZA()()()),2&n){const t=o.oxw(2);o.xp6(5),o.Oqu(t.usuario.nombre)}}function Z(n,i){if(1&n&&(o.TgZ(0,"ion-card")(1,"ion-card-content")(2,"ion-card-title"),o._uU(3,"Apellido"),o.qZA(),o.TgZ(4,"ion-card-subtitle"),o._uU(5),o.qZA()()()),2&n){const t=o.oxw(2);o.xp6(5),o.Oqu(t.usuario.apellido)}}function x(n,i){if(1&n&&(o.TgZ(0,"ion-card")(1,"ion-card-content")(2,"ion-card-title"),o._uU(3,"Comuna"),o.qZA(),o.TgZ(4,"ion-card-subtitle"),o._uU(5),o.qZA()()()),2&n){const t=o.oxw(2);o.xp6(5),o.Oqu(t.usuario.comuna)}}function h(n,i){if(1&n&&(o.TgZ(0,"ion-card")(1,"ion-card-content")(2,"ion-card-title"),o._uU(3,"Regi\xf3n"),o.qZA(),o.TgZ(4,"ion-card-subtitle"),o._uU(5),o.qZA()()()),2&n){const t=o.oxw(2);o.xp6(5),o.Oqu(t.usuario.region)}}function _(n,i){if(1&n&&(o.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-content")(3,"ion-card-title"),o._uU(4,"Correo"),o.qZA(),o.TgZ(5,"ion-card-subtitle"),o._uU(6),o.qZA()()(),o.YNc(7,p,6,1,"ion-card",4),o.YNc(8,Z,6,1,"ion-card",4),o.YNc(9,x,6,1,"ion-card",4),o.YNc(10,h,6,1,"ion-card",4),o.qZA()),2&n){const t=o.oxw();o.xp6(6),o.Oqu(t.userEmail),o.xp6(1),o.Q6J("ngIf",t.usuario.nombre),o.xp6(1),o.Q6J("ngIf",t.usuario.apellido),o.xp6(1),o.Q6J("ngIf",t.usuario.comuna),o.xp6(1),o.Q6J("ngIf",t.usuario.region)}}const T=[{path:"",component:(()=>{var n;class i{constructor(r,c){this.storage=r,this.auth=c}ngOnInit(){this.loadUserInfo()}loadUserInfo(){var r=this;return(0,l.Z)(function*(){r.auth.authState.subscribe(function(){var c=(0,l.Z)(function*(u){console.log("Usuario autenticado:",u),u&&(r.userEmail=u.email,yield r.cargarInformacionUsuario())});return function(u){return c.apply(this,arguments)}}())})()}cargarInformacionUsuario(){var r=this;return(0,l.Z)(function*(){try{r.usuario=yield r.storage.obtenerUsuarioPorCorreo(r.userEmail),console.log("Informaci\xf3n del usuario:",r.usuario)}catch(c){console.error("Error al cargar la informaci\xf3n del usuario:",c)}})()}}return(n=i).\u0275fac=function(r){return new(r||n)(o.Y36(P.V),o.Y36(m.zQ))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-perfil"]],decls:7,vars:2,consts:[[3,"translucent"],["slot","start"],["text","Atr\xe1s","default-href","/"],[2,"background-color","#1f1f1f","color","white"],[4,"ngIf"]],template:function(r,c){1&r&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o.TgZ(4,"ion-title",3),o._uU(5,"Perfil"),o.qZA()()(),o.YNc(6,_,11,5,"ion-content",4)),2&r&&(o.Q6J("translucent",!0),o.xp6(6),o.Q6J("ngIf",c.usuario))},dependencies:[f.O5,a.Sm,a.PM,a.FN,a.tO,a.Dq,a.W2,a.Gu,a.wd,a.sr,a.oU],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: #1f1f1f}"]}),i})()}];let U=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.Bz.forChild(T),d.Bz]}),i})(),A=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[f.ez,g.u5,a.Pc,U]}),i})()}}]);