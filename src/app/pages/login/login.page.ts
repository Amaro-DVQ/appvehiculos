import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    email: "",
    password: ""
  }

  constructor(
    private router: Router,
    private helperService: HelperService,
    private userService: UserService,
    private storage: StorageService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async login() {
    const loader = await this.helperService.showLoading("Cargando");

    if (this.credenciales.email === "" || this.credenciales.password === "") {
      await loader.dismiss();
      this.helperService.showAlert("Rellene los campos", "Error");
      return;
    }

    if (this.credenciales.email === "") {
      await loader.dismiss();
      this.helperService.showAlert("El email es obligatorio", "Error");
      return;
    }

    if (this.credenciales.password === "") {
      await loader.dismiss();
      this.helperService.showAlert("La contraseña es obligatoria", "Error");
      return;
    }

    const res = await this.userService.login(this.credenciales.email, this.credenciales.password).catch(err => {
      this.helperService.showAlert(err.message, "Error");
    });

    if (res) {
      this.helperService.presentToast("Login exitoso");
      this.router.navigateByUrl('/menu-principal');
    }

    try {
      this.storage.userCorreo = this.credenciales.email;
      const req = await this.auth.signInWithEmailAndPassword(this.credenciales.email, this.credenciales.password);

      await this.router.navigateByUrl('menu-principal');
    } catch (error) {
      await loader.dismiss();
    }

    await loader.dismiss();
  }

  logout() {
    this.userService.logout();
  }

  recuperarContra() {
    this.router.navigateByUrl('/recuperar-contra');
  }

  registrar() {
    this.router.navigateByUrl('/registro');
  }
}
