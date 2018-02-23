namespace pokimon {

    let img: HTMLImageElement;

    interface IntPokomon {
        name: string;

        mood: string;
        stamina: number;
        lastPet: number;
        lastClean: number;

        lv: number;
        exp: number;
        maxExp: number;
    }


    export class Pokimon implements IntPokomon {

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

            let infoName: HTMLDivElement = document.getElementById("name") as HTMLDivElement;

            infoName.innerHTML = name;

            this.mood = undefined;
            this.stamina = 100;
            this.lastPet = undefined;


            this.lv = 0;
            this.exp = 0;
            this.maxExp = 25;

            this.update_img();
        }

        hatch(): void {
            this.lastClean = Date.now() / 1000 / 60;
            this.lastPet = Date.now() / 1000 / 60;
            this.update_mood();
            this.update_img();
            //change visual
        }


        lv_up(): void {

            //reset current exp
            this.exp = this.exp - this.maxExp;

            //raise max-exp exponentially
            this.maxExp = Math.pow(this.lv, 2);
            this.maxExp += 5;
            this.maxExp = Math.round(this.maxExp);

            //raise lv
            this.lv++;

            if (this.lv == 1)
                this.hatch();

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

                if (type.name == "Omnombeere") {
                    staminaGain = 1 + Math.random() * 100;
                    staminaGain = Math.round(staminaGain);
                }


                this.stamina += staminaGain;

                if (this.stamina >= 100)
                    this.stamina = 100;


                type.anzahl--;

                showHearts();
                return;
            }
            else
                alert("Du hast keine " + type.getName() + " mehr! Gehe mit deinem Pokimon raus um neues Essen zu besorgen.");
        }

        update_mood(): void {
            let currentTime: number = Date.now() / 1000 / 60;

            if (this.stamina >= 70 &&
                currentTime - this.lastClean <= 1 &&
                currentTime - this.lastPet <= 1)
                this.mood = "happy";
            else this.mood = "okay";

            if (this.stamina <= 30 ||
                currentTime - this.lastClean >= 2 ||
                currentTime - this.lastPet >= 2)
                this.mood = "sad";

        }

        update_stamina(): void {

            if (this.stamina > 0) {
                this.stamina--;
            }
        }

        update_experience(): void {
            if (this.stamina == 0)
                return;

            this.exp += 5;

            if (this.exp >= this.maxExp) {
                this.lv_up();
            }

        }

        getPokimon(): Pokimon {
            return this;
        }

        update_img(): void {
            crc.clearRect(0, 0, 1000, 1000);
            crc.putImageData(bgImg, 0, 0);

            let imgsrc: string;
            //check if img src changed (dont load img if not)
            if (img != undefined)
                imgsrc = img.src;

            if (this.mood == "happy") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-happy.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.mood == "sad") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-sad.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.lv == 0) {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-egg.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.mood == "okay"){
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + ".png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                crc.drawImage(img, 50, 100, 800, 800);
            }
        }

    }
}