import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input('activity') activity: any;

  constructor() { }

  ngOnInit() {}

}
