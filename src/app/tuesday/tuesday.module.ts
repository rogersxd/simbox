import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuesdayPageRoutingModule } from './tuesday-routing.module';

import { TuesdayPage } from './tuesday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuesdayPageRoutingModule
  ],
  declarations: [
    TuesdayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class TuesdayPageModule {}
