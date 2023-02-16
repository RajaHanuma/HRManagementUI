import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../organization/organization.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  formData:any = {};
  userId: any = "";
  userData : any = {};
  disabled: boolean = true;
  constructor(private orgService:OrganizationService,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              public dialogRef: MatDialogRef<ContactDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
                this.userData = data;
                this.patchData();
                console.log("ngonit data", data);
               }

  ngOnInit(): void {
    this.disabled = true;
  }

  submit(form:NgForm){
    if(form.invalid){
      return;
    }
    let parems:any = {
      _id: this.userData._id,
      mobile : this.formData.mobileNo,
      address : {
        city : this.formData.city,
        state : this.formData.state,
        pincode : this.formData.zipcode
      }
    }
    console.log(parems);
    //console.log(this.loginData.password);
    this.orgService.addUser(parems).subscribe((res:any) => {
      console.log("Onboard response ",res);
      this.dialogRef.close("Updated");
    })
  }

  patchData(){
    console.log("User Data for contact", this.userData)
    this.formData = {
      mobileNo : this.userData.mobile,
        city : this.userData.address.city,
        state : this.userData.address.state,
        country : this.userData.address.country,
        zipcode : this.userData.address.pincode
    };
  }

}
