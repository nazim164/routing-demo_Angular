import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { FormInAngularComponent } from './form-in-angular/form-in-angular.component';
import { PipeInAngularComponent } from './pipe-in-angular/pipe-in-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: 'Login', component: DepartmentListComponent },
  { path: 'Register', component: EmployeListComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipe', component: PipeInAngularComponent },
  { path: 'Form', component: FormInAngularComponent },
  { path: 'Reactive-Form', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeListComponent]
