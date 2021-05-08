import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changer-password',
  templateUrl: './changer-password.component.html',
  styleUrls: ['./changer-password.component.css']
})
export class ChangerPasswordComponent implements OnInit {
  registerForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    
   
  });
  }

  get f() { return this.registerForm.controls; }

  changerPassword(){
  
    this.submitted=true;

    this.auth.getUserByUsername(this.f.userName.value).subscribe(data=>{
      
      let user = JSON.parse(String(data));  
  this.auth.changerPassword(user.userName,this.f.oldPassword.value,this.f.password.value,this.f.newPassword.value)
  .subscribe(data1=>{

            console.log("Message retourner :  ",data1);
          })
            
    })

  }

}
