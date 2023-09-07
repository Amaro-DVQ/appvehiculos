import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrecerAutoPageRoutingModule } from './ofrecer-auto-routing.module';

import { OfrecerAutoPage } from './ofrecer-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrecerAutoPageRoutingModule
  ],
  declarations: [OfrecerAutoPage]
})
export class OfrecerAutoPageModule {}
