import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from 'src/app/data/employee';
import {EmployeeService} from 'src/app/data/employee.service';
import { Router } from '@angular/router';
import { Position } from '../../data/position';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
   getEmployeesSub: any;
  loadingError: boolean=false;

  filteredEmployees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    }, error => {
        this.loadingError = true;
    });
  }

  onEmployeeSearchKeyUP(event:any){
    let my_filter: string = event.target.value.toLowerCase();
    this.filteredEmployees =  this.employees.filter((emp) => 
    ((emp.FirstName.toLowerCase().indexOf(my_filter) != -1) || // this indicates that the value is not empty
    (emp.LastName.toLowerCase().indexOf(my_filter) != -1)  || // if the index is not -1, it means that a name exists
    (emp.Position['PositionName'].toLowerCase().indexOf(my_filter) != -1)))
  }

  routeEmployee(id: string){
    this.router.navigate(['/employee/', id]);
  }

  ngOnDestroy(){
    if(this.getEmployeesSub != 'undefined'){
      this.getEmployeesSub.unsubscribe();
    }
  }
 
}
