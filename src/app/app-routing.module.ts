import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmpComponent } from './emp/emp.component';



const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:"full"},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'emps',component:EmpComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
