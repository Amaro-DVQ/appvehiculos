import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userPass: any;
  userEmail: any;
  usuario: any;

  constructor(private storage:StorageService, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.loadUserInfo();
    this.cargarInformacionUsuario();
  }


  async cargarInformacionUsuario(){
    //console.log("property", this.storage.userCorreo);
    //var userEmail =await this.auth.currentUser;
    //console.log("11111111111",userEmail?.email);

    this.usuario = (await this.storage.obtenerUsuario()).filter((e: { correo: any; }) => e.correo == this.userEmail);
    //console.log("USUARIO FILTRADO",this.usuario);

  }

  loadUserInfo() {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userPass = user.emailVerified;
        this.userEmail = user.email;
      }
    });
  }

}
