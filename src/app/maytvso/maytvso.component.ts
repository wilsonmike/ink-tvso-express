import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maytvso',
  templateUrl: './maytvso.component.html',
  styleUrls: ['./maytvso.component.css']
})
export class MaytvsoComponent implements OnInit {
  maytvso: any = [];
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
