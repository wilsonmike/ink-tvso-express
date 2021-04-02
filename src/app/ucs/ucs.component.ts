import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-ucs',
  templateUrl: './ucs.component.html',
  styleUrls: ['./ucs.component.css']
})
export class UcsComponent implements OnInit {
  ucs: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUCS().subscribe((res) => {
      this.ucs = res;
      this.ucs.splice(0, 1);
    });
  }

}
