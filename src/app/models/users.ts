


export class User{

     userName:string='';
      firstName:string='';
      lastName:string='';
     email:string='';
     password:string='';
      phoneNumber:string='';
    //dateNaissance:Date=new Date();
    
    

    constructor(username:string,email:string,password:string,firstname:string,lastname:string,phonenumber:string){
       this.userName=username;
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.password=password;
        this.phoneNumber=phonenumber;
        
    }

  
}