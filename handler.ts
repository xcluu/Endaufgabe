namespace pokimon {

    class Handler {
    player: Player;
    storage: Storage;

        constructor() {
            this.storage = new Storage();
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





    }
}