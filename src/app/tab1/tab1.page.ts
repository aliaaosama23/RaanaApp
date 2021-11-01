import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/Activity/activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activityList: Observable<Activity[]>;

  constructor(private _activityService:ActivityService) {
    setTimeout(()=>{
      this.activityList=this._activityService.getAllActivities();
    },4000);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    //setTimeout(() => {
      console.log('Async operation has ended');
      this.activityList=this._activityService.getAllActivities();
      event.target.complete();

   //}, 4000);
  }

}
