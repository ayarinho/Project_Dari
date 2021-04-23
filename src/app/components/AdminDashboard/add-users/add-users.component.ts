import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
          const passValue = passControl.value;
          if (passValue !== cnfpassValue || passValue === '') {
              return {
                  isError: true
              }; } } }

  return null;
}

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  registerForm: any;
  Change:boolean=false;
  messageRegisterSuccess:any;
  messageRegisterFailed:any;
  verifey:boolean=false;


  constructor(private formBuilder: FormBuilder ,private auth:AuthService) { }

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
    
    });
      }

      addUser(){
        this.Change=true;


          this.auth.AddUser(this.registerForm.value,this.f.password.value).subscribe(data=>{
      
            console.log(data)
          Object.keys(data).map((Obj:any)=>{ // map nekhedh key
           
           
              if(Obj != "Password have 8 caracter upper lower and number" &&
              Obj != "Username exits deja dans la base de donner" &&
              Obj != "Email exits deja dans la base de donner" ){
         
                this.verifey=true;
                 this.messageRegisterSuccess=Obj;
           
              }else{
                 this.verifey=true;
      
                 this.messageRegisterFailed=Obj;
              }
       
      });   
          });
      
     
      
      }

      changeStatus(){

        this.messageRegisterFailed=null;
        this.messageRegisterSuccess=null;
      }

  }



