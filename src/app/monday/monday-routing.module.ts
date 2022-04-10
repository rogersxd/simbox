import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MondayPage } from './monday.page';

const routes: Routes = [
  {
    path: '',
    component: MondayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MondayPageRoutingModule {}
