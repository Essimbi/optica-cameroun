import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSignal = signal('en');
  private isInitialized = signal(false);
  
  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private async initializeTranslation() {
    try {
      // Configuration des langues disponibles
      this.translate.addLangs(['en', 'fr']);

      // Récupérer la langue sauvegardée ou utiliser celle du navigateur
      const savedLang = localStorage.getItem('selectedLang');
      const browserLang = this.translate.getBrowserLang();
      
      let langToUse = 'en'; // langue par défaut

      if (savedLang && ['en', 'fr'].includes(savedLang)) {
        langToUse = savedLang;
      } else if (browserLang && ['en', 'fr'].includes(browserLang)) {
        langToUse = browserLang;
      }

      // Configurer la langue de repli
      this.translate.setFallbackLang('en');
      
      // Charger d'abord la langue de base (anglais)
      await this.translate.use('en').toPromise();
      
      // Puis charger la langue demandée si différente
      if (langToUse !== 'en') {
        await this.translate.use(langToUse).toPromise();
      }
      
      this.currentLangSignal.set(langToUse);
      this.isInitialized.set(true);
      
    } catch (error) {
      console.error('Error initializing translation service:', error);
      this.isInitialized.set(true); // Mark as initialized even if failed
    }
  }

  getCurrentLanguage(): string {
    return this.translate.getCurrentLang() || 'en';
  }

  getCurrentLanguageLabel(): string {
    return this.getCurrentLanguage().toUpperCase();
  }

  async setLanguage(lang: string): Promise<void> {
    const langCode = lang.toLowerCase();
    if (['en', 'fr'].includes(langCode)) {
      try {
        await this.translate.use(langCode).toPromise();
        this.currentLangSignal.set(langCode);
        localStorage.setItem('selectedLang', langCode);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
  }

  getAvailableLanguages(): string[] {
    return ['en', 'fr'];
  }

  isReady(): boolean {
    return this.isInitialized();
  }
}