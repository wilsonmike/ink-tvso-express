import { Component, OnInit } from '@angular/core';
import maymaskJson from '../maymask.json';

@Component({
  selector: 'app-maymask',
  templateUrl: './maymask.component.html',
  styleUrls: ['./maymask.component.css']
})
export class MaymaskComponent implements OnInit {
  maymask: any = maymaskJson;
  term = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.maymask);
  }

}
