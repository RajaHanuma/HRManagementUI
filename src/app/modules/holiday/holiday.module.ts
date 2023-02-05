import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayComponent } from './holiday.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HolidayComponent
  ],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    SharedModule
  ]
})
export class HolidayModule { }
