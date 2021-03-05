import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTicketsPage } from './detail-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTicketsPageRoutingModule {}
