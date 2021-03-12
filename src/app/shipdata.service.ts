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

  getAmazon = () => {
    return this.http.get(`${this.BASE_URL}/amazon`);
  }

  // getShipments = () => {
  //   return this.http.get(`${this.BASE_URL}/shipments`);
  // }

  // getLine = () => {
  //   return this.http.get(`${this.BASE_URL}/lineitems`);
  // }
  // getLine1 = () => {
  // tslint:disable-next-line:max-line-length
  //   return this.http.get(`${this.shipstationBaseUrl}createDateStart=2021-01-01&storeId=78297&createDateEnd=2021-01-31&includeShipmentItems=true&pageSize=500&page=1`, {
  //     headers: {
  //         Authorization: 'Basic ' + encoded,
  //     },
  //   });
  // }
}
