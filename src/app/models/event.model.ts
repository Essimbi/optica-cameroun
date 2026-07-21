export interface OpticaEvent {
  id: string;
  slug: string; // correspond au nom du sous-dossier dans public/activities/<slug>/
  title: {
    en: string;
    fr: string;
  };
  summary: {
    en: string;
    fr: string;
  }; // résumé COURT (2-3 phrases max) pour les cartes
  fullDescription: {
    en: string;
    fr: string;
  }; // texte complet pour la page Event Detail uniquement
  date: Date;
  endDate?: Date; // pour les formations multi-semaines
  location: string;
  status: 'upcoming' | 'past';
  type: 'section' | 'chapter';
  organizer: 'section' | 'chapter'; // alias pour type pour clarté
  imageCount: number; // nombre d'images dans le dossier pour génération dynamique
  coverImage?: string; // image de couverture personnalisée
  stats?: Array<{
    label: { en: string; fr: string };
    value: string;
  }>; // chiffres marquants de l'événement
  registrationUrl?: string;
  galleryUrl?: string;
  isRecurring?: boolean; // pour les réunions mensuelles
}

// Interface pour les données anciennes (compatibilité)
export interface LegacyOpticaEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  status: 'upcoming' | 'past';
  type: 'section' | 'chapter';
  imageUrl: string;
  registrationUrl?: string;
  galleryUrl?: string;
}
