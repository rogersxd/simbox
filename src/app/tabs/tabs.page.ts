import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async reloadWeek() {
    await this.reloadMonday('monday');
    await this.reloadMonday('tuesday');
    await this.reloadMonday('wednesday');
    await this.reloadMonday('thursday');
    await this.reloadMonday('friday');
    await this.reloadMonday('saturday');
    await this.reloadMonday('sunday');

    location.reload();
  }

  async reloadMonday(day: string) {
    let tasks = JSON.parse(await this.storage.get(day));

    if (! tasks) {
      return;
    }

    tasks.forEach(task => {
        task.isChecked = false;
    });

    this.storage.set(day, JSON.stringify(tasks));
  }
}
