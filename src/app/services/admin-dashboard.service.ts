import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { HttpRequest, HttpEvent} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) { }

  url= "http://localhost:8084/";


  getAllUsers():Observable<any>{

    return this.http.get<any>(this.url +"getAllUsers" )
  }
   
  deleteUserById(id:number):Observable<any>{

    return this.http.delete<any>(this.url +"deleteUserById/"+id);
  }
}
