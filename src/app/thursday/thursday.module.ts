import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThursdayPageRoutingModule } from './thursday-routing.module';

import { ThursdayPage } from './thursday.page';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NoRecordComponent } from '../no-record/no-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThursdayPageRoutingModule
  ],
  declarations: [
    ThursdayPage, 
    TaskFormComponent,
    NoRecordComponent
  ]
})
export class ThursdayPageModule {}
