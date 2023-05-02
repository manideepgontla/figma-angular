import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePasswordComponent } from './create-password/create-password.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
