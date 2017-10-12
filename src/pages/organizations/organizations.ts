import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrganizationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {

	public organizations = [
  	{
  		name:"Hogar de Cristo",
  		pic:"https://votainteligente.cl/cache/cache/04/92/0492c8251c162a0cd4e265c3d9b026bc.png"
  	},
  	{
  		name:"Un Techo para Chile",
  		pic:"https://votainteligente.cl/cache/cache/16/92/1692f75be4f3db1c97777ca719bb3834.png"
  	},
  	{
  		name:"Derechos Digitales",
  		pic:"https://votainteligente.cl/cache/cache/1b/95/1b959697ad8f47f56a8133f49ed65917.png"
  	},
  	{
  		name:"Fundación Educación 2020",
  		pic:"https://votainteligente.cl/cache/cache/e6/8d/e68d597f961fa30bed553c96077cc5ac.png"
  	},
  	{
  		name:"Espacio Público",
  		pic:"https://votainteligente.cl/cache/cache/53/60/5360ef40cf2a39835f16750a6f18a015.jpg"
  	},
  	{
  		name:"Fundación Todo Mejora",
  		pic:"https://votainteligente.cl/cache/cache/d4/e8/d4e8b67e3e9c184a1b21e120500b7ecb.png"
  	},
  	{
  		name:"Fundación Fútbol Más",
  		pic:"https://votainteligente.cl/cache/cache/06/df/06dfde5abb19cf8248a2f1459ea6750d.png"
  	},
  	{
  		name:"Fundación Acción Migrante",
  		pic:"https://votainteligente.cl/cache/cache/06/4a/064a7b5e8b2cd4d950dba7ea405ba8d5.png"
  	},
  	{
  		name:"Fundación Enseña Chile",
  		pic:"https://votainteligente.cl/cache/cache/a1/c2/a1c217c9aefaaec88a5d730f7f260b9e.jpg"
  	},
  	{
  		name:"Greenpeace",
  		pic:"https://votainteligente.cl/cache/cache/8d/33/8d332b7c49a32e36e97254ffe2fe8c81.png"
  	},
  	{
  		name:"América Solidaria",
  		pic:"https://votainteligente.cl/cache/cache/9b/fa/9bfa151c253008a22c72cd9f9467c062.png"
  	},
  	{
  		name:"CODEFF",
  		pic:"https://votainteligente.cl/cache/cache/35/d7/35d7fb9bab0ebe408caa71cca798d095.png"
  	},
  	{
  		name:"Fundación Ciudadano Inteligente",
  		pic:"https://votainteligente.cl/cache/cache/b9/c4/b9c497f8669384dc5523f0db25095358.png"
  	},
  	{
  		name:"Fundación Urbanismo Social",
  		pic:"https://votainteligente.cl/cache/cache/df/75/df75504d31e1dd13f13905517618be14.png"
  	},
  	{
  		name:"Fundación Legado Chile",
  		pic:"https://votainteligente.cl/cache/cache/d4/1c/d41c8837f43e0e8ca7869c2c066b3014.png"
  	},
  	{
  		name:"Ciudad Emergente",
  		pic:"https://votainteligente.cl/cache/cache/27/7c/277c85497a90c42b6c49bf71e43c1b7a.png"
  	},
  	{
  		name:"Central Unitaria de Trabajadores",
  		pic:"https://votainteligente.cl/cache/cache/e2/3f/e23f293eb37a3ba8cffe402b8c811c45.png"
  	},
  	{
  		name:"Fundación Nosotros Ciudadanos",
  		pic:"https://votainteligente.cl/cache/cache/a7/87/a787ef2ff1759195a141b9845ee9876f.png"
  	},
  	{
  		name:"Fundación Sonrisas",
  		pic:"https://votainteligente.cl/cache/cache/17/50/1750d88c53fd866661c0fdd0508e933e.png"
  	},
  	{
  		name:"Fundación Iguales",
  		pic:"https://votainteligente.cl/cache/cache/f7/03/f703f89e25a4cd2e9999f00c80d98b08.png"
  	},
  	{
  		name:"",
  		pic:""
  	}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationsPage');
  }

}
