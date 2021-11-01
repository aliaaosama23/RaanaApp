import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthErrorResponse } from '../models/auth_error_reponse';
import { LoginCredentail } from '../models/loginCredentails';
import { LoginService } from '../services/Login/login.service';
import { UtilitiesService } from '../services/Utilities/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private _route:Router,
    formBuilder:FormBuilder,
    private _loginService: LoginService,
    private _utilService:UtilitiesService
  ) { 
    this.loginFormGroup=formBuilder.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }


  ngOnInit() {
  }

  login() {
    const loginCredentails: LoginCredentail= this.loginFormGroup.value;
    this._loginService.login(loginCredentails)
    .then((authData:any)=>{
      console.log(JSON.stringify(authData));
      this._route.navigate(['/tabs']);
    })
    .catch((authError:AuthErrorResponse)=>{
      console.log('Auth Error => '+JSON.stringify(authError))
      //this._utilService.presentToast(authError.code,'bottom');
      this._utilService.showToast(authError.code);
    });
  }
}

