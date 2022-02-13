import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SimpleComponent } from './components/simple/simple.component';
import { NormalComponent } from './components/normal/normal.component';
import { ExtendedComponent } from './components/extended/extended.component';
import { HomeComponent } from './components/home/home.component';
import { ExtendedLeftComponent } from './components/extended-left/extended-left.component';
import { ExtendedRightComponent } from './components/extended-right/extended-right.component';
import { DynamicLabelAndDataComponent } from './components/shared/dynamic-label-and-data/dynamic-label-and-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleComponent,
    NormalComponent,
    ExtendedComponent,
    HomeComponent,
    ExtendedLeftComponent,
    ExtendedRightComponent,
    DynamicLabelAndDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
