import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarPageRoutingModule } from './marcar-routing.module';

import { MarcarPage } from './marcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarPageRoutingModule
  ],
  declarations: [MarcarPage]
})
export class MarcarPageModule {}
