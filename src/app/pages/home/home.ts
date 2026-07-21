import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { CodeOfConduct } from '../../components/code-of-conduct/code-of-conduct';
import { LucideAngularModule, Calendar, Users, Target, ArrowRight, Quote, Handshake, Award, BookOpen } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { OPTICA_EVENTS, getCoverImage } from '../../data/optica-events.data';
import { OpticaEvent } from '../../models/event.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CodeOfConduct, LucideAngularModule, RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly Calendar = Calendar;
  readonly Users = Users;
  readonly Target = Target;
  readonly ArrowRight = ArrowRight;
  readonly Quote = Quote;
  readonly Handshake = Handshake;
  readonly Award = Award;
  readonly BookOpen = BookOpen;

  private translate = inject(TranslateService);

  // Keys referencing i18n JSON — the | translate pipe renders the right language
  testimonials = [
    {
      textKey: 'TESTIMONIALS.ITEM_1_TEXT',
      authorKey: 'TESTIMONIALS.ITEM_1_AUTHOR',
      roleKey: 'TESTIMONIALS.ITEM_1_ROLE'
    },
    {
      textKey: 'TESTIMONIALS.ITEM_2_TEXT',
      authorKey: 'TESTIMONIALS.ITEM_2_AUTHOR',
      roleKey: 'TESTIMONIALS.ITEM_2_ROLE'
    }
  ];

  // Prochaine activité (FPSLOC 2026)
  nextEvent = OPTICA_EVENTS.find(event => event.status === 'upcoming');

  // Activités récentes (2 dernières activités passées)
  recentEvents = OPTICA_EVENTS
    .filter(event => event.status === 'past' && !event.isRecurring)
    .slice(0, 4);

  // Chiffres clés globaux (4 maximum selon les règles)
  keyStats = [
    { value: '118', labelKey: 'RECENT.REGISTRANTS_2025', icon: this.Users },
    { value: '11', labelKey: 'RECENT.PERFECT_SCORES', icon: this.Award },
    { value: '9', labelKey: 'RECENT.RESEARCH_PUBLICATIONS', icon: this.BookOpen },
    { value: '2', labelKey: 'RECENT.TRAINING_EDITIONS', icon: this.Target }
  ];

  getCoverImage(event: OpticaEvent): string {
    return getCoverImage(event);
  }

  getCurrentLang(): string {
    return this.translate.currentLang() || 'en';
  }

  getEventTitle(event: OpticaEvent): string {
    const lang = this.getCurrentLang() as 'en' | 'fr';
    return event.title[lang];
  }

  getEventSummary(event: OpticaEvent): string {
    const lang = this.getCurrentLang() as 'en' | 'fr';
    return event.summary[lang];
  }

  formatDate(date: Date): string {
    const lang = this.getCurrentLang();
    return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}
