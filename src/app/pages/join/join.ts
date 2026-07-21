import { Component, signal } from '@angular/core';

import { LucideAngularModule, GraduationCap, Briefcase, BookOpen, ChevronRight, Users } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [LucideAngularModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './join.html',
  styleUrl: './join.scss'
})
export class Join {
  readonly GraduationCap = GraduationCap;
  readonly Briefcase = Briefcase;
  readonly BookOpen = BookOpen;
  readonly ChevronRight = ChevronRight;
  readonly Users = Users;

  selectedTab = signal<'student' | 'professional'>('student');

  studentFormSubmitted = signal(false);
  professionalFormSubmitted = signal(false);

  studentForm: FormGroup;
  professionalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name:         ['', Validators.required],
      email:        ['', [Validators.required, Validators.email]],
      institution:  ['', Validators.required],
      field:        [''],
      motivation:   ['', [Validators.required, Validators.minLength(20)]]
    });

    this.professionalForm = this.fb.group({
      name:         ['', Validators.required],
      email:        ['', [Validators.required, Validators.email]],
      organisation: ['', Validators.required],
      expertise:    ['', Validators.required],
      contribution: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  selectTab(tab: 'student' | 'professional') { this.selectedTab.set(tab); }

  submitStudent() {
    if (this.studentForm.valid) {
      this.studentFormSubmitted.set(true);
    } else { this.studentForm.markAllAsTouched(); }
  }

  submitProfessional() {
    if (this.professionalForm.valid) {
      this.professionalFormSubmitted.set(true);
    } else { this.professionalForm.markAllAsTouched(); }
  }
}
