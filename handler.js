var pokimon;
(function (pokimon) {
    var Handler = /** @class */ (function () {
        function Handler() {
            //this.storage = new Storage();
        }
        Handler.prototype.register = function (name, pw) {
            this.storage.createPlayer(name, pw);
        };
        Handler.prototype.login = function (name, pw) {
            this.player = this.storage.getPlayer(name, pw);
            if (this.player != null) {
                console.log("erfolgreich eingeloggt.");
            }
        };
        Handler.prototype.choose_pokimon = function (name) {
            //push pokimon in db
            var p = new pokimon.Pokimon(name);
            return p;
        };
        Handler.prototype.create_food = function () {
            var f = [];
            f['pizza'] = new pokimon.Food("Pizza", 100);
            f['omnombeere'] = new pokimon.Food("Omnombeere", null);
            f['karotte'] = new pokimon.Food("Karotte", 10);
            return f;
        };
        return Handler;
    }());
    pokimon.Handler = Handler;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=handler.js.map