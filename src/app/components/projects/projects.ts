import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Digital Scout Platform',
      description: 'Enterprise resource management infrastructure built with cloud-native primitives, automated pipelines, and strict security rules.',
      tags: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'RESERVE System',
      description: 'Streamlined scheduling platform emphasizing zero-latency response times and clean role-based authorization hierarchies.',
      tags: ['PHP', 'MSSQL', 'Tailwind CSS'],
      link: '#'
    }
  ];
}