import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-etsyfeb',
  templateUrl: './etsyfeb.component.html',
  styleUrls: ['./etsyfeb.component.css']
})
export class EtsyfebComponent implements OnInit {
  etsyFeb: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEtsyFeb().subscribe((res) => {
      this.etsyFeb = res;
      this.etsyFeb.splice(0, 1);
    });
  }

}
