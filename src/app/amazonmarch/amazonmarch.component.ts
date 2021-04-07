import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-amazonmarch',
  templateUrl: './amazonmarch.component.html',
  styleUrls: ['./amazonmarch.component.css']
})
export class AmazonmarchComponent implements OnInit {
  amazon: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAmazonMarch().subscribe((res) => {
      this.amazon = res;
      this.amazon.splice(0, 1);
      console.log(this.amazon);
    });
  }

}
