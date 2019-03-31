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

    // public loot(timesToLoot:number) {
    //     this.lootCount = {};
    //     for (let i: number = 0; i < timesToLoot; i++) {
    //         let item = this.lootTable.loot();
    //         if (item != null) {
    //             if (this.lootCount[item.name] == null) {
    //                 this.lootCount[item.name] = new LootCountItem(item);
    //             }
    //             this.lootCount[item.name].incrementLootCount();
    //         }
    //     }

    //     if (Object.keys(this.lootCount).length > 0) {
    //         console.log(`You looted ${timesToLoot} times. This is the distribution: `)
    //     } else {
    //         console.log(`You looted ${timesToLoot} times, but you didn't find anything.`);
    //     }

    //     let sumCount: number = 0;
    //     let sumProbability: number = 0;
    //     for (let item of this.lootTable.items) {
    //         if (this.lootCount[item.name] != null) {
    //             let lootCountItem = this.lootCount[item.name];
    //             console.log(`Item: ${item.name} Count: ${lootCountItem.count} Probability: ${lootCountItem.item.probability}% Actual Distribution: ${(lootCountItem.count / timesToLoot * this.lootTable.maxProbability).toFixed(2)}%`);
    //             sumCount += lootCountItem.count;
    //             sumProbability += lootCountItem.item.probability;
    //         }
    //     }
    //     let sumNothingFound: number = timesToLoot - sumCount;
    //     console.log(`${sumNothingFound} times nothing was found. Probability: ${(this.lootTable.emptyProbability()).toFixed(2)}% Actual Distribution: ${(sumNothingFound / timesToLoot * this.lootTable.maxProbability).toFixed(2)}%`);

    //     return new LootResult(this.lootTable, this.lootCount, sumNothingFound);
    // }
}