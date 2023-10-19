import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { HelperService } from 'src/app/services/helper.service';
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

  constructor(private auth:UserService,
            private helperService: HelperService,
            private router: Router

            ) { }

  ngOnInit() {
  }

  async register(){
    console.log(this.datos);
    const loader = await this.helperService.showLoading("Cargando...");
    const res = await this.auth.register(this.datos.email, this.datos.password).catch(err => {
      console.log("Error al registrar usuario");
      this.helperService.showAlert(err.message, "Error");
    })

    await loader.dismiss();
    if(res){
      this.helperService.showAlert("Usuario registrado", "Exito");
      this.router.navigateByUrl('/login');
    }
  }

}
