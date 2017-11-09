import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-evidences',
  templateUrl: 'evidences.html',
})
export class EvidencesPage {
  public commitment;
  public politician;
  public evidences;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
  	this.commitment = this.navParams.get('commitment');
    this.politician = this.navParams.get('politician');
    this._api.getCommitmentEvidences(this.commitment._id).subscribe((response) => {
      this.evidences = response;
      console.log(response)
    }, (err) => {
      console.log(err);
    })

  }

}
