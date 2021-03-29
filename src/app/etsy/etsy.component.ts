import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-etsy',
  templateUrl: './etsy.component.html',
  styleUrls: ['./etsy.component.css']
})
export class EtsyComponent implements OnInit {
  etsy: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEtsy().subscribe((res) => {
      this.etsy = res;
      this.etsy.splice(0, 1);
      console.log(this.etsy);
    });
  }

}
