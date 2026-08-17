import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { FooterComponent } from './components/footer/footer';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ProjectsComponent, SkillsComponent, FooterComponent, ContactComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
    
  `
})
export class AppComponent {}