import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTicketsPageRoutingModule } from './detail-tickets-routing.module';

import { DetailTicketsPage } from './detail-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTicketsPageRoutingModule
  ],
  declarations: [DetailTicketsPage]
})
export class DetailTicketsPageModule {}
