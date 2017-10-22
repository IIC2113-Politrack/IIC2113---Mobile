import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticiansPage } from './politicians';

@NgModule({
  declarations: [
    PoliticiansPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticiansPage),
  ],
})
export class PoliticiansPageModule {}
