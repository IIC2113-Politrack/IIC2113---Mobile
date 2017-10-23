import { Component, Input } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { NewEvidencePage } from '../../pages/new-evidence/new-evidence';

//import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'new-evidence',
  templateUrl: 'new-evidence.html',
})
export class NewEvidenceComponent {

  @Input() public politicianId;
  @Input() public proposalId;


   constructor(public actionSheetCtrl: ActionSheetController,
               public modalCtrl: ModalController) {
  }

  // public presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: '¿Qué tipo de evidencia es?',
  //     buttons: [
  //       {
  //         text: 'Imagen',
  //         role: 'archive',
  //         handler: () => {
  //           this.goToNewEvidence('image')
  //         }
  //       },{
  //         text: 'Archivo',
  //         handler: () => {
  //           this.goToNewEvidence('file')
  //         }
  //       },{
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  public goToNewEvidence(type) {
    console.log(this.politicianId);
    console.log(this.proposalId);
    const modal = this.modalCtrl.create(NewEvidencePage,
                                        { type: type,
                                          politicianId: this.politicianId,
                                          proposalId: this.proposalId});
    modal.present();
  }

}
