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
    ServiceItemComponent
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
