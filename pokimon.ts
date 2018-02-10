namespace pokimon {


    interface IntPokimon {
        name: string;

        mood: string;
        stamina: number;
        last_pet: number;
        last_clean: number;

        lv: number;
        exp: number;
        max_exp: number;
    }


    export class Pokimon implements IntPokimon {

        name: string;

        mood: string;
        stamina: number;
        last_pet: number;
        last_clean: number;

        lv: number;
        exp: number;
        max_exp: number;

        constructor(name: string) {
            this.name = name;

            this.mood = undefined;
            this.stamina = undefined;
            this.last_pet = undefined;


            this.lv = 0;
            this.exp = 0;
            this.max_exp = 25;
        }

        hatch(): void {
            this.last_clean = Date.now() * 1000 / 60;
            this.last_pet = Date.now() * 1000 / 60;
            this.stamina = 100;
            //change visual
        }


        lv_up(): void {

            //reset current exp
            this.exp = this.max_exp - this.exp;

            //raise max-exp exponentially
            this.max_exp = this.max_exp ^ 2;

            //raise lv
            this.lv++;

        }


        pet(): void {

            this.last_pet = Date.now() / 1000 / 60;

        }

        clean(): void {

            this.last_clean = Date.now() / 1000 / 60;
            console.log(this.last_clean);
        }

        feed(type: Food): void {

            let staminaGain: number = type.getCalories();

            this.stamina += staminaGain;

            if (this.stamina >= 100)
                this.stamina = 100;

        }

        change_mood(): void {
            let currentTime: number = Date.now() / 1000 / 60;

            if (this.stamina >= 60 &&
                currentTime - this.last_clean <= 1 &&
                currentTime - this.last_pet <= 1)
                this.mood = "happy";
            else this.mood = "okay";

            if (this.stamina <= 30 &&
                currentTime - this.last_clean >= 2 &&
                currentTime - this.last_pet >= 2)
                this.mood = "sad";

            console.log(currentTime - this.last_clean);
            console.log(this.mood);
        }
    }
}