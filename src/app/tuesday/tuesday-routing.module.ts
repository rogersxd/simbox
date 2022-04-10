import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuesdayPage } from './tuesday.page';

const routes: Routes = [
  {
    path: '',
    component: TuesdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuesdayPageRoutingModule {}
