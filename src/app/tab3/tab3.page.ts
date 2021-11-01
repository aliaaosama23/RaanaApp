import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imageSrc: string = '';
  myStoredProfileImage: Observable<any>;
  userUid: string;

  constructor(private _angularFireAuth: AngularFireAuth,
              private _angularFireStore: AngularFirestore,
              private _alertController: AlertController) {
                  //this.myStoredProfileImag =
                  //console.log('uid ' + this.getUserUid())
                  //this.getUserUid();
                 // console.log(this.userUid)
                  this.myStoredProfileImage =_angularFireStore
                    .collection("users")
                    .doc(firebase.auth()?.currentUser.uid)
                    .valueChanges();

                    console.log('stored image :'+  this.myStoredProfileImage);

                    // console.log(this.myStoredProfileImage.subscribe((res:any)=>{
                    //   console.log(res)
                    // }))

                  // _angularFireAuth.authState.subscribe((res:any)=>{
                  //   //console.log(res)
                  //   //console.log(res.multiFactor.user.uid)

                  //   return res.multiFactor.user.uid;
                  // })

                  //  this._angularFireAuth.currentUser.then((res)=>{
                  //     console.log(res)
                  // })
  }

  // this method return user uid
  getUserUid(): any {
    this._angularFireAuth.authState.subscribe((res: any) => {
      // console.log(res)
      // console.log(res.multiFactor.user.uid)
      this.userUid = res.multiFactor.user.uid;
      console.log(this.userUid)
    })
  }

  getProfileImage() {
    this._angularFireStore
      .collection("users")
      .valueChanges().subscribe((users: any[]) => {
        console.log('all users :' + users);
        for (let i = 0; i < users.length; i++) {
          //if(users[i].image_src)
        }
      })
  }

  async selectImageSource() {

    const cameraOptions = {
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
      width: 200,
      height: 200,
      source: CameraSource.Camera
    };

    const galleryOptions = {
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
      width: 200,
      height: 200,
      source: CameraSource.Photos
    }

    const alert = await this._alertController.create({
      header: 'Select Source',
      message: 'Pick a source for your image',
      buttons: [
        {
          text: 'Camera',
          handler: async () => {
            const camera = await Camera.getPhoto(cameraOptions);
            var imageData = camera.base64String;
            const image = "data:image/png;base64, " + imageData;
            //this.imageSrc = image; // to display this image on dom
            this.StoreImageToFirebase(image);
          }
        },
        {
          text: 'Gallery',
          handler: async () => {
            const gallery = await Camera.getPhoto(galleryOptions);
            var imageData = gallery.base64String;
            const image = "data:image/png;base64, " + imageData;
           // this.imageSrc = image;// to display taken image on dom
            this.StoreImageToFirebase(image);
          }
        }
      ]
    });

    await alert.present();
  }

  async StoreImageToFirebase(image) {
    //const firestore = getFirestore();
    // store this taken image on fire store
    //(await this._angularFireAuth.currentUser).uid)
    this._angularFireStore
      .collection("users")
      .doc(firebase.auth()?.currentUser.uid)
      .set({
        image_src: image
      })
  }
}

//doc(firestore,(await this._angularFireAuth.currentUser).uid)


