namespace pokimon {

    // später zugriff auf datenbank
    export class Storage {

        players: Player[];
        passwords: string[];


        constructor() {
            this.players = [];
            this.passwords = [];
            this.players["admin"] = new Player("admin");
            this.passwords["admin"] = 123;
        }

        getPlayer(name: string, pw: string): Player {
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
        }

        createPlayer(name:string,pw:string):boolean{
            // spieler existiert noch nicht, kann erstellt werden
            if (this.players[name] == null) {
                this.players[name] = new Player(name);
                this.passwords[name] = pw;
                return true;
            }
            else {
                console.log("spieler exisitert bereits.");
                return false;
            }
        }

    }
}