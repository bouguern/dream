import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';

const routes: Routes = [
  {
    path: 'bienvenue',
    component: BienvenueComponent
  },
  {
    path: '',
    redirectTo: 'bienvenue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
