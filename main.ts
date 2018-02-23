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



        let petBtn: HTMLButtonElement = document.getElementById("button-pet") as HTMLButtonElement;
        petBtn.addEventListener('click', h.pokimon.pet.bind(h.pokimon));

        let cleanBtn: HTMLButtonElement = document.getElementById("button-clean") as HTMLButtonElement;
        cleanBtn.addEventListener('click', h.pokimon.clean.bind(h.pokimon));

        let feedBtn: HTMLButtonElement = document.getElementById("button-feed") as HTMLButtonElement;
        feedBtn.addEventListener('click', feed);

        let gooutBtn: HTMLButtonElement = document.getElementById("button-go-out") as HTMLButtonElement;
        gooutBtn.addEventListener('click', go_out);
    }

    function feed(): void {
        let carrotImg: HTMLDivElement = document.getElementById("karotte") as HTMLDivElement;
        let pizzaImg: HTMLDivElement = document.getElementById("pizza") as HTMLDivElement;
        let omnomImg: HTMLDivElement = document.getElementById("omnombeere") as HTMLDivElement;

        if (carrotImg.style.display == "block")
            h.pokimon.feed(h.food['karotte']);
        if (pizzaImg.style.display == "block")
            h.pokimon.feed(h.food['pizza']);
        if (omnomImg.style.display == "block")
            h.pokimon.feed(h.food['omnombeere']);

        update();
    }

    function go_out(): void {
        let carrots: number = 1 + Math.random() * 3;
        carrots = Math.round(carrots);
        let pizza: number = Math.random();
        pizza = Math.round(pizza);
        let omnomberries: number = 1 + Math.random() * 3;
        omnomberries = Math.round(omnomberries);

        h.food['karotte'].anzahl += carrots;
        h.food['pizza'].anzahl += pizza;
        h.food['omnombeere'].anzahl += omnomberries;

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
                h.pokimon.update_img();
            }, 1500);

    }
    export function toggleVisibility() {
        let postChoose: HTMLDivElement = document.getElementById("post-all") as HTMLDivElement;
        let preChoose: HTMLDivElement = document.getElementById("pre-all") as HTMLDivElement;

        preChoose.style.display = "none";
        postChoose.style.display = "block";
    }

    export function update(): void {
        let captionP: HTMLDivElement = document.getElementById("captionP") as HTMLDivElement;
        let captionO: HTMLDivElement = document.getElementById("captionO") as HTMLDivElement;
        let captionC: HTMLDivElement = document.getElementById("captionC") as HTMLDivElement;

        captionP.innerHTML = h.food['pizza'].anzahl;
        captionO.innerHTML = h.food['omnombeere'].anzahl;
        captionC.innerHTML = h.food['karotte'].anzahl;



        let staminaBar: HTMLDivElement = document.getElementById("stamina-progress") as HTMLDivElement;
        let expBar: HTMLDivElement = document.getElementById("exp-progress") as HTMLDivElement;

        staminaBar.setAttribute("aria-valuenow", h.pokimon.stamina.toString());
        staminaBar.style.width = h.pokimon.stamina.toString() + "%";
        staminaBar.innerHTML = h.pokimon.stamina.toString();

        expBar.setAttribute("aria-valuemax", h.pokimon.maxExp.toString());
        expBar.setAttribute("aria-valuenow", h.pokimon.exp.toString());
        expBar.style.width = ((h.pokimon.exp/h.pokimon.maxExp)*100).toString() + "%";
        expBar.innerHTML = h.pokimon.exp.toString() + "/" + h.pokimon.maxExp.toString();


        let lvlDiv: HTMLDivElement = document.getElementById("lvl") as HTMLDivElement;
        lvlDiv.innerHTML = "Level " + h.pokimon.lv.toString();
    }


    export function update2(): void {
        window.setTimeout(update2, 1500);
        h.pokimon.update_experience();
        h.pokimon.update_stamina();
        update();

        if (h.pokimon.lv > 0) {
            h.pokimon.update_mood();
            h.pokimon.update_img();
        }
        console.log("update2");
    }
}