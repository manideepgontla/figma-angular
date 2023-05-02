import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreatePasswordComponent
  ],
  imports: [
    LoginRoutingModule
  ]
})
export class LoginModule { }
