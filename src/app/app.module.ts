import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// ng-bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//carousel
import { NguCarouselModule } from "@ngu/carousel";

import { MyspaceComponent } from "./components/myspace/myspace.component";
import { PilotageComponent } from "./components/pilotage/pilotage.component";
import { PilotageItemComponent } from "./components/pilotage-item/pilotage-item.component";

//owl-carousel
import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { ServicesComponent } from "./components/services/services.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { CommandesComponent } from "./components/commandes/commandes.component";
import { ContactComponent } from "./components/layout/contact/contact.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { ServiceItemComponent } from "./components/service-item/service-item.component";
import { CommandeItemComponent } from "./components/commande-item/commande-item.component";
import { ConciergerieComponent } from "./components/conciergerie/conciergerie.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PratiqueComponent } from "./components/pratique/pratique.component";
import { PratiqueItemComponent } from "./components/pratique-item/pratique-item.component";
import {
  MatStepperModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselOwlComponent } from "./components/conciergerie/carousel-owl/carousel-owl.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AccueilComponent } from "./components/prestataire/accueil/accueil.component";
import { DevisComponent } from "./components/prestataire/devis/devis.component";
import { MessagerieComponent } from "./components/prestataire/messageries/messagerie/messagerie.component";
import { ParametreComponent } from "./components/prestataire/parametre/parametre.component";
import { AccueilItemComponent } from "./components/prestataire/accueil-item/accueil-item.component";
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
import { ServiceTypeItemComponent } from "./components/depannage/service-type-item/service-type-item.component";
import { RecapComponent } from "./components/services/recap/recap.component";
import { ConfirmationComponent } from "./components/services/confirmation/confirmation.component";
import { AccueilParametreComponent } from "./components/prestataire/parametre/accueil-parametre/accueil-parametre.component";
import { SousPresConciergerieComponent } from "./components/conciergerie/sous-pres-conciergerie/sous-pres-conciergerie.component";
import { CommentaireConciergerieComponent } from "./components/conciergerie/commentaire-conciergerie/commentaire-conciergerie.component";
import { RecapConciergerieComponent } from "./components/conciergerie/recap-conciergerie/recap-conciergerie.component";
import { UsersListComponent } from "./components/dashboard/users-list/users-list.component";
import { CategorieServiceDetailsComponent } from "./components/services/categorie-service-details/categorie-service-details.component";
import { PrestationItemComponent } from "./components/prestation-item/prestation-item.component";
import { PrestationDetailsComponent } from "./components/services/prestation-details/prestation-details.component";
import { SousPrestationItemComponent } from "./components/sous-prestation-item/sous-prestation-item.component";
import { SousPresConciergerieItemComponent } from "./components/conciergerie/sous-pres-conciergerie-item/sous-pres-conciergerie-item.component";
import { ConfirmationConciergerieComponent } from "./components/conciergerie/confirmation-conciergerie/confirmation-conciergerie.component";
import { ChoixPresConciergerieComponent } from "./components/conciergerie/choix-pres-conciergerie/choix-pres-conciergerie.component";
import { ChoixPresConciergerieItemComponent } from "./components/conciergerie/choix-pres-conciergerie-item/choix-pres-conciergerie-item.component";
import { ChoixPresSelectComponent } from "./components/conciergerie/choix-pres-select/choix-pres-select.component";
import { ChoixPresAttenteComponent } from "./components/conciergerie/choix-pres-attente/choix-pres-attente.component";
import { ChoixPresEvaluationComponent } from "./components/conciergerie/choix-pres-evaluation/choix-pres-evaluation.component";
import { ConfirmationPresConciergerieComponent } from "./components/conciergerie/confirmation-pres-conciergerie/confirmation-pres-conciergerie.component";
import { ChoixPresClientComponent } from "./components/services/choix-pres-client/choix-pres-client.component";
import { ChoixPresClientItemComponent } from "./components/services/choix-pres-client-item/choix-pres-client-item.component";
import { ParametreSecuriteItemComponent } from "./components/prestataire/parametre/parametre-securite-item/parametre-securite-item.component";
import { AddPrestationComponent } from "./components/prestataire/parametre/parametre-securite/add-prestation/add-prestation.component";
import { AddAdresseComponent } from "./components/prestataire/parametre/parametre-securite/add-adresse/add-adresse.component";
import { AddTelComponent } from "./components/prestataire/parametre/parametre-securite/add-tel/add-tel.component";
import { ConciergerieItemComponent } from "./components/conciergerie/conciergerie-item/conciergerie-item.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { SearchComponent } from "./components/search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { SousPrestationDetailsComponent } from './components/services/sous-prestation-details/sous-prestation-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ServicesComponent,
    RegisterComponent,
    LoginComponent,
    CommandesComponent,
    ContactComponent,
    NotificationsComponent,
    ServiceItemComponent,
    CommandeItemComponent,
    ConciergerieComponent,
    HowItWorksComponent,
    CarouselOwlComponent,
    MyspaceComponent,
    PilotageComponent,
    PilotageItemComponent,
    PratiqueComponent,
    PratiqueItemComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AccueilComponent,
    DevisComponent,
    MessagerieComponent,
    ParametreComponent,
    AccueilItemComponent,
    RegisterPresComponent,
    RegisterPresAccComponent,
    RegisterPresSociComponent,
    RecievedMessageComponent,
    NewMessageComponent,
    PresNotificationComponent,
    DemandeComponent,
    ParametreSecuriteComponent,
    ParametreMetierComponent,
    AccueilParametreComponent,
    ServiceTypeComponent,
    ServiceTypeItemComponent,
    RecapComponent,
    ConfirmationComponent,
    SousPresConciergerieComponent,
    CommentaireConciergerieComponent,
    RecapConciergerieComponent,
    UsersListComponent,
    CategorieServiceDetailsComponent,
    PrestationItemComponent,
    PrestationDetailsComponent,
    SousPrestationItemComponent,
    SousPresConciergerieItemComponent,
    ConfirmationConciergerieComponent,
    ChoixPresConciergerieComponent,
    ChoixPresConciergerieItemComponent,
    ChoixPresSelectComponent,
    ChoixPresAttenteComponent,
    ChoixPresEvaluationComponent,
    ConfirmationPresConciergerieComponent,
    ChoixPresClientComponent,
    ChoixPresClientItemComponent,
    ParametreSecuriteItemComponent,
    AddPrestationComponent,
    AddAdresseComponent,
    AddTelComponent,
    ConciergerieItemComponent,
    SearchComponent,
    SousPrestationDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    FormsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
