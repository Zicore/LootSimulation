import { LootItem } from './LootItem';
import { LootResultItem } from "./LootResultItem";
import { LootTable } from './LootTable';

export class LootResult {

    timesToLoot: number = 0;
    lootTable: LootTable = new LootTable();
    lootResults: { [key: string]: LootResultItem; } = {};
    sumNothingFound: number;

    nothingFoundItem: LootResultItem;

    constructor(lootTable: LootTable, timesToLoot: number) {
        this.lootTable = lootTable;
        this.timesToLoot = timesToLoot;
    }

    addItem(item: LootItem) {
        if (this.lootResults[item.name] == null) {
            this.lootResults[item.name] = new LootResultItem(item);
        }
        this.lootResults[item.name].incrementLootCount();
    }

    getLootResultItem(lootItem: LootItem) {
        if (this.lootResults[lootItem.name] != null) {
            return this.lootResults[lootItem.name];
        }
        return null;
    }

    getNothingFoundItem() {
        let sumCount = 0;
        for (const item of this.lootTable.items) {
            if (this.lootResults[item.name] != null) {
                let lootResultItem = this.lootResults[item.name];
                sumCount += lootResultItem.count;
            }
        }
        return new LootResultItem(new LootItem("Nothing", this.lootTable.emptyProbability()), this.timesToLoot - sumCount);
    }

    setNothingFoundItem() {
        this.nothingFoundItem = this.getNothingFoundItem();
    }

    sumItemsFound(){
        return this.timesToLoot - this.nothingFoundItem.count;
    }
}