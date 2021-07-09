import { Component, OnInit } from '@angular/core';
import junecapesdata from '../junetvso.json';

@Component({
  selector: 'app-junetvso',
  templateUrl: './junetvso.component.html',
  styleUrls: ['./junetvso.component.css']
})
export class JunetvsoComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
