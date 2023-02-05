import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  formData:any = {};
  userId: any = "";
  disignationList:any = ["HR","Developer","Accountant"];
  constructor(private orgService:OrganizationService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("onb ngonit");
    this.activatedRoute.params.subscribe((params:any) => {
      console.log("onb ngonit", params);
      this.userId = params.id;
      if(this.userId){
        this.patchData();
      }
    })
  }

  cancel(){
    this.router.navigate(["/organization"]);
  }

  submit(form:NgForm){
    if(form.invalid){
      return;
    }
    let parems:any = {
      firstName : this.formData.firstName,
      lastName : this.formData.lastName,
      gender : this.formData.gender,
      email : this.formData.email,
      mobile : this.formData.mobileNo,
      empCode : this.formData.empCode,
      dateOfJoining : this.formData.dateOfJoin,
      department : this.formData.dept,
      designation : this.formData.desg,
      empType : this.formData.empType,
      role : this.formData.role,
      reportingManager : this.formData.rptMgr,
      probition : this.formData.prob,
      noticePeriod : this.formData.notPer,
      userType: this.formData.desg === "HR" ? "HR" : "EMP"
    }
    if(this.userId){
      parems._id = this.userId;
    }
    console.log(parems);
    //console.log(this.loginData.password);
    this.orgService.addUser(parems).subscribe((res:any) => {
      console.log("Onboard response ",res);
      this.router.navigate(["/organization"]);
    })
  }

  dateChanged(){
    console.log(this.formData.dateOfJoin);
  }

  patchData(){
    this.orgService.getUserById(this.userId).subscribe((res:any) => {
      this.formData = {
        firstName : res.firstName,
        lastName : res.lastName,
        gender : res.gender,
        email : res.email,
        mobileNo : res.mobile,
        empCode : res.empCode,
        dateOfJoin : res.dateOfJoining ,
        dept : res.department ,
        desg : res.designation ,
        empType : res.empType,
        role : res.role,
        rptMgr : res.reportingManager ,
        prob : res.probition ,
        notPer : res.noticePeriod 
      };
    })
  }
}
