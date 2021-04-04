import { Component, OnInit } from '@angular/core';
import { getMockSkills } from 'src/app/features/viewer/mock/skill.mock.spec';

@Component({
  selector: 'mcv-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent {

  public skills = getMockSkills();

}
