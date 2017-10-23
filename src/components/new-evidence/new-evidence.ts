import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

//import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'new-evidence',
  templateUrl: 'new-evidence.html',
})
export class NewEvidenceComponent {

  //  constructor(private camera: Camera,
  //              public actionSheetCtrl: ActionSheetController) {
  // }
   constructor(public actionSheetCtrl: ActionSheetController) {
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Qué tipo de evidencia es?',
      buttons: [
        {
          text: 'Imágen',
          role: 'archive',
          handler: () => {
            console.log('Destructive clicked');
            //this.presentCameraSheet();
          }
        },{
          text: 'Archivo',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // public presentCameraSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Elige origen de la imágen',
  //     buttons: [
  //       {
  //         text: 'Elegir de la biblioteca',
  //         handler: () => {
  //           this.takePicture(0);
  //         }
  //       },
  //       {
  //         text: 'Usar cámara',
  //         handler: () => {
  //           this.takePicture(1);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }
  // public takePicture(destinationType) {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: destinationType,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //    console.log(imageData);
  //   }, (err) => {
  //     console.log("error");
  //    // Handle error
  //   });
  // }

}
