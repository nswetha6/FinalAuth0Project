import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { StudentRouteComponent } from './student-route/student-route.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
 // { path: 'callback', component: StudentRouteComponent },
 
 // {path: 'AddStudent', component: StudentRouteComponent},
    //canDeactivate:[StudentCanDeactivateService] 
    { path: '**', redirectTo: '' },
  //{path:'StudentsList', component: StudentlistComponent },
  //{path:'StudentInfo', component: StudentinfoComponent },
  //{path:'StudentsList/:FirstName', component: StudentinfoComponent },
  // {path:'StudentInfo/:id', component: StudentinfoComponent },
 // {path:'', redirectTo:'/AddStudent', pathMatch:'full'},
  //{path:'**', component: PageNotFoundComponent}

];
