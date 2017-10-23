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

  // public politicians = [
  // 	{
  //     party: "UPA",
  //     pact: "Unión Patriótica",
  //     charge: "Presidente",
  //     biography: "Eduardo Artés Brichetti (El Tambo, San Vicente de Tagua Tagua; 25 de octubre de 1951) es un profesor y político chileno, actual Secretario General del Partido Comunista Chileno (Acción Proletaria) (PC (AP)) y presidente de la Unión Patriótica (UPA).",
  //     slogan: "Justicia social y dignidad nacional",
  //     _id: "59ed1d57f36d2864754318dd",
  // 		name:"Eduardo Artés",
		//   pic:"https://votainteligente.cl/cache/cache/88/98/889830521b08316e7ebeb6a44d81c375.jpg"
  // 	},
  // 	{
  //     _id: "59ed188cf36d2864754317b7",
  //     name: "Marco Enriquez-Ominami",
  //     party: "PRO",
  //     pact: "Partido Progresista",
  //     charge: "Presidente",
  //     biography: "Nací el 20 de diciembre de 1972. Tras ser exonerado mi padre de la Universidad de Chile, dejamos el país con mi familia hasta 1986. Esos años vivimos en Salvador, Guatemala y Ecuador. Al volver a Chile terminé mi educación media y posteriormente ingresé a la Universidad Católica para convertirme en Asistente Social lo que posteriormente complementaría con un magister en economía en la misma institución.",
  //     slogan: "Chile de los libres",
  //     proposals: [382],
  // 		pic:"https://votainteligente.cl/cache/cache/0a/50/0a501fe7f9d78e935224e09853943289.jpg"
  // 	},
  // 	{
  //     _id: "59ed2330bfb2501422db9cb4",
  // 		name:"Carolina Goic",
  // 		pic:"https://votainteligente.cl/cache/cache/f2/07/f207c9b4c462feb36625b3171849195f.jpg",
  //     slogan: "Yo me atrevo",
  //     party: "DC",
  //     pact: "Democracia Cristiana",
  //     charge: "Presidente(a)",
  //     biography: "Nací el 20 de diciembre de 1972. Tras ser exonerado mi padre de la Universidad de Chile, dejamos el país con mi familia hasta 1986. Esos años vivimos en Salvador, Guatemala y Ecuador. Al volver a Chile terminé mi educación media y posteriormente ingresé a la Universidad Católica para convertirme en Asistente Social lo que posteriormente complementaría con un magister en economía en la misma institución. Mi vida política y social ha estado fuertemente ligada a las enseñanzas de mi padre, Pedro Goic: un destacado dirigente de la Democracia Cristiana, quien trabajó con el Presidente Eduardo Frei Montalva, que dedicó toda su vida al servicio público, y que falleció hace 17 años. Me casé con Christian Kirk, y decidimos formar nuestra familia en Punta Arenas. Fue ahí cuando me inicié en la política como profesional de apoyo en el SERNAM y luego SEREMI de Planificación. Movida por poder ayudar más a mi región, el 2005 me presenté a las elecciones parlamentarias, convirtiéndome en la primera mujer diputada por la Región de Magallanes y Antártica Chilena. El 2009 fui reelecta, y el 2013 fui elegida como la primera Senadora de la Región, obteniendo siempre la primera mayoría. En mi labor como diputada y senadora he centrado todos mis esfuerzos en los temas de protección de las chilenas y chilenos. Niñas y niños, mujeres, trabajadoras y trabajadores han sido mi prioridad, lo que se refleja en que las principales leyes que he impulsado son el postnatal de 6 meses, la protección de las trabajadoras de casa particular, las manipuladoras de alimentos, los feriados para los trabajadores del comercio, buscando promover la conciliación de vida laboral y vida familiar. Como Presidenta de la Comisión de Salud participé activamente en la Ley Ricarte Soto que da protección a las personas con enfermedades raras y ahora en el SANNA, el seguro que permitirá que padres y madres puedan tener licencia para acompañar a sus hijas e hijos con cáncer y enfermedades graves.",
  // 	  proposals: [378, 380]
  //   },
  // 	{
  //     _id: "59ed22dcbfb2501422db9cb3",
  //     party: "PRSD-PPD-PS-PC",
  //     pact: "Fuerza de Mayoría",
  //     charge: "Presidente",
  //     biography: "Hijo de Marcela y Felipe. Entra a estudiar periodismo a la universidad de Chile, se gradúa con honores de la carrera de periodismo haciendo una excelente tesis. Información ficticia.",
  //     slogan: "El presidente de la gente",
  // 		name:"Alejandro Guiller",
  // 		pic:"https://votainteligente.cl/cache/cache/b1/48/b1489a87ae59827cdeec0c9a35908fc1.jpg"
  // 	},
  // 	{
  //     _id: "59ed1e1bf36d2864754318fb",
  //     name: "José Antonio Kast",
  //     party: "Independiente",
  //     pact: "Independiente",
  //     charge: "Presidente",
  //     biography: "José Antonio nace en el año 1954, estudia periodismo en la universidad de Chile. Se gradua con honores realizando una gran tesis. El el año 2016 se integra a competir por la presidencia. Información ficticia",
  //     slogan: "Volver a creer!",
  // 		pic:"https://votainteligente.cl/cache/cache/2a/b7/2ab7467eea2f702a4ebce4944a4ff40b.jpg"
  // 	},
  // 	{
  //     _id: "59ed1b46f36d28647543188d",
  //     name: "Alejandro Navarro",
  //     party: "País",
  //     pact: "País",
  //     charge: "Presidente",
  //     biography: "Hijo de Fernando Navarro y Lidia Brain, nace en Santiago el 20 de noviembre de 1958, siendo el mayor de cuatro hermanos. Es padre de cinco hijos: Araxza, América, Alonso, Antonio y Amaro. Durante su adolescencia y ya luego del Golpe Militar de 1973, trabaja en distintos oficios que le permiten ayudar económicamente a su familia, mientras estudia en el Liceo José Miguel Carrera B-36 de Conchalí.",
  //     slogan: "La fuerza de la gente",
  //     proposals: [349, 316],
  // 		pic:"https://votainteligente.cl/cache/cache/67/5b/675b495b7a214dbc81cce2905139f52f.jpg"
  // 	},
  // 	{
  //     _id: "59ed29a4f42ac8585e22bc54",
  //     party: "UDI-RN-PRI-EVOPOLI",
  //     pact: "Chile Vamos",
  //     charge: "Presidente",
  //     biography: "Miguel Juan Sebastián Piñera Echenique Santiago, 1 de diciembre de 1949 es un empresario, inversor y político chileno. Fue presidente de Chile entre los años 2010 y 2014 También fue el primer presidente pro tempore de CELAC.",
  //     slogan: "Vienen tiempos mejores",
		//   name:"Sebastián Piñera",
  // 		pic:"https://votainteligente.cl/cache/cache/61/29/61298ed0dea2ed20ea9a6fde7127ce84.jpg"
  // 	},
  // 	{
  //     _id: "59ed1c7bf36d2864754318b5",
  //     name: "Beatriz Sánchez",
  //     party: "Revolución democrática",
  //     pact: "Frente Amplio",
  //     charge: "Presidente",
  //     biography: "Nació en el año 1970 en Viña del Mar. Estudió periodismo en la Universidad de Concepción donde conoció a Pablo Aravena, su marido hace 28 años, con quien tienen 3 hijos. Su compromiso con un Chile justo marcó más de 20 años de radio, donde denunció la desigualdad, el centralismo y la corrupción. También en televisión puso sus condiciones al comenzar diciendo: No tengo un cuerpo de TV, pero me encanta como soy",
  //     slogan: "Fuerza de mayoría",
  //     proposals: [379, 377],
  // 		pic:"https://pbs.twimg.com/profile_images/872498316004782082/0QUZvqbu.jpg"
  // 	}
  // ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: DataProvider) {
      this._api.getPoliticians().subscribe((response) => {
      this.politicians = response;
    }, (err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticiansPage');
  }

  public sumar() {
  	this.numero = this.numero + 1;
  }

  openPage(politicianInfo, pic) {
	  this.navCtrl.push(PoliticianPage, {politician: politicianInfo, pic: pic});
  }

}
