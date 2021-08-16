import { Component, OnInit } from '@angular/core';
import julyamazon from '../julyamazon.json';
import julycapes from '../julycapes.json';
import julycostume from '../julycostume.json';
import julyebay from '../julyebay.json';
import julyetsy from '../julyetsy.json';
import julymask from '../julymask.json';
import julywalmart from '../julywalmart.json';
import julytvso from '../julytvso.json';

@Component({
  selector: 'app-julydone',
  templateUrl: './julydone.component.html',
  styleUrls: ['./julydone.component.css'],
})
export class JulydoneComponent implements OnInit {
  julyAmazonData: any = julyamazon;
  julyCapesData: any = julycapes;
  julyCostumeData: any = julycostume;
  julyEbayData: any = julyebay;
  julyEtsyData: any = julyetsy;
  julyMaskData: any = julymask;
  julyWalmartData: any = julywalmart;
  julyTvsoData: any = julytvso;
  term = '';

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
