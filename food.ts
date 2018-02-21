namespace pokimon {

    interface IntFood {
        name: string;
        calories: number;
        anzahl: number;
    }

    export class Food implements IntFood {

        name: string;
        calories: number;
        anzahl: number;


        constructor(name: string, calories: number) {
            this.name = name;
            this.calories = calories;
            this.anzahl = 1;
        }

        getCalories(): number {
            return this.calories;
        }

        getName(): string {
            return this.name;
        }
    }

}