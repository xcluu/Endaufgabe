var pokimon;
(function (pokimon_1) {
    var Player = /** @class */ (function () {
        function Player(name) {
            this.name = name;
        }
        Player.prototype.choose_Pokimon = function (pokimon) {
            this.pokimon.push(pokimon);
        };
        return Player;
    }());
    pokimon_1.Player = Player;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=player.js.map