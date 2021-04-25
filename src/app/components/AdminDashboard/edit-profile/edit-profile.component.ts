import { Component, DoCheck, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import {passValidator}  from '../../Login/login/login.component'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit,DoCheck {

     user:any;
     registerForm: any;
     selectedFiles: any;
     currentFileUpload: any;
    progress: { percentage: number } = { percentage: 0 }
    Change:boolean=false;

  constructor(private adminService:AdminDashboardService,private formBuilder: FormBuilder,
    private router:Router,private auth:AuthService) { }


    get f() { return this.registerForm.controls; }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email :['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      userName: ['', Validators.required],
      password: ['', [Validators.required]],
      ConfirmPassword: ['', [passValidator,Validators.required]],
      dateNaissance:['', [Validators.required]],
      phoneNumber:['', [Validators.required]],
      lieu:['', [Validators.required]],
      isBlock:['', [Validators.required]],
    
    });
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

   Save(){
  
    if(this.user.id != null && this.registerForm.value != null ){

    this.adminService.updateUser(this.registerForm.value,this.user.id).subscribe(data=>{
    

      this.auth.setPhotoByClient(this.user.id,this.currentFileUpload.name).subscribe();
      
     
    })

  } else{

    return ;
  }

   this.progress.percentage = 0;
   this.currentFileUpload = this.selectedFiles.item(0)
   console.log(this.currentFileUpload.name)
  
   
   this.selectedFiles = undefined;
   
  

   }



   
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
    console.log(event.target.files)
  }
  
}
