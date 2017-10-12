import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposalsPage } from './proposals';

@NgModule({
  declarations: [
    ProposalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposalsPage),
  ],
})
export class ProposalsPageModule {}
