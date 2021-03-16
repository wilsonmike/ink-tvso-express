import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-amazonfeb',
  templateUrl: './amazonfeb.component.html',
  styleUrls: ['./amazonfeb.component.css']
})
export class AmazonfebComponent implements OnInit {
  amazonfeb: any = [];

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAmazonFeb().subscribe((res) => {
      this.amazonfeb = res;
      this.amazonfeb.splice(0, 1);
      this.amazonfeb.splice(0, 1);
      console.log(this.amazonfeb);
    });
  }

}
