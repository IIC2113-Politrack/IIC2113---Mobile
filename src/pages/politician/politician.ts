import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvidencesPage } from '../evidences/evidences';


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
  pic;

  public proposals;
  // [
  //   {
  //     title: "Política Pública de Salud Mental Coordinada para la prevención del suicidio infantil y adolescente",
  //     num: 175,
  //     org:"Fundación Todo Mejora",
  //     org_pic:"https://votainteligente.cl/cache/cache/d4/e8/d4e8b67e3e9c184a1b21e120500b7ecb.png",
  //     content: "Articular los esfuerzos realizados desde el área de la salud con aquellos emanados desde el sistema escolar a fin de que las acciones tengan repercusiones para el % de los casos de NNA que no presentan depresión, pero si riesgo suicida.",
  //     tags: ["INFANCIA Y JUVENTUD", "SALUD"],
  //     upvotes: 12
  //   }
  //   ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

	this.politician = this.navParams.get('politician');
  this.proposals = this.politician.proposals;
  this.pic = this.navParams.get('pic');

  console.log(this.politician);

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
