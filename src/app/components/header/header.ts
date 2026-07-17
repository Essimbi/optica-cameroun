import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Globe, ChevronDown } from 'lucide-angular';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  readonly Menu = Menu;
  readonly X = X;
  readonly Globe = Globe;
  readonly ChevronDown = ChevronDown;

  private translate = inject(TranslateService);
  private translationService = inject(TranslationService);

  isMobileMenuOpen = signal(false);
  isLangMenuOpen = signal(false);
  
  // Utiliser le signal de la langue actuelle depuis ngx-translate
  currentLang = computed(() => {
    const lang = this.translate.getCurrentLang();
    return lang ? lang.toUpperCase() : 'EN';
  });

  ngOnInit() {
    // L'initialisation est gérée par le TranslationService
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(v => !v);
  }

  setLang(lang: string) {
    this.translationService.setLanguage(lang.toLowerCase());
    this.isLangMenuOpen.set(false);
  }
}
