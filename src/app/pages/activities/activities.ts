import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Calendar, MapPin, ArrowRight, Image as ImageIcon } from 'lucide-angular';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { OPTICA_EVENTS, getCoverImage } from '../../data/optica-events.data';
import { OpticaEvent } from '../../models/event.model';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslatePipe, RouterLink],
  templateUrl: './activities.html',
  styleUrl: './activities.scss'
})
export class Activities {
  readonly CalendarIcon = Calendar;
  readonly MapPinIcon = MapPin;
  readonly ArrowRightIcon = ArrowRight;
  readonly ImageIcon = ImageIcon;

  private translate = inject(TranslateService);

  // Utiliser les vraies données du chapter
  events = signal<OpticaEvent[]>(OPTICA_EVENTS);

  filterStatus = signal<'all' | 'upcoming' | 'past'>('all');
  filterType = signal<'all' | 'section' | 'chapter'>('all');

  filteredEvents = computed(() => {
    let result = this.events();
    const status = this.filterStatus();
    if (status !== 'all') result = result.filter(e => e.status === status);
    const type = this.filterType();
    if (type !== 'all') result = result.filter(e => e.type === type);
    
    // Trier : upcoming par date croissante, past par date décroissante
    return result.sort((a, b) => {
      if (a.status === 'upcoming' && b.status === 'upcoming') {
        return a.date.getTime() - b.date.getTime();
      }
      if (a.status === 'past' && b.status === 'past') {
        return b.date.getTime() - a.date.getTime();
      }
      // Upcoming events first
      if (a.status === 'upcoming' && b.status === 'past') return -1;
      if (a.status === 'past' && b.status === 'upcoming') return 1;
      return 0;
    });
  });

  setFilterStatus(status: 'all' | 'upcoming' | 'past') { 
    this.filterStatus.set(status); 
  }
  
  setFilterType(type: 'all' | 'section' | 'chapter') { 
    this.filterType.set(type); 
  }

  // Helper methods for template
  getCoverImage(event: OpticaEvent): string {
    return getCoverImage(event);
  }

  getCurrentLang(): 'en' | 'fr' {
    const currentLang = this.translate.currentLang();
    return (currentLang || 'en') as 'en' | 'fr';
  }

  getEventTitle(event: OpticaEvent): string {
    return event.title[this.getCurrentLang()];
  }

  getEventSummary(event: OpticaEvent): string {
    return event.summary[this.getCurrentLang()];
  }

  formatDate(date: Date, endDate?: Date): string {
    const lang = this.getCurrentLang();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    const formattedStart = new Intl.DateTimeFormat(
      lang === 'fr' ? 'fr-FR' : 'en-US', 
      options
    ).format(date);

    if (endDate && endDate.getTime() !== date.getTime()) {
      const formattedEnd = new Intl.DateTimeFormat(
        lang === 'fr' ? 'fr-FR' : 'en-US', 
        options
      ).format(endDate);
      return `${formattedStart} - ${formattedEnd}`;
    }

    return formattedStart;
  }

  // Returns the i18n key for the event type label
  getTypeLabelKey(type: string): string {
    return type === 'section' ? 'ACTIVITIES_PAGE.FILTER_SECTION' : 'ACTIVITIES_PAGE.FILTER_CHAPTER';
  }

  // Returns the i18n key for the status badge
  getStatusLabelKey(status: string): string {
    return status === 'upcoming' ? 'ACTIVITIES_PAGE.FILTER_UPCOMING' : 'ACTIVITIES_PAGE.FILTER_PAST';
  }
}
