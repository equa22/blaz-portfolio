import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent, AboutComponent, ContactComponent, ProjectComponent } from './views';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: WorkComponent,
    pathMatch: 'full',
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }
