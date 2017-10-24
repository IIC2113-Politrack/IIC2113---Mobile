import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-evidences',
  templateUrl: 'evidences.html',
})
export class EvidencesPage {
  public proposal;
  public politician;
  public evidences_id;
  public evidences;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
  	this.proposal = this.navParams.get('proposal');
    this.politician = this.navParams.get('politician');

    for (let proposal in this.politician.proposals) {
      if (this.proposal._id == this.politician.proposals[proposal].proposal) {
        this.evidences_id = this.politician.proposals[proposal].evidences;
      }
    }

    for (let evidence_id in this.evidences_id) {
      this._api.getEvidence(evidence_id).subscribe((response) => {
        this.evidences.push(response);
      }, (err) => {
        console.log(err);
      })
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvidencesPage');
    console.log(this.evidences_id);
    console.log(this.evidences);
  }

}
