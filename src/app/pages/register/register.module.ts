import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { UserService } from 'src/app/services/user.service';
import { RegisterPage } from './register.page';
import { Auth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,

  ],
  declarations: [RegisterPage],
  providers:[UserService, Auth]
})
export class RegisterPageModule {}
