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

  // ── Journée de la Lumière - 26 Juin 2026
  {
    id: 'journee-lumiere-26-juin-2026',
    slug: 'journe_de_la_lumiere_26_juin',
    title: {
      en: 'International Day of Light — June 26, 2026',
      fr: 'Journée Internationale de la Lumière — 26 Juin 2026'
    },
    summary: {
      en: 'Celebration of the International Day of Light with scientific demonstrations and outreach activities.',
      fr: 'Célébration de la Journée Internationale de la Lumière avec des démonstrations scientifiques et des activités de sensibilisation.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Chapter and Local Section celebrated the International Day of Light with a series of scientific demonstrations, presentations, and outreach activities to promote the importance of light and optics in everyday life and scientific progress.',
      fr: 'Le chapitre NASEY OPTICA et la Section Locale ont célébré la Journée Internationale de la Lumière avec une série de démonstrations scientifiques, de présentations et d\'activités de sensibilisation pour promouvoir l\'importance de la lumière et de l\'optique dans la vie quotidienne et le progrès scientifique.'
    },
    date: new Date('2026-06-26'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'section',
    organizer: 'section',
    imageCount: 10
  },

  // ── Section locale du 09 juin 2026
  {
    id: 'section-locale-09-juin-2026',
    slug: 'Section_locale_du_09_juin_2026',
    title: {
      en: 'Local Section Meeting — June 9, 2026',
      fr: 'Réunion de la Section Locale — 9 Juin 2026'
    },
    summary: {
      en: 'Monthly scientific meeting of the Central Africa Optica Local Section.',
      fr: 'Réunion scientifique mensuelle de la Section Locale Optica Afrique Centrale.'
    },
    fullDescription: {
      en: 'The Central Africa Optica Local Section held its regular monthly scientific meeting, featuring research presentations, discussions on recent developments in optics and photonics, and collaborative planning for upcoming activities.',
      fr: 'La Section Locale Optica Afrique Centrale a tenu sa réunion scientifique mensuelle régulière, avec des présentations de recherche, des discussions sur les développements récents en optique et photonique, et une planification collaborative pour les activités à venir.'
    },
    date: new Date('2026-06-09'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'section',
    organizer: 'section',
    imageCount: 5
  },

  // ── Rencontre mensuelle du chapitre du 28 mai 2026
  {
    id: 'rencontre-chapitre-28-mai-2026',
    slug: 'Rencontre_mensuelle_OPTICA_du_28_mai_2026',
    title: {
      en: 'Chapter Monthly Meeting — May 28, 2026',
      fr: 'Rencontre Mensuelle du Chapitre — 28 Mai 2026'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its monthly meeting, providing a platform for members to share research updates, discuss chapter activities, and plan future events and initiatives.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle, offrant une plateforme aux membres pour partager les mises à jour de recherche, discuter des activités du chapitre et planifier les événements et initiatives futurs.'
    },
    date: new Date('2026-05-28'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 10
  },

  // ── Section locale du 12 mai 2026
  {
    id: 'section-locale-12-mai-2026',
    slug: '12_mai_2026',
    title: {
      en: 'Local Section Meeting — May 12, 2026',
      fr: 'Réunion de la Section Locale — 12 Mai 2026'
    },
    summary: {
      en: 'Monthly meeting of the Central Africa Optica Local Section.',
      fr: 'Réunion mensuelle de la Section Locale Optica Afrique Centrale.'
    },
    fullDescription: {
      en: 'The Central Africa Optica Local Section convened for its regular monthly meeting, featuring scientific discussions and coordination of local research activities.',
      fr: 'La Section Locale Optica Afrique Centrale s\'est réunie pour sa réunion mensuelle régulière, avec des discussions scientifiques et la coordination des activités de recherche locales.'
    },
    date: new Date('2026-05-12'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'section',
    organizer: 'section',
    imageCount: 1,
    coverImage: '/activities/Section_locale_du_12_mai_2026.jpeg'
  },

  // ── Section locale du 21 Avril 2026
  {
    id: 'section-locale-21-avril-2026',
    slug: '21_Avril_2026',
    title: {
      en: 'Local Section Meeting — April 21, 2026',
      fr: 'Réunion de la Section Locale — 21 Avril 2026'
    },
    summary: {
      en: 'Monthly meeting of the Central Africa Optica Local Section.',
      fr: 'Réunion mensuelle de la Section Locale Optica Afrique Centrale.'
    },
    fullDescription: {
      en: 'The Central Africa Optica Local Section held its monthly meeting, with presentations and discussions on ongoing research and upcoming initiatives.',
      fr: 'La Section Locale Optica Afrique Centrale a tenu sa réunion mensuelle, avec des présentations et discussions sur les recherches en cours et les initiatives à venir.'
    },
    date: new Date('2026-04-21'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'section',
    organizer: 'section',
    imageCount: 1,
    coverImage: '/activities/Section_locale_du_21_Avril_2026.jpeg'
  },

  // ── Rencontre chapitre OPTICA du 30 Avril 2026
  {
    id: 'rencontre-chapitre-30-avril-2026',
    slug: 'Rencontre_chapitre_OPTICA_du_30_Avril_2026',
    title: {
      en: 'Chapter Monthly Meeting — April 30, 2026',
      fr: 'Rencontre du Chapitre OPTICA — 30 Avril 2026'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its April monthly meeting, with research presentations and discussions on chapter activities and upcoming events.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle d\'avril, avec des présentations de recherche et des discussions sur les activités du chapitre et les événements à venir.'
    },
    date: new Date('2026-04-30'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 10
  },

  // ── Clôture MAPLE 2026 - 11 Avril 2026
  {
    id: 'cloture-maple-2026',
    slug: '11_Avril_2026_Clôture_de_la_3eme_édition_de_la_formation_MAPLE_2026',
    title: {
      en: 'Closing Ceremony — MAPLE Training 3rd Edition (2026)',
      fr: 'Clôture de la 3ème Édition de la Formation MAPLE 2026'
    },
    summary: {
      en: 'Closing ceremony of the 3rd edition of the MAPLE software training with certificate awards.',
      fr: 'Cérémonie de clôture de la 3ème édition de la formation au logiciel MAPLE avec remise de certificats.'
    },
    fullDescription: {
      en: 'The 3rd edition of the MAPLE software training concluded with a closing ceremony celebrating the achievements of the participants. Certificates were awarded to students who successfully completed the training program covering modules on optical simulations and photonics.',
      fr: 'La 3ème édition de la formation au logiciel MAPLE s\'est clôturée par une cérémonie célébrant les réalisations des participants. Des certificats ont été remis aux étudiants ayant réussi le programme de formation couvrant les modules sur les simulations optiques et la photonique.'
    },
    date: new Date('2026-04-11'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 26
  },

  // ── Olympiade MAPLE - 08 Avril 2026
  {
    id: 'olympiade-maple-2026',
    slug: '08_Avril_2026_olympiade_MAPLE',
    title: {
      en: 'MAPLE Olympiad — April 8, 2026',
      fr: 'Olympiade MAPLE — 8 Avril 2026'
    },
    summary: {
      en: 'Competitive examination for participants of the 3rd MAPLE training edition.',
      fr: 'Examen compétitif pour les participants de la 3ème édition de la formation MAPLE.'
    },
    fullDescription: {
      en: 'The MAPLE Olympiad brought together participants of the 3rd MAPLE training edition for a competitive examination, testing their mastery of optical simulation skills acquired throughout the training program.',
      fr: 'L\'Olympiade MAPLE a réuni les participants de la 3ème édition de la formation MAPLE pour un examen compétitif, testant leur maîtrise des compétences en simulation optique acquises tout au long du programme de formation.'
    },
    date: new Date('2026-04-08'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 7
  },

  // ── Rencontre mensuelle du chapitre du 30 mars 2026
  {
    id: 'rencontre-chapitre-30-mars-2026',
    slug: '30_mars_2026',
    title: {
      en: 'Chapter Monthly Meeting — March 30, 2026',
      fr: 'Rencontre du Chapitre OPTICA — 30 Mars 2026'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its March monthly meeting, with research presentations and discussions on chapter activities.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle de mars, avec des présentations de recherche et des discussions sur les activités du chapitre.'
    },
    date: new Date('2026-03-30'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 1,
    coverImage: '/activities/Rencontre_mensuelle_du_chapitre_OPTICA_du_30_mars.jpeg'
  },

  // ── Module 5 par Dr. GANYOU STEPHANIE - 25 Mars 2026
  {
    id: 'maple-2026-module-5-25-mars',
    slug: 'Enseignement_du_module_5_par_Dr._GANYOU STEPHANIE_pour_le_compte_de_2025_2026_edition_3_formation_MAPLE_25_mars',
    title: {
      en: 'MAPLE 2026 — Module 5 taught by Dr. GANYOU Stéphanie',
      fr: 'Formation MAPLE 2026 — Module 5 dispensé par Dr. GANYOU Stéphanie'
    },
    summary: {
      en: 'Module 5 of the 3rd MAPLE training edition, taught by Dr. GANYOU Stéphanie on March 25, 2026.',
      fr: 'Module 5 de la 3ème édition de la formation MAPLE, dispensé par Dr. GANYOU Stéphanie le 25 mars 2026.'
    },
    fullDescription: {
      en: 'Dr. GANYOU Stéphanie delivered Module 5 of the 3rd edition of the MAPLE software training program. The session covered advanced topics in optical simulations, equipping participants with further expertise in photonics modeling.',
      fr: 'Dr. GANYOU Stéphanie a dispensé le Module 5 de la 3ème édition du programme de formation au logiciel MAPLE. La séance a couvert des sujets avancés en simulations optiques, dotant les participants d\'une expertise supplémentaire en modélisation photonique.'
    },
    date: new Date('2026-03-25'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 8
  },

  // ── Module 4 par Dr. TCHINANG - 21 Mars 2026
  {
    id: 'maple-2026-module-4-21-mars',
    slug: 'Module_4_dispense_par_Dr._TCHINANG_TCHAMEU_JOEL_DUREL_toujours_pour_la_formation_MAPLE_2026_21_mars',
    title: {
      en: 'MAPLE 2026 — Module 4 taught by Dr. TCHINANG TCHAMEU Joël Durel',
      fr: 'Formation MAPLE 2026 — Module 4 dispensé par Dr. TCHINANG TCHAMEU Joël Durel'
    },
    summary: {
      en: 'Module 4 of the 3rd MAPLE training edition, taught by Dr. TCHINANG TCHAMEU Joël Durel on March 21, 2026.',
      fr: 'Module 4 de la 3ème édition de la formation MAPLE, dispensé par Dr. TCHINANG TCHAMEU Joël Durel le 21 mars 2026.'
    },
    fullDescription: {
      en: 'Dr. TCHINANG TCHAMEU Joël Durel delivered Module 4 of the 3rd edition of the MAPLE software training. Students deepened their understanding of optical simulation techniques and advanced mathematical modeling in photonics.',
      fr: 'Dr. TCHINANG TCHAMEU Joël Durel a dispensé le Module 4 de la 3ème édition de la formation MAPLE. Les étudiants ont approfondi leur compréhension des techniques de simulation optique et de la modélisation mathématique avancée en photonique.'
    },
    date: new Date('2026-03-21'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 8
  },

  // ── Section locale du 10 mars 2026
  {
    id: 'section-locale-10-mars-2026',
    slug: 'Section locale du 10 mars 2026',
    title: {
      en: 'Local Section Meeting — March 10, 2026',
      fr: 'Réunion de la Section Locale — 10 Mars 2026'
    },
    summary: {
      en: 'Monthly meeting of the Central Africa Optica Local Section.',
      fr: 'Réunion mensuelle de la Section Locale Optica Afrique Centrale.'
    },
    fullDescription: {
      en: 'The Central Africa Optica Local Section held its monthly scientific meeting on March 10, 2026, with research presentations and discussions on collaborative initiatives.',
      fr: 'La Section Locale Optica Afrique Centrale a tenu sa réunion scientifique mensuelle le 10 mars 2026, avec des présentations de recherche et des discussions sur les initiatives collaboratives.'
    },
    date: new Date('2026-03-10'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'section',
    organizer: 'section',
    imageCount: 4
  },

  // ── Module 3 par Mlle. NGOUMEGNE TEMANDJO CONFORTHE - Mars 2026
  {
    id: 'maple-2026-module-3-ngoumegne',
    slug: 'Enseignement_sur_le_module_3_par_Mlle._NGOUMEGNE_TEMANDJO_CONFORTHE',
    title: {
      en: 'MAPLE 2026 — Module 3 taught by Ms. NGOUMEGNE TEMANDJO Conforthe',
      fr: 'Formation MAPLE 2026 — Module 3 dispensé par Mlle. NGOUMEGNE TEMANDJO Conforthe'
    },
    summary: {
      en: 'Module 3 of the 3rd MAPLE training edition, taught by Ms. NGOUMEGNE TEMANDJO Conforthe.',
      fr: 'Module 3 de la 3ème édition de la formation MAPLE, dispensé par Mlle. NGOUMEGNE TEMANDJO Conforthe.'
    },
    fullDescription: {
      en: 'Ms. NGOUMEGNE TEMANDJO Conforthe, a former chapter member, contributed to the 3rd edition of the MAPLE training by teaching Module 3, sharing her expertise in optical simulations with the new cohort of participants.',
      fr: 'Mlle. NGOUMEGNE TEMANDJO Conforthe, ancienne membre du chapitre, a contribué à la 3ème édition de la formation MAPLE en enseignant le Module 3, partageant son expertise en simulations optiques avec la nouvelle cohorte de participants.'
    },
    date: new Date('2026-03-05'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 7
  },

  // ── Rencontre mensuelle du chapitre du 26 Février 2026
  {
    id: 'rencontre-chapitre-26-fevrier-2026',
    slug: 'Rencontre_mensuelle_du _hapitre_OPTICA_du_26_fevrier_2026',
    title: {
      en: 'Chapter Monthly Meeting — February 26, 2026',
      fr: 'Rencontre Mensuelle du Chapitre OPTICA — 26 Février 2026'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its February monthly meeting, providing a platform for members to present research and discuss chapter activities and upcoming events.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle de février, offrant une plateforme aux membres pour présenter des recherches et discuter des activités du chapitre et des événements à venir.'
    },
    date: new Date('2026-02-26'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 3
  },

  // ── Séance 2 Module 2 par Dr DJAZET ALAIN - Février 2026
  {
    id: 'maple-2026-module-2-seance-2-djazet',
    slug: 'Séance_2_sur_le_module_2_dispense_par_Dr_DJAZET_ALAIN',
    title: {
      en: 'MAPLE 2026 — Module 2, Session 2 taught by Dr. DJAZET Alain',
      fr: 'Formation MAPLE 2026 — Séance 2 du Module 2 dispensée par Dr. DJAZET Alain'
    },
    summary: {
      en: 'Second session of Module 2 of the 3rd MAPLE training edition, taught by Dr. DJAZET Alain.',
      fr: 'Deuxième séance du Module 2 de la 3ème édition de la formation MAPLE, dispensée par Dr. DJAZET Alain.'
    },
    fullDescription: {
      en: 'Dr. DJAZET Alain led the second session of Module 2 of the 3rd MAPLE training edition, providing in-depth coverage of the module topics and practical exercises.',
      fr: 'Dr. DJAZET Alain a dirigé la deuxième séance du Module 2 de la 3ème édition de la formation MAPLE, couvrant en profondeur les sujets du module et des exercices pratiques.'
    },
    date: new Date('2026-02-20'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 10
  },

  // ── Descente au Lycée Bilingue de Nkozoa - 18 Février 2026
  {
    id: 'descente-lycee-nkozoa-18-fevrier-2026',
    slug: 'Descente_au_Lycee_Bilingue_de_Nkozoa_le_18_fevrier_2026',
    title: {
      en: 'Outreach Visit — Lycée Bilingue de Nkozoa, February 18, 2026',
      fr: 'Descente au Lycée Bilingue de Nkozoa — 18 Février 2026'
    },
    summary: {
      en: 'Science outreach visit to Lycée Bilingue de Nkozoa to introduce secondary school students to optics and photonics.',
      fr: 'Visite de sensibilisation scientifique au Lycée Bilingue de Nkozoa pour initier les lycéens à l\'optique et la photonique.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Chapter conducted an outreach visit to the Lycée Bilingue de Nkozoa on February 18, 2026. Chapter members presented demonstrations and interactive sessions to secondary school students, inspiring the next generation of scientists and raising awareness about optics and photonics.',
      fr: 'Le Chapitre NASEY OPTICA a effectué une descente au Lycée Bilingue de Nkozoa le 18 février 2026. Les membres du chapitre ont présenté des démonstrations et des sessions interactives aux lycéens, inspirant la prochaine génération de scientifiques et sensibilisant à l\'optique et à la photonique.'
    },
    date: new Date('2026-02-18'),
    location: 'Lycée Bilingue de Nkozoa, Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 10
  },

  // ── Ouverture Edition 3 MAPLE + Module 1 - 25 Février 2026
  {
    id: 'maple-2026-ouverture-module-1',
    slug: 'Ouverture_de_l_edition_3_de_MAPLE_par_la_Directrice_Adjointe_de_Polytechnique_Pr._BOYOMO_ONANA_MARTHE_et_enseignement_du_module_1_par_Dr._MANDENG_MANDENG_LUCIEN_Date_25_fevrier_2026',
    title: {
      en: 'MAPLE 2026 — Opening of 3rd Edition & Module 1 by Dr. MANDENG MANDENG Lucien',
      fr: 'MAPLE 2026 — Ouverture de la 3ème Édition & Module 1 par Dr. MANDENG MANDENG Lucien'
    },
    summary: {
      en: 'Official opening of the 3rd MAPLE training edition by Pr. BOYOMO ONANA Marthe, followed by Module 1 taught by Dr. MANDENG MANDENG Lucien.',
      fr: 'Ouverture officielle de la 3ème édition de la formation MAPLE par Pr. BOYOMO ONANA Marthe, suivie du Module 1 dispensé par Dr. MANDENG MANDENG Lucien.'
    },
    fullDescription: {
      en: 'The 3rd edition of the MAPLE software training officially opened on February 25, 2026. The opening ceremony was presided over by the Deputy Director of NASEY, Pr. BOYOMO ONANA Marthe, who welcomed participants and emphasized the importance of technical training in photonics. Dr. MANDENG MANDENG Lucien then delivered Module 1, laying the foundation for the training program.',
      fr: 'La 3ème édition de la formation au logiciel MAPLE a officiellement ouvert le 25 février 2026. La cérémonie d\'ouverture a été présidée par la Directrice Adjointe de l\'ENSPY, Pr. BOYOMO ONANA Marthe, qui a accueilli les participants et souligné l\'importance de la formation technique en photonique. Dr. MANDENG MANDENG Lucien a ensuite dispensé le Module 1, posant les bases du programme de formation.'
    },
    date: new Date('2026-02-25'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 8,
    stats: [
      {
        label: { en: 'Training Edition', fr: 'Édition de Formation' },
        value: '3rd'
      }
    ]
  },

  // ── Rencontre mensuelle du 09 Janvier 2026
  {
    id: 'rencontre-chapitre-09-janvier-2026',
    slug: 'Rencontre_mensuelle_du_09_janvier_2026',
    title: {
      en: 'Chapter Monthly Meeting — January 9, 2026',
      fr: 'Rencontre Mensuelle du Chapitre — 9 Janvier 2026'
    },
    summary: {
      en: 'First monthly meeting of the NASEY OPTICA Student Chapter in 2026.',
      fr: 'Première réunion mensuelle du Chapitre Étudiant NASEY OPTICA en 2026.'
    },
    fullDescription: {
      en: 'The first monthly meeting of 2026 brought together NASEY OPTICA chapter members to review the previous year\'s achievements, plan activities for 2026, and present ongoing research work.',
      fr: 'La première réunion mensuelle de 2026 a réuni les membres du chapitre NASEY OPTICA pour passer en revue les réalisations de l\'année précédente, planifier les activités pour 2026 et présenter les travaux de recherche en cours.'
    },
    date: new Date('2026-01-09'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 9
  },

  // ── Rencontre mensuelle du chapitre du 27 Novembre 2025
  {
    id: 'rencontre-chapitre-27-novembre-2025',
    slug: 'Rencontre_mensuelle_du_chapitre_OPTICA_du_27_Novembre_2025',
    title: {
      en: 'Chapter Monthly Meeting — November 27, 2025',
      fr: 'Rencontre Mensuelle du Chapitre OPTICA — 27 Novembre 2025'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its November monthly meeting, with research presentations and discussions on chapter activities and end-of-year planning.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle de novembre, avec des présentations de recherche et des discussions sur les activités du chapitre et la planification de fin d\'année.'
    },
    date: new Date('2025-11-27'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 8
  },

  // ── Rencontre mensuelle du 30 Octobre 2025
  {
    id: 'rencontre-chapitre-30-octobre-2025',
    slug: 'Rencontre_mensuell_OPTICA_du_30_octobre_2025',
    title: {
      en: 'Chapter Monthly Meeting — October 30, 2025',
      fr: 'Rencontre Mensuelle du Chapitre OPTICA — 30 Octobre 2025'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA.'
    },
    fullDescription: {
      en: 'The NASEY OPTICA Student Chapter held its October monthly meeting, providing a platform for members to present research and coordinate chapter activities.',
      fr: 'Le Chapitre Étudiant NASEY OPTICA a tenu sa réunion mensuelle d\'octobre, offrant une plateforme aux membres pour présenter des recherches et coordonner les activités du chapitre.'
    },
    date: new Date('2025-10-30'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 9
  },

  // ── Rencontre mensuelle du 25 Septembre 2025
  {
    id: 'rencontre-chapitre-25-septembre-2025',
    slug: 'Rencontre_mensuelle_OPTICA_du_25_Septembre_2025',
    title: {
      en: 'Chapter Monthly Meeting — September 25, 2025',
      fr: 'Rencontre Mensuelle du Chapitre OPTICA — 25 Septembre 2025'
    },
    summary: {
      en: 'Regular monthly meeting of the NASEY OPTICA Student Chapter, marking the start of the 2025-2026 academic year.',
      fr: 'Réunion mensuelle régulière du Chapitre Étudiant NASEY OPTICA, marquant le début de l\'année académique 2025-2026.'
    },
    fullDescription: {
      en: 'The September meeting marked the start of the 2025-2026 academic year for the NASEY OPTICA Student Chapter. Members discussed plans for the upcoming year, including new training programs and research initiatives.',
      fr: 'La réunion de septembre a marqué le début de l\'année académique 2025-2026 pour le Chapitre Étudiant NASEY OPTICA. Les membres ont discuté des plans pour l\'année à venir, notamment les nouveaux programmes de formation et les initiatives de recherche.'
    },
    date: new Date('2025-09-25'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 8
  },

  // ── Clôture MAPLE 2023-2024
  {
    id: 'cloture-maple-2023-2024',
    slug: 'Clôture_de_MAPLE_2023-2024',
    title: {
      en: 'Closing Ceremony — MAPLE Training 2023–2024',
      fr: 'Clôture de la Formation MAPLE 2023–2024'
    },
    summary: {
      en: 'Closing ceremony of the MAPLE software training program for the 2023–2024 academic year with certificate awards.',
      fr: 'Cérémonie de clôture de la formation MAPLE pour l\'année académique 2023–2024 avec remise de certificats.'
    },
    fullDescription: {
      en: 'The MAPLE software training program for the 2023–2024 academic year culminated in a closing ceremony, during which certificates were awarded to students who successfully completed all modules. The event celebrated the achievements of approximately 70 participants.',
      fr: 'Le programme de formation au logiciel MAPLE pour l\'année académique 2023–2024 a culminé avec une cérémonie de clôture, lors de laquelle des certificats ont été remis aux étudiants ayant réussi tous les modules. L\'événement a célébré les réalisations d\'environ 70 participants.'
    },
    date: new Date('2024-04-30'),
    location: 'NASEY - École Nationale Supérieure Polytechnique de Yaoundé',
    status: 'past',
    type: 'chapter',
    organizer: 'chapter',
    imageCount: 11,
    stats: [
      {
        label: { en: 'Certificates Awarded', fr: 'Certificats Délivrés' },
        value: '~70'
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