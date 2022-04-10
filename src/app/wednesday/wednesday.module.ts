import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WednesdayPageRoutingModule } from './wednesday-routing.module';

import { WednesdayPage } from './wednesday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WednesdayPageRoutingModule
  ],
  declarations: [
    WednesdayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class WednesdayPageModule {}
