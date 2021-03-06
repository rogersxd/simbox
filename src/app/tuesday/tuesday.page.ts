import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.page.html',
  styleUrls: ['./tuesday.page.scss'],
})
export class TuesdayPage implements OnInit, ViewWillEnter {
  day: string = 'tuesday';
  tasks: Array<String> = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    this.tasks = JSON.parse(await this.storage.get(this.day));
    
    if (! this.tasks) {
      this.tasks = [];
    }
  }

  async ionViewWillEnter() {
    await this.storage.set('daySelected', this.day); 
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
