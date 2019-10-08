import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { ServicesComponent } from './components/services/services.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { CommandeItemComponent } from './components/commande-item/commande-item.component';
import { ConciergerieComponent } from './components/conciergerie/conciergerie.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MyspaceComponent } from './components/myspace/myspace.component';
import { PilotageComponent } from './components/pilotage/pilotage.component';
import { PilotageItemComponent } from './components/pilotage-item/pilotage-item.component';


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
    MyspaceComponent,
    PilotageComponent,
    PilotageItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
