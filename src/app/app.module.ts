import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// ng-bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//carousel
import { NguCarouselModule } from "@ngu/carousel";

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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponent } from "./components/conciergerie/carousel/carousel.component";
import { CarouselNgbComponent } from "./components/conciergerie/carousel-ngb/carousel-ngb.component";
import { CarouselOwlComponent } from "./components/conciergerie/carousel-owl/carousel-owl.component";

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
    CarouselOwlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
