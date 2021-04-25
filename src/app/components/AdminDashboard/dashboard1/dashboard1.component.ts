import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import jwtDecode  from 'jwt-decode';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit ,DoCheck {

  tokenObj:any=JSON.parse(localStorage.getItem('token')!); // pour deconnecter automatique if token expirer

   listNewUsers:Array<any>=[];
   listNewUsersFilter:Array<any>=[];
   statusUser:any;
   verifeyStatusUser:boolean=false;

  constructor(private adminService:AdminDashboardService,private router:Router) { }


  ngDoCheck(){


   this.statusUser=localStorage.getItem("status user"); //user connected offline ou online

   /*console.log(this.tokenObj.token);
   const decode:any=jwtDecode(this.tokenObj.token);  
   console.log(decode)
  const date= new Date(0);
  const tokenexp=date.setUTCSeconds(decode.exp)
  if(tokenexp.valueOf()<new Date().valueOf()){  // si date token inferieur a la date actuelle token yetfasakh
    console.log("Le Token est Totalement expirer!!!");

   localStorage.removeItem('token');

    this.router.navigate(['/login']);

}
console.log("Date exp token  :" + tokenexp.valueOf());
console.log("Date actuelle  :" +  new Date().valueOf());*/
    
  }

  ngOnInit(): void {


  this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listNewUsers=data;
       
       this.listNewUsers.filter((e,i)=>{
           
        if(i<4){

          this.listNewUsersFilter.push(e);
        }
        return this.listNewUsersFilter;
          
       })
    
  })


    var chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'line',
            label: 'My First dataset',
            data: [10, 50,12,80,35,80,90,76],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
      
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [10, 50,12,80,35,80,90,76],
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });
 
    var chart1 = new Chart('line', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [10, 50,12,80,35,80,90,76],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
          },
      
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [10, 50,12,80,35,25,90,76],
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });
  

    
}


}
