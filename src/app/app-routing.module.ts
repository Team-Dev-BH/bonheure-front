import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./components/services/services.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { CommandesComponent } from "./components/commandes/commandes.component";
import { ConciergerieComponent } from "./components/conciergerie/conciergerie.component";
import { MyspaceComponent } from "./components/myspace/myspace.component";
import { PilotageComponent } from "./components/pilotage/pilotage.component";
import { PratiqueComponent } from "./components/pratique/pratique.component";

const routes: Routes = [
  {
    path: "",
    // component: ,
    canActivate: [],
    children: [
      { path: "register", component: RegisterComponent },
      { path: "services", component: ServicesComponent },
      { path: "commandes", component: CommandesComponent },
      { path: "conciergerie", component: ConciergerieComponent },
      { path: "myspace", component: MyspaceComponent },
      { path: "pilotages", component: PilotageComponent },
      { path: "pratiques", component: PratiqueComponent }
    ]
  },

  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
