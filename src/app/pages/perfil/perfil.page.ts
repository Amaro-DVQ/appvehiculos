import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userEmail: any;
  usuario: any;

  constructor(private storage: StorageService, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  async loadUserInfo() {
    this.auth.authState.subscribe(async user => {
      console.log("Usuario autenticado:", user);
      if (user) {
        this.userEmail = user.email;
        await this.cargarInformacionUsuario();
      }
    });
  }

  async cargarInformacionUsuario() {
    try {
      this.usuario = await this.storage.obtenerUsuarioPorCorreo(this.userEmail);
      console.log("Información del usuario:", this.usuario);
    } catch (error) {
      console.error("Error al cargar la información del usuario:", error);
    }
  }
}
