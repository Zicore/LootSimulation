import { LootItem } from './LootItem';
import { LootTable } from './LootTable';
import { LootResult } from './LootResult';
import { LootResultItem } from './LootResultItem';

export class Looter {
    lootTable: LootTable = new LootTable();
    
    constructor() {
        this.lootTable.add(new LootItem("A", 0.5));
        this.lootTable.add(new LootItem("B", 1.52));
        this.lootTable.add(new LootItem("C", 4.54));
        this.lootTable.add(new LootItem("D", 3.25));
        this.lootTable.add(new LootItem("E", 8.0));
        this.lootTable.add(new LootItem("F", 1.0));
    }

    public loot(timesToLoot: number) {
        let result : LootResult = new LootResult(this.lootTable, timesToLoot);

        for (let i: number = 0; i < timesToLoot; i++) {
            let item = this.lootTable.loot();
            if (item != null) {
                result.addItem(item);
            }
        }

        result.setNothingFoundItem();

        return result;
    }
}