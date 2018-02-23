var pokimon;
(function (pokimon) {
    // später zugriff auf datenbank
    var Storage = /** @class */ (function () {
        function Storage() {
            this.players = [];
            this.passwords = [];
            this.players["admin"] = new pokimon.Player("admin");
            this.passwords["admin"] = 123;
        }
        Storage.prototype.getPlayer = function (name, pw) {
            if (this.players[name] == null) {
                console.log("Spieler '" + name + "' nicht gefunden.");
                return null;
            }
            else {
                if (this.passwords[name] == pw)
                    return this.players[name];
                else {
                    console.log("Passwort falsch.");
                    return null;
                }
            }
        };
        Storage.prototype.createPlayer = function (name, pw) {
            // spieler existiert noch nicht, kann erstellt werden
            if (this.players[name] == null) {
                this.players[name] = new pokimon.Player(name);
                this.passwords[name] = pw;
                return true;
            }
            else {
                console.log("spieler exisitert bereits.");
                return false;
            }
        };
        return Storage;
    }());
    pokimon.Storage = Storage;
    //     window.addEventListener("load", main);
    //
    //     function main(): void {
    //         let loginBtn: any = document.getElementById("login-button") as HTMLButtonElement;
    //
    //         let storage: Storage = new Storage();
    //
    //         console.log("hi");
    //         loginBtn.addEventListener("click", storage.getPlayer(username, password));
    //     }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=storage.js.map