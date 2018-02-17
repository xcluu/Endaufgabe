var pokimon;
(function (pokimon) {
    var Pokimon = /** @class */ (function () {
        function Pokimon(name) {
            this.name = name;
            this.mood = undefined;
            this.stamina = undefined;
            this.lastPet = undefined;
            this.lv = 0;
            this.exp = 0;
            this.maxExp = 25;
        }
        Pokimon.prototype.hatch = function () {
            this.lastClean = Date.now() * 1000 / 60;
            this.lastPet = Date.now() * 1000 / 60;
            this.stamina = 100;
            //change visual
        };
        Pokimon.prototype.lv_up = function () {
            //reset current exp
            this.exp = this.maxExp - this.exp;
            //raise max-exp exponentially
            this.maxExp = this.maxExp ^ 2;
            //raise lv
            this.lv++;
        };
        Pokimon.prototype.pet = function () {
            this.lastPet = Date.now() / 1000 / 60;
        };
        Pokimon.prototype.clean = function () {
            this.lastClean = Date.now() / 1000 / 60;
            console.log(this.lastClean);
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
                currentTime - this.lastClean <= 1 &&
                currentTime - this.lastPet <= 1)
                this.mood = "happy";
            else
                this.mood = "okay";
            if (this.stamina <= 30 &&
                currentTime - this.lastClean >= 2 &&
                currentTime - this.lastPet >= 2)
                this.mood = "sad";
            console.log(currentTime - this.lastClean);
            console.log(this.mood);
        };
        Pokimon.prototype.update_stamina = function () {
            this.stamina--;
        };
        Pokimon.prototype.update_experience = function () {
            this.exp += 10;
            if (this.exp >= this.maxExp) {
                this.lv_up();
            }
        };
        Pokimon.prototype.getPokimon = function () {
            return this;
        };
        return Pokimon;
    }());
    pokimon.Pokimon = Pokimon;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=pokimon.js.map