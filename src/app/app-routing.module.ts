import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./features/viewer/viewer.component').then(
        (m) => m.ViewerComponent
      ),
  },
];


if (isDevMode()) {
  routes.push({
    path: 'tests',
    loadComponent: () =>
      import('../tests/tests.component').then(
        (m) => m.TestsComponent
      ),
  });
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
