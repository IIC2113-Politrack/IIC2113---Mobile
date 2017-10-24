import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-evidences',
  templateUrl: 'evidences.html',
})
export class EvidencesPage {
  proposal;
  politician;
  evidences;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
  	this.proposal = this.navParams.get('proposal');
    this.politician = this.navParams.get('politician');
    this.evidences = this.politician.proposals[this.proposal._id].evidences;
    
    //console.log(this.politician);
    console.log(this.evidences);
    //console.log(this.proposal);

    // this._api.getEvidence(this.evidences[_id]).subscribe((response) => {
    //     this.evidences.push(response);
    //   }, (err) => {
    //     console.log(err);
    //   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvidencesPage');
  }

}
