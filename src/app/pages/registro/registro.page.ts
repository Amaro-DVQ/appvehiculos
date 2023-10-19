import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: UserI = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPass: ""
  }

  constructor(private auth:UserService) { }

  ngOnInit() {
  }

  async register(){
    const res = await this.auth.register(this.datos.email, this.datos.password).catch(err => {
      /* this.helperService.showAlert(err.message, "Error"); */
      console.log("Error al registrar usuario");

    });
  }

}
