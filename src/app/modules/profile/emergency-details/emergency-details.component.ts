import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../organization/organization.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss']
})
export class EmergencyDetailsComponent implements OnInit {

  formData:any = {};
  userId: any = "";
  userData : any = {};
  constructor(private orgService:OrganizationService,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              public dialogRef: MatDialogRef<EmergencyDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
                this.userData = data;
                this.patchData();
                console.log("ngonit data", data);
               }

  ngOnInit(): void {
    
  }

  submit(form:NgForm){
    if(form.invalid){
      return;
    }
    let parems:any = {
      _id: this.userData._id,
      mobile : this.formData.mobileNo,
      
    }
    console.log(parems);
    //console.log(this.loginData.password);
    this.orgService.addUser(parems).subscribe((res:any) => {
      console.log("Onboard response ",res);
      this.dialogRef.close("Updated");
    })
  }

  patchData(){
    this.formData = {
      mobileNo : this.userData.mobile,
      
    };
  }

}