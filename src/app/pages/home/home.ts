import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { LucideAngularModule, Calendar, Users, Target, ArrowRight, Quote, Handshake } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, LucideAngularModule, RouterLink, TranslatePipe],
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

  recentEvents = [
    { titleKey: 'RECENT.EVENT_1_TITLE', typeKey: 'RECENT.EVENT_1_TYPE', dateKey: 'RECENT.EVENT_1_DATE' },
    { titleKey: 'RECENT.EVENT_2_TITLE', typeKey: 'RECENT.EVENT_2_TYPE', dateKey: 'RECENT.EVENT_2_DATE' },
    { titleKey: 'RECENT.EVENT_3_TITLE', typeKey: 'RECENT.EVENT_3_TYPE', dateKey: 'RECENT.EVENT_3_DATE' }
  ];
}
