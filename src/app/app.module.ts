import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
   // provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
