import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';
@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  constructor(private service: ShipDataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getAmazon().subscribe((res) => {
      console.log(res);
    });
  }
}
