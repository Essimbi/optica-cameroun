import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeOfConduct } from '../../components/code-of-conduct/code-of-conduct';

import { LucideAngularModule, Users, Target, Globe, BookOpen, Award, Microscope, ChevronRight, ExternalLink } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

export interface BoardMember {
  nameKey: string;
  roleKey: string;
  link?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CodeOfConduct, LucideAngularModule, TranslatePipe, RouterLink],
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
  readonly ExternalLink = ExternalLink;

  executiveBoard: BoardMember[] = [
    { nameKey: 'ABOUT.SUPERVISOR', roleKey: 'ABOUT.SUPERVISOR_ROLE', link: 'https://scholar.google.com/citations?user=CF-aRxcAAAAJ' },
    { nameKey: 'ABOUT.ADVISOR', roleKey: 'ABOUT.ADVISOR_ROLE' },
    { nameKey: 'ABOUT.CHAIRMAN', roleKey: 'ABOUT.CHAIRMAN_ROLE' },
    { nameKey: 'ABOUT.VICE_CHAIRMAN', roleKey: 'ABOUT.VICE_CHAIRMAN_ROLE' },
    { nameKey: 'ABOUT.TREASURER', roleKey: 'ABOUT.TREASURER_ROLE', link: 'https://scholar.google.com/citations?user=2dX1C4gAAAAJ' },
    { nameKey: 'ABOUT.SECRETARY', roleKey: 'ABOUT.SECRETARY_ROLE' },
  ];

  localSectionBoard: BoardMember[] = [
    { nameKey: 'ABOUT.LOCAL_PRESIDENT', roleKey: 'ABOUT.LOCAL_PRESIDENT_ROLE', link: 'https://scholar.google.com/citations?user=CF-aRxcAAAAJ' },
    { nameKey: 'ABOUT.LOCAL_VICE_PRESIDENT', roleKey: 'ABOUT.LOCAL_VICE_PRESIDENT_ROLE', link: 'https://www.researchgate.net/scientific-contributions/E-Tchomgo-Felenou-2032944482' },
    { nameKey: 'ABOUT.LOCAL_TREASURER', roleKey: 'ABOUT.LOCAL_TREASURER_ROLE' },
    { nameKey: 'ABOUT.LOCAL_SECRETARY', roleKey: 'ABOUT.LOCAL_SECRETARY_ROLE', link: 'https://scholar.google.com/citations?user=Ak0eTwoAAAAJ' },
    { nameKey: 'ABOUT.LOCAL_VICE_SECRETARY', roleKey: 'ABOUT.LOCAL_VICE_SECRETARY_ROLE' },
  ];

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
