import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'activities', loadComponent: () => import('./pages/activities/activities').then(m => m.Activities) },
  { path: 'partners', loadComponent: () => import('./pages/partners/partners').then(m => m.Partners) },
  { path: 'join', loadComponent: () => import('./pages/join/join').then(m => m.Join) },
  { path: '**', redirectTo: '' }
];
