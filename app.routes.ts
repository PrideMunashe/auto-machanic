import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContantUsComponent } from './contant-us/contant-us.component';

export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'contact-us', component: ContantUsComponent },
  { path: '**', redirectTo: 'home-component', pathMatch: 'full' } // Optional wildcard route
]