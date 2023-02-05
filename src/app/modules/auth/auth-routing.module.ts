import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path : '', redirectTo:"/auth/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: MailComponent },
  { path: 'otp/:email', component: OtpComponent },
  { path: 'newpassword/:email', component: NewpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
