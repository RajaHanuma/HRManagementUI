import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selected!: Date | null;

  dashboardData: any = {
    leave: {
      remaining: 2,
      restricted: 4,
      used: 20,
      compoff: 2
    },
    leaveTransaction: [
      { 
        startDate: "12/10/2022",
        endDate: "12/10/2022",
        type: "Casual",
        status: "Rejected"
      },
      { 
        startDate: "12/10/2022",
        endDate: "29/10/2022",
        type: "Marriage",
        status: "Approved"
      },
      { 
        startDate: "30/10/2022",
        endDate: "30/10/2022",
        type: "Casual",
        status: "Pending"
      },
      { 
        startDate: "03/11/2022",
        endDate: "03/11/2022",
        type: "Personal",
        status: "Pending"
      }
    ],
    empLeaves: [
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      },
      {
        name: "Ayubrey Pena",
        startDate: "25/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      },
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      },
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: false
      },
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      },
      {
        name: "Ayubrey Pena",
        startDate: "25/03/2022",
        endDate: "25/03/2022",
        isFullDay: false
      },
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      },
      {
        name: "Ayubrey Pena",
        startDate: "23/03/2022",
        endDate: "25/03/2022",
        isFullDay: true
      }
    ],
    eventDetails: [
      {
        name: "Ajay",
        eventDate: "14/12/2022",
        eventType: "Birthday",
        eventName: "cake"
      },
      {
        name: "Hanuma",
        eventDate: "15/12/2022",
        eventType: "Birthday",
        eventName: "cake"
      },
      {
        name: "Ajay",
        eventDate: "23/12/2022",
        eventType: "Work Anniversary",
        eventName: "work"
      },
      {
        name: "Ajay",
        eventDate: "27/12/2022",
        eventType: "Work Anniversary",
        eventName: "work"
      }
    ],
    hldyDetails: [
      {
        name: "New Year",
        eventDate: "01/01/2023",
        eventType: "Holiday",
        eventName: "celebration"
      },
      {
        name: "Sankranti",
        eventDate: "15/01/2023",
        eventType: "Holiday",
        eventName: "celebration"
      },
      {
        name: "Republic Day",
        eventDate: "26/01/2023",
        eventType: "Holiday",
        eventName: "celebration"
      },
      {
        name: "Shiva",
        eventDate: "21/02/2023",
        eventType: "Holiday",
        eventName: "celebration"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}

