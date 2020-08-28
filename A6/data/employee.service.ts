import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('https://thawing-dawn-70314.herokuapp.com/employees');
  }

 //new methods added

  saveEmployee(employee: EmployeeRaw){
    return this.http.put<any>("https://thawing-dawn-70314.herokuapp.com/employee/" + employee._id, employee);
  };


  getEmployee(id){
    return this.http.get<EmployeeRaw[]>('https://thawing-dawn-70314.herokuapp.com/employee-raw/' + id);
  }


}
