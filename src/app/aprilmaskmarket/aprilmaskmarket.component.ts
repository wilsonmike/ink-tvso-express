import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-aprilmaskmarket',
  templateUrl: './aprilmaskmarket.component.html',
  styleUrls: ['./aprilmaskmarket.component.css']
})
export class AprilmaskmarketComponent implements OnInit {
  mask: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMaskMarketApril().subscribe((res) => {
      this.mask = res;
      this.mask.splice(0, 1);
      console.log(this.mask);
    });
  }

}
