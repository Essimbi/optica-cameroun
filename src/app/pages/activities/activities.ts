import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, MapPin, ArrowRight, Image as ImageIcon } from 'lucide-angular';

import { TranslatePipe } from '@ngx-translate/core';

// Internal model using i18n keys for translatable fields
interface OpticaEventI18n {
  id: string;
  titleKey: string;
  date: Date;
  location: string;   // location can also be i18n key if needed later
  descKey: string;
  status: 'upcoming' | 'past';
  type: 'section' | 'chapter';
}

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslatePipe],
  templateUrl: './activities.html',
  styleUrl: './activities.scss'
})
export class Activities {
  readonly CalendarIcon = Calendar;
  readonly MapPinIcon = MapPin;
  readonly ArrowRightIcon = ArrowRight;
  readonly ImageIcon = ImageIcon;

  // All title/description values are i18n keys — resolved by | translate in the template
  events = signal<OpticaEventI18n[]>([
    {
      id: '1',
      titleKey: 'ACTIVITIES_PAGE.EVENT_1_TITLE',
      date: new Date('2026-08-15'),
      location: 'Yaoundé Conference Center',
      descKey: 'ACTIVITIES_PAGE.EVENT_1_DESC',
      status: 'upcoming',
      type: 'section'
    },
    {
      id: '2',
      titleKey: 'ACTIVITIES_PAGE.EVENT_2_TITLE',
      date: new Date('2026-07-25'),
      location: 'University of Yaoundé I',
      descKey: 'ACTIVITIES_PAGE.EVENT_2_DESC',
      status: 'upcoming',
      type: 'chapter'
    },
    {
      id: '3',
      titleKey: 'ACTIVITIES_PAGE.EVENT_3_TITLE',
      date: new Date('2025-12-10'),
      location: 'Douala',
      descKey: 'ACTIVITIES_PAGE.EVENT_3_DESC',
      status: 'past',
      type: 'section'
    },
    {
      id: '4',
      titleKey: 'ACTIVITIES_PAGE.EVENT_4_TITLE',
      date: new Date('2025-10-05'),
      location: 'National Polytechnic School',
      descKey: 'ACTIVITIES_PAGE.EVENT_4_DESC',
      status: 'past',
      type: 'chapter'
    }
  ]);

  filterStatus = signal<'all' | 'upcoming' | 'past'>('all');
  filterType = signal<'all' | 'section' | 'chapter'>('all');

  filteredEvents = computed(() => {
    let result = this.events();
    const status = this.filterStatus();
    if (status !== 'all') result = result.filter(e => e.status === status);
    const type = this.filterType();
    if (type !== 'all') result = result.filter(e => e.type === type);
    return result.sort((a, b) => {
      if (a.status === 'upcoming' && b.status === 'upcoming') return a.date.getTime() - b.date.getTime();
      if (a.status === 'past' && b.status === 'past') return b.date.getTime() - a.date.getTime();
      return 0;
    });
  });

  setFilterStatus(status: 'all' | 'upcoming' | 'past') { this.filterStatus.set(status); }
  setFilterType(type: 'all' | 'section' | 'chapter') { this.filterType.set(type); }

  // Returns the i18n key for the event type label
  getTypeLabelKey(type: string): string {
    return type === 'section' ? 'ACTIVITIES_PAGE.FILTER_SECTION' : 'ACTIVITIES_PAGE.FILTER_CHAPTER';
  }

  // Returns the i18n key for the status badge
  getStatusLabelKey(status: string): string {
    return status === 'upcoming' ? 'ACTIVITIES_PAGE.FILTER_UPCOMING' : 'ACTIVITIES_PAGE.FILTER_PAST';
  }
}
