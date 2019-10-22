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
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersListComponent } from "./components/dashboard/users-list/users-list.component";
import { CategorieServiceDetailsComponent } from "./components/services/categorie-service-details/categorie-service-details.component";
import { PrestationDetailsComponent } from "./components/services/prestation-details/prestation-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "users", component: UsersListComponent }
    ],
    data: { animation: "dashboardPage" }
  },

  {
    path: "home",
    component: ContentComponent,

    data: { animation: "homePage" },
    children: [
      {
        path: "services",
        component: ServicesComponent
      },

      {
        path: "services/:referenceCategorie",
        component: CategorieServiceDetailsComponent
      },
      {
        path: "services/:referenceCategotrie/:referencePrestation",
        component: PrestationDetailsComponent
      },

      {
        //commandes validées and other component of interface commade are going to childs
        path: "commandes",
        component: CommandesComponent
      },
      {
        path: "conciergerie",
        component: ConciergerieComponent
      },
      {
        path: "myspace",
        component: MyspaceComponent
      },
      {
        path: "pilotages",
        component: PilotageComponent
      }
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
