import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AispotService } from "../../shared/aispot.service";

@Component({
  selector: 'geo-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css'],
  // outputs: ['info'],
  // inputs: ['info']
})
export class DetailedViewComponent implements OnInit {
  title: string = 'Loading...';
  id: number;
  info: any[];
  loading: boolean = false;
  constructor(private route: ActivatedRoute,
              private AS: AispotService) {
    route.params.subscribe(
      params => this.id = params['id']
    );
  }

  ngOnInit() {
    this.loading = true;
    this.AS.getInfo(this.id).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.title = `${data.title}`;
        this.info = data;
      },
      data => {
        this.loading = false;
        this.title = `${data.status} ${data.message}`;
      }
    )
  }

}
