import { Component, OnInit } from '@angular/core';
import mayJson from '../mayetsy.json';

@Component({
  selector: 'app-mayetsy',
  templateUrl: './mayetsy.component.html',
  styleUrls: ['./mayetsy.component.css']
})
export class MayetsyComponent implements OnInit {
  mayEtsy: any = [];
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
