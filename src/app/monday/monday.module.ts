import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MondayPageRoutingModule } from './monday-routing.module';

import { MondayPage } from './monday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MondayPageRoutingModule
  ],
  declarations: [
    MondayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class MondayPageModule {}
