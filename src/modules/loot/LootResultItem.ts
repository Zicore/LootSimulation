import { LootItem } from './LootItem';

export class LootResultItem {
    constructor(lootItem : LootItem, count: number = 0){
        this.lootItem = lootItem;
        this.count = count;
    }

    lootItem : LootItem;
    count : number = 0;

    public incrementLootCount() {
        this.count++;
    }
}