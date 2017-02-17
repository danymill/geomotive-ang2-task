import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs';
import { Observable } from "rxjs";

@Injectable()
export class AispotService {

  constructor(private http: Http) { }

  getPoints(lat, lng) {
    let params: string = [
      `lat=${lat}`,
      `lng=${lng}`
      ].join('&');
    return this.http.get(`http://api.dev.aispot.no/lighthouse/spot/nearby?${params}`).map(
      (response: Response) => response.json()
    ).catch(this.handleError);
  }

  getInfo(id: number) {
    return this.http.get(`http://api.dev.aispot.no/lighthouse/content/${id}`).map(
      (response: Response) => response.json()
    ).catch(this.handleError);
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
