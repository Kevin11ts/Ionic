import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionsPageRoutingModule } from './accordions-routing.module';

import { AccordionsPage } from './accordions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionsPageRoutingModule
  ],
  declarations: [AccordionsPage]
})
export class AccordionsPageModule {}
