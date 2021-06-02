import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maymask',
  templateUrl: './maymask.component.html',
  styleUrls: ['./maymask.component.css']
})
export class MaymaskComponent implements OnInit {
  maymask: any = [];
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
