import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-tvso',
  templateUrl: './tvso.component.html',
  styleUrls: ['./tvso.component.css']
})
export class TvsoComponent implements OnInit {
  etsy: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getTVSO().subscribe((res) => {
      this.etsy = res;
      this.etsy.splice(0, 1);
      console.log(this.etsy);
    });
  }

}
