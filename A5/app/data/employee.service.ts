import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('https://thawing-dawn-70314.herokuapp.com/employees');
  }
}
