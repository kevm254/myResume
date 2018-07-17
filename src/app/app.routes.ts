// Modules
import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/content/home/home.component';

// Models

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
