import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    LeaveComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    MaterialModule
  ]
})
export class LeaveModule { }
