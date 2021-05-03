import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-aprilcostumeagent',
  templateUrl: './aprilcostumeagent.component.html',
  styleUrls: ['./aprilcostumeagent.component.css']
})
export class AprilcostumeagentComponent implements OnInit {
  costume: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCostumeAgentApril().subscribe((res) => {
      this.costume = res;
      this.costume.splice(0, 1);
    });
  }

}
