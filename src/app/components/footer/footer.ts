import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, MapPin, Mail, Twitter, Linkedin, Facebook } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly MapPin = MapPin;
  readonly Mail = Mail;
  readonly Twitter = Twitter;
  readonly Linkedin = Linkedin;
  readonly Facebook = Facebook;

  currentYear = new Date().getFullYear();
}
