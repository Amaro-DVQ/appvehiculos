import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const storageUsuario = "KyAData";
const storageVehiculo = "vehiculoData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public userCorreo = "";

  constructor() { }

  async getItem(llave: string): Promise<string | null> {
    const obj = await Preferences.get({ key: llave });
    return obj.value;
  }

  async setItem(llave: string, valor: string) {
    await Preferences.set({ key: llave, value: valor });
  }

  async obtenerUsuario() {
    const storageData = await this.getItem(storageUsuario);
    return storageData ? JSON.parse(storageData) : [];
  }

  async agregarUsuario(user: any[]) {
    const usuarios = await this.obtenerUsuario();
    for (const i of usuarios) {
      if (i) {
        user.push(i);
      }
    }

    this.setItem(storageUsuario, JSON.stringify(user));
  }


  async obtenerVehiculos() {
    const storageData = await this.getItem(storageVehiculo);
    console.log('Vehículos recuperados:', storageData);
    return storageData ? JSON.parse(storageData) : [];
  }
  async agregarVehiculo(vehiculo: any) {
    const vehiculos = await this.obtenerVehiculos();

    vehiculo.correoUsuario = this.userCorreo;

    vehiculos.push(vehiculo);
    this.setItem(storageVehiculo, JSON.stringify(vehiculos));
  }

  
}
