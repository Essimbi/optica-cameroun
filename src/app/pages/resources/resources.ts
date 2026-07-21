import { Component } from '@angular/core';
import { LucideAngularModule, BookOpen, ExternalLink, Globe, FileText, GraduationCap, Rss, Users, FlaskConical, Award } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

export interface StudentEntry {
  nameKey: string;
  thesisKey: string;
  yearKey?: string;
  status?: 'en cours' | 'soutenu';
}

export interface Publication {
  citationKey: string;
  url: string;
  tag: 'Article' | 'Correction' | 'Conference' | 'Software';
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './resources.html',
  styleUrl: './resources.scss'
})
export class Resources {
  readonly BookOpen = BookOpen;
  readonly ExternalLink = ExternalLink;
  readonly Globe = Globe;
  readonly FileText = FileText;
  readonly GraduationCap = GraduationCap;
  readonly Rss = Rss;
  readonly Users = Users;
  readonly FlaskConical = FlaskConical;
  readonly Award = Award;

  // ── External link categories ──────────────────
  categories = [
    {
      icon: 'Globe',
      titleKey: 'RESOURCES.CAT_1_TITLE',
      descKey: 'RESOURCES.CAT_1_DESC',
      links: [
        { labelKey: 'RESOURCES.LINK_OPTICA_INT', url: 'https://www.optica.org' },
        { labelKey: 'RESOURCES.LINK_OPTICA_OPEN', url: 'https://opticaopen.org' },
        { labelKey: 'RESOURCES.LINK_OPN', url: 'https://www.optica-opn.org' },
      ]
    },
    {
      icon: 'GraduationCap',
      titleKey: 'RESOURCES.CAT_2_TITLE',
      descKey: 'RESOURCES.CAT_2_DESC',
      links: [
        { labelKey: 'RESOURCES.LINK_STUDENT_CHAPTER', url: 'https://www.optica.org/en-us/get_involved/students/' },
        { labelKey: 'RESOURCES.LINK_FUNDING', url: 'https://www.optica.org/en-us/awards_and_funding/' },
        { labelKey: 'RESOURCES.LINK_TRAVEL', url: 'https://www.optica.org/en-us/awards_and_funding/travel_grants/' },
      ]
    },
    {
      icon: 'FileText',
      titleKey: 'RESOURCES.CAT_3_TITLE',
      descKey: 'RESOURCES.CAT_3_DESC',
      links: [
        { labelKey: 'RESOURCES.LINK_OE', url: 'https://opg.optica.org/oe/home.cfm' },
        { labelKey: 'RESOURCES.LINK_JOSAB', url: 'https://opg.optica.org/josab/home.cfm' },
        { labelKey: 'RESOURCES.LINK_OPL', url: 'https://opg.optica.org/ol/home.cfm' },
      ]
    },
    {
      icon: 'Rss',
      titleKey: 'RESOURCES.CAT_4_TITLE',
      descKey: 'RESOURCES.CAT_4_DESC',
      links: [
        { labelKey: 'RESOURCES.LINK_PHOTONICS_CONF', url: 'https://www.optica.org/en-us/events/' },
        { labelKey: 'RESOURCES.LINK_CLEO', url: 'https://www.cleoconference.org' },
        { labelKey: 'RESOURCES.LINK_FRONTIERS', url: 'https://www.spie.org/conferences-and-exhibitions' },
      ]
    }
  ];

  // ── Master Recherche (09) ─────────────────────
  masterStudents: StudentEntry[] = [
    { nameKey: 'RESOURCES.MASTER_1_NAME', thesisKey: 'RESOURCES.MASTER_1_TOPIC', yearKey: 'RESOURCES.MASTER_1_YEAR' },
    { nameKey: 'RESOURCES.MASTER_2_NAME', thesisKey: 'RESOURCES.MASTER_2_TOPIC', yearKey: 'RESOURCES.MASTER_2_YEAR' },
    { nameKey: 'RESOURCES.MASTER_3_NAME', thesisKey: 'RESOURCES.MASTER_3_TOPIC', yearKey: 'RESOURCES.MASTER_3_YEAR' },
    { nameKey: 'RESOURCES.MASTER_4_NAME', thesisKey: 'RESOURCES.MASTER_4_TOPIC', yearKey: 'RESOURCES.MASTER_4_YEAR' },
    { nameKey: 'RESOURCES.MASTER_5_NAME', thesisKey: 'RESOURCES.MASTER_5_TOPIC', yearKey: 'RESOURCES.MASTER_5_YEAR' },
    { nameKey: 'RESOURCES.MASTER_6_NAME', thesisKey: 'RESOURCES.MASTER_6_TOPIC', yearKey: 'RESOURCES.MASTER_6_YEAR' },
    { nameKey: 'RESOURCES.MASTER_7_NAME', thesisKey: 'RESOURCES.MASTER_7_TOPIC', yearKey: 'RESOURCES.MASTER_7_YEAR' },
    { nameKey: 'RESOURCES.MASTER_8_NAME', thesisKey: 'RESOURCES.MASTER_8_TOPIC', yearKey: 'RESOURCES.MASTER_8_YEAR' },
    { nameKey: 'RESOURCES.MASTER_9_NAME', thesisKey: 'RESOURCES.MASTER_9_TOPIC', yearKey: 'RESOURCES.MASTER_9_YEAR', status: 'soutenu' }
  ];

  // ── Doctorats (03) ───────────────────────────
  doctoralStudents: StudentEntry[] = [
    { nameKey: 'RESOURCES.DOCTORAL_1_NAME', thesisKey: 'RESOURCES.DOCTORAL_1_TOPIC', status: 'en cours' },
    { nameKey: 'RESOURCES.DOCTORAL_2_NAME', thesisKey: 'RESOURCES.DOCTORAL_2_TOPIC', status: 'en cours' },
    { nameKey: 'RESOURCES.DOCTORAL_3_NAME', thesisKey: 'RESOURCES.DOCTORAL_3_TOPIC', status: 'soutenu' }
  ];

  // ── Publications scientifiques (09) ──────────
  publications: Publication[] = [
    { citationKey: 'RESOURCES.PUB_1', url: 'https://link.springer.com/article/10.1140/epjp/s13360-026-08051-3', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_2', url: 'https://opg.optica.org/josaa/abstract.cfm?uri=josaa-43-5-B92', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_3', url: 'https://link.springer.com/article/10.1007/s12596-026-03052-y', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_4', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0960077925015474', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_5', url: 'https://opg.optica.org/oe/abstract.cfm?doi=10.1364/OE.579362', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_6', url: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/andp.202500133', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_7', url: 'https://pubs.aip.org/aip/adv/article/15/5/055327/3347839', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_8', url: 'https://www.sciencedirect.com/science/article/abs/pii/S037596012500132X', tag: 'Article' },
    { citationKey: 'RESOURCES.PUB_9', url: 'https://link.springer.com/article/10.1007/s43937-024-00052-6', tag: 'Software' }
  ];

  // ── Corrections (01) ─────────────────────────
  corrections: Publication[] = [
    { citationKey: 'RESOURCES.CORR_1', url: 'https://doi.org/10.1007/s12596-026-03142-x', tag: 'Correction' }
  ];

  // ── Articles de Conférence (03) ───────────────
  conferenceArticles: Publication[] = [
    { citationKey: 'RESOURCES.CONF_1', url: 'https://opg.optica.org/abstract.cfm?uri=LS-2025-JD1A.53', tag: 'Conference' }
  ];

  icons: any = { Globe, GraduationCap, FileText, Rss };

  tagColor(tag: string): string {
    switch (tag) {
      case 'Article':    return 'tag-article';
      case 'Conference': return 'tag-conference';
      case 'Correction': return 'tag-correction';
      case 'Software':   return 'tag-software';
      default:           return 'tag-article';
    }
  }
}
