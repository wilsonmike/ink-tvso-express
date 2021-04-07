import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-tvsomarch',
  templateUrl: './tvsomarch.component.html',
  styleUrls: ['./tvsomarch.component.css']
})
export class TvsomarchComponent implements OnInit {
  tvso: any = [];
  term = '';


  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getTvsoMarch().subscribe((res) => {
      this.tvso = res;
      this.tvso.splice(0, 1);
      console.log(this.tvso);
    });
  }

}
