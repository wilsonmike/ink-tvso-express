import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-manualorderapril',
  templateUrl: './manualorderapril.component.html',
  styleUrls: ['./manualorderapril.component.css']
})
export class ManualorderaprilComponent implements OnInit {
  manual: any = [];
  term = '';


  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getManualOrdersApril().subscribe((res) => {
      this.manual = res;
      this.manual.splice(0, 1);
      console.log(this.manual);
    });
  }

}
