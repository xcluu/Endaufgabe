namespace pokimon {

    export class Handler {
    player: Player;
    storage: Storage;
    pokimon: Pokimon;
    food: Food[] = [];

    flegmonEgg: HTMLImageElement = new Image();
    seemopsEgg: HTMLImageElement = new Image();


        constructor() {
            //this.storage = new Storage();
            this.flegmonEgg.src = "img/flegmon-egg.png";
            this.seemopsEgg.src = "img/seemops-egg.png";
            this.create_Eggs();

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

        create_Eggs() {


            crc.drawImage(this.flegmonEgg, -50, 100, 800, 800);
            crc.drawImage(this.seemopsEgg, 250, 100, 800, 800);

            let seemops: any = document.getElementById("div-seemops") as HTMLDivElement;
            let flegmon: any = document.getElementById("div-flegmon") as HTMLDivElement;

            seemops.addEventListener('click', function() {
                this.choose_pokimon("Seemops");
            }.bind(this));

            flegmon.addEventListener('click', function() {
                this.choose_pokimon("Flegmon");
            }.bind(this));
        }

        choose_pokimon(name: string): Pokimon {
            //push pokimon in db


            this.pokimon = new Pokimon(name);
            this.food = this.create_food();

            toggleVisibility();
            update();
            update2();
            this.addHandler();

            return this.pokimon;
        }

        addHandler(): void {
            let petBtn: HTMLButtonElement = document.getElementById("button-pet") as HTMLButtonElement;
            petBtn.addEventListener('click', this.pokimon.pet.bind(this.pokimon));

            let cleanBtn: HTMLButtonElement = document.getElementById("button-clean") as HTMLButtonElement;
            cleanBtn.addEventListener('click', this.pokimon.clean.bind(this.pokimon));

            let feedBtn: HTMLButtonElement = document.getElementById("button-feed") as HTMLButtonElement;
            feedBtn.addEventListener('click', feed);

            let gooutBtn: HTMLButtonElement = document.getElementById("button-go-out") as HTMLButtonElement;
            gooutBtn.addEventListener('click', go_out);
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