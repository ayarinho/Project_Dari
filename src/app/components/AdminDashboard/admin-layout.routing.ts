import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from '../AdminDashboard/dashboard1/dashboard1.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AppointementComponent } from './appointement/appointement.component';
import { ChatComponent } from './chat/chat.component';
import { EditAppointementComponent } from './edit-appointement/edit-appointement.component';
import { EditNotificationsComponent } from './edit-notifications/edit-notifications.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MailComponent } from './mail/mail.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';




export const routes: Routes = [

  {path:'', component:Dashboard1Component},
  {path:"profile", component:ProfileComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"users", component:UsersComponent},
  {path:"edit-profile", component:EditProfileComponent},
  {path:"list-users", component:ListUsersComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"users", component:UsersComponent},
  {path:"edit-users", component:EditUsersComponent},
  {path:"add-users", component:AddUsersComponent},
  {path:"list-users", component:ListUsersComponent},
  {path:"profile", component:ProfileComponent},
  {path:"edit-profile", component:EditProfileComponent},
  {path:"edit-notification", component:EditNotificationsComponent},
  {path:"chat", component:ChatComponent},
  {path:"mail", component:MailComponent},
  {path:"edit-appointement", component:EditAppointementComponent},
  {path:"geolocation", component:GeolocalisationComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
