import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

    user:any;
   geo:any;
  constructor(private http:HttpClient) { }

  url= "http://localhost:8086/";


  getAllUsers():Observable<any>{

    return this.http.get<any>(this.url +"getAllUsers" )
  }
   
  deleteUserById(id:number):Observable<any>{

    return this.http.delete<any>(this.url +"deleteUserById/"+id);
  }


  getUserById(id:any){

    return this.http.get(this.url +"getUserById/"+id);
  }


  setdata(data:any)
  {

  this.user=data;
  }

  setdataGeo(data:any)
  {

  this.geo=data;
  }

 
  updateUser(user:any,id:number){

    let url="http://localhost:8086/updateUser/"+ id;
    return this.http.put(url, user);
  }


  blockUser(id:number){

    return this.http.get(this.url+"blockedUser/"+id);
  }

  deblockUser(id:number){

    return this.http.get(this.url+"deblockedUser/"+id);
  }
}
