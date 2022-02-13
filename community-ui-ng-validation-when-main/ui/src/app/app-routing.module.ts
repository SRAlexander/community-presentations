import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidationComponent } from './components/async-validation/async-validation.component';
import { BaseValidationComponent } from './components/base-validation/base-validation.component';
import { ModuleValidationComponent } from './components/module-validation/module-validation.component';

const routes: Routes = [
  {path: 'test-definitions/basic-validation', component: BaseValidationComponent},
  {path: 'test-definitions/module-validation', component: ModuleValidationComponent},
  {path: 'test-definitions/async-validation', component: AsyncValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }      
