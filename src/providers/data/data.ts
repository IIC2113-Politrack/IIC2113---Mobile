import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataProvider {
  public apiUrl = 'http://ec2-18-221-146-123.us-east-2.compute.amazonaws.com/'

  constructor(private _http: Http) { }

  public getUsers() {
  	console.log("getting users");
    return this._http.get(this.apiUrl +  "users")
      .map(response => response.json());
  }

  public getOrganizations() {
  	console.log("getting organizations");
  	return this._http.get(this.apiUrl + "organizations")
      .map(response => response.json())
  }

  public getEvidences() {
  	console.log("getting evidences");
  	return this._http.get(this.apiUrl + "evidences")
  	  .map(response => response.json())
  }

  public getProposals() {
  	console.log("getting proposals");
  	return this._http.get(this.apiUrl + "proposals")
  	  .map(response => response.json())  	
  }

}
