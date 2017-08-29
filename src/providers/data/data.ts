import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataProvider {
  public result:any;
  public apiUrl = 'http://localhost:3000/'

  constructor(private _http: Http) { }

  public getUsers() {
  	console.log("getting users");
    return this._http.get(this.apiUrl +  "api/users")
      .map(result => this.result = result.json().data);
  }

}
