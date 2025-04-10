import {Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then(m => m.HomeComponent);
    },
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./todos/todos.component').then(m => m.TodosComponent);
    },
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
