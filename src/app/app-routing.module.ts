import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/AdminDashboard/admin-layout/admin-layout.component';
import { CartComponent } from './components/cart/cart.component';

import { LoginComponent } from './components/Login/login/login.component';



const routes: Routes = [

//{path: '' ,component:LoginComponent},
{path: 'login' ,loadChildren:()=>import("../app/components/Login/login.module")
.then(m=>m.LoginModule)},

{
  path: 'dashborad',
  component: AdminLayoutComponent,   // hatina children alkhter fama router outlet fi composant adminlayout
  children: [
      {
    path: 'admin',loadChildren:()=>import("../app/components/AdminDashboard/admin-module")
    .then(m=>m.AdminModule)
}]},


{path: 'card' , component:CartComponent},

{path: '**'  ,component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
