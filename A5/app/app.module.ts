import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PositionsComponent } from './components/positions/positions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeService} from './data/employee.service';
import { PositionService } from './data/position.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   
    NavComponent,
   
    ContentComponent,
   
    FooterComponent,
   
    HomeComponent,
   
    EmployeesComponent,
   
    PositionsComponent,
   
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PositionService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
