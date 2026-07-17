import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'test', loadComponent: () => import('./test-translation').then(m => m.TestTranslation) },
  { path: 'activities', loadComponent: () => import('./pages/activities/activities').then(m => m.Activities) },
  { path: 'partners', loadComponent: () => import('./pages/partners/partners').then(m => m.Partners) },
  { path: 'join', loadComponent: () => import('./pages/join/join').then(m => m.Join) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'resources', loadComponent: () => import('./pages/resources/resources').then(m => m.Resources) },
  { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy) },
  { path: 'terms', loadComponent: () => import('./pages/terms/terms').then(m => m.Terms) },
  { path: 'events/:id', loadComponent: () => import('./pages/event-detail/event-detail').then(m => m.EventDetail) },
  { path: '**', redirectTo: '' }
];
