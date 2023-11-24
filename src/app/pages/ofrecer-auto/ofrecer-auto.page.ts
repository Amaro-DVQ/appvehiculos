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
  origen: string = '';
  destino: string = '';
  costoViaje: string = '';
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
    if (
      !this.origen ||
      !this.destino ||
      !this.costoViaje ||
      !this.patenteVehiculo ||
      !this.marcaVehiculo ||
      !this.cantidadPersonas
    ) {
      this.helper.showAlert('Todos los campos son obligatorios', 'Error');
      return;
    }

    const patenteRegex = /^[A-Za-z0-9]+$/;
    if (!patenteRegex.test(this.patenteVehiculo) || this.patenteVehiculo.length !== 6) {
      this.helper.showAlert('La patente debe contener exactamente 6 caracteres alfanuméricos', 'Error');
      return;
    }


    if (this.origen.length === 0 || this.destino.length === 0) {
      this.helper.showAlert('Los campos Origen y Destino deben tener al menos un carácter', 'Error');
      return;
    }

    const formattedPatente = this.formatPatente(this.patenteVehiculo);
    const formattedCosto = this.formatCosto(this.costoViaje);
    const formattedMarca = this.formatMarca(this.marcaVehiculo);
    const formattedOrigen = this.formatOrigenDestino(this.origen);
    const formattedDestino = this.formatOrigenDestino(this.destino);

    const vehiculo = {
      correoUsuario: this.userEmail,
      origen: formattedOrigen,
      destino: formattedDestino,
      costoViaje: formattedCosto,
      patenteVehiculo: formattedPatente,
      marcaVehiculo: formattedMarca,
      cantidadPersonas: this.cantidadPersonas,
    };

    await this.storageService.agregarVehiculo(vehiculo);

    await this.helper.showAlert('Éxito', 'Vehículo agregado exitosamente');

    this.router.navigate(['/menu-principal']);
  }

  formatPatente(patente: string): string {
    return patente.replace(/(.{2})/g, '$1-').slice(0, -1);
  }

  formatCosto(costo: string): string {
    const numberCosto = Number(costo);
    return '$' + numberCosto.toLocaleString();
  }

  formatMarca(marca: string): string {
    return marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase();
  }

  formatOrigenDestino(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }
}
