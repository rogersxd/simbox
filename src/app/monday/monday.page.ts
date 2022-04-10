import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-monday',
  templateUrl: './monday.page.html',
  styleUrls: ['./monday.page.scss'],
})
export class MondayPage implements OnInit {
  day: string = 'monday';
  tasks: Array<String> = [];

  constructor(private storage: Storage) {
      this.storage.create();
      this.storage.set('daySelected', this.day);
   }

  async ngOnInit() {
    this.tasks = JSON.parse(await this.storage.get(this.day));

    if (! this.tasks) {
      this.tasks = [];
    }
  }

  changeOption(taskName: string, isChecked: boolean) {
      this.tasks.forEach((task: any) => {
          if (task.name == taskName) {
            task.isChecked = isChecked;
          }
      });

      this.storage.set(this.day, JSON.stringify(this.tasks));
  }

  remove(taskName: string) {
    const tasks = this.tasks.filter((task: any) => {
        return task.name != taskName;
    });

    this.storage.set(this.day, JSON.stringify(tasks));

    this.tasks = tasks;
  }
}
