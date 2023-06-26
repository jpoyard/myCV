import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from './tests.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'link' },
      {
        path: 'links-list',
        loadComponent: () =>
          import('./features/viewer/links-list-test.component').then(
            (m) => m.linksListTestComponent
          ),
      },
      {
        path: 'work-experience',
        loadComponent: () =>
          import('./features/viewer/work-experience-test.component').then(
            (m) => m.WorkExperienceTestComponent
          ),
      },
      {
        path: 'icon-loader',
        loadComponent: () =>
          import('./features/viewer/icon-loader-test.component').then(
            (m) => m.IconLoaderTestComponent
          ),
      },
      {
        path: 'skills-list',
        loadComponent: () =>
          import('./features/viewer/skills-list-test.component').then(
            (m) => m.SkillsListTestComponent
          ),
      },
      {
        path: 'skill-with-level',
        loadComponent: () =>
          import('./features/viewer/skill-with-level-test.component').then(
            (m) => m.SkillWithLevelTestComponent
          ),
      },
      {
        path: 'timeline-nav',
        loadComponent: () =>
          import('./shared/components/timeline-nav-test.component').then(
            (m) => m.TimelineNavTestComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
