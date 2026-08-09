import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Ensure correct path and class name

bootstrapApplication(AppComponent, {
  providers: []
}).catch((err) => console.error(err));