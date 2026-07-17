import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, Shield, Info, Users, ShieldAlert, Gavel, Scale } from 'lucide-angular';

@Component({
  selector: 'app-code-of-conduct',
  standalone: true,
  imports: [TranslatePipe, LucideAngularModule],
  templateUrl: './code-of-conduct.html',
  styleUrl: './code-of-conduct.scss'
})
export class CodeOfConduct {
  readonly Shield = Shield;
  readonly Info = Info;
  readonly Users = Users;
  readonly ShieldAlert = ShieldAlert;
  readonly Gavel = Gavel;
  readonly Scale = Scale;
}
