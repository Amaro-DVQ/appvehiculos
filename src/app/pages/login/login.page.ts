import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  contrasena:string = "";

  constructor(private router:Router, private helperService:HelperService) { }

  ngOnInit() {
  }

  atrasInicio(){
    this.router.navigateByUrl('/home')
  }
 

  login() {
    if (this.email ==""){
      this.helperService.showAlert("El email es obligatorio", "Error")
      return;
    }
    if (this.contrasena ==""){
      this.helperService.showAlert("La contraseña es obligatoria", "Error")
      return;
    }

    if (this.email == "admin" && this.contrasena == "123") {
      this.router.navigateByUrl('/menu-principal')
    }else{
      this.helperService.showAlert("Usuario o contraseña incorrectos", "Error")
    }

  }
}
