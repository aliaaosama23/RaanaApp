import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ActivityVideoPage } from './activity-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  ],
  declarations: [ActivityVideoPage],
  entryComponents:[ActivityVideoPage]
})
export class ActivityVideoPageModule {}
