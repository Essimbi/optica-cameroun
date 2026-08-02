import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TranslationService } from './services/translation.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 64px - 300px); /* Approx header and footer height */
    }
  `]
})
export class App {
  title = 'optica';
  
  private themeService = inject(ThemeService);
  
  constructor(private translationService: TranslationService) {
    // Les services s'initialisent automatiquement
  }
}
