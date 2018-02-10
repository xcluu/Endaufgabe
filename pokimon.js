var pokimon;
(function (pokimon) {
    var Pokimon = /** @class */ (function () {
        function Pokimon(name) {
            this.name = name;
            this.mood = undefined;
            this.stamina = undefined;
            this.last_pet = undefined;
            this.lv = 0;
            this.exp = 0;
            this.max_exp = 25;
        }
        Pokimon.prototype.hatch = function () {
            this.last_clean = Date.now() * 1000 / 60;
            this.last_pet = Date.now() * 1000 / 60;
            this.stamina = 100;
            //change visual
        };
        Pokimon.prototype.lv_up = function () {
            //reset current exp
            this.exp = this.max_exp - this.exp;
            //raise max-exp exponentially
            this.max_exp = this.max_exp ^ 2;
            //raise lv
            this.lv++;
        };
        Pokimon.prototype.pet = function () {
            this.last_pet = Date.now() / 1000 / 60;
        };
        Pokimon.prototype.clean = function () {
            this.last_clean = Date.now() / 1000 / 60;
            console.log(this.last_clean);
        };
        Pokimon.prototype.feed = function (type) {
            var staminaGain = type.getCalories();
            this.stamina += staminaGain;
            if (this.stamina >= 100)
                this.stamina = 100;
        };
        Pokimon.prototype.update_mood = function () {
            var currentTime = Date.now() / 1000 / 60;
            if (this.stamina >= 60 &&
                currentTime - this.last_clean <= 1 &&
                currentTime - this.last_pet <= 1)
                this.mood = "happy";
            else
                this.mood = "okay";
            if (this.stamina <= 30 &&
                currentTime - this.last_clean >= 2 &&
                currentTime - this.last_pet >= 2)
                this.mood = "sad";
            console.log(currentTime - this.last_clean);
            console.log(this.mood);
        };
        Pokimon.prototype.update_stamina = function () {
            this.stamina--;
        };
        Pokimon.prototype.update_experience = function () {
            this.exp += 10;
            if (this.exp >= this.max_exp) {
                this.lv_up();
            }
        };
        return Pokimon;
    }());
    pokimon.Pokimon = Pokimon;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=pokimon.js.map