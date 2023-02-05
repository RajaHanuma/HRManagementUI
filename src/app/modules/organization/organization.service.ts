import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/apiConstants';
import { HttpService } from 'src/app/common/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private httpService:HttpService) { }

  getUserList(){
    const url = environment.baseUrl + ApiConstants.auth.getUserList;
    return this.httpService.getData(url);
  }
  
  addUser(body:any){
    const url = environment.baseUrl + ApiConstants.auth.addUser;
    return this.httpService.postData(url,body);
  }

  getUserById(id:any){
    const url = environment.baseUrl + ApiConstants.auth.getUserById(id);
    return this.httpService.getData(url);
  }
}
