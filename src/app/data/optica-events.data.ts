import { OpticaEvent } from '../models/event.model';

export const OPTICA_EVENTS: OpticaEvent[] = [
  // FPSLOC 2026 - Conférence internationale à venir
  {
    id: 'fpsloc-2026',
    slug: 'fpsloc-2026',
    title: {
      en: 'Frontiers in Photonics, Structured Light & Optical Communications 2026',
      fr: 'Frontières en Photonique, Lumière Structurée & Communications Optiques 2026'
    },
    summary: {
      en: 'A 3-day international conference exploring applied photonics, nonlinear optics, AI, and featuring student poster sessions with leading researchers.',
      fr: 'Une conférence internationale de 3 jours explorant la photonique appliquée, l\'optique non linéaire, l\'IA et présentant des sessions posters étudiantes avec des chercheurs de premier plan.'
    },
    fullDescription: {
      en: 'Join Prof. Kumar Vijay Mishra and leading researchers for FPSLOC 2026. This flagship 3-day international conference will explore the latest advances in applied photonics, nonlinear optics, artificial intelligence applications in optics, and optical communications. The event features keynote presentations, technical sessions, and dedicated student poster sessions, providing an exceptional platform for knowledge exchange and networking in the optics and photonics community.',
      fr: 'Rejoignez le Prof. Kumar Vijay Mishra et des chercheurs de premier plan pour FPSLOC 2026. Cette conférence internationale phare de 3 jours explorera les dernières avancées en photonique appliquée, optique non linéaire, applications de l\'intelligence artificielle en optique et communications optiques. L\'événement comprend des présentations principales, des sessions techniques et des sessions posters étudiantes dédiées, offrant une plateforme exceptionnelle pour l\'échange de connaissances et le réseautage dans la communauté optique et photonique.'
    },
    date: new Date('2026-09-03'),
    endDate: new Date('2026-09-05'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'upcoming',
    type: 'section',
    organizer: 'section',
    imageCount: 1,
    coverImage: '/assets/events/fpsloc-2026-flyer.jpeg',
    stats: [
      {
        label: { en: 'Expected Participants', fr: 'Participants Attendus' },
        value: '200+'
      },
      {
        label: { en: 'International Speakers', fr: 'Conférenciers Internationaux' },
        value: '15+'
      },
      {
        label: { en: 'Conference Days', fr: 'Jours de Conférence' },
        value: '3'
      }
    ]
  },
  
  // TD sur le module - 26 Mars 2024
  {
    id: 'td-module-26-mars-2024',
    slug: 'TD_sur_le_module_du_26_mars_2024',
    title: {
      en: 'Tutorial Session on Module - March 26',
      fr: 'Séance de TD sur le module du 26 Mars 2024'
    },
    summary: {
      en: 'Practical tutorial session covering recent module materials.',
      fr: 'Séance de travaux dirigés pratiques couvrant le contenu récent du module.'
    },
    fullDescription: {
      en: 'This session provided students with hands-on practice solving complex problems and applying the theoretical concepts learned during the module.',
      fr: 'Cette séance a permis aux étudiants de s\'exercer à la résolution de problèmes complexes et d\'appliquer les concepts théoriques appris pendant le module.'
    },
    date: new Date('2024-03-26'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 5
  },

  // Module 4 - 20 Mars 2024
  {
    id: 'module-4-20-mars-2024',
    slug: 'Module_4_du_20_mars_2024',
    title: {
      en: 'MAPLE Training: Module 4',
      fr: 'Formation MAPLE : Module 4'
    },
    summary: {
      en: 'Session dedicated to Module 4 of the MAPLE software training.',
      fr: 'Séance dédiée au Module 4 de la formation au logiciel MAPLE.'
    },
    fullDescription: {
      en: 'The students were introduced to Module 4 of the MAPLE software training, focusing on advanced optical simulations and data analysis.',
      fr: 'Les étudiants ont été initiés au Module 4 de la formation au logiciel MAPLE, axé sur les simulations optiques avancées et l\'analyse de données.'
    },
    date: new Date('2024-03-20'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 5
  },

  // TD Module 3 - 16 Mars 2024
  {
    id: 'td-module-3-16-mars-2024',
    slug: 'TD_module_3_seance_du_16_mars_2024',
    title: {
      en: 'Module 3 Tutorial Session',
      fr: 'Séance de TD Module 3'
    },
    summary: {
      en: 'Tutorial session for MAPLE Training Module 3 held on March 16, 2024.',
      fr: 'Séance de TD pour le Module 3 de la formation MAPLE tenue le 16 mars 2024.'
    },
    fullDescription: {
      en: 'A practical tutorial session allowing students to apply the concepts covered in Module 3 of the MAPLE software training program.',
      fr: 'Une séance de travaux dirigés pratiques permettant aux étudiants d\'appliquer les concepts abordés lors du Module 3 du programme de formation au logiciel MAPLE.'
    },
    date: new Date('2024-03-16'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 3
  },

  // Séance Module 3 - 13 Mars 2024
  {
    id: 'seance-module-3-13-mars-2024',
    slug: 'Séance_du_13_mars_2024_sur_le_module_3_a_la_formation_MAPLE.',
    title: {
      en: 'MAPLE Training: Module 3 Session',
      fr: 'Formation MAPLE : Séance sur le Module 3'
    },
    summary: {
      en: 'Instructional session on Module 3 of the MAPLE software training.',
      fr: 'Séance d\'instruction sur le Module 3 de la formation au logiciel MAPLE.'
    },
    fullDescription: {
      en: 'This instructional session provided comprehensive coverage of Module 3, equipping participants with further skills in optical simulations using MAPLE.',
      fr: 'Cette séance d\'instruction a offert une couverture complète du Module 3, dotant les participants de compétences supplémentaires en simulations optiques avec MAPLE.'
    },
    date: new Date('2024-03-13'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 5
  },

  // Séance TD Module 1 - 9 Mars 2024
  {
    id: 'seance-td-module-1-9-mars-2024',
    slug: 'Séance_de_TD_sur_le_module_1_qui_s_est_deroule_le_samedi_9_mars_2024_a_10h_précis',
    title: {
      en: 'Module 1 Tutorial Session',
      fr: 'Séance de TD sur le Module 1'
    },
    summary: {
      en: 'The first tutorial session of the MAPLE training program, held on Saturday, March 9, 2024.',
      fr: 'La première séance de TD du programme de formation MAPLE, qui s\'est déroulée le samedi 9 mars 2024.'
    },
    fullDescription: {
      en: 'This first hands-on tutorial session allowed students to familiarize themselves with the MAPLE software interface and execute their first basic scripts, successfully applying Module 1 theory.',
      fr: 'Cette première séance de travaux dirigés pratiques a permis aux étudiants de se familiariser avec l\'interface du logiciel MAPLE et d\'exécuter leurs premiers scripts de base, en appliquant avec succès la théorie du Module 1.'
    },
    date: new Date('2024-03-09'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 3
  },

  // MAPLE 2024 Overview
  {
    id: 'maple-2024',
    slug: 'maple_2024',
    title: {
      en: 'MAPLE Software Training 2024',
      fr: 'Formation MAPLE 2024'
    },
    summary: {
      en: 'Inaugural MAPLE training session introducing students to optical simulation software.',
      fr: 'Session inaugurale de formation MAPLE introduisant les étudiants au logiciel de simulation optique.'
    },
    fullDescription: {
      en: 'The inaugural MAPLE Software Training program introduced students to the fundamentals of optical and photonic simulations using MAPLE software. The training was structured with theoretical sessions, hands-on workshops, and practical exercises.',
      fr: 'Le programme inaugural de formation MAPLE a introduit les étudiants aux fondamentaux des simulations optiques et photoniques en utilisant le logiciel MAPLE. La formation était structurée avec des sessions théoriques, des ateliers pratiques et des exercices pratiques.'
    },
    date: new Date('2024-02-26'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 3,
    stats: [
      {
        label: { en: 'Students Trained', fr: 'Étudiants Formés' },
        value: '~80'
      },
      {
        label: { en: 'Certificates Awarded', fr: 'Certificats Délivrés' },
        value: '~70'
      }
    ]
  },

  // Lancement Officiel MAPLE - 15 Dec 2023
  {
    id: 'lancement-officiel-maple',
    slug: '15_Decembre_2023_lancement_officiel_de_la_session_1_sur_MAPLE',
    title: {
      en: 'Official Launch of MAPLE Training Session 1',
      fr: 'Lancement officiel de la session 1 sur MAPLE'
    },
    summary: {
      en: 'Official kick-off event for the first MAPLE software training session.',
      fr: 'Événement de lancement officiel pour la première session de formation au logiciel MAPLE.'
    },
    fullDescription: {
      en: 'This event marked the official launch of the MAPLE software training program. It introduced the objectives, schedule, and expected outcomes of the training to the registered students and faculty.',
      fr: 'Cet événement a marqué le lancement officiel du programme de formation au logiciel MAPLE. Il a présenté les objectifs, le calendrier et les résultats attendus de la formation aux étudiants et professeurs inscrits.'
    },
    date: new Date('2023-12-15'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 1,
    coverImage: '/activities/15_Decembre_2023_lancement_officiel_de_la_session_1_sur_MAPLE.jpeg'
  },

  // Réunions scientifiques mensuelles
  {
    id: 'reunions-mensuelles',
    slug: 'reunions_mensuelles_2024',
    title: {
      en: 'Monthly Scientific Meetings',
      fr: 'Réunions Scientifiques Mensuelles'
    },
    summary: {
      en: 'Regular monthly meetings featuring research presentations in optics and photonics.',
      fr: 'Réunions mensuelles régulières avec des présentations de recherche en optique et photonique.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Chapter organizes regular monthly scientific meetings. These sessions provide a platform for students, faculty, and researchers to present their ongoing research, discuss recent developments in optics and photonics, and foster collaboration within the local scientific community.',
      fr: 'Le chapitre NASEY OPTICA organise des réunions scientifiques mensuelles régulières. Ces sessions fournissent une plateforme aux étudiants, professeurs et chercheurs pour présenter leurs recherches en cours, discuter des développements récents en optique et photonique, et favoriser la collaboration au sein de la communauté scientifique locale.'
    },
    date: new Date('2024-01-25'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 5,
    isRecurring: true
  }
];

export function getGalleryImages(event: OpticaEvent): string[] {
  if (event.coverImage && event.imageCount === 1) {
    return [event.coverImage];
  }
  return Array.from(
    { length: event.imageCount }, 
    (_, i) => `/activities/${event.slug}/${i + 1}.jpeg`
  );
}

export function getCoverImage(event: OpticaEvent): string {
  if (event.coverImage) {
    return event.coverImage;
  }
  return `/activities/${event.slug}/1.jpeg`;
}