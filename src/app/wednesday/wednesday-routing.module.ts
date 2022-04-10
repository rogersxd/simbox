import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WednesdayPage } from './wednesday.page';

const routes: Routes = [
  {
    path: '',
    component: WednesdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WednesdayPageRoutingModule {}
