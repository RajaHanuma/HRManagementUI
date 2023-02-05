import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  selectedDate = new Date();
  calendarVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousDay() {
    this._addDays(-1);
  }

  onNextDay() {
    this._addDays(1);
  }

  onSelectedChange(selectedDate: Date) {
    this.selectedDate = selectedDate;
  }

  private _addDays(days: number) {
    this.selectedDate = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth(),
      this.selectedDate.getDate() + days
    );

    this.calendar._goToDateInView(this.selectedDate, 'month');
  }
}
