import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Globe, ChevronDown } from 'lucide-angular';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly Menu = Menu;
  readonly X = X;
  readonly Globe = Globe;
  readonly ChevronDown = ChevronDown;

  private translate = inject(TranslateService);

  isMobileMenuOpen = signal(false);
  currentLang = signal('EN');
  isLangMenuOpen = signal(false);

  constructor() {
    this.translate.use('en');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(v => !v);
  }

  setLang(lang: string) {
    this.currentLang.set(lang);
    this.translate.use(lang.toLowerCase());
    this.isLangMenuOpen.set(false);
  }
}
