import { Component, OnInit } from '@angular/core';
import maydataJson from '../maytvso.json';

@Component({
  selector: 'app-maytvso',
  templateUrl: './maytvso.component.html',
  styleUrls: ['./maytvso.component.css']
})
export class MaytvsoComponent implements OnInit {
  maytvso: any = maydataJson;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
