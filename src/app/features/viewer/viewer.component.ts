import { Component, OnInit } from '@angular/core';
import { getMockSkills } from 'src/app/features/viewer/mock/skill.mock.spec';
import { getMockDegrees } from './mock/degree.mock.spec';
import { getMockLanguages } from './mock/language.mock.spec';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent {

  public skills = getMockSkills();
  public degrees = getMockDegrees();
  public languages = getMockLanguages();

}
