import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-maskmarketmarch',
  templateUrl: './maskmarketmarch.component.html',
  styleUrls: ['./maskmarketmarch.component.css']
})
export class MaskmarketmarchComponent implements OnInit {
  maskmarket: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMaskMarketMarch().subscribe((res) => {
      this.maskmarket = res;
      this.maskmarket.splice(0, 1);
    });
  }

}
