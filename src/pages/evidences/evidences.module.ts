import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvidencesPage } from './evidences';

@NgModule({
  declarations: [
    EvidencesPage,
  ],
  imports: [
    IonicPageModule.forChild(EvidencesPage),
  ],
})
export class EvidencesPageModule {}
