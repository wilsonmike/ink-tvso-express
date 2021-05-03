import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-apriltvso',
  templateUrl: './apriltvso.component.html',
  styleUrls: ['./apriltvso.component.css']
})
export class ApriltvsoComponent implements OnInit {
  tvso: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getTvsoApril().subscribe((res) => {
      this.tvso = res;
      this.tvso.splice(0, 1);
    });
  }

}
