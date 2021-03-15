import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-maskmarket',
  templateUrl: './maskmarket.component.html',
  styleUrls: ['./maskmarket.component.css']
})
export class MaskmarketComponent implements OnInit {
  mask: any = [];

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMask().subscribe((res) => {
      this.mask = res;
      this.mask.splice(0, 1);
      console.log(this.mask);
    });
  }

}
