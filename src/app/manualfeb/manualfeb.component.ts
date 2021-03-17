import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-manualfeb',
  templateUrl: './manualfeb.component.html',
  styleUrls: ['./manualfeb.component.css']
})
export class ManualfebComponent implements OnInit {
  manualfeb: any = [];

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getManualFeb().subscribe((res) => {
      this.manualfeb = res;
      this.manualfeb.splice(0, 1);
      console.log(this.manualfeb);
    });
  }

}
