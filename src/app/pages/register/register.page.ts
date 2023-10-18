import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FirebaseApp } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:string = "";
  pass:string = "";
  confirmarPass:string = "";

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
  }

  register(){
    if(this.pass != this.confirmarPass){
      console.log("Las contraseñas no coinciden")
      return;
    } else if(this.pass.length < 6){
      console.log("La contraseña debe tener al menos 6 caracteres")
      return;
    } else if(this.email == ""){
      console.log("El email no puede estar vacío")
      return;
    } else if(this.pass == ""){
      console.log("La contraseña no puede estar vacía")
      return;
    } else if(this.confirmarPass == ""){
      console.log("La confirmación de la contraseña no puede estar vacía")
      return;
    } else if(this.pass == this.confirmarPass){
      console.log("Las contraseñas coinciden")
    } else {
      console.log("Error desconocido")
      return;
    }


  }

  atrasInicio() {
    this.router.navigateByUrl('/home')
  }
}
