import { Injectable } from '@angular/core';
import { Position } from './position';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
  getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>('https://thawing-dawn-70314.herokuapp.com/positions');
  }
}
