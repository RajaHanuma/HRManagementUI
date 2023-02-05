import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  email: any;
  otpData:any = {};
  userData: any = {};
  constructor(private route:Router, 
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.email = res.email;
      //this.checkUserMail();
    })
  }

  submit(form:NgForm){
    console.log(this.otpData.otp);
    console.log(this.email);
    let params: any = {
      email: this.email,
      otp: this.otpData.otp
    }
    this.authService.verifyOTP(params).subscribe((res: any) => {
      this.userData = res;
      console.log("res is : "+ res)
      if(res != null){
        this.route.navigate([`/auth/newpassword/${this.email}`]);
      }
    });
  }

}
