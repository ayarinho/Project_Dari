import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode  from 'jwt-decode'
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

   tokenObj:any=JSON.parse(localStorage.getItem('token')!);

   debloque: Subscription=this.tokenObj;

  constructor(private router:Router,private au:AuthService) { 


  }

  ngOnDestroy(){
 
    console.log("ayaaaaaaaaaaaaaaaaaaaaaaaaros")
           this.debloque.unsubscribe();   
           
           
    console.log("aaaaaaaaaaaa",this.debloque.closed)
  }

  ngOnInit(): void {

     console.log(this.tokenObj.token);
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
console.log("Date actuelle  :" +  new Date().valueOf());

  }

  salut(){

    localStorage.setItem('token', JSON.stringify({ token: this.tokenObj.token }));

 this.debloque=this.au.DebloquerCompte("youssef.ayari1@esprit.tn").subscribe(data=>{   // ntasti beha fonction inutiiile

      console.log("aaa",data);
    })

 
    
  }

    alouuu(){


      this.au.getUserByUsername("sasou123456").subscribe(data=>{   // ntasti beha fonction inutiiile
  
        console.log("123456",data);
      })
  }

}
