import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test1' },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
];

@NgModule({
  declarations: [Test1Component, Test2Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
