export class LootItem {

    probability : number;
    name : string;
    isNothing : boolean = false;

    constructor(name:string,probability:number){
        this.name = name;
        this.probability = probability;
    }
}
