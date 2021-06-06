import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgEasyMockModule } from 'ng-easy-mock';
import * as MOCKDATA from '../../_mock';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'; 
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    NgEasyMockModule.forRoot({ data: MOCKDATA }),
    RoutesModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
