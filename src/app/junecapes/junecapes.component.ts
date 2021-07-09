import { Component, OnInit } from '@angular/core';
import junecapesdata from '../junecapesfetch.json';

@Component({
  selector: 'app-junecapes',
  templateUrl: './junecapes.component.html',
  styleUrls: ['./junecapes.component.css']
})
export class JunecapesComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
