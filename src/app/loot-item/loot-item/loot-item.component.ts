import { Component, OnInit, Input } from '@angular/core';
import { LootResult } from 'src/modules/loot/LootResult';
import { LootItem, LootResultItem } from 'src/modules/loot';

@Component({
  selector: '[app-loot-item]',
  templateUrl: './loot-item.component.html',
  styleUrls: ['./loot-item.component.css']
})


export class LootItemComponent implements OnInit {

  @Input() lootItem : LootItem;
  @Input() lootResultItem: LootResultItem;
  @Input() lootResult: LootResult;

  constructor() { }

  ngOnInit() {
  }

  // getCount(){
  //   let item = this.lootResult.getLootResultItem(this.lootItem);
  //   if(item === null){
  //     return 0;
  //   }
  //   return item.count;
  // }

  getDistribution(){
    if(this.lootResultItem === null){
      return "";
    }
    return `${(this.lootResultItem.count / this.lootResult.timesToLoot * this.lootResult.lootTable.maxProbability).toFixed(2)}%`;
  }
}
