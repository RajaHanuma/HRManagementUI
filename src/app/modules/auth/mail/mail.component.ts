import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mailData:any = {};

  constructor(private route:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    if(form.invalid){
      console.log(form);
      return;
    }
    let params:any = {
      email: this.mailData.email
    };
    console.log(params);
    this.authService.checkMail(params).subscribe((res: any) => {
      console.log("Mail response ",res);
      this.route.navigate([`/auth/otp/${this.mailData.email}`]);
    });
  }

}
