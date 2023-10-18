import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authFirebase: AngularFireAuth) { }

  login(email: string, password:string ) {
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }
}
