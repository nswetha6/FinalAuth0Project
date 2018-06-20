import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route,Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

import { StudentRouteComponent } from './student-route/student-route.component';
import { DepartmentService } from './student-route/department.service';
import { StudentRouteService } from './student-route/studentroute.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { StudentCanDeactivateService } from './student-route/studentCanDeactivate.service';
import { NamesearchPipe } from './pipes/namesearch.pipe';


// const appRoutes: Routes =[
//   {path:'AddStudent', 
//     component: StudentRouteComponent
//     //canDeactivate:[StudentCanDeactivateService] 
//   },
//   {path:'StudentsList', component: StudentlistComponent },
//   {path:'StudentInfo', component: StudentinfoComponent },
//   //{path:'StudentsList/:FirstName', component: StudentinfoComponent },
//    {path:'StudentInfo/:id', component: StudentinfoComponent },
//   {path:'', redirectTo:'/AddStudent', pathMatch:'full'},
//   {path:'**', component: PageNotFoundComponent}
  
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
