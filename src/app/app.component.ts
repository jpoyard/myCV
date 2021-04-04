import { Component } from '@angular/core';
import { getMockSkills } from './features/viewer/mock/skill.mock.spec';

@Component({
  selector: 'mcv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCV';
}
