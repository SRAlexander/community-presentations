import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtendedComponent } from './components/extended/extended.component';
import { HomeComponent } from './components/home/home.component';
import { NormalComponent } from './components/normal/normal.component';
import { SimpleComponent } from './components/simple/simple.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path : "simple", component: SimpleComponent},
  { path : "normal", component: NormalComponent},
  { path : "extended", component: ExtendedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
