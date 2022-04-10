import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SundayPageRoutingModule } from './sunday-routing.module';

import { SundayPage } from './sunday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SundayPageRoutingModule
  ],
  declarations: [
    SundayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class SundayPageModule {}
