import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar-auto',
  templateUrl: './solicitar-auto.page.html',
  styleUrls: ['./solicitar-auto.page.scss'],
})
export class SolicitarAutoPage implements OnInit {
  parametronumeroUno: number | undefined;
  vehiculos: any[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    this.loadVehiculos();
  }

  async loadVehiculos() {
    this.vehiculos = await this.storageService.obtenerVehiculos();
  }

  seleccionarViaje(vehiculo: any) {
    this.navCtrl.navigateForward(['/confirmar-viaje', { vehiculo: JSON.stringify(vehiculo) }]);
  }
} 

