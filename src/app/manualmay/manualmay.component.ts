import { Component, OnInit } from '@angular/core';
import manmay from '../manualmay.json';

@Component({
  selector: 'app-manualmay',
  templateUrl: './manualmay.component.html',
  styleUrls: ['./manualmay.component.css']
})
export class ManualmayComponent implements OnInit {
  manualmay: any = manmay;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
