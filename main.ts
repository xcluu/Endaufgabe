namespace pokimon {
    export let crc: CanvasRenderingContext2D;
    export let staticImg: ImageData;
    export let bgImg: ImageData
    let img: HTMLImageElement;
    img = new Image();
    img.src = "img/hearts.png";

    let h: Handler;
    let p: Pokimon;
    let f: Food[] = [];


    window.addEventListener("load", main);

    function main(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
        crc = canvas.getContext("2d");



        let gradient = crc.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 1000, 1000);

        bgImg = crc.getImageData(0, 0, 1000, 1000);

        h = new Handler();
        p = h.choose_pokimon("Flegmon");
        f = h.create_food();



        let petBtn: HTMLButtonElement = document.getElementById("button-pet") as HTMLButtonElement;
        petBtn.addEventListener('click', p.pet.bind(p));

        let cleanBtn: HTMLButtonElement = document.getElementById("button-clean") as HTMLButtonElement;
        cleanBtn.addEventListener('click', p.clean.bind(p));

        let feedBtn: HTMLButtonElement = document.getElementById("button-feed") as HTMLButtonElement;
        feedBtn.addEventListener('click', feed);

        let gooutBtn: HTMLButtonElement = document.getElementById("button-go-out") as HTMLButtonElement;
        gooutBtn.addEventListener('click', go_out);

        update();

        update2();
    }

    function feed(): void {
        let carrotImg: HTMLDivElement = document.getElementById("karotte") as HTMLDivElement;
        let pizzaImg: HTMLDivElement = document.getElementById("pizza") as HTMLDivElement;
        let omnomImg: HTMLDivElement = document.getElementById("omnombeere") as HTMLDivElement;

        if (carrotImg.style.display == "block")
            p.feed(f['karotte']);
        if (pizzaImg.style.display == "block")
            p.feed(f['pizza']);
        if (omnomImg.style.display == "block")
            p.feed(f['omnombeere']);

        update();
    }

    function go_out(): void {
        let carrots: number = 1 + Math.random() * 3;
        carrots = Math.round(carrots);
        let pizza: number = Math.random();
        pizza = Math.round(pizza);
        let omnomberries: number = 1 + Math.random() * 3;
        omnomberries = Math.round(omnomberries);

        f['karotte'].anzahl += carrots;
        f['pizza'].anzahl += pizza;
        f['omnombeere'].anzahl += omnomberries;

        alert("Oh! Während dem Spazierengehen hast du folgendes auf der Straße gefunden: \n" + "Karotten: " + carrots + "\nPizza: " + pizza + "\nOmnombeeren: " + omnomberries);
        update();
    }

    export function showHearts(): void {

        staticImg = crc.getImageData(0, 0, 1000, 1000);

        crc.drawImage(img, 450, 10, 200, 200);

        window.setTimeout(
            function () {
                crc.clearRect(0, 0, 1000, 1000);
                crc.putImageData(staticImg, 0, 0);
                p.changeVisual();
            }, 1500);

    }

    function update(): void {
        let captionP: HTMLDivElement = document.getElementById("captionP") as HTMLDivElement;
        let captionO: HTMLDivElement = document.getElementById("captionO") as HTMLDivElement;
        let captionC: HTMLDivElement = document.getElementById("captionC") as HTMLDivElement;

        captionP.innerHTML = f['pizza'].anzahl;
        captionO.innerHTML = f['omnombeere'].anzahl;
        captionC.innerHTML = f['karotte'].anzahl;



        let staminaBar: HTMLDivElement = document.getElementById("stamina-progress") as HTMLDivElement;
        let expBar: HTMLDivElement = document.getElementById("exp-progress") as HTMLDivElement;

        staminaBar.setAttribute("aria-valuenow", p.stamina.toString());
        staminaBar.style.width = p.stamina.toString() + "%";
        staminaBar.innerHTML = p.stamina.toString();

        expBar.setAttribute("aria-valuemax", p.maxExp.toString());
        expBar.setAttribute("aria-valuenow", p.exp.toString());
        expBar.style.width = ((p.exp/p.maxExp)*100).toString() + "%";
        expBar.innerHTML = p.exp.toString() + "/" + p.maxExp.toString();
    }


    function update2(): void {
        window.setTimeout(update2, 1000);
        p.update_experience();
        p.update_stamina();
        update();

        if (p.lv > 0) {
            p.update_mood();
            p.changeVisual();
        }
        console.log("update2");
    }
}