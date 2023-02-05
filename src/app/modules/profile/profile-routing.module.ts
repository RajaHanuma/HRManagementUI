import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = 
[{ path: '', component: ProfileComponent },
 { path: 'contact-details', component: ContactDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
