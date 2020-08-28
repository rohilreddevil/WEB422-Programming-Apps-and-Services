import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PositionsComponent } from './components/positions/positions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PositionComponent } from './components/position/position.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
 { path:"home", component: HomeComponent},
 { path: "employees", component: EmployeesComponent},
 { path: "positions", component: PositionsComponent},
 { path: "employee/:_id", component: EmployeeComponent},
 { path: "position/:_id", component: PositionComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
