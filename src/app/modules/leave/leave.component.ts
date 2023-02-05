import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {
    
  }

}

const ELEMENT_DATA = [
  {position: 1, name: 'Casual', weight: 1, symbol: '21-03-2022 - 21-03-2022'},
  {position: 2, name: 'Sick', weight: 1, symbol: '02-05-2022 - 02-05-2022'},
  {position: 3, name: 'Casual', weight: 2, symbol: '11-09-2022 - 13-09-2022'},
  {position: 4, name: 'Earned Leave', weight: 2, symbol: '21-12-2022 - 23-12-2022'}
  /*{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'}*/
];