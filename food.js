var pokimon;
(function (pokimon) {
    var Food = /** @class */ (function () {
        function Food(name, calories) {
            this.name = name;
            this.calories = calories;
        }
        Food.prototype.getCalories = function () {
            return this.calories;
        };
        Food.prototype.getName = function () {
            return this.name;
        };
        return Food;
    }());
    pokimon.Food = Food;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=food.js.map