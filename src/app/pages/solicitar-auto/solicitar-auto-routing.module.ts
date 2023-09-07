import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarAutoPage } from './solicitar-auto.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarAutoPageRoutingModule {}
