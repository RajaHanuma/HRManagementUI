import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData:any = {};
  //loginApi:any = "http://localhost:8000/api/user/login";
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    if(form.invalid){
      return;
    }
    let parems:any = {
      email : this.loginData.email,
      password : this.loginData.password
    }
    console.log(this.loginData.email);
    console.log(this.loginData.password);
    this.authService.login(parems).subscribe((res:any) => {
      console.log("Login response ",res);
      this.authService.updateCurrentUser(res);
      this.router.navigate(["/dashboard"]);
    })
  }

  gotoForgotPass(){
    this.router.navigate(["/auth/forgotPassword"]);
  }

}
