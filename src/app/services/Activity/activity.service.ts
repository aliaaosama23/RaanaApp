import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  // clean code to make this method first
  // inject http client here 
  // _ means it is private member
  constructor(private _httpClient: HttpClient) { }

  getActivity(activityID : string):Observable<Activity>{
    // implemenation
    return this._httpClient.get<Activity>(`${environment.baseUrl}/id/${activityID}`);
  }

  getAllActivities() :Observable<Activity[]>{
    return this._httpClient.get<Activity[]>(`${environment.baseUrl}`);
  }
}


