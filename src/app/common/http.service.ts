import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getData(url:any,params?:any){
    return this.http.get(url, params);
  }

  postData(url:any,body:any,params?:any){
    return this.http.post(url, body, params);
  }

  updateData(url:any,body:any){
    return this.http.put(url, body);
  }

  deleteData(url:any,params?:any){
    return this.http.delete(url,params);
  }

}
