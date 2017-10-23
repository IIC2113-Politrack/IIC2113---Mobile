import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProposalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposals',
  templateUrl: 'proposals.html',
})
export class ProposalsPage {

	public proposals;
	
	public numero = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
    this._api.getProposals().subscribe((response) => {
      console.log(response);
      this.proposals = response;
    }, (err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposalsPage');
	}
	

}
