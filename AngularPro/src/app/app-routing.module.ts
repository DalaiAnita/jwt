import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'teacher',
    component: TeacherDashboardComponent
  },
  {
    path:'user',
    loadChildren:() => import('./user/user.module').then(mod=>mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
