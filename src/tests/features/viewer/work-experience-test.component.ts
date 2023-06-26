import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkExperienceComponent } from '@features/viewer/components/work-experience/work-experience.component';
import { getMockWorkExperiences } from '@features/viewer/mock/work-experience.mock';

@Component({
  selector: 'mcv-work-experience-test',
  standalone: true,
  imports: [CommonModule, WorkExperienceComponent],
  template: `
    <aside></aside>
    <section>
      <article>
        <mcv-work-experience [workExperience]="workExperience">
        </mcv-work-experience>
      </article>
      <article>
        <pre>
        {{ workExperience | json }}
        </pre
        >
      </article>
    </section>
  `,
  styles: [
    `
      :host {
        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: stretch;
        justify-content: stretch;

        aside,
        section {
          position: relative;
          flex: 1 1 0;
          padding: 1rem;
          box-sizing: content-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: stretch;
          row-gap: 1rem;

          article {
            position: relative;
            flex: 1 1 0;
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            overflow: auto;
            pre {
              text-wrap: wrap;
            }
          }
        }

        aside {
          flex: 1 1 25%;
        }

        section {
          flex: 1 1 75%;
        }
      }
    `,
  ],
})
export class WorkExperienceTestComponent {
  workExperience = getMockWorkExperiences()[0];
}
