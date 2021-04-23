import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

   listNewUsers:Array<any>=[];
   listNewUsersFilter:Array<any>=[];

  constructor(private adminService:AdminDashboardService) { }


  

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
