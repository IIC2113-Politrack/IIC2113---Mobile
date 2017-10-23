import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataProvider {
  public apiUrl = 'http://ec2-18-221-146-123.us-east-2.compute.amazonaws.com/api/'

  constructor(private _http: Http) { }

  public getUsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  	console.log("getting users");
    let options = new RequestOptions({ headers: headers, method: "get" });
    return this._http.get(this.apiUrl +  "users", options)
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

  public getPoliticians() {
    console.log("getting politicians");
    return this._http.get(this.apiUrl + "politicians")
      .map(response => response.json())

  public uploadEvidence(politicianId, proposalId, description, format, content, isGood) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, method: "post" });
    let body = {
      politicianId: politicianId,
      proposalId: proposalId,
      data: {
        description: description,
        format: format,
        data: content,
        isGood: isGood        
      }
    }
    return this._http.post(this.apiUrl + "api/evidences", body, options)
  }

}
