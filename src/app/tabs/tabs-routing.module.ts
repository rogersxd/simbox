import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'monday',
        loadChildren: () => import('../monday/monday.module').then(m => m.MondayPageModule)
      },
      {
        path: 'tuesday',
        loadChildren: () => import('../tuesday/tuesday.module').then(m => m.TuesdayPageModule)
      },
      {
        path: 'wednesday',
        loadChildren: () => import('../wednesday/wednesday.module').then(m => m.WednesdayPageModule)
      },
      {
        path: 'thursday',
        loadChildren: () => import('../thursday/thursday.module').then(m => m.ThursdayPageModule)
      },
      {
        path: 'friday',
        loadChildren: () => import('../friday/friday.module').then(m => m.FridayPageModule)
      },
      {
        path: 'saturday',
        loadChildren: () => import('../saturday/saturday.module').then(m => m.SaturdayPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/monday',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/monday',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
