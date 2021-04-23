import { Component, OnInit,Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare const L: any;

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {




  
  title = 'locationApp';
  i:number=0;
  city:any; 
  stringJson: any;
  stringObject: any;
  k:any;
 


  constructor(private auth:AuthService) { }

  afficherCity(){

    console.log("dataaaaaaaaaaaaaaaaaaaaaaaa "+this.city)
    this.auth.getLongAndLat(this.city).subscribe(data=>{

     
      console.log("dataaaaaaaaaaaaaaaaaaaaaaaa "+data)

      this.stringJson = JSON.stringify(data);
      this.stringObject=JSON.parse(this.stringJson);
      console.log(this.stringObject.longitude);
      console.log(this.stringObject.latitude);
  
    })
       
   

  }


  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  ngOnInit() {   
    
    if (!navigator.geolocation) {
      console
      .log('location is not supported');
    }
  
    //if(this.stringObject.latitude&& this.stringObject.longitude){
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = ["36.8819", "10.334"];
  
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
  
   
      let mymap = L.map('map').setView(latLong, 13);
  
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            '',
          maxZoom: 25,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
          button:'<input type="text"/>'
        }
      ).addTo(mymap);
  
  
      let marker = L.marker(latLong).addTo(mymap);
  
      marker.bindPopup('<b>Hi</b>').openPopup();
  
      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('I am here')
        .openOn(mymap);
    });
    this.watchPosition();
  
   
   // }
  }

}

