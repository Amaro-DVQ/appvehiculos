"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1689],{1689:(C,g,r)=>{r.r(g),r.d(g,{OfrecerAutoPageModule:()=>b});var p=r(6814),d=r(95),a=r(3582),s=r(4875),h=r(5861),e=r(5879),f=r(7862),m=r(7698),M=r(2397);const P=[{path:"",component:(()=>{var t;class i{constructor(o,n,c,l,O){this.activatedRoute=o,this.helper=n,this.auth=c,this.storageService=l,this.router=O,this.destino="",this.patenteVehiculo="",this.marcaVehiculo=""}ngOnInit(){this.parametronumeroDos=this.activatedRoute.snapshot.params.num,this.loadUserInfo()}loadUserInfo(){this.auth.authState.subscribe(o=>{o&&(this.userEmail=o.email)})}guardarDatosVehiculo(){var o=this;return(0,h.Z)(function*(){if(!(o.destino&&o.costoViaje&&o.patenteVehiculo&&o.marcaVehiculo&&o.cantidadPersonas))return void o.helper.showAlert("Todos los campos son obligatorios","Error");const n={correoUsuario:o.userEmail,destino:o.destino,costoViaje:o.costoViaje,patenteVehiculo:o.patenteVehiculo,marcaVehiculo:o.marcaVehiculo,cantidadPersonas:o.cantidadPersonas};yield o.storageService.agregarVehiculo(n),yield o.helper.showAlert("\xc9xito","Veh\xedculo agregado exitosamente"),o.router.navigate(["/menu-principal"])})()}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(f.W),e.Y36(m.zQ),e.Y36(M.V),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ofrecer-auto"]],decls:22,vars:8,consts:[[3,"translucent"],["slot","start"],["text","Atr\xe1s","default-href","/"],[2,"background-color","#1f1f1f","color","white"],[1,"card-papa",3,"fullscreen"],[1,"card-hijo"],["label","Correo de Usuario","type","text","label-placement","stacked","readonly","",3,"placeholder"],["label","Cantidad de Personas:","type","number","label-placement","floating","placeholder","N\xfamero de personas",3,"ngModel","ngModelChange"],["label","Destino:","type","text","label-placement","floating","placeholder","Metro San Joaqu\xedn",3,"ngModel","ngModelChange"],["label","Ingresa el costo del viaje:","type","number","label-placement","floating","placeholder","$1.000",3,"ngModel","ngModelChange"],["label","Patente del Veh\xedculo:","type","text","label-placement","floating","placeholder","LJ-Z0-63",3,"ngModel","ngModelChange"],["label","Marca del Veh\xedculo:","type","text","label-placement","floating","placeholder","Toyota",3,"ngModel","ngModelChange"],["expand","block","fill","outline",1,"botones",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title",3),e._uU(5,"Ofrece tu Auto"),e.qZA()()(),e.TgZ(6,"ion-content",4)(7,"ion-card",5)(8,"ion-item"),e._UZ(9,"ion-input",6),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-input",7),e.NdJ("ngModelChange",function(l){return n.cantidadPersonas=l}),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-input",8),e.NdJ("ngModelChange",function(l){return n.destino=l}),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-input",9),e.NdJ("ngModelChange",function(l){return n.costoViaje=l}),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-input",10),e.NdJ("ngModelChange",function(l){return n.patenteVehiculo=l}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-input",11),e.NdJ("ngModelChange",function(l){return n.marcaVehiculo=l}),e.qZA()(),e.TgZ(20,"ion-button",12),e.NdJ("click",function(){return n.guardarDatosVehiculo()}),e._uU(21,"Ofrecer Viaje"),e.qZA()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(3),e.s9C("placeholder",n.userEmail),e.xp6(2),e.Q6J("ngModel",n.cantidadPersonas),e.xp6(2),e.Q6J("ngModel",n.destino),e.xp6(2),e.Q6J("ngModel",n.costoViaje),e.xp6(2),e.Q6J("ngModel",n.patenteVehiculo),e.xp6(2),e.Q6J("ngModel",n.marcaVehiculo))},dependencies:[d.JJ,d.On,a.YG,a.Sm,a.PM,a.W2,a.Gu,a.pK,a.Ie,a.wd,a.sr,a.as,a.j9,a.oU],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background: #01162c}ion-toolbar[_ngcontent-%COMP%]{--background: #1f1f1f}.ion-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.botones[_ngcontent-%COMP%]{margin:1rem;display:flex;justify-content:center;align-items:center;--background: #FBBB34;--color: white;font-weight:\\a0 bold}.card-papa[_ngcontent-%COMP%]{--background: #01162c}.card-papa[_ngcontent-%COMP%]   .card-hijo[_ngcontent-%COMP%]{--background: #01162c;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:500px;min-width:350px;margin:20px auto auto;padding:250px 10px}ion-item[_ngcontent-%COMP%]{border:1px solid white;border-radius:10px;margin-bottom:10px}']}),i})()}];let A=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(P),s.Bz]}),i})(),b=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,d.u5,a.Pc,A]}),i})()}}]);