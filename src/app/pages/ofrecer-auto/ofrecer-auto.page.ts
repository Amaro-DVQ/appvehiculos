import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ofrecer-auto',
  templateUrl: './ofrecer-auto.page.html',
  styleUrls: ['./ofrecer-auto.page.scss'],
})
export class OfrecerAutoPage implements OnInit {
  parametronumeroDos: number | undefined;
  userEmail: any;
  destino: string = '';
  costoViaje: number | undefined;
  patenteVehiculo: string = '';
  marcaVehiculo: string = '';
  cantidadPersonas: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private helper: HelperService,
    private auth: AngularFireAuth,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.parametronumeroDos = this.activatedRoute.snapshot.params['num'];
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  async guardarDatosVehiculo() {
    if (!this.destino || !this.costoViaje || !this.patenteVehiculo || !this.marcaVehiculo || !this.cantidadPersonas) {
      this.helper.showAlert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const vehiculo = {
      correoUsuario: this.userEmail,
      destino: this.destino,
      costoViaje: this.costoViaje,
      patenteVehiculo: this.patenteVehiculo,
      marcaVehiculo: this.marcaVehiculo,
      cantidadPersonas: this.cantidadPersonas,
    };

    await this.storageService.agregarVehiculo(vehiculo);

    await this.helper.showAlert('Éxito', 'Vehículo agregado exitosamente');

    this.router.navigate(['/menu-principal']);
  }
}
