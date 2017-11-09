import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataProvider {
  public apiUrl = 'https://politrap-api.herokuapp.com/api/'

  constructor(private _http: Http) { }

  public getOrganizations() {
  	console.log("getting organizations");
  	return this._http.get(this.apiUrl + "organizations")
      .map(response => response.json())
  }

  public getCommitmentEvidences(commitmentId) {
  	console.log("getting evidences");
  	return this._http.get(this.apiUrl + `commitments/${commitmentId}/evidences`)
  	  .map(response => response.json())
  }

  public getProposals() {
  	console.log("getting proposals");
  	return this._http.get(this.apiUrl + "proposals")
  	  .map(response => response.json())  	
  }

  public getPoliticianProposal(politicianId) {
    console.log("getting politician proposals");
    return this._http.get(this.apiUrl + `politicians/${politicianId}/commitments`)
      .map(response => response.json())
  }

  public getPoliticians() {
    console.log("getting politicians");
    return this._http.get(this.apiUrl + "politicians")
      .map(response => response.json())
  }

  public uploadEvidence(commitmentId, description, format, content, isGood) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, method: "post" });
    let body = {
        description: description,
        format: format,
        data: content,
        isGood: isGood
    }
    return this._http.post(this.apiUrl + `commitments/${commitmentId}/evidences`, body, options)
  }

}
