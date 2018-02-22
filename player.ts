namespace pokimon {
    interface IntPlayer {
        name: string;
        pokimon: Pokimon[];
    }

    export class Player implements IntPlayer {
        name: string;
        pokimon: Pokimon[];

        constructor(name: string) {
            this.name = name;
        }

    }

}