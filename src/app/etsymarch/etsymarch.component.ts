import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-etsymarch',
  templateUrl: './etsymarch.component.html',
  styleUrls: ['./etsymarch.component.css']
})
export class EtsymarchComponent implements OnInit {
  etsymarch: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEtsyMarch().subscribe((res) => {
      this.etsymarch = res;
      this.etsymarch.splice(0, 1);
      console.log(this.etsymarch);
    });
  }

}
