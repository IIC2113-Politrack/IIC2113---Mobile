import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-evidences',
  templateUrl: 'evidences.html',
})
export class EvidencesPage {
  proposal;
  politician;
  evidences;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.proposal = this.navParams.get('proposal');
    this.evidences = this.proposal.evidences;
    this.politician = this.navParams.get('politician');
    console.log(this.politician);
    console.log(this.evidences);
    console.log(this.proposal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvidencesPage');
  }

}
