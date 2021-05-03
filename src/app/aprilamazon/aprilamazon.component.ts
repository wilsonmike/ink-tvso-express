import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-aprilamazon',
  templateUrl: './aprilamazon.component.html',
  styleUrls: ['./aprilamazon.component.css']
})
export class AprilamazonComponent implements OnInit {
  amazon: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAmazonApril().subscribe((res) => {
      this.amazon = res;
      this.amazon.splice(0, 1);
      console.log(this.amazon);
    });
  }

}
