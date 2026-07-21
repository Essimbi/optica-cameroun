import { Component, computed, OnInit, OnDestroy, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, Calendar, MapPin, Users, Target, BookOpen, Clock, ChevronRight, ChevronLeft, ArrowLeft, Award, X } from 'lucide-angular';
import { OPTICA_EVENTS, getGalleryImages } from '../../data/optica-events.data';
import { OpticaEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.scss'
})
export class EventDetail implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);

  readonly Calendar = Calendar;
  readonly MapPin = MapPin;
  readonly Users = Users;
  readonly Target = Target;
  readonly BookOpen = BookOpen;
  readonly Clock = Clock;
  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;
  readonly ArrowLeft = ArrowLeft;
  readonly Award = Award;
  readonly X = X;

  // Lightbox state
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  eventSlug = signal<string>('');
  
  event = computed(() => {
    const slug = this.eventSlug();
    return OPTICA_EVENTS.find(e => e.slug === slug) || null;
  });

  galleryImages = computed(() => {
    const currentEvent = this.event();
    return currentEvent ? getGalleryImages(currentEvent) : [];
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventSlug.set(params.get('id') || '');
    });
  }

  getCurrentLang(): 'en' | 'fr' {
    const currentLang = this.translate.currentLang();
    return (currentLang || 'en') as 'en' | 'fr';
  }

  getEventTitle(event: OpticaEvent): string {
    return event.title[this.getCurrentLang()];
  }

  getEventDescription(event: OpticaEvent): string {
    return event.fullDescription[this.getCurrentLang()];
  }

  getStatLabel(stat: { label: { en: string; fr: string }; value: string }): string {
    return stat.label[this.getCurrentLang()];
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
  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prevImage(): void {
    const images = this.galleryImages();
    this.lightboxIndex.set((this.lightboxIndex() - 1 + images.length) % images.length);
  }

  nextImage(): void {
    const images = this.galleryImages();
    this.lightboxIndex.set((this.lightboxIndex() + 1) % images.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape')    this.closeLightbox();
    if (event.key === 'ArrowLeft')  this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
