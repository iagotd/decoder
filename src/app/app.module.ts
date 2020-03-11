import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './components/about/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/about/terms-conditions/terms-conditions.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebComponent } from './components/projects/web/web.component';
import { PhoneComponent } from './components/projects/phone/phone.component';
import { BlockchainComponent } from './components/projects/blockchain/blockchain.component';
import { TddComponent } from './components/projects/tdd/tdd.component';
import { AiComponent } from './components/projects/ai/ai.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    WebComponent,
    PhoneComponent,
    BlockchainComponent,
    TddComponent,
    AiComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
