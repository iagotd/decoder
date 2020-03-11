import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { WebComponent } from "./components/projects/web/web.component";
import { PhoneComponent } from "./components/projects/phone/phone.component";
import { BlockchainComponent } from "./components/projects/blockchain/blockchain.component";
import { TddComponent } from "./components/projects/tdd/tdd.component";
import { AiComponent } from "./components/projects/ai/ai.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutComponent } from "./components/about/about.component";
import { PrivacyPolicyComponent } from "./components/about/privacy-policy/privacy-policy.component";
import { TermsConditionsComponent } from "./components/about/terms-conditions/terms-conditions.component";


const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/web', component: WebComponent},
    { path: 'projects/phone', component: PhoneComponent},
    { path: 'projects/blockchain', component: BlockchainComponent},
    { path: 'projects/tdd', component: TddComponent},
    { path: 'projects/ai', component: AiComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'about/privacy-policy', component: PrivacyPolicyComponent},
    { path: 'about/terms-conditions', component: TermsConditionsComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true, scrollPositionRestoration: 'enabled'});