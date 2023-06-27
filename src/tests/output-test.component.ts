import { NgIf } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { WorkExperienceTestComponent } from './features/viewer/work-experience-test.component';

@Component({
  selector: 'mcv-output-test-container',
  standalone: true,
  imports: [NgIf, WorkExperienceTestComponent],
  template: `<aside>
      <ng-content select="[inputs]"></ng-content>
    </aside>
    <section>
      <ng-content select="[output]"></ng-content>
      <article *ngIf="inputData">
        <pre>{{ inputData }}</pre>
      </article>
    </section>`,
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
export class OutputTestContainerComponent implements DoCheck {
  public inputData: string | null = null;
  @Input()
  public data: unknown | null = null;

  ngDoCheck(): void {
    this.inputData = this.data ? JSON.stringify(this.data, null, 2) : null;
  }
}
