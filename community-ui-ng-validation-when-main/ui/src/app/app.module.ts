import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { BaseValidationComponent } from './components/base-validation/base-validation.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleValidationComponent } from './components/module-validation/module-validation.component';
import { AsyncValidationComponent } from './components/async-validation/async-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    BaseValidationComponent,
    ModuleValidationComponent,
    AsyncValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
