import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { headerA, headerB } from './remedy';
import { combineLatest } from 'rxjs';
const heading = headerA;
const lower = headerB;
const encoded = btoa(heading + ':' + lower);

@Injectable({
  providedIn: 'root'
})
export class ShipDataService {
  constructor(private router: Router, private http: HttpClient) { }
  private readonly BASE_URL = environment.apiBaseURL;
  private readonly MARCH_URL = environment.apiMarch;

  getAmazon = () => {
    return this.http.get(`${this.BASE_URL}/amazon`);
  }
  getEtsy = () => {
    return this.http.get(`${this.BASE_URL}/etsysugarplum`);
  }
  getTVSO = () => {
    return this.http.get(`${this.BASE_URL}/tvso`);
  }
  getManual = () => {
    return this.http.get(`${this.BASE_URL}/manualorders`);
  }
  getUCS = () => {
    return this.http.get(`${this.BASE_URL}/ucs`);
  }
  getMask = () => {
    return this.http.get(`${this.BASE_URL}/maskmarket`);
  }
  getCostumeAgent = () => {
    return this.http.get(`${this.BASE_URL}/costumeagent`);
  }
  getManualFeb = () => {
    return this.http.get(`${this.BASE_URL}/manualfeb`);
  }
  getAmazonFeb = () => {
    return this.http.get(`${this.BASE_URL}/amazonfeb`);
  }
  getEtsyFeb = () => {
    return this.http.get(`${this.BASE_URL}/etsyfeb`);
  }
  getUCSFeb = () => {
    return this.http.get(`${this.BASE_URL}/ucsfeb`);
  }
  getMaskMarketFeb = () => {
    return this.http.get(`${this.BASE_URL}/maskmarketfeb`);
  }
  // March Data
  getAmazonMarch = () => {
    return this.http.get(`${this.MARCH_URL}/amazon`);
  }
}
