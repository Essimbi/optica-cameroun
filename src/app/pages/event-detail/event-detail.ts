import { Component, computed, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, Calendar, MapPin, Users, Target, BookOpen, Clock, ChevronRight, ArrowLeft } from 'lucide-angular';
import { EVENT_DATA } from './event.data';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslatePipe, RouterLink],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.scss'
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);

  readonly Calendar = Calendar;
  readonly MapPin = MapPin;
  readonly Users = Users;
  readonly Target = Target;
  readonly BookOpen = BookOpen;
  readonly Clock = Clock;
  readonly ChevronRight = ChevronRight;
  readonly ArrowLeft = ArrowLeft;

  eventId = signal<string>('');
  
  eventData = computed(() => {
    // In some versions of ngx-translate, currentLang might be a Signal
    const currentLangProp = this.translate.currentLang as any;
    const activeLang = typeof currentLangProp === 'function' ? currentLangProp() : currentLangProp;
    const langStr = (activeLang || 'en') as string;
    
    const id = this.eventId();
    if (!id) return null;
    
    const event = EVENT_DATA[id as string];
    if (!event) return null;
    
    return event[langStr] || event['en'];
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventId.set(params.get('id') || '');
    });
  }
}
