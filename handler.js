var pokimon;
(function (pokimon) {
    var Handler = /** @class */ (function () {
        function Handler() {
            this.food = [];
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
        Handler.prototype.create_Eggs = function () {
            pokimon.crc.drawImage(pokimon.flegmonEgg, -50, 100, 800, 800);
            pokimon.crc.drawImage(pokimon.seemopsEgg, 250, 100, 800, 800);
            var seemops = document.getElementById("div-seemops");
            var flegmon = document.getElementById("div-flegmon");
            seemops.addEventListener('click', function () {
                this.choose_pokimon("Seemops");
            }.bind(this));
            flegmon.addEventListener('click', function () {
                this.choose_pokimon("Flegmon");
            }.bind(this));
        };
        Handler.prototype.choose_pokimon = function (name) {
            //push pokimon in db
            this.pokimon = new pokimon.Pokimon(name);
            this.food = this.create_food();
            pokimon.toggleVisibility();
            pokimon.update();
            pokimon.update2();
            this.addHandler();
            return this.pokimon;
        };
        Handler.prototype.addHandler = function () {
            var petBtn = document.getElementById("button-pet");
            petBtn.addEventListener('click', this.pokimon.pet.bind(this.pokimon));
            var cleanBtn = document.getElementById("button-clean");
            cleanBtn.addEventListener('click', this.pokimon.clean.bind(this.pokimon));
            var feedBtn = document.getElementById("button-feed");
            feedBtn.addEventListener('click', pokimon.feed);
            var gooutBtn = document.getElementById("button-go-out");
            gooutBtn.addEventListener('click', pokimon.go_out);
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