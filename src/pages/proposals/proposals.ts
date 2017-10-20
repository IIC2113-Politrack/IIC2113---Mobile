import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	public proposals = [
  	{
  		title: "Política Pública de Salud Mental Coordinada para la prevención del suicidio infantil y adolescente",
  		num: 175,
  		org:"Fundación Todo Mejora",
  		org_pic:"https://votainteligente.cl/cache/cache/d4/e8/d4e8b67e3e9c184a1b21e120500b7ecb.png",
  		content: "Articular los esfuerzos realizados desde el área de la salud con aquellos emanados desde el sistema escolar a fin de que las acciones tengan repercusiones para el % de los casos de NNA que no presentan depresión, pero si riesgo suicida.",
  		tags: ["INFANCIA Y JUVENTUD", "SALUD"],
  		upvotes: 12
  	}
		]
	
	public numero = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposalsPage');
	}
	
	public sumar() {
  	this.numero = this.numero + 1;
  }

}
