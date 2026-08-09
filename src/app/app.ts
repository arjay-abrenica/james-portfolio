import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ProjectsComponent, SkillsComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-projects />
      <app-skills />
    </main>
    <app-footer />
  `
})
export class AppComponent {}