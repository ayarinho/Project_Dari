import { Component, OnInit,Renderer2,Input } from '@angular/core';
import { FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { HttpClient } from '@angular/common/http';

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
          const passValue = passControl.value;
          if (passValue !== cnfpassValue || passValue === '') {
              return {
                  isError: true
              };
          }
          
      }
  }

  return null;
}

@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  Change=false;
  selectedFiles: any;
  currentFileUpload: any;
  progress: { percentage: number } = { percentage: 0 }
  registerForm: any;
  LoginForm:any;
  errorMessage:string='';
  show:boolean=false;
  idUser:any;
  verifyData:string='';
  messagePassword:string="";
  verifey:boolean=false;
  messageLogin:any;
  messageRegisterFailed:any;
  messageRegisterSuccess:any;
  messageDebloqueUser:any;
  retrieveForgetPassword:boolean=false;
  //loading$ = this.loader.loading$;


  constructor(private renderer: Renderer2,   private formBuilder: FormBuilder,
    public auth: AngularFireAuth ,private os :AuthService,private route:Router,
    public loader: LoadingService ) { }

  get f() { return this.registerForm.controls; }
  get M() { return this.LoginForm.controls; }

  ngOnInit(): void {

    this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
}

this.LoginForm = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required],

});


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



  addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `document.querySelector('.img-btn').addEventListener('click', function()
    {
        document.querySelector('.cont').classList.toggle('s-signup')
        
    });
    
    document.querySelector('#open-popup').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')
    });
 
    document.querySelector('#open-popup-register').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')
    });
    document.querySelector('.popup .close-btn').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')

     
    });
    
    `;



  this.renderer.appendChild(document.body, script);
  
  return script;
}



onSubmit(){

  this.Change=true;

  console.log(this.registerForm.status);

  
  if(this.registerForm.controls.ConfirmPassword.invalid == false){ //control sur confirmpassword et password 

    this.os.AddUser(this.registerForm.value,this.f.password.value).subscribe(data=>{

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

      Object.values(data).map((Obj:any)=>{
        
          this.idUser=Obj.id;
      })
     
      if(this.idUser != null || this.idUser != undefined){

          this.os.setPhotoByClient(this.idUser,this.currentFileUpload.name).subscribe();
        }
        
     
    });

  }else{

    return ;
     //this.route.navigate(['/'])
  }


    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log(this.currentFileUpload.name)
    this.os.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        console.log(event)
        console.log(event.type)
      
    })
    
    this.selectedFiles = undefined;
  
  
  }


  
  loginWithGoogle(){

    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(data=>{
    

      data.user?.getIdToken().then(token=>{

        console.log("tokeeeeen ", token);

        localStorage.setItem('token', JSON.stringify({ token: token }));


       this.route.navigate(['/card']);
      })
      .catch(error=>{

        console.log("error " ,error)
      })

      data.user?.refreshToken
    })
    .catch(error=>{

      console.log("error " ,error)
    })
  }

  loginWithFacebook(){

    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(data=>{

      data.user?.getIdToken().then(token=>{

        console.log("tokeeeeen ", token);

        localStorage.setItem('token', JSON.stringify({ token: token }));
        this.route.navigate(['/card']);
      })
      .catch(error=>{
        console.log('error ',error)
      })
      .catch(error=>{
           console.log('error ',error)
      })
    })}




  resolved(capatchResponse : any []){           // hethy eli bech naamel beha verification 

      console.log(capatchResponse);

      if(capatchResponse){

        this.os.DebloquerCompte(this.M.email.value).subscribe(data=>{        //juste njareb biiiiih email

         //this.verifey=true;
         this.messageDebloqueUser=data;
          //alert(data)
        })

        this.show=false;

      }
  }


  selectFile(event:any) {
    this.selectedFiles = event.target.files;
    console.log(event.target.files)
  }
  
  
  upload() {
         
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log(this.currentFileUpload.name)
    this.os.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        console.log(event)
        console.log(event.type)
      
    })
    
    this.selectedFiles = undefined;
  
  }

  login() {
    


  console.log("logiiiiiiiiiiiiiin "+this.LoginForm.controls)

    this.submitted=true; 

    //console.log("kkkkkkkkkkkkkkkk "+this.M.password)

    if(this.M.email.value != null && this.M.password.value !=null ){

    this.os.Authentification(this.M.email.value,this.M.password.value).subscribe(data=>{

      console.log(data);

      if(data !="Password incorrect" && data != "Votre compte est blocke security problem" &&
      data != "Email not found" && data != "Invalid email"){

      localStorage.setItem('token', JSON.stringify({ token: data }));

  
 
      this.route.navigate(['/card']);
 

      }else{

       this.verifey=true;

       this.messageLogin=data;
     
      }

     if(data === "Votre compte est blocke security problem"){

        this.show=true;                    // aparitionnde recaptcha
      }

      

      
    });

    }else{

      return;
    }
  }





  clearInput(){   // fama chwaya mechekeel
 this.registerForm.reset();
 this.LoginForm.reset();
 this.messageDebloqueUser=null;
  }


  changeStatusOfVerifey(){

    this.verifey=false;
    this.messageRegisterFailed=null;
    this.messageRegisterSuccess=null;      ///ya une difference entre null et ""(chaine vide)
    this.messageLogin=null;

     
  }

  gotoForgetPassword(){

    this.retrieveForgetPassword=true;

  }

}























