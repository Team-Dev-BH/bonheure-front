import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./components/services/services.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { CommandesComponent } from "./components/commandes/commandes.component";
import { ConciergerieComponent } from "./components/conciergerie/conciergerie.component";
import { MyspaceComponent } from "./components/myspace/myspace.component";
import { PilotageComponent } from "./components/pilotage/pilotage.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },

  {
    path: "home",
    component: ContentComponent,
    children: [
      { path: "services", component: ServicesComponent },
      { path: "commandes", component: CommandesComponent },
      { path: "conciergerie", component: ConciergerieComponent },
      { path: "myspace", component: MyspaceComponent },
      { path: "pilotages", component: PilotageComponent }
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
