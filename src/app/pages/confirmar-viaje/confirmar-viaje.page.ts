import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-confirmar-viaje',
  templateUrl: './confirmar-viaje.page.html',
  styleUrls: ['./confirmar-viaje.page.scss'],
})
export class ConfirmarViajePage implements OnInit {
  vehiculo: any;
  metodoPago: string = 'Efectivo';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const vehiculoParam = params.get('vehiculo');
      this.vehiculo = vehiculoParam ? JSON.parse(vehiculoParam) : null;
    });
  }

  confirmarViaje() {
    const mensaje = `Confirmar viaje de ${this.vehiculo.correoUsuario} por ${this.vehiculo.costoViaje} con ${this.metodoPago}`;

    const confirmacion = this.helperService.showConfirm(
      mensaje,
      'Confirmar',
      'Cancelar'
    ).then((result) => {
      if (result) {

        this.router.navigate(['/menu-principal']); 
      }
    });
  }

  habilitarCampos(): boolean {
    return this.metodoPago === 'tarjeta';
  }

}
