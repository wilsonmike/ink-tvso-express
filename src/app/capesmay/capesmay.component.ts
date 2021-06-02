import { Component, OnInit } from '@angular/core';
import capesmayJson from '../capesmay.json';

@Component({
  selector: 'app-capesmay',
  templateUrl: './capesmay.component.html',
  styleUrls: ['./capesmay.component.css']
})
export class CapesmayComponent implements OnInit {
  capesmay: any = capesmayJson;
  term = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.capesmay);
  }

}
