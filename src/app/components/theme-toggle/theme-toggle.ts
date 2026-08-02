import { Component, inject } from '@angular/core';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <button 
      class="theme-toggle-btn" 
      (click)="toggleTheme()"
      [attr.aria-label]="theme() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
      type="button">
      @if (theme() === 'light') {
        <lucide-icon [img]="Moon" size="18"></lucide-icon>
      } @else {
        <lucide-icon [img]="Sun" size="18"></lucide-icon>
      }
    </button>
  `,
  styles: [`
    .theme-toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--bg-surface);
      color: var(--text-heading);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid var(--border-subtle);
      
      &:hover {
        background: var(--bg-surface-light);
        color: var(--accent-blue);
        transform: scale(1.05);
      }
      
      &:active {
        transform: scale(0.95);
      }
      
      lucide-icon {
        transition: transform 0.3s ease;
      }
      
      &:hover lucide-icon {
        transform: rotate(15deg);
      }
    }
  `]
})
export class ThemeToggle {
  readonly Sun = Sun;
  readonly Moon = Moon;
  
  private themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}