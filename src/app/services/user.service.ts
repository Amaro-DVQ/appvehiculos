import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authFirebase: AngularFireAuth, private storageService: StorageService) { }

  login(email: string, password: string) {
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.authFirebase.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.authFirebase.signOut();
  }

  resetPassword(email: string) {
    return this.authFirebase.sendPasswordResetEmail(email);
  }

  stateUser() {
    return this.authFirebase.authState;
  }

  getUserInfo() {
    return this.authFirebase.currentUser;
  }

  async getUserDataByEmail(email: string) {
    const users = await this.storageService.obtenerUsuario();
    return users.find((user: { correo: string; }) => user.correo === email);
  }
}
