import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import{Location} from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  listAds:Array<any>=[];
  idAd:number=0;
  p:number=1;
  userName:string='';
  listSortingAdsDistance:Array<any>=[];
  verifeySorting:boolean=false;

  constructor(private adminService:AdminDashboardService,private router:Router,private location:Location) { }


  sortingByDistanceDown(){

      this.verifeySorting=false;
  }

  sortingByDistanceUp(){

    this.adminService.getAdByDistanceSorting(32).subscribe((data:any)=>{
 
     this.listSortingAdsDistance=data;
  
     this.verifeySorting=true;
      
     console.log("distanccccccccccccccccccccce ",this.listSortingAdsDistance)
      
    })
  }
    
  search(){

    if(this.userName == ''){
  
      this.ngOnInit();
    }else{
  
      this.listAds=this.listAds.filter(res=>{
  
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }


  ngOnInit(): void {

    
    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listAds=data;

      console.log("annnnnnnnoonce  ",this.listAds)
    });
  
  }

  getIdAd(id:number){
 
    this.idAd=id;
      
     console.log("iddddddddddddddd",id)
  }

    

    refresh(){

      this.router.navigateByUrl("/dashborad/admin/list_users",{skipLocationChange:true}).then(()=>{
  
        this.router.navigate([decodeURI(this.location.path())]);
      });
    }
    
  
     deleteAdById(){

      this.adminService.deleteAdById(this.idAd).subscribe();

      this.refresh();
     }
   
   
  }


