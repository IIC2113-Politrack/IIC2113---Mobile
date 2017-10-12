import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticianPage } from './politician';

@NgModule({
  declarations: [
    PoliticianPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticianPage),
  ],
})
export class PoliticianPageModule {}
