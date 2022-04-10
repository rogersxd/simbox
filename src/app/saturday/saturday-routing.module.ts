import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaturdayPage } from './saturday.page';

const routes: Routes = [
  {
    path: '',
    component: SaturdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaturdayPageRoutingModule {}
