import { HttpClient } from '@angular/common/http';
import { Component ,Input,OnInit} from '@angular/core';
import { SampleSolution } from 'twilio/lib/rest/autopilot/v1/assistant/task/sample';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { Router,NavigationStart,Event,NavigationEnd, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  loading$ = this.loader.loading$;
  showLoadingIndicator:boolean=false;
  constructor(public loader: LoadingService, private http: HttpClient,private router:Router) {

    
    this.router.events.subscribe((routerEvent:Event)=>{

      if(routerEvent instanceof NavigationStart){

        this.showLoadingIndicator=true;
      }

      if(routerEvent instanceof NavigationEnd){

        this.showLoadingIndicator=false;
      }
    })
  }

  fetchData() {
    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .subscribe((res) => {
        console.log(res);
      });
  }
  
}