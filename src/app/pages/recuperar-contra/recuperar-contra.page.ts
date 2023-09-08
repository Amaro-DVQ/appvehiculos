import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service'; // Ajusta la ruta correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  email: string = ''; 

  constructor(private router: Router, private helperService: HelperService) { }

  ngOnInit() { }


  enviarCorreo() {

    const emailvalidar= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.email.trim() === '') {
      this.helperService.showAlert('Por favor, ingrese su correo.', 'Error');
    } else if (!emailvalidar.test(this.email)) {
      this.helperService.showAlert('Por favor, ingrese un correo electrónico válido.', 'Error');
    } else {
      this.helperService.showAlert('Por favor, revise su correo.', 'Enviado!');
    }
  }

}
