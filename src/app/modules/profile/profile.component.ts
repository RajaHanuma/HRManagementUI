import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { OrganizationService } from '../organization/organization.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EmergencyDetailsComponent } from './emergency-details/emergency-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  width: number = 60;
  userData: any = {};

  constructor(private authService: AuthService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getProfilePer(){
    return this.width + "";
  }

  getUserDetails(){
    this.authService.getUserDetails().subscribe((res: any) => {
      this.userData = res;
    });
  }
  getPersonalDetails(): void {
    //this.router.navigate([`/profile/contact-details`]);
    
      const dialogRef = this.dialog.open(PersonalDetailsComponent, {
        width: '80%',
        data: this.userData
      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The dialog was closed');
        //this.animal = result;
        if(result === "Updated"){
          this.getUserDetails();
        }
      });
  }

  getContactDetails(): void {
    //this.router.navigate([`/profile/contact-details`]);
    
      const dialogRef = this.dialog.open(ContactDetailsComponent, {
        width: '80%',
        data: this.userData
      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The dialog was closed');
        //this.animal = result;
        if(result === "Updated"){
          this.getUserDetails();
        }
      });
  }

  getEmerDetails(): void {
    //this.router.navigate([`/profile/contact-details`]);
    
      const dialogRef = this.dialog.open(EmergencyDetailsComponent, {
        width: '80%',
        data: this.userData
      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The dialog was closed');
        //this.animal = result;
        if(result === "Updated"){
          this.getUserDetails();
        }
      });
  }

  getExpDetails(): void {
    //this.router.navigate([`/profile/contact-details`]);
    
      const dialogRef = this.dialog.open(ExperienceDetailsComponent, {
        width: '80%',
        data: this.userData
      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The dialog was closed');
        //this.animal = result;
        if(result === "Updated"){
          this.getUserDetails();
        }
      });
  }
}