import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-apriletsy',
  templateUrl: './apriletsy.component.html',
  styleUrls: ['./apriletsy.component.css']
})
export class ApriletsyComponent implements OnInit {
  etsyapril: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEtsyApril().subscribe((res) => {
      this.etsyapril = res;
      this.etsyapril.splice(0, 1);
      console.log(this.etsyapril);
    });
  }

}
