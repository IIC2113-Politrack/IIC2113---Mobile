import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-new-evidence',
  templateUrl: 'new-evidence.html',
})
export class NewEvidencePage {
	public type;
	isGood = false;
  private description;
  private politicianId = '59ed74cdb96d3829e3bb4ddb';
  private proposalId = '59ed7257e7d0a62795cc5371';
  private data = null;
  private base64data;

  constructor(public navParams: NavParams,
  			  private camera: Camera,
  			  public actionSheetCtrl: ActionSheetController,
  			  public viewCtrl: ViewController,
          private _api: DataProvider) {

  	this.type = navParams.get('type')
  	if (this.type == 'image') {
  		console.log(this.type);
  	}
  }

  public presentCameraSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Elige origen de la imágen',
      buttons: [
        {
          text: 'Elegir de la biblioteca',
          handler: () => {
            this.takePicture(0);
          }
        },
        {
          text: 'Usar cámara',
          handler: () => {
            this.takePicture(1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(destinationType) {
    const options: CameraOptions = {
      quality: 10,
      sourceType: destinationType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     this.base64data = 'data:image/jpeg;base64,' + imageData;
     this.data = imageData
    }, (err) => {
      console.log("error al obtener la imagen");
      console.log(err);
    });
  }

  public close() {
  	this.viewCtrl.dismiss();
  }

  public toggle() {
  	this.isGood = !this.isGood;
  }

  public send() {
    console.log("enviando fotoooooo")
    this._api.uploadEvidence(this.politicianId,
                             this.proposalId,
                             this.description,
                             this.type,
                             this.data,
                             this.isGood)
      .subscribe((response) => {
        console.log(response);
        alert("Evidencia subida exitosamente!");
      }, (err) => {
        console.log(err);
      })
  }



}