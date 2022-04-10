import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {

  daySelected: string;
  tasks: Array<object> = [];
  task: string = '';

  constructor(private storage: Storage) {}

  async ngOnInit() {
    this.daySelected = await this.storage.get('daySelected');
  }

  async store() {
    this.tasks = JSON.parse(await this.storage.get(this.daySelected.toString()));

    if (! this.tasks) {
      this.tasks = [];
    }

    this.tasks.push({name: this.task, isChecked: false});
    await this.storage.set(this.daySelected.toString(), JSON.stringify(this.tasks));

    location.reload();
  }
}
