import { Component } from '@angular/core';
import { LucideAngularModule, BookOpen, ExternalLink, Globe, FileText, GraduationCap, Rss } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

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

  icons: any = { Globe, GraduationCap, FileText, Rss };
}
