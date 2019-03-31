import { LootItem } from './LootItem';
import { Random } from './Random';

export class LootTable {
    constructor(maxProbability: number = 100.0) {
        this.maxProbability = maxProbability;
    }

    maxProbability = 100.0;
    currentProbability: number = 0;

    emptyProbability():number{
        return this.maxProbability - this.currentProbability;
    }

    items: LootItem[] = [];

    add(item: LootItem) {
        if (this.currentProbability + item.probability > this.maxProbability) {
            throw new Error("Item Probability out of range: it needs to be between 0.0 and maxProbability");
        }

        this.items.push(item);
        this.currentProbability += item.probability;
    }

    loot(): LootItem {
        let draw = Random.randomFloat(0, this.maxProbability);
        let prob: number = 0.0;
        for (let item of this.items) {
            if (draw >= prob && draw <= prob + item.probability) {
                return item;
            }
            prob += item.probability;
        }
        return null;
    }

    list(): void {
        for (let item of this.items) {
            console.log(`${item.name} ${item.probability.toFixed(2)}`)
        }
    }
}