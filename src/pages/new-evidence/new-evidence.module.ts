import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEvidencePage } from './new-evidence';

@NgModule({
  declarations: [
    NewEvidencePage,
  ],
  imports: [
    IonicPageModule.forChild(NewEvidencePage),
  ],
})
export class NewEvidencePageModule {}
