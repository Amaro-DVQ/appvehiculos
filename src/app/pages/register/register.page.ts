import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  pass:string = "";
  confirmarPass:string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.pass == this.confirmarPass && this.pass != "" && this.confirmarPass != ""){
    console.log("Usuario registrado")
    }else{
      console.log("Las contraseñas no coinciden")
    }
  }

  atrasInicio() {
    this.router.navigateByUrl('/home')
  }
}
