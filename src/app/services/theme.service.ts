import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'optica-theme';
  
  // Dark mode par défaut
  private _theme = signal<Theme>('dark');
  
  readonly theme = this._theme.asReadonly();
  
  constructor() {
    // Charger le thème sauvegardé ou utiliser dark par défaut
    const savedTheme = this.getSavedTheme();
    this._theme.set(savedTheme);
    
    // Appliquer le thème au document
    effect(() => {
      this.applyTheme(this._theme());
    });
  }
  
  toggleTheme(): void {
    const newTheme: Theme = this._theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  
  setTheme(theme: Theme): void {
    this._theme.set(theme);
    this.saveTheme(theme);
  }
  
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Mettre à jour la classe pour compatibilité
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }
  
  private getSavedTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    
    // Si aucun thème sauvegardé, utiliser dark par défaut
    return 'dark';
  }
  
  private saveTheme(theme: Theme): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.THEME_KEY, theme);
  }
}