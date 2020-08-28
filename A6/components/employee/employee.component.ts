import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeRaw } from '../../data/employeeRaw';
import { Position } from '../../data/position';
import { EmployeeService } from '../../data/employee.service';
import { PositionService } from '../../data/position.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

 private paramSubscription: any; 
 private employeeSubscription: any; 

 private getPositionsSub: any; //this can be disposed off later
 private saveEmployeeSubscription: any;
 employee: EmployeeRaw; 
 public positions: Position[];
 public successMessage = false;
 public failMessage = false; 


  constructor(private employeeService: EmployeeService, private positionService: PositionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe((params)=>{ //calling the getEmployee method
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp)=>{
        this.employee = emp[0]; //obtain a single employee based on the id sent
        //subscribe converts the incoming stream into a familar array
      
        this.getPositionsSub = this.positionService.getPositions().subscribe(data=>{
          this.positions = data; //positions property populated
        });
      
      });
    });
  }

  onSubmit(){
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(
    
    ()=> { //if the employee was saved successfully - first callback
    
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }, 
    
    () =>{ //second callback
      //if employee was not saved successfully
      this.failMessage = true;

      setTimeout(() => {
        this.failMessage = false;
      }, 2500);

    })
  }

  ngOnDestroy(){
    if(this.employeeSubscription != 'undefined'){
      this.employeeSubscription.unsubscribe();
    }
    if(this.getPositionsSub != 'undefined'){
      this.getPositionsSub.unsubscribe();
    }
    if(this.paramSubscription != 'undefined'){
      this.paramSubscription.unsubscribe();
    }
    if(this.saveEmployeeSubscription != 'undefined'){
      this.saveEmployeeSubscription.unsubscribe();
    }
  }
}
