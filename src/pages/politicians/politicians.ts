import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoliticianPage } from '..//politician/politician';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the PoliticiansPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politicians',
  templateUrl: 'politicians.html',
})
export class PoliticiansPage {

  public name = "Políticos";
  public numero = 0;
  public politicians;

  public pics = {
    "Artés": "https://votainteligente.cl/cache/cache/88/98/889830521b08316e7ebeb6a44d81c375.jpg",
    "Enriquez-Ominami": "https://votainteligente.cl/cache/cache/0a/50/0a501fe7f9d78e935224e09853943289.jpg",
    "Goic": "https://votainteligente.cl/cache/cache/f2/07/f207c9b4c462feb36625b3171849195f.jpg",
    "Guiller": "https://votainteligente.cl/cache/cache/b1/48/b1489a87ae59827cdeec0c9a35908fc1.jpg",
    "Kast": "https://votainteligente.cl/cache/cache/2a/b7/2ab7467eea2f702a4ebce4944a4ff40b.jpg",
    "Navarro": "https://votainteligente.cl/cache/cache/67/5b/675b495b7a214dbc81cce2905139f52f.jpg",
    "Piñera": "https://votainteligente.cl/cache/cache/61/29/61298ed0dea2ed20ea9a6fde7127ce84.jpg",
    "Sánchez": "https://pbs.twimg.com/profile_images/872498316004782082/0QUZvqbu.jpg"
  }

  public pacts = {
    "Artés": "Unión Patriótica",
    "Enriquez-Ominami": "Partido Progresista",
    "Goic": "Democracia Cristiana",
    "Guiller": "Fuerza de Mayoría",
    "Kast": "Independiente",
    "Navarro": "País",
    "Piñera": "Chile Vamos",
    "Sánchez": "Frente Amplio"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
      this._api.getPoliticians().subscribe((response) => {
      //console.log(response);
      this.politicians = response;
    }, (err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticiansPage');
  }

  openPage(politicianInfo, pic, pact) {
	  this.navCtrl.push(PoliticianPage, {politician: politicianInfo, pic: pic, pact: pact});
  }

}
