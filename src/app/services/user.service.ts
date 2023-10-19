import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authFirebase: AngularFireAuth) { }

  login(email: string, password:string ) {
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password:string ) {
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

}
