import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    this.playAnimation('.img'); // Animación para la imagen
    this.playAnimation('.texto'); // Animación para el texto
  }

  cargarLogin() {
    this.router.navigateByUrl('/login');
    this.playAnimation('.img');
    this.playAnimation('.texto');
  }

  cargarRegistro() {
    this.router.navigateByUrl('register');
    this.playAnimation('.img');
    this.playAnimation('.texto');
  }

  playAnimation(elementSelector: string) {
    const element = document.querySelector(elementSelector);

    if (element) {
      const animation: Animation = this.animationCtrl.create()
        .addElement(element)
        .duration(1000)
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

      animation.play();
    }
  }
}
