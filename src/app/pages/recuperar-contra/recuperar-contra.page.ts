import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  
  mensaje: string = 'Correo enviado';
  email: string = '';

  constructor(
    private router: Router,
    private helperService: HelperService,
    private afAuth: AngularFireAuth 
  ) { }

  ngOnInit() { }

  async enviarCorreo() {
    const emailValidar = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.email.trim() === '') {
      this.helperService.showAlert('Por favor, ingrese su correo.', 'Error');
    } else if (!emailValidar.test(this.email)) {
      this.helperService.showAlert('Por favor, ingrese un correo electrónico válido.', 'Error');
    } else {
      try {
        await this.afAuth.sendPasswordResetEmail(this.email);
        this.helperService.showAlert('Se ha enviado un correo para restablecer la contraseña.', 'Enviado!');
      } catch (error) {
        console.error('Error al enviar el correo de restablecimiento:', error);
        this.helperService.showAlert('Ocurrió un error al enviar el correo.', 'Error');
      }
    }
  }
}