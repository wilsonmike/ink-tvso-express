import { Component, OnInit } from '@angular/core';
import junecapesdata from '../juneetsy.json';

@Component({
  selector: 'app-juneetsy',
  templateUrl: './juneetsy.component.html',
  styleUrls: ['./juneetsy.component.css']
})
export class JuneetsyComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
