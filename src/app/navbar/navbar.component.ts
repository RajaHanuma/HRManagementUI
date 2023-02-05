import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { homedir } from 'os';
import { AuthService } from '../modules/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  firstName: any ;
  name: any = null;
  designation: any ;
  navExpand: boolean = true;
  sideNavList: any[] = [
    {
      moduleName: "Home",
      image: "dashboard",
      routerLink: "dashboard"
    },
    {
      moduleName: "Profile",
      image: "person",
      routerLink: "profile"
    },
    {
      moduleName: "Organization",
      image: "groups",
      routerLink: "organization"
    }, 
    {
      moduleName: "Leaves",
      image: "event",
      routerLink: "leave"
    },
    {
      moduleName: "Holidays",
      image: "calendar_month",
      routerLink: "holiday"
    }
  ]


  constructor(private route: Router,private authService:AuthService) { }

  ngOnInit(): void {
    let url = this.route.url;
    console.log(url);
    const localData = localStorage.getItem('user-details');
    if (localData) {
      const details = JSON.parse(atob(localData));
      this.name = details.data.firstName +" "+ details.data.lastName;
      this.designation = details.data;
      console.log("Local ",details);
      console.log("Local ",details.data.firstName);
    }
  }

  getTitle(){
    let url:string = this.route.url;
    return this.sideNavList.find((li:any) => url.includes(li.routerLink))?.moduleName;
  }

  menuClicked(){
    this.navExpand = !this.navExpand;
  }

  logout(){
    this.authService.logout();
    this.route.navigate(["/auth/login"]);
  }

}
