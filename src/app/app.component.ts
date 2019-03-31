import { Component } from '@angular/core';
import { LootItem, LootResultItem, LootTable, Looter, LootResult } from '../modules/loot/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LootSimulation';
  looter : Looter = new Looter();
  lootResult : LootResult;
  looted = false;

  public loot(value:number){
    this.lootResult = this.looter.loot(value);
    this.looted = true;
  }
}
