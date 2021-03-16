import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-maskmarketfeb',
  templateUrl: './maskmarketfeb.component.html',
  styleUrls: ['./maskmarketfeb.component.css']
})
export class MaskmarketfebComponent implements OnInit {
  maskfeb: any = [];

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMask().subscribe((res) => {
      this.maskfeb = res;
      this.maskfeb.splice(0, 1);
      console.log(this.maskfeb);
    });
  }

}
