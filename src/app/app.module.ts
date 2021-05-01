import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/Login/login/login.component';
import {AngularFireModule } from '@angular/fire'
import {AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
import  { RecaptchaModule }  from  'ng-recaptcha';

import{TokenInterceptorService} from './services/token-interceptor.service';
import { ForgetPasswordComponent } from './components/Login/forget-password/forget-password.component';
import { ChangerPasswordComponent } from './components/Login/changer-password/changer-password.component';
import{LoginModule}  from '../app/components/Login/login.module';
//import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NetworkInterceptor } from './services/network.interceptor';
import { SideBarComponent } from './components/AdminDashboard/side-bar/side-bar.component';
import { NavBarComponent } from './components/AdminDashboard/nav-bar/nav-bar.component';
import { AdminLayoutComponent } from './components/AdminDashboard/admin-layout/admin-layout.component';
import {AdminModule} from '../app/components/AdminDashboard/admin-module';
import { Dashboard1Component } from './components/AdminDashboard/dashboard1/dashboard1.component';
import { UsersComponent } from './components/AdminDashboard/users/users.component';
import { EditProfileComponent } from './components/AdminDashboard/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/AdminDashboard/profile/profile.component';
import { AppointementComponent } from './components/AdminDashboard/appointement/appointement.component';
import { ListUsersComponent } from './components/AdminDashboard/list-users/list-users.component';
import { EditUsersComponent } from './components/AdminDashboard/edit-users/edit-users.component';
import { AddUsersComponent } from './components/AdminDashboard/add-users/add-users.component';
import { EditNotificationsComponent } from './components/AdminDashboard/edit-notifications/edit-notifications.component';
import { ChatComponent } from './components/AdminDashboard/chat/chat.component';
import { MailComponent } from './components/AdminDashboard/mail/mail.component';
import { EditAppointementComponent } from './components/AdminDashboard/edit-appointement/edit-appointement.component'
import {Ng2OrderModule} from 'ng2-order-pipe'
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {NgxPaginationModule} from 'ngx-pagination';
import { GeolocalisationComponent } from './components/AdminDashboard/geolocalisation/geolocalisation.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ChangerPasswordComponent,
    LoaderComponent,
    SideBarComponent,
    NavBarComponent,
    AdminLayoutComponent,
    Dashboard1Component,
    UsersComponent,
    EditProfileComponent,
    ProfileComponent,
    AppointementComponent,
    ListUsersComponent,
    EditUsersComponent,
    AddUsersComponent,
    EditNotificationsComponent,
    ChatComponent,
    MailComponent,
    EditAppointementComponent,
    GeolocalisationComponent,
    
    
    

  ],

  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDHeGazB2SRCtIWpSeUO-8i1NIliqLgFCY",
      authDomain: "daritn-736ea.firebaseapp.com",
      projectId: "daritn-736ea",
      storageBucket: "daritn-736ea.appspot.com",
      messagingSenderId: "725180440277",
      appId: "1:725180440277:web:bf39915f872400a95b4c5c",
      measurementId: "G-YB8THXE4FB"
    }),
    AngularFireAuthModule,
    HttpClientModule,
    NgxQRCodeModule,
    RecaptchaModule,
    LoginModule,
    AdminModule
    
  ],
  providers:[  
    DatePipe,

    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:NetworkInterceptor,
    multi:true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
