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
            this.lv_up();
            this.update_mood();
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
            this.update_mood();

            showHearts();

        }

        clean(): void {

            this.lastClean = Date.now() / 1000 / 60;
            this.update_mood();

            showHearts();

        }

        feed(type: Food): void {
            console.log(type);
            if (type.anzahl > 0) {
                let staminaGain: number = type.getCalories();

                if (type.name == "Omnombeere")
                    staminaGain = 1 + Math.random() * 100;


                this.stamina += staminaGain;

                if (this.stamina >= 100)
                    this.stamina = 100;


                type.anzahl--;

                return;
            }
            else
                alert("Du hast keine " + type.getName() + " mehr! Gehe mit deinem Pokimon raus um neues Essen zu besorgen.");
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

            console.log("last clean: " + (currentTime - this.lastClean));
            console.log("last pet: " + (currentTime - this.lastPet));
            console.log(this.mood);

        }

        update_stamina(): void {
            this.stamina--;
        }

        update_experience(): void {

            this.exp += 10;

            if (this.exp >= this.maxExp) {
                this.lv_up();
            }

        }

        getPokimon(): Pokimon {
            return this;
        }

        changeVisual(): void {
            crc.clearRect(0, 0, 1000, 1000);
            crc.putImageData(bgImg, 0, 0);

            if (this.mood == "happy") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-happy.png";
                img.onload = function() {
                    crc.drawImage(img, 50, 100, 800, 800);
                };
            }
            if (this.mood == "sad") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-sad.png";
                img.onload = function() {
                    crc.drawImage(img, 50, 100, 800, 800);
                };
            }
            if (this.lv == 0) {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-egg.png";
                img.onload = function() {
                    crc.drawImage(img, 50, 100, 800, 800);
                };
            }
            if (this.mood == "okay"){
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + ".png";
                img.onload = function() {
                    crc.drawImage(img, 50, 100, 800, 800);
                };
            }
        }

    }
}