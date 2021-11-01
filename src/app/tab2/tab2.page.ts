import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/Activity/activity.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favouritesActivityList: Observable<any>;

  constructor(private _activityService: ActivityService,
    private _angularFireStore: AngularFirestore) {
   
      this.favouritesActivityList = 
      this._angularFireStore
      .collection('favourites')
      .doc(firebase.auth().currentUser.uid)
      .collection('favourites').valueChanges();
   
  }

  doRefresh(event) {
    console.log('Begin async operation');

    //setTimeout(() => {
    console.log('Async operation has ended');
    this.favouritesActivityList = 
      this._angularFireStore
      .collection('favourites')
      .doc(firebase.auth().currentUser.uid)
      .collection('favourites').valueChanges();
    event.target.complete();

    //}, 4000);
  }

}
