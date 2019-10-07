import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { ConciergerieComponent } from './components/conciergerie/conciergerie.component';


const routes: Routes = [

  {path:'register', component : RegisterComponent},
  {path:'login', component : LoginComponent},
  {path:'services', component : ServicesComponent},
  {path:'commandes', component : CommandesComponent},
  {path:'conciergerie', component: ConciergerieComponent}


 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
