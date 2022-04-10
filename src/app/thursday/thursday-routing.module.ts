import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThursdayPage } from './thursday.page';

const routes: Routes = [
  {
    path: '',
    component: ThursdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThursdayPageRoutingModule {}
