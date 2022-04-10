import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FridayPageRoutingModule } from './friday-routing.module';

import { FridayPage } from './friday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FridayPageRoutingModule
  ],
  declarations: [
    FridayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class FridayPageModule {}
