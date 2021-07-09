import { Component, OnInit } from '@angular/core';
import junecapesdata from '../junemanualdata.json';

@Component({
  selector: 'app-junemanual',
  templateUrl: './junemanual.component.html',
  styleUrls: ['./junemanual.component.css']
})
export class JunemanualComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
