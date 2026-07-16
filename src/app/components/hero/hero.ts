import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { gsap } from 'gsap';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {
  readonly ArrowRight = ArrowRight;

  @ViewChild('heroTitle')    heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('heroCta')      heroCta!: ElementRef;
  @ViewChild('heroStats')    heroStats!: ElementRef;
  @ViewChild('heroVisual')   heroVisual!: ElementRef;
  @ViewChild('opticsImg')    opticsImg!: ElementRef;
  @ViewChild('lensFrame')    lensFrame!: ElementRef;

  rays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  ngAfterViewInit() {
    // ── Entry animation ────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(this.heroTitle.nativeElement,    { y: 40, opacity: 0, duration: 0.9 })
      .from(this.heroSubtitle.nativeElement, { y: 24, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(this.heroCta.nativeElement,      { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
      .from(this.heroStats.nativeElement,    { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(this.heroVisual.nativeElement,   { scale: 0.8, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=1.0');

    // ── Slow rotation of the optics image ─────────────────────
    gsap.to(this.opticsImg.nativeElement, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'none'
    });

    // ── Lens frame: counter-rotation (stays stable) ───────────
    gsap.to(this.lensFrame.nativeElement, {
      rotation: -360,
      duration: 80,
      repeat: -1,
      ease: 'none'
    });

    // ── Photon particles orbiting ──────────────────────────────
    const configs = [
      { el: '.photon-1', radius: 155, dur: 5,   startRad: 0 },
      { el: '.photon-2', radius: 190, dur: 7.5, startRad: Math.PI * 0.66 },
      { el: '.photon-3', radius: 170, dur: 10,  startRad: Math.PI * 1.33 },
    ];

    configs.forEach(({ el, radius, dur, startRad }) => {
      let angle = startRad;
      const node = document.querySelector(el) as HTMLElement;
      if (!node) return;

      gsap.to({}, {
        duration: dur,
        repeat: -1,
        ease: 'none',
        onUpdate() {
          angle += (Math.PI * 2) / (dur * 60);
          node.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
        }
      });
    });

    // ── Center glow pulse ─────────────────────────────────────
    gsap.to('.lens-glow', {
      scale: 1.15,
      opacity: 0.9,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}
