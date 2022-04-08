import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/todos/pages/todolist/todolist.module').then((mod) => mod.TodolistModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
