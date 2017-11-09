import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
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
  private commitmentId;
  private data = null;
  private base64data;
  public loading = false;
  public spinner;

  constructor(public navParams: NavParams,
  			  private camera: Camera,
  			  public actionSheetCtrl: ActionSheetController,
  			  public viewCtrl: ViewController,
          private _api: DataProvider,
          private loadingCtrl: LoadingController) {

  	this.type = navParams.get('type');
    this.commitmentId = navParams.get('commitmentId');
  	if (this.type == 'image') {
  		console.log(this.type);
  	}

    console.log(this.commitmentId);

    this.spinner = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Subiendo evidencia...'
    });
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
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
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
    this.spinner.present();
    this._api.uploadEvidence(this.commitmentId,
                             this.description,
                             this.type,
                             this.data,
                             this.isGood)
      .subscribe((response) => {
        console.log(response);
        this.spinner.dismiss();
        alert("Evidencia subida exitosamente!");
        this.close();
      }, (err) => {
        console.log(err);
        alert("error subiendo evidencia");
        this.spinner.dismiss();
      })
  }


}
