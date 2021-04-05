import { Component } from '@angular/core';
import { CurriculumVitaeDataService } from './services/cv-data.service';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent {
  constructor(public cvService: CurriculumVitaeDataService){}
}
