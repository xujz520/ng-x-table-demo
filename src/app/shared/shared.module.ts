import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { XTableModule } from '@ng-dms/x-table';

/**
 * 模块
 */
 const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule, ReactiveFormsModule,

  XTableModule
];

/**
 * 组件
 */
const COMPONENTS = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
    };
  }
}
