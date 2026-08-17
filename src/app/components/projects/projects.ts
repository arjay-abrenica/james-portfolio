import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  activeIndex: number | null = null;
  selectedImage: string | null = null;

  projects = [
    {
      title: 'Permit-Ready Architectural & Structural Plans',
      category: 'Residential & Commercial',
      description: 'Comprehensive 2D/3D CAD drafting and construction documentation for residential and commercial structures.',
      details: 'Drafted precise floor plans, elevations, framing layouts, and detail sections fully compliant with National Building Code standards for local permit approvals.',
      tags: ['AutoCAD', 'Blueprints', 'Structural Drafting', 'Permit Compliance'],
      link: 'assets/sample-plan.pdf',
      linkText: 'Download PDF',
      image: 'plan1.jpg' // Add your blueprint preview image here
    },
    {
      title: 'Site Plan & Topographic Mapping Portfolio',
      category: 'Site Development',
      description: 'Detailed site development plans, utility layouts, and lot plotting derived from survey data and engineering constraints.',
      details: 'Executed accurate grading profiles, site drainage considerations, and property boundary delineations using professional layer management standards.',
      tags: ['AutoCAD', 'Site Planning', 'Topography', 'Civil Works'],
      link: 'assets/site-plan.pdf',
      linkText: 'Download Plan',
      image: 'plan2.jpg'
    },
    {
      title: 'Structural Detail Drawings & Framing Schedules',
      category: 'Structural Details',
      description: 'Specialized reinforcement details, connection nodes, and schedule documentation for structural elements.',
      details: 'Prepared clear reinforcement bar bending details, foundation layout plans, and framing connections to guide contractors accurately on site.',
      tags: ['AutoCAD', 'Structural Details', 'Reinforcement', 'Construction Docs'],
      link: 'mailto:garciajamesmolina@gmail.com?subject=Request%20for%20Full%20CAD%20Portfolio',
      linkText: 'Request Portfolio',
      image: 'plan3.png'
    }
  ];

  toggleProject(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  openLightbox(imagePath: string) {
    this.selectedImage = imagePath;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}