import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeOfConduct } from '../../components/code-of-conduct/code-of-conduct';

import { LucideAngularModule, Users, Target, Globe, BookOpen, Award, Microscope, ChevronRight } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CodeOfConduct, LucideAngularModule, RouterLink, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly Users = Users;
  readonly Target = Target;
  readonly Globe = Globe;
  readonly BookOpen = BookOpen;
  readonly Award = Award;
  readonly Microscope = Microscope;
  readonly ChevronRight = ChevronRight;

  milestones = [
    { year: '2023', labelKey: 'ABOUT.MILESTONE_1' },
    { year: '2024', labelKey: 'ABOUT.MILESTONE_2' },
    { year: '2025', labelKey: 'ABOUT.MILESTONE_3' },
    { year: '2026', labelKey: 'ABOUT.MILESTONE_4' },
    { year: '2026', labelKey: 'ABOUT.MILESTONE_5' },
  ];

  values = [
    { icon: 'Microscope', titleKey: 'ABOUT.VALUE_1_TITLE', descKey: 'ABOUT.VALUE_1_DESC' },
    { icon: 'Globe', titleKey: 'ABOUT.VALUE_2_TITLE', descKey: 'ABOUT.VALUE_2_DESC' },
    { icon: 'Users', titleKey: 'ABOUT.VALUE_3_TITLE', descKey: 'ABOUT.VALUE_3_DESC' },
    { icon: 'Award', titleKey: 'ABOUT.VALUE_4_TITLE', descKey: 'ABOUT.VALUE_4_DESC' },
  ];

  icons: any = { Microscope, Globe, Users, Award };
}
