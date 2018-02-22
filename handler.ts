namespace pokimon {

    export class Handler {
    player: Player;
    storage: Storage;

        constructor() {
            //this.storage = new Storage();
        }

        register(name: string, pw: string): void {
            this.storage.createPlayer(name, pw);

        }

        login(name: string, pw: string): void {
            this.player = this.storage.getPlayer(name, pw);
            if (this.player != null){
                console.log("erfolgreich eingeloggt.");
            }
        }

        choose_pokimon(name: string): Pokimon {
            //push pokimon in db


            let p: Pokimon = new Pokimon(name);
            return p;
        }

        create_food(): Food[] {
            let f: Food[] = [];
            f['pizza'] = new Food("Pizza", 100);
            f['omnombeere'] = new Food("Omnombeere", null);
            f['karotte'] = new Food("Karotte", 10);

            return f;
        }





    }
}