import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    email: "",
    password: ""
  }



  constructor(private router:Router, private helperService:HelperService, private auth:UserService) { }

  ngOnInit() {
  }



  async login() {

    console.log("Credenciales -> " + this.credenciales.email + " " + this.credenciales.password);
    const res = await this.auth.login(this.credenciales.email, this.credenciales.password);
    if (res) {
      console.log("Login exitoso");

    }


    /* if (this.credenciales.email ==""){
      this.helperService.showAlert("El email es obligatorio", "Error")
      return;
    }
    if (this.credenciales.password ==""){
      this.helperService.showAlert("La contraseña es obligatoria", "Error")
      return;
    }

    if (this.credenciales.email == "pgy4121-003d" && this.credenciales.password == "pgy4121-003d") {
      this.router.navigateByUrl('/menu-principal')
    }else{
      this.helperService.showAlert("Usuario o contraseña incorrectos", "Error")
    } */

  }

  recuperarContra(){
    this.router.navigateByUrl('/recuperar-contra')
  }

  registrar(){
    this.router.navigateByUrl('/register')
  }
}
