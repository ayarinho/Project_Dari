import { Component, DoCheck, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,DoCheck {

  user:any;

  constructor(private adminService:AdminDashboardService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){

    let k= JSON.stringify(this.adminService.user);
  
    let json= cleanString(k)
    this.user=JSON.parse(json)
    console.log(this.user);
    
    function cleanString(str:any) {
      str = str.replace('"[', '[');
      str = str.replace(']"', ']');
      return str;
    }
    
   
   }
}
