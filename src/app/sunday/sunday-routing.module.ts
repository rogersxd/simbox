import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SundayPage } from './sunday.page';

const routes: Routes = [
  {
    path: '',
    component: SundayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SundayPageRoutingModule {}
