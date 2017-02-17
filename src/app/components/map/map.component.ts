import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AispotService } from "../../shared/aispot.service";
import { Point } from "../../shared/point.interface";

@Component({
  selector: 'geo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Geomotiv test task';

  /*Initial data for map*/
  lat: number = 59.879037;
  //I think this coordinate from task is wrong
  //lng: number = 59.87903;
  //and changed it to:
  lng: number = 9.87903;
  zoom: number = 8;

  points: Point[] = [];

  constructor(private AS: AispotService,
              private router: Router) {}

  ngOnInit() {
    this.AS.getPoints(this.lat, this.lng).subscribe(
      (data) => {
        this.points = data;
        //console.log(this.points);
      }
    );
  }

  clickedMarker(id: number) {
    console.log('clicked: ', id);
    this.router.navigate(['/map', id]);
  }
}
