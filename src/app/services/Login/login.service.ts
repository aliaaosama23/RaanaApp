import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginCredentail } from 'src/app/models/loginCredentails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _angularFireAuth: AngularFireAuth) { }

  login(credentials:LoginCredentail):Promise<any>{
    return this._angularFireAuth
    .signInWithEmailAndPassword(
      credentials.email,credentials.password
    );    
  }
}
