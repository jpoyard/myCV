import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '@features/viewer/components/header/header.component';
import { getMockPreparedCurriculumVitaeData } from '@features/viewer/mock/cv-data.mock';
import { OutputTestContainerComponent } from 'src/tests/output-test.component';

@Component({
  selector: 'mcv-header-test',
  standalone: true,
  imports: [HeaderComponent, OutputTestContainerComponent, ReactiveFormsModule],
  template: `
    <mcv-output-test-container [data]="cv">
      <mcv-header [cv]="cv" output></mcv-header>
    </mcv-output-test-container>
  `,
})
export class HeaderTestComponent {
  public cv = getMockPreparedCurriculumVitaeData();
}
