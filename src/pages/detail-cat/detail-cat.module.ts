import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCatPage } from './detail-cat';

@NgModule({
  declarations: [
    DetailCatPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCatPage),
  ],
})
export class DetailCatPageModule {}
