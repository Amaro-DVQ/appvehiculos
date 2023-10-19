import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/app/models/models';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  datos: UserI = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPass: ""
  }

  constructor(private router: Router, private auth:UserService) { }

  ngOnInit() {
  }

  async register(){
    /* console.log("Estos son los datos ingresado --> "+ this.datos);
    this.userService.register(this.datos).then(res => {
      this.router.navigateByUrl('/home');
    }).catch(err => alert('Los datos ingresados no son correctos')); */

    /* const res = await this.auth.register(this.datos.email, this.datos.password).catch(err => {
      /* this.helperService.showAlert(err.message, "Error");
      console.log("Error al registrar usuario");

    }); */

  }

  atrasInicio() {
    this.router.navigateByUrl('/home')
  }
}
