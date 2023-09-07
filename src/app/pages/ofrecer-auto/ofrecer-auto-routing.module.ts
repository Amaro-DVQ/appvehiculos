import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrecerAutoPage } from './ofrecer-auto.page';

const routes: Routes = [
  {
    path: '',
    component: OfrecerAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrecerAutoPageRoutingModule {}
