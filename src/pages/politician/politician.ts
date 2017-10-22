import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-politician',
  templateUrl: 'politician.html',
})
export class PoliticianPage {

  public name = "Políticos";
  public numero = 0;
  public politician : any;

  public politicians = [
  	{
  		name:"Eduardo Artés",
  		pic:"https://votainteligente.cl/cache/cache/88/98/889830521b08316e7ebeb6a44d81c375.jpg"
  	},
  	{
  		name:"Marco Enriquez-Ominami",
  		pic:"https://votainteligente.cl/cache/cache/0a/50/0a501fe7f9d78e935224e09853943289.jpg"
  	},
  	{
  		name:"Carolina Goic",
  		pic:"https://votainteligente.cl/cache/cache/f2/07/f207c9b4c462feb36625b3171849195f.jpg"
  	},
  	{
  		name:"Alejandro Guiller",
  		pic:"https://votainteligente.cl/cache/cache/b1/48/b1489a87ae59827cdeec0c9a35908fc1.jpg"
  	},
  	{
  		name:"José Antonio Kast",
  		pic:"https://votainteligente.cl/cache/cache/2a/b7/2ab7467eea2f702a4ebce4944a4ff40b.jpg"
  	},
  	{
  		name:"Alejandro Navarro",
  		pic:"https://votainteligente.cl/cache/cache/67/5b/675b495b7a214dbc81cce2905139f52f.jpg"
  	},
  	{
  		name:"Sebastián Piñera",
  		pic:"https://votainteligente.cl/cache/cache/61/29/61298ed0dea2ed20ea9a6fde7127ce84.jpg"
  	},
  	{
  		name:"Beatriz Sánchez",
  		pic:"https://pbs.twimg.com/profile_images/872498316004782082/0QUZvqbu.jpg"
  	}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

	this.politician = this.navParams.get('politician');
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad PoliticianPage');
  }

  public sumar() {
  	this.numero = this.numero + 1;
  }

}
