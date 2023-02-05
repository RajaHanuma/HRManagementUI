import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/apiConstants';
import { HttpService } from 'src/app/common/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = null;

  constructor(private httpService: HttpService) {
    this.updateCurrentUser();
  }

  login(body:any){
    const url = environment.baseUrl + ApiConstants.auth.login;
    return this.httpService.postData(url,body);
  }

  updateCurrentUser(details:any = null){
    if (details == null) {
      const localData = localStorage.getItem('user-details');
      if (localData) {
        details = JSON.parse(atob(localData));
      }
    }
    this.currentUser = details;
    if (details) {
      localStorage.setItem('user-details', btoa(JSON.stringify(details)));
    }
  }

  getCurrentUser(key:any){
    if(this.currentUser){
      return this.currentUser[key];
    }else{
      return null;
    }
  }

  checkMail(body:any){
    const url = environment.baseUrl + ApiConstants.auth.checkMail;
    return this.httpService.postData(url, body);
  }

  getUserDetails(){
    const url = environment.baseUrl + ApiConstants.auth.getUserDetails;
    return this.httpService.getData(url);
  }

  getUserByMail(body: any){
    const url = environment.baseUrl + ApiConstants.auth.getUserByMail;
    return this.httpService.getData(url);
  }

  verifyOTP(body: any){
    const url = environment.baseUrl + ApiConstants.auth.verifyOTP;
    return this.httpService.postData(url, body);
  }

  logout(){
    this.currentUser = null;
    localStorage.clear();
  }
}
