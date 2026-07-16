export interface OpticaEvent {
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
