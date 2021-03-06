import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-sunday',
  templateUrl: './sunday.page.html',
  styleUrls: ['./sunday.page.scss'],
})
export class SundayPage implements OnInit, ViewWillEnter {
  day: string = 'sunday';
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
