import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { OrganizationService } from './organization.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})

export class OrganizationComponent implements OnInit  {

  displayedColumns = ['empCode', 'empName', 'gender', 'designation', 'reportingManager', 'emailId', 'isActive'];
  dataSource = new MatTableDataSource<Element>([]);
  userData: any = [];
  status:string = "Active";
  isActive: boolean = true;
  currentUser:any = {};
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: Router,
              private orgService: OrganizationService,
              private authService: AuthService) {
              this.currentUser = this.authService.getCurrentUser("data");
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(){
    this.orgService.getUserList().subscribe((res: any) => {
      this.userData = res;
      this.getFilteredUsersList();
    });
  }

  getFilteredUsersList(){
    let status = this.status === "Active";
    let data = this.userData.filter((emp: any) => emp.isActive === status);
    this.dataSource = new MatTableDataSource<Element>(data);
  }

  changeEmpStatus(element:any,event:any){
    event.stopPropagation();
    if(this.currentUser.userType !== 'HR'){
      return;
    }
    console.log(element)
    this.orgService.addUser({_id:element._id,isActive: !element.isActive}).subscribe((res:any) => {
      this.getUserList();
    })
  }

  updateUser(row:any){
    if(this.currentUser.userType !== 'HR'){
      return;
    }
    this.route.navigate([`/organization/updateEmpDetails/${row._id}`])
  }

  changeStatus(status:string){
    this.status = status;
    this.getFilteredUsersList();
  }

  getOnboard(){
    this.route.navigate([`/organization/onboard`]);
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
