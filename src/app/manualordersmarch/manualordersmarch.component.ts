import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-manualordersmarch',
  templateUrl: './manualordersmarch.component.html',
  styleUrls: ['./manualordersmarch.component.css']
})
export class ManualordersmarchComponent implements OnInit {
  manual: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getManualOrdersMarch().subscribe((res) => {
      this.manual = res;
      this.manual.splice(0, 1);
    });
  }

}
