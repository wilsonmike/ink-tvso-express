import { Component, OnInit } from '@angular/core';
import junecapesdata from '../costumeagent.json';

@Component({
  selector: 'app-junecostumeagent',
  templateUrl: './junecostumeagent.component.html',
  styleUrls: ['./junecostumeagent.component.css']
})
export class JunecostumeagentComponent implements OnInit {
  juneCapes: any = junecapesdata;
  term = '';


  constructor() { }

  ngOnInit(): void {
  }

}
