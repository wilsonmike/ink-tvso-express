import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipDataService } from '../shipdata.service';

@Component({
  selector: 'app-costumeagentmarch',
  templateUrl: './costumeagentmarch.component.html',
  styleUrls: ['./costumeagentmarch.component.css']
})
export class CostumeagentmarchComponent implements OnInit {
  costumeagent: any = [];
  term = '';

  constructor(private service: ShipDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCostumeAgentMarch().subscribe((res) => {
      this.costumeagent = res;
      this.costumeagent.splice(0, 1);
    });
  }

}
