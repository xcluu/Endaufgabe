var pokimon;
(function (pokimon) {
    var img;
    var Pokimon = /** @class */ (function () {
        function Pokimon(name) {
            this.name = name;
            var infoName = document.getElementById("name");
            infoName.innerHTML = name;
            this.mood = undefined;
            this.stamina = 100;
            this.lastPet = undefined;
            this.lv = 0;
            this.exp = 0;
            this.maxExp = 25;
            this.update_img();
        }
        Pokimon.prototype.hatch = function () {
            this.lastClean = Date.now() / 1000 / 60;
            this.lastPet = Date.now() / 1000 / 60;
            this.update_mood();
            this.update_img();
            //change visual
        };
        Pokimon.prototype.lv_up = function () {
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
        };
        Pokimon.prototype.pet = function () {
            this.lastPet = Date.now() / 1000 / 60;
            this.update_mood();
            pokimon.showHearts();
        };
        Pokimon.prototype.clean = function () {
            this.lastClean = Date.now() / 1000 / 60;
            this.update_mood();
            pokimon.showHearts();
        };
        Pokimon.prototype.feed = function (type) {
            console.log(type);
            if (type.anzahl > 0) {
                var staminaGain = type.getCalories();
                if (type.name == "Omnombeere") {
                    staminaGain = 1 + Math.random() * 100;
                    staminaGain = Math.round(staminaGain);
                }
                this.stamina += staminaGain;
                if (this.stamina >= 100)
                    this.stamina = 100;
                type.anzahl--;
                pokimon.showHearts();
                return;
            }
            else
                alert("Du hast keine " + type.getName() + " mehr! Gehe mit deinem Pokimon raus um neues Essen zu besorgen.");
        };
        Pokimon.prototype.update_mood = function () {
            var currentTime = Date.now() / 1000 / 60;
            if (this.stamina >= 70 &&
                currentTime - this.lastClean <= 1 &&
                currentTime - this.lastPet <= 1)
                this.mood = "happy";
            else
                this.mood = "okay";
            if (this.stamina <= 30 ||
                currentTime - this.lastClean >= 2 ||
                currentTime - this.lastPet >= 2)
                this.mood = "sad";
            console.log("last clean: " + (currentTime - this.lastClean));
            console.log("last pet: " + (currentTime - this.lastPet));
            console.log(this.mood);
        };
        Pokimon.prototype.update_stamina = function () {
            if (this.stamina > 0) {
                this.stamina--;
            }
        };
        Pokimon.prototype.update_experience = function () {
            if (this.stamina == 0)
                return;
            this.exp += 5;
            if (this.exp >= this.maxExp) {
                this.lv_up();
            }
        };
        Pokimon.prototype.getPokimon = function () {
            return this;
        };
        Pokimon.prototype.update_img = function () {
            pokimon.crc.clearRect(0, 0, 1000, 1000);
            pokimon.crc.putImageData(pokimon.bgImg, 0, 0);
            var imgsrc;
            //check if img src changed (dont load img if not)
            if (img != undefined)
                imgsrc = img.src;
            if (this.mood == "happy") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-happy.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        pokimon.crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                pokimon.crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.mood == "sad") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-sad.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        pokimon.crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                pokimon.crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.lv == 0) {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + "-egg.png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        pokimon.crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                pokimon.crc.drawImage(img, 50, 100, 800, 800);
            }
            if (this.mood == "okay") {
                img = new Image();
                img.src = "img/" + this.name.toLowerCase() + ".png";
                if (img.src != imgsrc) {
                    img.onload = function () {
                        pokimon.crc.drawImage(img, 50, 100, 800, 800);
                    };
                    return;
                }
                pokimon.crc.drawImage(img, 50, 100, 800, 800);
            }
        };
        return Pokimon;
    }());
    pokimon.Pokimon = Pokimon;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=pokimon.js.map