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
  private readonly APRIL_URL = environment.apiApril;

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
  getEtsyMarch = () => {
    return this.http.get(`${this.MARCH_URL}/etsy`);
  }
  getTvsoMarch = () => {
    return this.http.get(`${this.MARCH_URL}/tvso`);
  }
  getCostumeAgentMarch = () => {
    return this.http.get(`${this.MARCH_URL}/costumeagent`);
  }
  getMaskMarketMarch = () => {
    return this.http.get(`${this.MARCH_URL}/costumeagent`);
  }
  getManualOrdersMarch = () => {
    return this.http.get(`${this.MARCH_URL}/manualorders`);
  }
  // april
  getAmazonApril = () => {
    return this.http.get(`${this.APRIL_URL}/amazon`);
  }
  getEtsyApril = () => {
    return this.http.get(`${this.APRIL_URL}/etsy`);
  }
  getTvsoApril = () => {
    return this.http.get(`${this.APRIL_URL}/tvso`);
  }
  getCostumeAgentApril = () => {
    return this.http.get(`${this.APRIL_URL}/costumeagent`);
  }
  getMaskMarketApril = () => {
    return this.http.get(`${this.APRIL_URL}/costumeagent`);
  }
  getManualOrdersApril = () => {
    return this.http.get(`${this.APRIL_URL}/manualorders`);
  }
  getWirelessApril = () => {
    return this.http.get(`${this.APRIL_URL}/wireless`);
  }
}
