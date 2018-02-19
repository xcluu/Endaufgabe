namespace pokimon {

    interface IntFood {
        name: string;
        calories: number;
    }

    export class Food implements IntFood {

        name: string;
        calories: number;


        constructor(name: string, calories: number) {
            this.name = name;
            this.calories = calories;
        }

        getCalories(): number {
            return this.calories;
        }

        getName(): string {
            return this.name;
        }
    }

}