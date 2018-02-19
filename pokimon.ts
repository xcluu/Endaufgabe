namespace pokimon {

    let img: HTMLImageElement;

    interface IntPokimon {
        name: string;

        mood: string;
        stamina: number;
        lastPet: number;
        lastClean: number;

        lv: number;
        exp: number;
        maxExp: number;
    }


    export class Pokimon implements IntPokimon {

        name: string;

        mood: string;
        stamina: number;
        lastPet: number;
        lastClean: number;

        lv: number;
        exp: number;
        maxExp: number;

        constructor(name: string) {
            this.name = name;

            this.mood = undefined;
            this.stamina = undefined;
            this.lastPet = undefined;


            this.lv = 0;
            this.exp = 0;
            this.maxExp = 25;
        }

        hatch(): void {
            this.lastClean = Date.now() * 1000 / 60;
            this.lastPet = Date.now() * 1000 / 60;
            this.stamina = 100;
            //change visual
        }


        lv_up(): void {

            //reset current exp
            this.exp = this.maxExp - this.exp;

            //raise max-exp exponentially
            this.maxExp = this.maxExp ^ 2;

            //raise lv
            this.lv++;

        }


        pet(): void {

            this.lastPet = Date.now() / 1000 / 60;

        }

        clean(): void {

            this.lastClean = Date.now() / 1000 / 60;
            console.log(this.lastClean);
        }

        feed(type: Food): void {

            let staminaGain: number = type.getCalories();

            this.stamina += staminaGain;

            if (this.stamina >= 100)
                this.stamina = 100;

        }

        update_mood(): void {
            let currentTime: number = Date.now() / 1000 / 60;

            if (this.stamina >= 60 &&
                currentTime - this.lastClean <= 1 &&
                currentTime - this.lastPet <= 1)
                this.mood = "happy";
            else this.mood = "okay";

            if (this.stamina <= 30 &&
                currentTime - this.lastClean >= 2 &&
                currentTime - this.lastPet >= 2)
                this.mood = "sad";

            console.log(currentTime - this.lastClean);
            console.log(this.mood);
        }

        update_stamina(): void {
            this.stamina--;
        }

        update_experience(): void {

            this.exp += 10;

            if(this.exp >= this.maxExp) {
                this.lv_up();
            }

        }

        getPokimon(): Pokimon {
            return this;
        }

        changeVisual(): void {
            if (this.name == "Seemops"){
                if (this.mood == "happy"){
                    img = document.getElementById("happy-seemops") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                if (this.mood == "sad"){
                    img = document.getElementById("sad-seemops") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                if (this.lv == 0){
                    img = document.getElementById("egg-seemops") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                else {
                    img = document.getElementById("seemops") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }

            }

            if (this.name == "Flegmon"){
                if (this.mood == "happy"){
                    img = document.getElementById("happy-slowpoke") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                if (this.mood == "sad"){
                    img = document.getElementById("sad-slowpoke") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                if (this.lv == 0){
                    img = document.getElementById("egg-slowpoke") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }
                else {
                    img = document.getElementById("slowpoke") as HTMLImageElement;
                    crc.drawImage(img,40,50,650,400);
                }

            }

        }


    }
}