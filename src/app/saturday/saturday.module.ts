import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaturdayPageRoutingModule } from './saturday-routing.module';

import { SaturdayPage } from './saturday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaturdayPageRoutingModule
  ],
  declarations: [
    SaturdayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class SaturdayPageModule {}
