import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../organization/organization.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  

  formData:any = {};
  userId: any = "";
  userData : any = {};
  disignationList:any = ["HR","Developer","Accountant"];
  constructor(private orgService:OrganizationService,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              public dialogRef: MatDialogRef<PersonalDetailsComponent>,
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
      dateOfBirth : this.formData.dateOfBirth,
      bloodGroup : this.formData.bloodGroup,
      fatherName : this.formData.fatherName,
      motherName : this.formData.motherName,
      maritialStatus : this.formData.maritialStatus,
      spouseName : this.formData.spouseName,
      marrAnniversiry : this.formData.marrAnniversiry
    }
    console.log(parems);
    //console.log(this.loginData.password);
    this.orgService.addUser(parems).subscribe((res:any) => {
      console.log("Onboard response ",res);
      this.dialogRef.close("Updated");
    })
  }

  dateChanged(){
    console.log(this.formData.dateOfBirth);
  }

  patchData(){
    this.formData = {
      dateOfBirth : this.userData.dateOfBirth,
      bloodGroup : this.userData.bloodGroup,
      fatherName : this.userData.fatherName,
      motherName : this.userData.motherName,
      maritialStatus : this.userData.maritialStatus,
      spouseName : this.userData.spouseName,
      marrAnniversiry : this.userData.marrAnniversiry
    };
  }

}
