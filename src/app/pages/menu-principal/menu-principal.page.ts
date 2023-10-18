import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController ,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private router:Router, private menuCtrl:MenuController, private animationCtrl:AnimationController) { }

  ngOnInit() {
  }

  atrasInicio() {
    this.router.navigateByUrl('/home')
  }

  ofrecerAuto() {
    this.router.navigateByUrl('/ofrecer-auto')
  }

  solicitarAuto() {
    this.router.navigateByUrl('/solicitar-auto')
  }

  cerrarMenu(){
    this.menuCtrl.close();
  }


}

