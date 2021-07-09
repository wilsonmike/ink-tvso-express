import { Component, OnInit } from '@angular/core';
import junecapesdata from '../junemm.json';

@Component({
  selector: 'app-junemaskmarket',
  templateUrl: './junemaskmarket.component.html',
  styleUrls: ['./junemaskmarket.component.css']
})
export class JunemaskmarketComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
