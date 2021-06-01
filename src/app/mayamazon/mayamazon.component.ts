import { Component, OnInit } from '@angular/core';
import mayamazonJson from '../zmayamazon.json';

@Component({
  selector: 'app-mayamazon',
  templateUrl: './mayamazon.component.html',
  styleUrls: ['./mayamazon.component.css']
})
export class MayamazonComponent implements OnInit {
  mayAmazon: any = mayamazonJson;
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

}
