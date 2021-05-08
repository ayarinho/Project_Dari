import { HttpClient } from '@angular/common/http';
import { Component ,Input,OnInit} from '@angular/core';
import { AdminDashboardService } from './services/admin-dashboard.service';
import { LoadingService } from './services/loading.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  loading$ = this.loader.loading$;
  verifey:boolean=false;
   
  constructor(private loader:LoadingService){

  }
   


  
  
}