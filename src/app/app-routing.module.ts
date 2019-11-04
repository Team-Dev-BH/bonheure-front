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
import { PratiqueComponent } from "./components/pratique/pratique.component";
import { AccueilComponent } from "./components/prestataire/accueil/accueil.component";
import { DevisComponent } from "./components/prestataire/devis/devis.component";
import { MessagerieComponent } from "./components/prestataire/messageries/messagerie/messagerie.component";
import { ParametreComponent } from "./components/prestataire/parametre/parametre.component";
import { RegisterPresComponent } from "./components/auth/register-pres/register-pres.component";
import { RegisterPresAccComponent } from "./components/auth/register-pres-acc/register-pres-acc.component";
import { RegisterPresSociComponent } from "./components/auth/register-pres-soci/register-pres-soci.component";
import { RecievedMessageComponent } from "./components/prestataire/messageries/recieved-message/recieved-message.component";
import { NewMessageComponent } from "./components/prestataire/messageries/new-message/new-message.component";
import { PresNotificationComponent } from "./components/prestataire/messageries/pres-notification/pres-notification.component";
import { DemandeComponent } from "./components/prestataire/demande/demande.component";
import { ParametreSecuriteComponent } from "./components/prestataire/parametre/parametre-securite/parametre-securite.component";
import { ParametreMetierComponent } from "./components/prestataire/parametre/parametre-metier/parametre-metier.component";
import { ServiceTypeComponent } from "./components/depannage/service-type/service-type.component";
import { CommandeDelaiComponent } from "./components/services/commande-delai/commande-delai.component";
import { RecapComponent } from "./components/services/recap/recap.component";
import { ConfirmationComponent } from "./components/services/confirmation/confirmation.component";
import { AccueilParametreComponent } from "./components/prestataire/parametre/accueil-parametre/accueil-parametre.component";
import { SousPresConciergerieComponent } from "./components/conciergerie/sous-pres-conciergerie/sous-pres-conciergerie.component";
import { UsersListComponent } from "./components/dashboard/users-list/users-list.component";
import { CategorieServiceDetailsComponent } from "./components/services/categorie-service-details/categorie-service-details.component";
import { PrestationDetailsComponent } from "./components/services/prestation-details/prestation-details.component";
import { RecapConciergerieComponent } from "./components/conciergerie/recap-conciergerie/recap-conciergerie.component";
import { CommentaireConciergerieComponent } from "./components/conciergerie/commentaire-conciergerie/commentaire-conciergerie.component";
import { ConfirmationConciergerieComponent } from "./components/conciergerie/confirmation-conciergerie/confirmation-conciergerie.component";
import { ChoixPresConciergerieComponent } from "./components/conciergerie/choix-pres-conciergerie/choix-pres-conciergerie.component";
import { ChoixPresSelectComponent } from "./components/conciergerie/choix-pres-select/choix-pres-select.component";
import { ChoixPresAttenteComponent } from "./components/conciergerie/choix-pres-attente/choix-pres-attente.component";
import { ChoixPresEvaluationComponent } from "./components/conciergerie/choix-pres-evaluation/choix-pres-evaluation.component";
import { ConfirmationPresConciergerieComponent } from "./components/conciergerie/confirmation-pres-conciergerie/confirmation-pres-conciergerie.component";
import { ChoixPresClientComponent } from "./components/services/choix-pres-client/choix-pres-client.component";
import { ChoixPresClientItemComponent } from "./components/services/choix-pres-client-item/choix-pres-client-item.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "register_pres", component: RegisterPresComponent },
  { path: "register_pres_accueil", component: RegisterPresAccComponent },
  { path: "register_pres_soci", component: RegisterPresSociComponent },
  { path: "login", component: LoginComponent },
  { path: "myspace", component: MyspaceComponent },

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
        path: "service_type",
        component: ServiceTypeComponent
      },

      {
        path: "commande_delai",
        component: CommandeDelaiComponent
      },
      {
        path: "recap",
        component: RecapComponent
      },

      {
        path: "confirmation",
        component: ConfirmationComponent
      },
      {
        path: "commandes",
        component: CommandesComponent
      },
      {
        path: "choix_pres_client",
        component: ChoixPresClientComponent
      },
      {
        path: "choix_pres_client_item",
        component: ChoixPresClientItemComponent
      },
      {
        path: "conciergerie",
        component: ConciergerieComponent
      },

      {
        path: "sous_pres_conciergerie",
        component: SousPresConciergerieComponent
      },
      // {
      //   path: "conciergerie/:referenceConciergerie",
      //   component: SousPresConciergerieComponent
      // },
      {
        path: "commentaire_conciergerie",
        component: CommentaireConciergerieComponent
      },
      {
        path: "recap_conciergerie",
        component: RecapConciergerieComponent
      },
      {
        path: "choix_pres_conciergerie",
        component: ChoixPresConciergerieComponent
      },
      {
        path: "choix_pres_select",
        component: ChoixPresSelectComponent
      },

      {
        path: "choix_pres_attente",
        component: ChoixPresAttenteComponent
      },

      {
        path: "choix_pres_evaluation",
        component: ChoixPresEvaluationComponent
      },
      {
        path: "confirmation_pres_conciergerie",
        component: ConfirmationPresConciergerieComponent
      },
      {
        path: "confirmation_conciergerie",
        component: ConfirmationConciergerieComponent
      },
      {
        path: "myspace",
        component: MyspaceComponent
      },
      {
        path: "pilotages",
        component: PilotageComponent
      },
      {
        path: "pratiques",
        component: PratiqueComponent
      },
      {
        path: "accueils",
        component: AccueilComponent
      },
      {
        path: "demande",
        component: DemandeComponent
      },
      {
        path: "devis",
        component: DevisComponent
      },
      {
        path: "messageries",
        component: MessagerieComponent,
        children: [
          {
            path: "received_message",
            component: RecievedMessageComponent
          },
          {
            path: "new_message",
            component: NewMessageComponent
          },
          {
            path: "pres_notification",
            component: PresNotificationComponent
          }
        ]
      },

      {
        path: "parametres",
        component: ParametreComponent,
        children: [
          { path: "", redirectTo: "acceuil", pathMatch: "full" },
          {
            path: "acceuil",
            component: AccueilParametreComponent
          },
          {
            path: "parametre_securite",
            component: ParametreSecuriteComponent
          },
          {
            path: "parametre_metier",
            component: ParametreMetierComponent
          }
        ]
      }
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
