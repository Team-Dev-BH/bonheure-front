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
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponent } from "./components/conciergerie/carousel/carousel.component";
import { CarouselNgbComponent } from "./components/conciergerie/carousel-ngb/carousel-ngb.component";
import { CarouselOwlComponent } from "./components/conciergerie/carousel-owl/carousel-owl.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersListComponent } from './components/dashboard/users-list/users-list.component';
import { CategorieServiceDetailsComponent } from './components/services/categorie-service-details/categorie-service-details.component';

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
    CarouselComponent,
    CarouselNgbComponent,
    CarouselOwlComponent,
    MyspaceComponent,
    PilotageComponent,
    PilotageItemComponent,
    PratiqueComponent,
    PratiqueItemComponent,
    PageNotFoundComponent,
    DashboardComponent,
    UsersListComponent,
    CategorieServiceDetailsComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
