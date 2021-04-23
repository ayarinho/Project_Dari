import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Location} from '@angular/common'

import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listNewUsers:Array<any>=[];
  listNewUsersFilter:Array<any>=[];
  idUser:number=0;

  constructor(private adminService:AdminDashboardService,private router:Router,private location:Location) { }

  getIdUser(i:number){

    console.log("iddddd "+i)
    this.idUser=i;
      
  }

  refresh(){

    this.router.navigateByUrl("/list_users",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);
    })
  }

  deleteUserById(id:number){
   
 this.adminService.deleteUserById(this.idUser).subscribe();
 this.refresh();

  }

 

  ngOnInit(): void {

    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listNewUsers=data;
  
    })

  /*this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listNewUsers=data;
      
  })*/
  
}
  
}
