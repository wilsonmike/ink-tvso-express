import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-febtotal',
  templateUrl: './febtotal.component.html',
  styleUrls: ['./febtotal.component.css']
})
export class FebtotalComponent implements OnInit {

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
