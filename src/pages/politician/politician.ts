import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvidencesPage } from '../evidences/evidences';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-politician',
  templateUrl: 'politician.html',
})
export class PoliticianPage {

  public name = "";
  public politician : any;
  public extended = false;
  public toggle_text = "Ver más";
  public accomplished = 26;
  public partially_accomplished = 48;
  public not_accomplished = 100-this.partially_accomplished;
  public not_accomplished_width = 100;
  public pic;
  public pact;

  public proposals = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {

  	this.politician = this.navParams.get('politician');
    this.pic = this.navParams.get('pic');
    this.pact = this.navParams.get('pact');

    for (let proposal in this.politician.proposals) {
      this._api.getProposal(this.politician.proposals[proposal].proposal).subscribe((response) => {
        this.proposals.push(response);
      }, (err) => {
        console.log(err);
      })
    }

  }

  ionViewDidLoad() {
	  console.log('ionViewDidLoad PoliticianPage');
  }

  public toggle() {
    this.extended = !this.extended;
    if (this.extended == true) {
      this.toggle_text = "Ver menos";
    } else {
      this.toggle_text = "Ver más";
    }
  }

  public goToProposalEvidences(proposal) {
    this.navCtrl.push(EvidencesPage, {proposal: proposal, politician: this.politician});
  }

}
