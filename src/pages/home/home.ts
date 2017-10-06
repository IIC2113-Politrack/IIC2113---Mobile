import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: Array<any>;

  constructor(public navCtrl: NavController, _data: DataProvider) {
    _data.getUsers().subscribe((resp) => {
      this.users = resp;
      console.log(resp);
    })
  }

}
