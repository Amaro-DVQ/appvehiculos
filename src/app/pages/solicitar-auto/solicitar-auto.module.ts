import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarAutoPageRoutingModule } from './solicitar-auto-routing.module';

import { SolicitarAutoPage } from './solicitar-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarAutoPageRoutingModule
  ],
  declarations: [SolicitarAutoPage]
})
export class SolicitarAutoPageModule {}
