import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-ucsfeb',
  templateUrl: './ucsfeb.component.html',
  styleUrls: ['./ucsfeb.component.css']
})
export class UcsfebComponent implements OnInit {
  ucs: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUCSFeb().subscribe((res) => {
      this.ucs = res;
      this.ucs.splice(0, 1);
      // this.etsyFeb.splice(0, 1);
    });
  }

}
