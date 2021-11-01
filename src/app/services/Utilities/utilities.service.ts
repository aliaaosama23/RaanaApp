import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(public toastController: ToastController,public loadingController: LoadingController) { }
  
  async showToast(message:string){
      await Toast.show({
        text: message,
        position:'bottom'
      });
  }

  async presentToast(message:string,position?: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position:position
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  
}
