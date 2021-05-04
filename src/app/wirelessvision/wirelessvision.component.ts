import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-wirelessvision',
  templateUrl: './wirelessvision.component.html',
  styleUrls: ['./wirelessvision.component.css']
})
export class WirelessvisionComponent implements OnInit {
  amazon: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getWirelessApril().subscribe((res) => {
      this.amazon = res;
      this.amazon.splice(0, 1);
      console.log(this.amazon);
    });
  }

}
