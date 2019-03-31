import { LootItem } from './LootItem';
import { LootResultItem } from "./LootResultItem";
import { LootTable } from './LootTable';

let lootTable = new LootTable();

lootTable.add(new LootItem("A", 0.5));
lootTable.add(new LootItem("B", 1.52));
lootTable.add(new LootItem("C", 4.54));
lootTable.add(new LootItem("D", 3.25));
lootTable.add(new LootItem("E", 8.0));
lootTable.add(new LootItem("F", 1.0));

let lootCount: { [key: string]: LootResultItem; } = {};
let timesToLoot = 1;

for (let i: number = 0; i < timesToLoot; i++) {
    let item = lootTable.loot();
    if (item != null) {
        if (lootCount[item.name] == null) {
            lootCount[item.name] = new LootResultItem(item);
        }
        lootCount[item.name].incrementLootCount();
    }
}

if(Object.keys(lootCount).length > 0){
    console.log(`You looted ${timesToLoot} times. This is the distribution: `)    
}else{
    console.log(`You looted ${timesToLoot} times, but you didn't find anything.`);
}

let sumCount : number = 0;
let sumProbability : number = 0;
for (let item of lootTable.items) {
    if (lootCount[item.name] != null) {
        let lootResultItem = lootCount[item.name];
        console.log(`Item: ${item.name} Count: ${lootResultItem.count} Probability: ${lootResultItem.lootItem.probability}% Actual Distribution: ${(lootResultItem.count / timesToLoot * lootTable.maxProbability).toFixed(2)}%`);
        sumCount += lootResultItem.count;
        sumProbability += lootResultItem.lootItem.probability;
    }
}
let sumNothingFound : number = timesToLoot - sumCount;
console.log(`${sumNothingFound} times nothing was found. Probability: ${(lootTable.emptyProbability()).toFixed(2)}% Actual Distribution: ${(sumNothingFound / timesToLoot * lootTable.maxProbability).toFixed(2)}%`);