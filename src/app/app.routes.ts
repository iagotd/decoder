import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutComponent } from "./components/about/about.component";


const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true, scrollPositionRestoration: 'enabled'});