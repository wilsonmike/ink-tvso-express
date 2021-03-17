import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-costumeagent',
  templateUrl: './costumeagent.component.html',
  styleUrls: ['./costumeagent.component.css']
})
export class CostumeagentComponent implements OnInit {
  costume: any = [];

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCostumeAgent().subscribe((res) => {
      this.costume = res;
      this.costume.splice(0, 1);
      console.log(this.costume);
    });
  }

}
