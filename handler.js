var pokimon;
(function (pokimon) {
    var Handler = /** @class */ (function () {
        function Handler() {
            this.storage = new pokimon.Storage();
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
        return Handler;
    }());
})(pokimon || (pokimon = {}));
//# sourceMappingURL=handler.js.map