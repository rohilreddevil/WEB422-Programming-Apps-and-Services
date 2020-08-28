import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from 'src/app/data/employee';
import {EmployeeService} from 'src/app/data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  private getEmployeesSub: any;
  loadingError: boolean=false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    }, error => {
        this.loadingError = true;
    });
  }
  ngOnDestroy(){
    if(this.getEmployeesSub != 'undefined'){
      this.getEmployeesSub.unsubscribe();
    }
  }
 
}
