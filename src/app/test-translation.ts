import { Component, OnInit, inject } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-test-translation',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <div style="padding: 20px;">
      <h1>Test de Traduction</h1>
      
      <div style="margin: 20px 0;">
        <button (click)="setLang('en')" style="margin-right: 10px;">English</button>
        <button (click)="setLang('fr')" style="margin-right: 10px;">Français</button>
        <span>Langue actuelle: {{ getCurrentLang() }}</span>
      </div>
      
      <div style="margin: 20px 0;">
        <h2>{{ 'HEADER.HOME' | translate }}</h2>
        <p>{{ 'HERO.SUBTITLE' | translate }}</p>
        <button>{{ 'HEADER.JOIN_US' | translate }}</button>
      </div>
      
      <div style="margin: 20px 0;">
        <h3>Test direct du service:</h3>
        <pre>{{ debugInfo }}</pre>
      </div>
    </div>
  `
})
export class TestTranslation implements OnInit {
  private translate = inject(TranslateService);
  private translationService = inject(TranslationService);
  
  debugInfo = '';

  ngOnInit() {
    this.updateDebugInfo();
  }

  setLang(lang: string) {
    this.translationService.setLanguage(lang);
    setTimeout(() => this.updateDebugInfo(), 100);
  }

  getCurrentLang() {
    return this.translationService.getCurrentLanguageLabel();
  }

  private updateDebugInfo() {
    const currentLang = this.translate.getCurrentLang();
    const langs = this.translate.getLangs();
    
    this.debugInfo = JSON.stringify({
      currentLang,
      availableLangs: langs,
      testTranslation: this.translate.instant('HEADER.HOME')
    }, null, 2);
  }
}