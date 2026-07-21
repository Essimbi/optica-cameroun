import { Component, signal } from '@angular/core';

import { LucideAngularModule, TrendingUp, Users, Calendar, Award, Mail, Building2, HandCoins, ChevronRight } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [LucideAngularModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
  readonly TrendingUp = TrendingUp;
  readonly Users = Users;
  readonly Calendar = Calendar;
  readonly Award = Award;
  readonly Mail = Mail;
  readonly Building2 = Building2;
  readonly HandCoins = HandCoins;
  readonly ChevronRight = ChevronRight;

  formSubmitted = signal(false);
  formError = signal(false);

  partnerForm: FormGroup;

  tiers = [
    { key: 'bronze', colorClass: 'tier-bronze' },
    { key: 'silver', colorClass: 'tier-silver' },
    { key: 'gold',   colorClass: 'tier-gold' },
  ];

  impactStats = [
    { icon: 'Users',     valueKey: 'PARTNERS.STAT_1_VALUE', labelKey: 'PARTNERS.STAT_1_LABEL' },
    { icon: 'Calendar',  valueKey: 'PARTNERS.STAT_2_VALUE', labelKey: 'PARTNERS.STAT_2_LABEL' },
    { icon: 'TrendingUp',valueKey: 'PARTNERS.STAT_3_VALUE', labelKey: 'PARTNERS.STAT_3_LABEL' },
    { icon: 'Award',     valueKey: 'PARTNERS.STAT_4_VALUE', labelKey: 'PARTNERS.STAT_4_LABEL' },
  ];

  readonly icons: Record<string, any> = {
    Users, Calendar, TrendingUp, Award
  };

  constructor(private fb: FormBuilder) {
    this.partnerForm = this.fb.group({
      orgName:  ['', [Validators.required]],
      contact:  ['', [Validators.required]],
      email:    ['', [Validators.required, Validators.email]],
      phone:    [''],
      tier:     ['', [Validators.required]],
      message:  ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    if (this.partnerForm.valid) {
      // In production: write to Firestore / webhook to Google Sheets
      this.formSubmitted.set(true);
    } else {
      this.partnerForm.markAllAsTouched();
      this.formError.set(true);
    }
  }

  resetForm() {
    this.partnerForm.reset();
    this.formSubmitted.set(false);
    this.formError.set(false);
  }
}
