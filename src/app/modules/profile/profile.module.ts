import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EmergencyDetailsComponent } from './emergency-details/emergency-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    EmergencyDetailsComponent,
    ExperienceDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
