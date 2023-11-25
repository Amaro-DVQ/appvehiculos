import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { StorageService } from 'src/app/services/storage.service';

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

  title = 'Registro';
  regiones: Region[] = [];
  comunas: Comuna[] = [];
  regionSeleccionado: number = 0;
  comunaSeleccionada: number = 0;

  constructor(
    private auth: UserService,
    private helperService: HelperService,
    private router: Router,
    private locationService: LocationService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.cargarRegion();
    this.cargarComuna();
  }

  async register() {
    const loader = await this.helperService.showLoading("Cargando...");

  
    if (
      this.datos.nombre === "" ||
      this.datos.apellido === "" ||
      this.datos.email === "" ||
      this.datos.password === "" ||
      this.datos.confirmarPass === ""
    ) {
      await loader.dismiss();
      this.helperService.showAlert("Rellene todos los campos", "Error");
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.datos.email)) {
      await loader.dismiss();
      this.helperService.showAlert("Ingrese un correo electrónico válido", "Error");
      return;
    }


    if (this.datos.password.length < 6) {
      await loader.dismiss();
      this.helperService.showAlert("La contraseña debe tener al menos 6 caracteres", "Error");
      return;
    }

    if (this.datos.password !== this.datos.confirmarPass) {
      await loader.dismiss();
      this.helperService.showAlert("Las contraseñas no coinciden", "Error");
      return;
    }

    const res = await this.auth.register(this.datos.email, this.datos.password).catch(err => {
      this.helperService.showAlert(err.message, "Error");
    });

    if (res) {
      this.storageService.agregarUsuario({
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        email: this.datos.email,
        region: this.regionSeleccionado,
        comuna: this.comunaSeleccionada,
      });

      this.helperService.showAlert("Usuario registrado", "Exito");
      this.router.navigateByUrl('/login');
    }

    await loader.dismiss();
  }

  async cargarRegion() {
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
    console.log("REGION", this.regiones);
  }

  async cargarComuna() {
    const req = await this.locationService.getComuna(this.regionSeleccionado);
    this.comunas = req.data;
  }
}
