import { Component, OnInit } from '@angular/core';
import juneamazondata from '../juneamazon.json';

@Component({
  selector: 'app-juneamazon',
  templateUrl: './juneamazon.component.html',
  styleUrls: ['./juneamazon.component.css']
})
export class JuneamazonComponent implements OnInit {
  juneAmazon: any = juneamazondata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
